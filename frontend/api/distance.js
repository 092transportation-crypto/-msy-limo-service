// Vercel serverless function: driving distance in miles between two addresses.
//
// Primary source: Google Maps Distance Matrix API (set GOOGLE_MAPS_API_KEY in
// Vercel project settings). Fallback when the key is missing or Google fails:
// Photon geocoding + OSRM public routing (both free, OpenStreetMap data) so
// the instant quote keeps working either way.

const METERS_PER_MILE = 1609.344;

async function googleDistance(origin, destination, key) {
  const url =
    'https://maps.googleapis.com/maps/api/distancematrix/json' +
    `?origins=${encodeURIComponent(origin)}` +
    `&destinations=${encodeURIComponent(destination)}` +
    `&units=imperial&region=us&key=${key}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Distance Matrix HTTP ${res.status}`);
  const data = await res.json();
  const element = data?.rows?.[0]?.elements?.[0];
  if (data.status !== 'OK' || !element || element.status !== 'OK') {
    throw new Error(
      `Distance Matrix status ${data.status}/${element ? element.status : 'none'}`
    );
  }
  return element.distance.value / METERS_PER_MILE;
}

// Bias geocoding toward the DC metro area, same as the address autocomplete.
async function geocode(q) {
  const res = await fetch(
    `https://photon.komoot.io/api/?q=${encodeURIComponent(q)}&limit=1&lat=29.95&lon=-90.08&lang=en`
  );
  if (!res.ok) throw new Error(`Geocode HTTP ${res.status}`);
  const data = await res.json();
  const coords = data?.features?.[0]?.geometry?.coordinates;
  if (!coords) throw new Error(`No geocode result for "${q.slice(0, 60)}"`);
  return coords; // [lon, lat]
}

async function osrmDistance(origin, destination) {
  const [from, to] = await Promise.all([geocode(origin), geocode(destination)]);
  const res = await fetch(
    `https://router.project-osrm.org/route/v1/driving/${from[0]},${from[1]};${to[0]},${to[1]}?overview=false`
  );
  if (!res.ok) throw new Error(`OSRM HTTP ${res.status}`);
  const data = await res.json();
  const route = data?.routes?.[0];
  if (data.code !== 'Ok' || !route) throw new Error(`OSRM code ${data.code}`);
  return route.distance / METERS_PER_MILE;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const body = typeof req.body === 'object' && req.body !== null ? req.body : {};
  const origin = String(body.origin ?? '').trim().slice(0, 300);
  const destination = String(body.destination ?? '').trim().slice(0, 300);
  if (origin.length < 4 || destination.length < 4) {
    return res
      .status(400)
      .json({ success: false, message: 'Both addresses are required.' });
  }

  const key = process.env.GOOGLE_MAPS_API_KEY || process.env.GOOGLE_API_KEY;

  try {
    let miles;
    let source;
    if (key) {
      try {
        miles = await googleDistance(origin, destination, key);
        source = 'google';
      } catch (err) {
        console.error('Google Distance Matrix failed, falling back:', err.message);
        miles = await osrmDistance(origin, destination);
        source = 'osrm';
      }
    } else {
      miles = await osrmDistance(origin, destination);
      source = 'osrm';
    }
    return res.status(200).json({
      success: true,
      miles: Math.round(miles * 100) / 100,
      source,
    });
  } catch (err) {
    console.error('Distance lookup failed:', err.message);
    return res.status(422).json({
      success: false,
      message: "Couldn't calculate the distance for those addresses.",
    });
  }
};
