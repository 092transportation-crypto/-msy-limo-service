/*
 * Address suggestions + coordinates for the pickup / drop-off fields.
 *
 * Primary source: Google Maps Places Autocomplete (Places API New, with the
 * legacy AutocompleteService as a fallback for older keys). It is enabled by
 * setting REACT_APP_GOOGLE_MAPS_API_KEY at build time (Vercel → Settings →
 * Environment Variables, then redeploy). The key needs "Maps JavaScript API"
 * and "Places API (New)" enabled and should be restricted to this site's
 * HTTP referrers.
 *
 * Fallback when no key is configured: the free Photon geocoder (OpenStreetMap
 * data), which also returns coordinates — so lat/lng capture works either way.
 *
 * Every suggestion is { main, secondary, lat, lng, placeId?, source } and
 * selecting one resolves to { address, lat, lng, placeId, source }.
 */

export const GOOGLE_MAPS_API_KEY = (process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "").trim();

export function hasGooglePlaces() {
  return GOOGLE_MAPS_API_KEY.length > 0 && typeof window !== "undefined";
}

let loader = null;

/** Loads the Maps JavaScript API once and resolves with the places library. */
export function loadGooglePlaces() {
  if (!hasGooglePlaces()) return Promise.reject(new Error("Google Maps API key not configured"));
  if (loader) return loader;
  loader = new Promise((resolve, reject) => {
    const finish = () => {
      const g = window.google;
      if (!g || !g.maps) return reject(new Error("Google Maps failed to load"));
      if (typeof g.maps.importLibrary === "function") {
        g.maps.importLibrary("places").then(resolve, reject);
      } else {
        resolve(g.maps.places);
      }
    };
    if (window.google && window.google.maps) return finish();
    const cbName = "__limoPlacesReady";
    window[cbName] = finish;
    const s = document.createElement("script");
    s.src =
      "https://maps.googleapis.com/maps/api/js?key=" +
      encodeURIComponent(GOOGLE_MAPS_API_KEY) +
      `&libraries=places&v=weekly&loading=async&callback=${cbName}`;
    s.async = true;
    s.onerror = () => reject(new Error("Google Maps script failed to load"));
    document.head.appendChild(s);
  }).catch((err) => {
    loader = null; // allow a retry on the next search
    throw err;
  });
  return loader;
}

export function newSessionToken() {
  try {
    return new window.google.maps.places.AutocompleteSessionToken();
  } catch {
    return undefined;
  }
}

/** Google predictions for the typed text, biased toward the service area. */
export async function googleSuggestions(input, { bias, sessionToken, signal } = {}) {
  const places = await loadGooglePlaces();
  if (signal && signal.aborted) return [];
  const center = bias ? { lat: bias.lat, lng: bias.lng } : undefined;

  if (places.AutocompleteSuggestion && places.AutocompleteSuggestion.fetchAutocompletePredictions) {
    const { suggestions } = await places.AutocompleteSuggestion.fetchAutocompletePredictions({
      input,
      sessionToken,
      includedRegionCodes: ["us"],
      ...(center ? { locationBias: { center, radius: 150000 } } : {}),
    });
    return (suggestions || [])
      .map((s) => s.placePrediction)
      .filter(Boolean)
      .map((p) => ({
        main: p.mainText ? p.mainText.toString() : p.text.toString(),
        secondary: p.secondaryText ? p.secondaryText.toString() : "",
        placeId: p.placeId,
        prediction: p,
        source: "google",
      }));
  }

  // Legacy Places library (keys created before March 2025).
  const service = new places.AutocompleteService();
  const predictions = await new Promise((resolve) => {
    service.getPlacePredictions(
      {
        input,
        sessionToken,
        componentRestrictions: { country: "us" },
        ...(center ? { location: new window.google.maps.LatLng(center.lat, center.lng), radius: 150000 } : {}),
      },
      (res, status) => resolve(status === "OK" && res ? res : [])
    );
  });
  return predictions.map((p) => ({
    main: (p.structured_formatting && p.structured_formatting.main_text) || p.description,
    secondary: (p.structured_formatting && p.structured_formatting.secondary_text) || "",
    placeId: p.place_id,
    source: "google",
  }));
}

