/*
 * Address suggestions for the pickup / drop-off fields.
 *
 * Primary source: Google Maps Places Autocomplete (Places API New, with the
 * legacy AutocompleteService as a fallback for older keys). It is enabled by
 * setting REACT_APP_GOOGLE_MAPS_API_KEY at build time (Vercel → Settings →
 * Environment Variables, then redeploy). The key needs "Maps JavaScript API"
 * and "Places API (New)" enabled and should be restricted to this site's
 * HTTP referrers.
 *
 * Fallback when no key is configured: the free Photon geocoder (OpenStreetMap
 * data), so the dropdown always works.
 *
 * Every suggestion is { main, secondary, address, source }; `address` is the
 * full text that goes into the field when the suggestion is picked.
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

/** Google predictions for the typed text, biased toward the service area. */
export async function googleSuggestions(input, { bias, signal } = {}) {
  const places = await loadGooglePlaces();
  if (signal && signal.aborted) return [];
  const center = bias ? { lat: bias.lat, lng: bias.lng } : undefined;

  if (places.AutocompleteSuggestion && places.AutocompleteSuggestion.fetchAutocompletePredictions) {
    const { suggestions } = await places.AutocompleteSuggestion.fetchAutocompletePredictions({
      input,
      includedRegionCodes: ["us"],
      ...(center ? { locationBias: { center, radius: 150000 } } : {}),
    });
    return (suggestions || [])
      .map((s) => s.placePrediction)
      .filter(Boolean)
      .map((p) => ({
        main: p.mainText ? p.mainText.toString() : p.text.toString(),
        secondary: p.secondaryText ? p.secondaryText.toString() : "",
        address: p.text.toString(),
        source: "google",
      }));
  }

  // Legacy Places library (keys created before March 2025).
  const service = new places.AutocompleteService();
  const predictions = await new Promise((resolve) => {
    service.getPlacePredictions(
      {
        input,
        componentRestrictions: { country: "us" },
        ...(center ? { location: new window.google.maps.LatLng(center.lat, center.lng), radius: 150000 } : {}),
      },
      (res, status) => resolve(status === "OK" && res ? res : [])
    );
  });
  return predictions.map((p) => ({
    main: (p.structured_formatting && p.structured_formatting.main_text) || p.description,
    secondary: (p.structured_formatting && p.structured_formatting.secondary_text) || "",
    address: p.description,
    source: "google",
  }));
}

/** Photon (OpenStreetMap) suggestions — no key required. */
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
      const secondary = parts.join(", ");
      return { main, secondary, address: secondary ? `${main}, ${secondary}` : main, source: "photon" };
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

export function providerLabel() {
  return hasGooglePlaces() ? "Powered by Google" : "© OpenStreetMap contributors";
}
