/*
 * Address suggestions for the pickup / drop-off fields — a Google Maps-style
 * search experience.
 *
 * Primary source: Google Maps Places Autocomplete (Places API New, with the
 * legacy AutocompleteService as a fallback for older keys). It is enabled by
 * setting REACT_APP_GOOGLE_MAPS_API_KEY at build time (Vercel → Settings →
 * Environment Variables, then redeploy). The key needs "Maps JavaScript API"
 * and "Places API (New)" enabled and should be restricted to this site's
 * HTTP referrers. Results are biased toward Maryland, DC and Virginia.
 *
 * Fallback when no key is configured: the free Photon geocoder (OpenStreetMap
 * data), so the dropdown always works.
 *
 * Every suggestion is { main, secondary, address, kind, source } where `kind`
 * is one of airport | hotel | landmark | transit | city | address and drives
 * the icon shown in the dropdown. `address` is the full text that goes into
 * the field when the suggestion is picked.
 */

export const GOOGLE_MAPS_API_KEY = (process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "").trim();

// Maryland / DC / Virginia bounding box used to bias (not restrict) results.
export const DMV_BOUNDS = { south: 36.5, west: -79.6, north: 39.8, east: -75.0 };
export const DMV_CENTER = { lat: 38.95, lng: -77.0 };

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

/** Warm the Google library early (called on field focus) so the first
 * keystroke already has suggestions. */
export function prefetchGooglePlaces() {
  if (hasGooglePlaces()) loadGooglePlaces().catch(() => {});
}

/** Maps Google place types (or Photon OSM tags) to an icon kind. */
export function kindFromTypes(types = []) {
  const t = new Set(types);
  if (t.has("airport") || t.has("aerodrome") || t.has("heliport")) return "airport";
  if (t.has("lodging") || t.has("hotel") || t.has("motel") || t.has("guest_house") || t.has("resort_hotel")) return "hotel";
  if (t.has("train_station") || t.has("transit_station") || t.has("subway_station") || t.has("bus_station") || t.has("light_rail_station") || t.has("station")) return "transit";
  if (t.has("locality") || t.has("sublocality") || t.has("neighborhood") || t.has("postal_code") || t.has("administrative_area_level_1") || t.has("administrative_area_level_2") || t.has("city") || t.has("town") || t.has("village")) return "city";
  if (t.has("street_address") || t.has("premise") || t.has("subpremise") || t.has("route") || t.has("house") || t.has("residential")) return "address";
  if (t.has("tourist_attraction") || t.has("stadium") || t.has("museum") || t.has("university") || t.has("hospital") || t.has("park") || t.has("point_of_interest") || t.has("establishment") || t.has("attraction") || t.has("theatre") || t.has("shopping_mall") || t.has("convention_center") || t.has("church") || t.has("school")) return "landmark";
  return "address";
}

/** Google predictions for the typed text, biased toward MD / DC / VA. */
export async function googleSuggestions(input, { signal } = {}) {
  const places = await loadGooglePlaces();
  if (signal && signal.aborted) return [];

  // Places API (New). The static method is `fetchAutocompleteSuggestions`
  // (older betas exposed `fetchAutocompletePredictions`).
  const AS = places.AutocompleteSuggestion;
  const fetchNew = AS && (AS.fetchAutocompleteSuggestions || AS.fetchAutocompletePredictions);
  if (fetchNew) {
    const { suggestions } = await fetchNew.call(AS, {
      input,
      includedRegionCodes: ["us"],
      locationBias: DMV_BOUNDS,
      origin: DMV_CENTER,
    });
    return (suggestions || [])
      .map((s) => s.placePrediction)
      .filter(Boolean)
      .map((p) => ({
        main: p.mainText ? p.mainText.toString() : p.text.toString(),
        secondary: p.secondaryText ? p.secondaryText.toString() : "",
        address: p.text.toString(),
        kind: kindFromTypes(p.types || []),
        placeId: p.placeId,
        source: "google",
      }));
  }

  // Legacy Places library (keys created before March 2025).
  const g = window.google.maps;
  const service = new places.AutocompleteService();
  const predictions = await new Promise((resolve) => {
    service.getPlacePredictions(
      {
        input,
        componentRestrictions: { country: "us" },
        bounds: new g.LatLngBounds({ lat: DMV_BOUNDS.south, lng: DMV_BOUNDS.west }, { lat: DMV_BOUNDS.north, lng: DMV_BOUNDS.east }),
      },
      (res, status) => resolve({ res, status })
    );
  });
  if (predictions.status !== "OK" && predictions.status !== "ZERO_RESULTS") {
    // e.g. REQUEST_DENIED when the legacy Places API isn't enabled for the key —
    // let suggest() fall back to Photon instead of showing nothing.
    throw new Error(`Google Places legacy autocomplete: ${predictions.status}`);
  }
  return (predictions.res || []).map((p) => ({
    main: (p.structured_formatting && p.structured_formatting.main_text) || p.description,
    secondary: (p.structured_formatting && p.structured_formatting.secondary_text) || "",
    address: p.description,
    kind: kindFromTypes(p.types || []),
    placeId: p.place_id,
    source: "google",
  }));
}

/** Photon (OpenStreetMap) suggestions — no key required. */
export async function photonSuggestions(input, { signal, limit = 6 } = {}) {
  const url =
    "https://photon.komoot.io/api/?q=" +
    encodeURIComponent(input) +
    `&limit=${limit}&lang=en&lat=${DMV_CENTER.lat}&lon=${DMV_CENTER.lng}` +
    `&bbox=${DMV_BOUNDS.west},${DMV_BOUNDS.south},${DMV_BOUNDS.east},${DMV_BOUNDS.north}`;
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
      return {
        main,
        secondary,
        address: secondary ? `${main}, ${secondary}` : main,
        kind: kindFromTypes([p.osm_value, p.osm_key, p.type].filter(Boolean)),
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

export function providerLabel() {
  return hasGooglePlaces() ? "Powered by Google" : "© OpenStreetMap contributors";
}
