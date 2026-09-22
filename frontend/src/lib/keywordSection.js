// Keyword-rich "Limo, Car & Chauffeur Service in <Place>" section appended to
// every place/venue landing page. Wording rotates through a pool keyed by slug
// so neighbouring pages don't read identically, and every variant works the
// search phrases ("limo service", "car service", "chauffeur service", "black
// car service") into an H2 and two honest sentences. Site constants below.
const SITE = { brand: "MSY Limo Service", airports: "MSY (Louis Armstrong New Orleans International)", phone: "(877) 609-1919" };

const hash = (s) => [...String(s || "")].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

// p = place/venue name; at = "in Bowie, MD" or "for Preakness Stakes"
const POOL = [
  (p, at) => ({
    h2: `Limo Service, Car Service and Chauffeur Service ${at}`,
    text: [
      `Whether you search for a ${p} limo service, ${p} car service or a private chauffeur ${at}, the ride is the same: a licensed, background-checked chauffeur in a commercially insured vehicle, with the rate confirmed before you book.`,
      `${SITE.brand} runs airport transfers to ${SITE.airports}, black car service for business travel, and hourly chauffeur service for weddings, events and nights out — 24 hours a day, 365 days a year.`,
    ],
  }),
  (p, at) => ({
    h2: `${p} Black Car Service and Airport Car Service`,
    text: [
      `${SITE.brand} provides black car service ${at} for executives and airport travelers, with real-time flight tracking on every ${SITE.airports} pickup and complimentary waiting time built into the fare.`,
      `The same chauffeurs and vehicles serve as a ${p} limo service for weddings, proms and celebrations and as an hourly chauffeur service when your day has several stops.`,
    ],
  }),
  (p, at) => ({
    h2: `Chauffeur Service ${at}: Airport, Corporate and Special Occasions`,
    text: [
      `A professional chauffeur service ${at} covers more than the airport run. ${SITE.brand} handles corporate car service and roadshows, wedding and prom limo service, and point-to-point black car rides across the region.`,
      `Airport car service to and from ${SITE.airports} is quoted as a flat rate and confirmed before you ride, with dispatch reachable around the clock at ${SITE.phone}.`,
    ],
  }),
  (p, at) => ({
    h2: `Why Travelers Choose a Private Car Service ${at}`,
    text: [
      `For early flights, late arrivals and days that run on a schedule, a reserved car service ${at} beats hoping a driver is nearby. Your chauffeur is committed the night before, tracks the flight, and waits if it is late.`,
      `${SITE.brand} is the ${p} limo service, executive black car service and chauffeur service in one reservation, serving ${SITE.airports} and the surrounding area 24/7.`,
    ],
  }),
  (p, at) => ({
    h2: `${p} Limo and Car Service for Every Occasion`,
    text: [
      `From a sedan for one executive to a Sprinter for a wedding party, ${SITE.brand} matches the vehicle to the trip: airport car service ${at}, corporate black car service, wedding and prom limo service, and hourly chauffeur hire.`,
      `Every booking ${at} comes with a written quote, a licensed and background-checked chauffeur, and a commercially insured vehicle.`,
    ],
  }),
  (p, at) => ({
    h2: `Booking Chauffeured Car Service ${at}`,
    text: [
      `Request a quote online or call ${SITE.phone} with your pickup address, date and passenger count. Airport transfers to ${SITE.airports} are flat-rate; hourly chauffeur service covers multi-stop days and evenings out.`,
      `${SITE.brand} confirms the rate before you ride, tracks every inbound flight, and keeps dispatch staffed 24/7 so a change of plans ${at} is a phone call, not a problem.`,
    ],
  }),
];

const EVENT_RE = /transportation|stadium|arena|center|centre|theatre|theater|casino|festival|fair|park|hall|pavilion|race|stakes|boat show|jazz|mardi|convention|expo|field|live$/i;

// place: display name; kind: "place" (default) or "event"
export const keywordSection = (slug, place, kind) => {
  const isEvent = kind === "event" || (kind !== "place" && EVENT_RE.test(slug));
  const at = isEvent ? `for ${place}` : /-to-/.test(slug) ? `on the ${place} route` : /airport$|marshall$|dulles$|reagan national$|^(bwi|dca|iad|phl|msy)\b/i.test(place) ? `at ${place}` : `in ${place}`;
  return POOL[hash(slug) % POOL.length](place, at);
};