/** Resolves a Google suggestion to its formatted address and coordinates. */
export async function googlePlaceDetails(item, sessionToken) {
  const places = await loadGooglePlaces();
  if (item.prediction && typeof item.prediction.toPlace === "function") {
    const place = item.prediction.toPlace();
    await place.fetchFields({ fields: ["formattedAddress", "location", "displayName"] });
    const loc = place.location;
    return {
      address: place.formattedAddress || [item.main, item.secondary].filter(Boolean).join(", "),
      lat: loc ? Number(typeof loc.lat === "function" ? loc.lat() : loc.lat) : null,
      lng: loc ? Number(typeof loc.lng === "function" ? loc.lng() : loc.lng) : null,
      placeId: item.placeId,
      name: place.displayName || item.main,
      source: "google",
    };
  }
  const service = new places.PlacesService(document.createElement("div"));
  return new Promise((resolve) => {
    service.getDetails(
      { placeId: item.placeId, sessionToken, fields: ["formatted_address", "geometry", "name"] },
      (place, status) => {
        if (status !== "OK" || !place) {
          return resolve({ address: [item.main, item.secondary].filter(Boolean).join(", "), lat: null, lng: null, placeId: item.placeId, name: item.main, source: "google" });
        }
        const loc = place.geometry && place.geometry.location;
        resolve({
          address: place.formatted_address || [item.main, item.secondary].filter(Boolean).join(", "),
          lat: loc ? loc.lat() : null,
          lng: loc ? loc.lng() : null,
          placeId: item.placeId,
          name: place.name || item.main,
          source: "google",
        });
      }
    );
  });
}

/** Photon (OpenStreetMap) suggestions with coordinates — no key required. */
export async function photonSuggestions(input, { bias, signal, limit = 6 } = {}) {
  const url =
    "https://photon.komoot.io/api/?q=" +
    encodeURIComponent(input) +
    `&limit=${limit}&lang=en` +
    (bias ? `&lat=${bias.lat}&lon=${bias.lng}` : "");
  const r = await fetch(url, { signal });
  if (!r.ok) return [];
  const data = await r.json();
  return (data.features || [])
    .filter((f) => ((f.properties || {}).countrycode || "US") === "US")
    .map((f) => {
      const p = f.properties || {};
      const street = [p.housenumber, p.street].filter(Boolean).join(" ");
      const main = p.name || street;
      if (!main) return null;
      const parts = [];
      if (p.name && street) parts.push(street);
      [p.district, p.city || p.county, p.state, p.postcode].forEach((x) => x && !parts.includes(x) && parts.push(x));
      const coords = (f.geometry && f.geometry.coordinates) || [];
      return {
        main,
        secondary: parts.join(", "),
        lat: typeof coords[1] === "number" ? coords[1] : null,
        lng: typeof coords[0] === "number" ? coords[0] : null,
        source: "photon",
      };
    })
    .filter(Boolean);
}

/** Suggestions from whichever provider is available. */
export async function suggest(input, opts = {}) {
  if (hasGooglePlaces()) {
    try {
      return await googleSuggestions(input, opts);
    } catch (err) {
      if (err && err.name === "AbortError") return [];
      // Fall through to Photon if Google is misconfigured (bad key / referrer).
    }
  }
  return photonSuggestions(input, opts);
}

/** Resolves a chosen suggestion to { address, lat, lng, placeId, source }. */
export async function resolveSelection(item, sessionToken) {
  if (item.source === "google") return googlePlaceDetails(item, sessionToken);
  return {
    address: item.secondary ? `${item.main}, ${item.secondary}` : item.main,
    lat: item.lat ?? null,
    lng: item.lng ?? null,
    placeId: item.placeId || null,
    name: item.main,
    source: item.source || "local",
  };
}

export function providerLabel() {
  return hasGooglePlaces() ? "Powered by Google" : "© OpenStreetMap contributors";
}
