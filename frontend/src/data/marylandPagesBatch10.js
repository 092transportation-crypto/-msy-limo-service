// Batch 10 (2026-10-23, round 6 Louisiana pages) — 10 new landing pages: four
// city+service combinations not covered by batches 3-9 (Lafayette weddings,
// Hammond corporate, Slidell weddings, Covington weddings), two new
// industry-vertical corporate pages (port/maritime/shipping, insurance &
// financial services — distinct from the oil & gas/energy and legal verticals
// already covered in MARYLAND_BATCH9), and four event-venue pages (Tipitina's,
// the Orpheum Theater, the Fillmore New Orleans and the University of New
// Orleans — none previously covered by venuesData.js or an earlier batch).
// Same entry shape as MARYLAND_BATCH9 (the file name "marylandPages..." is
// historical — these are Louisiana pages). Facts for the city pages
// (distances, routes, neighborhoods) are carried over from each city's
// existing base page in marylandPagesBatch3.js so the pages agree with each
// other. None of these 10 slugs exist anywhere else in the data files before
// this batch.
const VEHICLES = [
  { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "solo executives and couples" },
  { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "VIP and executive travel" },
  { name: "Lincoln Navigator", cls: "Premium SUV", seats: 6, best: "families and small groups with luggage" },
  { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "airport runs with beach or golf luggage" },
  { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "wedding parties, corporate teams and groups" },
  { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "proms, weddings and celebrations" },
];

const vehicles = () => VEHICLES.map((v) => ({ ...v }));

export const MARYLAND_BATCH10 = [
  // ───────────────────────── City + service combinations ─────────────────────────
  {
    slug: "lafayette-la-limo-service-for-weddings",
    type: "service",
    name: "Lafayette Wedding Limo",
    badge: "Wedding Transportation",
    h1: "Lafayette, LA Limo Service for Weddings",
    metaTitle: "Lafayette LA Wedding Limo Service | MSY Limo",
    metaDescription: "Lafayette, LA wedding limo service: Acadiana ceremonies, Oil Center and River Ranch receptions, guest shuttles. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "Downtown, River Ranch, Broussard" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Lafayette weddings run on Acadiana's own calendar and its own geography — downtown churches near the Cathedral of St. John, garden and event venues in River Ranch, and reception halls scattered across Broussard and Youngsville — and MSY Limo Service plans each one as a single itinerary rather than a series of disconnected rides, the same way we plan any wedding in our service area.",
      "A typical Lafayette wedding day moves between a getting-ready suite, a ceremony site, a photo stop and a reception venue, with buffer built in for a long receiving line or an extra set of photos at a scenic River Ranch courtyard or an oak-lined Acadiana backdrop. We confirm every address and timing window before the day so the schedule holds even when one leg runs long.",
      "Many Lafayette weddings also draw guests who fly into MSY rather than Lafayette Regional, especially out-of-state family connecting through New Orleans — about 135 miles and 2 to 2.25 hours up I-10 across the Atchafalaya Basin Bridge — and we run that transfer as a flat-rate group booking straight to the wedding hotel block.",
    ],
    highlights: [
      "Itinerary planned leg by leg — getting ready, ceremony, photos, reception, getaway",
      "Sprinter vans and stretch limousines for wedding parties and guest shuttles",
      "MSY-to-Lafayette guest transfers for out-of-state family, about 2 to 2.25 hours",
      "A dedicated chauffeur who stays with the wedding party all day",
      "Flat rate or hourly pricing confirmed before you book",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "How a Lafayette wedding day runs",
        paragraphs: [
          "Most Lafayette weddings move between three or four stops — a getting-ready suite, a downtown or River Ranch ceremony, a photo location and a reception venue — and we confirm every address and approximate timing in advance so a late start at hair and makeup doesn't cascade into a late ceremony. The same chauffeur and vehicle stay with the wedding party from the first pickup to the last drop-off whenever possible.",
          "Acadiana's festival calendar, particularly Festival International de Louisiane in the spring, can affect downtown parking and street access on an overlapping wedding weekend, and we check for that before confirming a route.",
        ],
      },
      {
        h2: "Guests flying into MSY instead of Lafayette Regional",
        paragraphs: [
          "Out-of-state family connecting through New Orleans rather than flying directly into Lafayette Regional Airport is common for Lafayette weddings, and we meet those flights, track them in real time, and run the roughly two-hour transfer straight to the wedding hotel block on a confirmed flat rate rather than leaving guests to arrange their own long-distance rideshare.",
          "A Sprinter van is typically the most efficient way to move a group of wedding guests together from MSY rather than splitting across several cars for the same long drive.",
        ],
      },
      {
        h2: "Booking lead time and cancellation",
        paragraphs: [
          "Spring and fall weekends, and any date near Festival International or Festivals Acadiens et Créoles, book out first, so reserving two to three months ahead secures first choice of Sprinter vans and stretch limousines. Smaller weddings and off-peak dates can often be booked with a few weeks' notice.",
          "Sprinter van and limousine wedding bookings cancel free of charge up to 12 hours before the first pickup; sedan and SUV add-ons follow the standard 3-hour window. Call (877) 609-1919 to confirm or adjust a reservation at any hour.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Can you plan multiple stops for a Lafayette wedding day?", a: "Yes. We plan getting-ready pickups, the ceremony, photos, the reception and the getaway car as one itinerary, with a chauffeur who stays with the wedding party rather than being dispatched fresh for each leg." },
      { q: "Can you pick up wedding guests at MSY instead of Lafayette Regional?", a: "Yes. The drive is about 135 miles and 2 to 2.25 hours via I-10, and we run it as a flat-rate group transfer straight to the wedding hotel block for out-of-state guests connecting through New Orleans." },
      { q: "Does a Lafayette festival weekend affect wedding transportation?", a: "It can affect downtown parking and street access, so we check the festival calendar against your wedding date and plan the route accordingly." },
      { q: "How far ahead should we book a Lafayette wedding?", a: "Two to three months for peak spring and fall weekends, and especially any date near a major Acadiana festival, when Sprinter vans and stretch limousines book out first." },
      { q: "What is the cancellation policy for wedding transportation?", a: "Sprinter van and limousine wedding bookings cancel free of charge up to 12 hours before the first pickup; sedan and SUV add-ons follow the standard 3-hour window." },
    ],
    related: [
      { label: "Lafayette, LA Limo Service", to: "/lafayette-la-limo-service" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "New Orleans Wedding Limo Service", to: "/new-orleans-wedding-limo-service" },
      { label: "MSY to Lafayette", to: "/msy-to-lafayette" },
      { label: "Baton Rouge Limo Service for Weddings", to: "/baton-rouge-limo-service-for-weddings" },
      { label: "Houma Limo Service for Weddings", to: "/houma-limo-service-for-weddings" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Lafayette, LA", "Lafayette Parish", "Broussard, LA", "Youngsville, LA"], serviceType: "Wedding transportation" },
  },
  {
    slug: "hammond-la-corporate-car-service",
    type: "service",
    name: "Hammond Corporate Car Service",
    badge: "Corporate Transportation",
    h1: "Hammond, LA Corporate Car Service",
    metaTitle: "Hammond LA Corporate Car Service | MSY Limo",
    metaDescription: "Hammond, LA corporate car service: executive MSY transfers, Southeastern Louisiana University and I-55/I-12 logistics travel. Call (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "I-55 / I-12 corridor, downtown Hammond" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinter vans" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Hammond sits at the junction of I-55 and I-12, which has made it a working hub for logistics, distribution and regional offices that pull visitors from New Orleans, Baton Rouge and the rest of the Northshore. MSY Limo Service runs corporate accounts for the companies based here, moving executives, auditors and visiting clients between the airport, local offices and the university district.",
      "A typical Hammond corporate booking is an MSY pickup for a visiting executive or client, flight-tracked so the chauffeur is positioned before the flight lands, followed by a direct run up I-55 through the Manchac swamp to a Hammond office or the logistics corridor along I-12 — about 45 miles and 45 to 55 minutes depending on traffic.",
      "We also handle recurring travel for Southeastern Louisiana University's administrative and recruiting staff, visiting lecturers, and vendors calling on the distribution and warehouse operations near the interstate interchange, along with multi-stop days that combine a Hammond visit with a Covington or Baton Rouge meeting on the same trip.",
    ],
    highlights: [
      "Flight-tracked MSY pickups for visiting executives and clients",
      "Flat-rate pricing confirmed before you book — no surge, no meter",
      "Chauffeurs familiar with the I-55/I-12 interchange and the Manchac stretch",
      "Corporate accounts with consolidated billing for recurring travel",
      "Sprinter vans for visiting teams and recruiting groups",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Airport transfers for Hammond business travel",
        paragraphs: [
          "Visiting executives, auditors and vendors flying into MSY for a Hammond meeting get a flight-tracked pickup with 45 minutes of complimentary wait time on domestic arrivals and 60 on international, so a delayed connection never leaves a visitor standing at the curb. The drive runs the elevated stretch of I-55 through the Manchac swamp before continuing on I-10 and I-12, and we time departures around known rush-hour patterns on that corridor.",
          "A sedan or SUV with the chauffeur already briefed on the office address and meeting time removes one more variable from a trip a visiting executive has already planned around.",
        ],
      },
      {
        h2: "University, logistics and multi-stop days",
        paragraphs: [
          "Southeastern Louisiana University brings a steady stream of visiting faculty, recruiters and administrative travel, and companies along the I-12 logistics and distribution corridor book us for vendor visits, site inspections and sales calls. We run multi-stop days that combine a Hammond visit with a nearby Covington, Ponchatoula or Baton Rouge stop under one reservation.",
          "A corporate account with us means consistent billing, the same pool of vetted chauffeurs, and a single dispatch number the whole team can use for every booking.",
        ],
      },
      {
        h2: "Booking and account setup",
        paragraphs: [
          "Standard sedan and SUV reservations cancel free of charge up to 3 hours before pickup, which suits the way business schedules shift. For recurring travel, ask about setting up a corporate account with monthly billing and a dedicated point of contact at dispatch — call (877) 609-1919 to get one started.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Do you track flights for executives flying into MSY for Hammond meetings?", a: "Yes. Every airport pickup is flight-tracked, with 45 minutes of complimentary wait on domestic arrivals and 60 on international, so a delayed flight never leaves a visitor without a car." },
      { q: "How long is the drive from MSY to Hammond?", a: "About 45 miles, generally 45 to 55 minutes depending on traffic on I-55 through the Manchac corridor and I-10/I-12." },
      { q: "Can you handle a multi-stop day across Hammond and nearby cities?", a: "Yes. One chauffeur and vehicle can cover a Hammond visit plus a nearby Covington, Ponchatoula or Baton Rouge stop on a single reservation." },
      { q: "Do you offer corporate accounts for recurring Hammond travel?", a: "Yes. Companies with regular travel can set up an account with consolidated monthly billing and a dedicated dispatch contact. Call (877) 609-1919 to set one up." },
      { q: "What is the cancellation policy for corporate bookings?", a: "Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter van bookings require 12 hours' notice." },
    ],
    related: [
      { label: "Hammond, LA Limo Service", to: "/hammond-la-limo-service" },
      { label: "MSY to Hammond", to: "/msy-to-hammond" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Covington Corporate Car Service", to: "/covington-corporate-car-service" },
      { label: "Baton Rouge Corporate Car Service", to: "/baton-rouge-corporate-car-service" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Hammond, LA", "Tangipahoa Parish", "Ponchatoula, LA"], serviceType: "Corporate transportation" },
  },
  {
    slug: "slidell-limo-service-for-weddings",
    type: "service",
    name: "Slidell Wedding Limo",
    badge: "Wedding Transportation",
    h1: "Slidell Limo Service for Weddings",
    metaTitle: "Slidell LA Wedding Limo Service | MSY Limo",
    metaDescription: "Slidell, LA wedding limo service: Olde Towne and lakefront ceremonies, Eden Isle receptions, guest shuttles. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "Olde Towne, Eden Isle, Oak Harbor" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Slidell weddings cluster around two settings — the historic storefronts and churches of Olde Towne, and the waterfront venues and private homes along Eden Isle and Oak Harbor on Lake Pontchartrain's eastern shore — and MSY Limo Service plans each wedding day around whichever geography the couple has chosen, with one chauffeur following the itinerary from start to finish rather than treating each stop as a separate booking.",
      "A typical Slidell wedding day runs between a getting-ready location, a ceremony in Olde Towne or at a lakefront venue, a photo stop and a reception, often at a waterfront property along Eden Isle. We confirm every address and timing window in advance and build in slack for a long receiving line or an extra round of photos at golden hour on the water.",
      "Guest shuttles are a regular request for family crossing the I-10 Twin Span from New Orleans or arriving from the Mississippi Gulf Coast, and a Sprinter van running a timed loop from a hotel near the Fremaux Town Center area removes the parking question for anyone unfamiliar with Slidell.",
    ],
    highlights: [
      "Itinerary planned leg by leg — getting ready, ceremony, photos, reception, getaway",
      "Sprinter vans and stretch limousines for wedding parties and guest shuttles",
      "Guest shuttles from hotels near Fremaux Town Center and the I-10 corridor",
      "A dedicated chauffeur who stays with the wedding party all day",
      "Flat rate or hourly pricing confirmed before you book",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "How a Slidell wedding day runs",
        paragraphs: [
          "Most Slidell weddings move between a getting-ready suite, a ceremony in Olde Towne or at a lakefront venue, and a reception at a waterfront property along Eden Isle or Oak Harbor, with a photo stop often worked in along the water. We confirm all addresses and approximate timing before the day and build slack into the schedule so a late start doesn't cascade into a late ceremony.",
          "The same chauffeur and vehicle stay with the wedding party from the first pickup to the last drop-off whenever possible, which matters most when the reception runs past the scheduled end time.",
        ],
      },
      {
        h2: "Guest shuttles across the Twin Span and from the Gulf Coast",
        paragraphs: [
          "Family and friends crossing the I-10 Twin Span from New Orleans, or driving in from Bay St. Louis, Gulfport or Biloxi along the Mississippi Gulf Coast, are routine for Slidell weddings, and a Sprinter van running a timed loop from a hotel near Fremaux Town Center or the Gause Boulevard corridor removes the parking question for guests unfamiliar with the area.",
          "Multiple vehicles can be coordinated under one reservation and one invoice, from a stretch limousine for the couple to Sprinter vans that keep a larger wedding party together.",
        ],
      },
      {
        h2: "Booking lead time and cancellation",
        paragraphs: [
          "Spring and fall Saturdays with good weather odds book out first for Slidell's waterfront venues, so reserving two to three months ahead secures first choice of Sprinter vans and stretch limousines. A smaller wedding party or an off-peak date can often be arranged with a few weeks' notice.",
          "Sprinter van and limousine wedding bookings cancel free of charge up to 12 hours before the first pickup; sedan and SUV add-ons follow the standard 3-hour window. Call (877) 609-1919 to confirm or adjust a reservation at any hour.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Can you plan multiple stops for a Slidell wedding day?", a: "Yes. We plan getting-ready pickups, the ceremony, photos, the reception and the getaway car as one itinerary, with a chauffeur who stays with the wedding party rather than being dispatched fresh for each leg." },
      { q: "Do you run guest shuttles from hotels near Fremaux Town Center?", a: "Yes. A Sprinter van running a timed loop between a hotel near Fremaux Town Center or the Gause Boulevard corridor and your venue is a common booking, coordinated with the planner or couple directly." },
      { q: "Can you bring guests over from the Mississippi Gulf Coast?", a: "Yes. Family and friends arriving from Bay St. Louis, Gulfport or Biloxi are a regular part of Slidell wedding logistics, and we can coordinate their transportation alongside the rest of the wedding party." },
      { q: "How far ahead should we book a Slidell wedding?", a: "Two to three months for peak spring and fall Saturdays, when Sprinter vans and stretch limousines book out first. Smaller weddings and off-peak dates can often be booked with a few weeks' notice." },
      { q: "What is the cancellation policy for wedding transportation?", a: "Sprinter van and limousine wedding bookings cancel free of charge up to 12 hours before the first pickup; sedan and SUV add-ons follow the standard 3-hour window." },
    ],
    related: [
      { label: "Slidell Limo Service", to: "/slidell-limo-service" },
      { label: "Slidell Corporate Car Service", to: "/slidell-corporate-car-service" },
      { label: "Slidell Prom Limo Service", to: "/slidell-prom-limo-service" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Mandeville Limo Service for Weddings", to: "/mandeville-limo-service-for-weddings" },
      { label: "MSY to Slidell", to: "/msy-to-slidell" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Slidell, LA", "St. Tammany Parish"], serviceType: "Wedding transportation" },
  },
  {
    slug: "covington-limo-service-for-weddings",
    type: "service",
    name: "Covington Wedding Limo",
    badge: "Wedding Transportation",
    h1: "Covington, LA Limo Service for Weddings",
    metaTitle: "Covington LA Wedding Limo Service | MSY Limo",
    metaDescription: "Covington, LA wedding limo service: downtown and countryside venues, rehearsal dinners, Causeway guest shuttles. Flat rates. (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "Downtown, Folsom, Madisonville corridor" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Covington is one of the Northshore's busiest wedding markets, and this page goes a layer deeper than our general Covington coverage: the venue-by-venue rhythm of a Covington wedding weekend, from a Friday rehearsal dinner on Columbia Street through a Saturday ceremony and a reception at a countryside property toward Folsom or Madisonville. MSY Limo Service treats each wedding as one coordinated booking rather than separate point-to-point trips.",
      "Beyond the ceremony day itself, Covington's historic downtown restaurants and the galleries around the Bogue Falaya riverfront are a regular rehearsal-dinner setting, and we run that evening on an hourly basis so the wedding party's vehicle stays with them from dinner through a nightcap downtown.",
      "Countryside venues toward Folsom, Abita Springs and Madisonville add real drive time between a downtown getting-ready suite and a rural reception property, and we build that into the timeline from the start rather than treating it as a quick suburban hop the way a less-local provider sometimes does.",
    ],
    highlights: [
      "Rehearsal dinner transportation on Columbia Street and the riverfront",
      "Itinerary planned leg by leg for downtown-to-countryside venue combinations",
      "Sprinter vans and stretch limousines for wedding parties and guest shuttles",
      "Causeway guest shuttles for guests arriving from the south shore",
      "A dedicated chauffeur who stays with the wedding party all day",
      "Flat rate or hourly pricing confirmed before you book",
    ],
    sections: [
      {
        h2: "Rehearsal dinner through ceremony day",
        paragraphs: [
          "A Covington wedding weekend often starts the night before with a rehearsal dinner downtown near Columbia Street or the Bogue Falaya riverfront, and we book that evening hourly so the vehicle and chauffeur stay with the wedding party from dinner through a nightcap, rather than arranging a separate ride for each stop.",
          "On the day itself, we confirm the getting-ready suite, the ceremony site, any photo stop and the reception venue as one itinerary, with buffer built in for a long receiving line or extra time at a scenic countryside stop.",
        ],
      },
      {
        h2: "Downtown-to-countryside venue timing",
        paragraphs: [
          "Covington weddings that pair a downtown ceremony with a reception toward Folsom, Abita Springs or Madisonville involve real drive time between stops — often fifteen to twenty-five minutes depending on the exact properties — and we plan that into the schedule from the start so the wedding party isn't rushed between a ceremony that ran long and a reception start time set without the drive in mind.",
          "The same chauffeur and vehicle stay with the wedding party for the full day whenever possible, which keeps the transportation as one continuous service rather than disconnected bookings.",
        ],
      },
      {
        h2: "Causeway guest shuttles and booking lead time",
        paragraphs: [
          "Guests crossing the Lake Pontchartrain Causeway from the south shore for a Covington wedding are common, and a Sprinter van running a timed loop from a hotel near the Causeway's north end removes the parking question entirely. Spring and fall Saturdays book out first, so two to three months ahead secures first choice of Sprinter vans and stretch limousines; sprinter van and limousine bookings cancel free up to 12 hours before the first pickup.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Can you book transportation for a Covington rehearsal dinner, not just the wedding day?", a: "Yes. Rehearsal dinner transportation downtown near Columbia Street or the riverfront is typically booked hourly, with the vehicle staying through dinner and a nightcap." },
      { q: "Can you handle a downtown ceremony with a countryside reception?", a: "Yes. We plan the real drive time between a downtown venue and a reception toward Folsom, Abita Springs or Madisonville into the day's timeline from the start." },
      { q: "Do you run Causeway guest shuttles for Covington weddings?", a: "Yes. A Sprinter van running a timed loop from a hotel near the Causeway's north end to your venue is a common booking, coordinated with the planner or couple directly." },
      { q: "How far ahead should we book a Covington wedding?", a: "Two to three months for peak spring and fall Saturdays, when Sprinter vans and stretch limousines book out first. Smaller weddings and off-peak dates can often be booked with a few weeks' notice." },
      { q: "What is the cancellation policy for wedding transportation?", a: "Sprinter van and limousine wedding bookings cancel free of charge up to 12 hours before the first pickup; sedan and SUV add-ons follow the standard 3-hour window." },
    ],
    related: [
      { label: "Covington, LA Limo Service", to: "/covington-la-limo-service" },
      { label: "Covington Corporate Car Service", to: "/covington-corporate-car-service" },
      { label: "Covington Prom Limo Service", to: "/covington-prom-limo-service" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Madisonville, LA Limo Service", to: "/madisonville-la-limo-service" },
      { label: "Folsom, LA Limo Service", to: "/folsom-la-limo-service" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Covington, LA", "St. Tammany Parish", "Madisonville, LA", "Folsom, LA"], serviceType: "Wedding transportation" },
  },
  // ───────────────────────── Industry-vertical corporate pages ─────────────────────────
  {
    slug: "new-orleans-port-maritime-transportation",
    type: "service",
    name: "Port & Maritime Industry",
    badge: "Corporate Transportation",
    h1: "New Orleans Port & Maritime Industry Transportation",
    metaTitle: "Port & Maritime Industry Car Service | New Orleans",
    metaDescription: "Executive car service for Port of New Orleans maritime business: visiting officers, ship's agents and terminal visits. Call (877) 609-1919.",
    stats: [
      { label: "Clients", value: "Terminals · Agents · Shipping Lines" },
      { label: "Coverage", value: "Port NOLA to MSY" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "The Port of New Orleans is one of the busiest in the country by tonnage, and the maritime business that runs through it — container and breakbulk terminals, ship's agents, stevedoring companies, maritime attorneys and the shipping lines themselves — brings a steady flow of visiting officers, surveyors, customs representatives and executives through MSY on tight, often unpredictable schedules. MSY Limo Service built our airport transfer business to handle exactly this kind of travel: flight-tracked, flat-rate, and ready for a schedule that can shift with a vessel's arrival.",
      "A common booking is a visiting ship's officer, port captain or cargo surveyor flying into MSY and heading directly to a terminal gate along the river, with the chauffeur already briefed on the specific terminal's access requirements. We also run transfers for maritime attorneys and insurance adjusters handling cargo claims, and for executives visiting agency offices in the CBD near the river.",
      "Because vessel schedules shift with weather, tides and berth availability, maritime travel often changes on short notice, and our dispatch team is used to a pickup time moving by a few hours as a ship's ETA updates — the same flexibility we apply to flight-tracked airport transfers.",
    ],
    highlights: [
      "Flight-tracked MSY transfers for visiting officers, surveyors and executives",
      "Flat-rate pricing confirmed before you book, with receipts suited to expense reports",
      "Chauffeurs familiar with terminal gate access along the river",
      "Flexible pickup timing for schedules tied to vessel arrivals",
      "24/7 dispatch for pre-dawn departures and late-notice changes",
      "SUVs and Sprinter vans for crew groups and gear",
    ],
    sections: [
      {
        h2: "Airport transfers for maritime professionals",
        paragraphs: [
          "Ship's officers, port captains, cargo surveyors and customs representatives flying into MSY for Port of New Orleans business get a flight-tracked pickup with meet-and-greet available inside baggage claim, useful for anyone arriving after a long international itinerary. From the airport we run direct to a terminal gate, an agency office in the CBD, or a hotel near the river, with the chauffeur already briefed on any terminal access requirements.",
          "Maritime attorneys and adjusters handling cargo claims, along with classification-society surveyors inspecting vessels in port, are a regular part of this work, often moving between a hotel, a terminal and a law office in the same day.",
        ],
      },
      {
        h2: "Schedules that move with the vessel",
        paragraphs: [
          "Vessel arrivals shift with weather, river conditions and berth availability, and a pickup scheduled around a ship's ETA can change by hours with little warning. Our dispatch team tracks these updates the same way we track flights, adjusting pickup times so a visiting officer or surveyor is never left waiting at a terminal gate because a schedule moved.",
          "Crew changes and recurring visits from the same shipping line or agency can be set up as a standing arrangement, with a consistent pickup pattern each time a vessel calls.",
        ],
      },
      {
        h2: "Setting up a corporate account",
        paragraphs: [
          "Shipping agencies, terminal operators and maritime law firms with recurring travel through MSY can set up a corporate account with consolidated monthly billing and a dedicated dispatch contact. Call (877) 609-1919 to discuss your typical vessel and visitor schedule.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Can you deliver visitors directly to a Port of New Orleans terminal gate?", a: "Yes. Our chauffeurs are familiar with terminal access requirements along the river and can take visiting officers, surveyors and executives directly from MSY to the correct gate." },
      { q: "Can pickup times change if a vessel's arrival schedule shifts?", a: "Yes. Dispatch tracks vessel ETA changes the same way we track flights and adjusts pickup times accordingly, so a schedule shift doesn't leave a visitor without a car." },
      { q: "Do you work with ship's agents and shipping lines on recurring travel?", a: "Yes. Agencies and shipping lines with recurring visits can set up a standing arrangement with a consistent pickup pattern each time a vessel calls." },
      { q: "Can you handle international arrivals for maritime crew and officers?", a: "Yes. Flight tracking covers international itineraries, and meet-and-greet inside baggage claim is available for visitors on a long trip." },
      { q: "What is the cancellation policy for corporate maritime bookings?", a: "Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter van bookings require 12 hours' notice." },
    ],
    related: [
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "New Orleans Legal Corporate Transportation", to: "/new-orleans-legal-corporate-transportation" },
      { label: "Louisiana Oil, Gas & Energy Corporate Transportation", to: "/louisiana-oil-gas-energy-corporate-transportation" },
      { label: "New Orleans Corporate Car Service", to: "/new-orleans-corporate-car-service" },
      { label: "Warehouse District and CBD Limo Service", to: "/warehouse-district-cbd-limo-service" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans, LA", "Louisiana"], serviceType: "Corporate transportation" },
  },
  {
    slug: "new-orleans-insurance-financial-services-transportation",
    type: "service",
    name: "Insurance & Financial Services Industry",
    badge: "Corporate Transportation",
    h1: "New Orleans Insurance & Financial Services Transportation",
    metaTitle: "Insurance & Financial Services Car Service | NOLA",
    metaDescription: "Car service for New Orleans insurance carriers, reinsurers and banks: adjuster travel, roadshows, conferences. Call (877) 609-1919.",
    stats: [
      { label: "Clients", value: "Carriers · Banks · Adjusters" },
      { label: "Coverage", value: "CBD Financial District to MSY" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "New Orleans and Louisiana carry an outsized insurance and financial services presence for the region's size — property and casualty carriers, reinsurers with a stake in Gulf Coast catastrophe risk, regional banks headquartered downtown, and the actuaries, adjusters and auditors who move through the CBD's financial district. MSY Limo Service provides the same flat-rate, flight-tracked reliability for this industry that we provide for any client whose work depends on being on time and on budget.",
      "A common booking is an out-of-town adjuster or catastrophe team flying in after a storm event, moving between a hotel, local offices and damaged-property sites on a schedule that can change hour to hour. We also run executive transfers for bank and insurance leadership, roadshow transportation for financial services teams meeting multiple clients in one day, and shuttles for the insurance and reinsurance conferences that regularly book downtown hotels.",
      "Discretion and punctuality matter as much here as in any other corporate account, and our chauffeurs are accustomed to clients taking confidential calls or reviewing figures on the way to a meeting.",
    ],
    highlights: [
      "Flight-tracked MSY transfers for adjusters, executives and conference attendees",
      "Flat-rate pricing confirmed before you book, with receipts suited to expense reports",
      "Catastrophe-response scheduling that adjusts as adjuster itineraries change",
      "Roadshow and multi-stop days for financial services teams",
      "Corporate accounts with consolidated billing for recurring travel",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Adjuster and catastrophe-response travel",
        paragraphs: [
          "After a major storm, carriers send adjuster and catastrophe-response teams into the region on short notice, often with a schedule that shifts as damaged-property assessments run long or short. We treat these bookings the way we treat any time-sensitive corporate travel — flight-tracked pickups, flexible rescheduling, and a chauffeur who already has the day's stops rather than waiting for each address one at a time.",
          "Independent adjusters and third-party administrators working a multi-day assignment can set up a standing pickup pattern for the length of their stay, with consistent billing suited to claims-expense documentation.",
        ],
      },
      {
        h2: "Roadshows, conferences and executive travel",
        paragraphs: [
          "Financial services teams running an investor or client roadshow through New Orleans book a sedan or SUV for the full day, moving between several meetings with the chauffeur waiting between stops rather than arranging separate rides for each appointment. Insurance and reinsurance conferences that book downtown hotel blocks get the same scheduled shuttle treatment we run for any convention — see our meetings and events industry transportation page for the full program structure.",
          "Bank and insurance executives with recurring MSY travel appreciate the same flat rate and flight tracking as any other corporate client, with a consistent chauffeur pool for repeat visitors.",
        ],
      },
      {
        h2: "Setting up a corporate account",
        paragraphs: [
          "Carriers, banks and financial services firms with recurring travel through MSY can set up a corporate account with consolidated monthly billing and a dedicated dispatch contact. Call (877) 609-1919 to discuss your typical travel pattern, including catastrophe-response surge planning.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Can you handle adjuster travel that changes schedule during a catastrophe response?", a: "Yes. We flex pickup times as damaged-property assessments run long or short, and can set up a standing pickup pattern for a multi-day adjuster assignment." },
      { q: "Do you run roadshow transportation for financial services teams?", a: "Yes. A sedan or SUV booked for the full day, with the chauffeur waiting between client meetings, is the standard approach for a roadshow or multi-stop corporate day." },
      { q: "Do you provide shuttles for insurance and reinsurance conferences?", a: "Yes, on the same scheduled shuttle model we run for any downtown convention, coordinated with the conference organizer or hotel." },
      { q: "Do you offer corporate accounts for carriers and banks?", a: "Yes. Firms with recurring travel can set up an account with consolidated monthly billing and a dedicated dispatch contact, including surge planning for catastrophe response." },
      { q: "What is the cancellation policy for corporate bookings?", a: "Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter van and multi-vehicle bookings require 12 hours' notice." },
    ],
    related: [
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "New Orleans Legal Corporate Transportation", to: "/new-orleans-legal-corporate-transportation" },
      { label: "New Orleans Meetings & Events Industry Transportation", to: "/new-orleans-meetings-events-industry-transportation" },
      { label: "New Orleans Corporate Car Service", to: "/new-orleans-corporate-car-service" },
      { label: "MSY Airport Corporate Car Service", to: "/msy-airport-corporate-car-service" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans, LA", "Louisiana"], serviceType: "Corporate transportation" },
  },
  // ───────────────────────── Event venues ─────────────────────────
  {
    slug: "tipitinas-transportation",
    type: "event",
    name: "Tipitina's",
    badge: "MUSIC & NIGHTLIFE",
    h1: "Tipitina's Transportation",
    metaTitle: "Tipitina's Transportation | Uptown New Orleans",
    metaDescription: "Car and limo service to Tipitina's on Napoleon Avenue — live music, Fess Fest and late-night shows. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "Location", value: "Napoleon Ave, Uptown New Orleans" },
      { label: "From MSY", value: "≈ 13 miles · 20–25 minutes" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Tipitina's is one of New Orleans' defining live-music venues, a Napoleon Avenue institution that has hosted everyone from Professor Longhair to generations of touring funk, brass and jam bands since the 1970s. MSY Limo Service gets fans, performers and visiting industry guests to and from Tipitina's with a flat rate confirmed before you ride and a chauffeur who knows the venue's parking reality on a packed show night.",
      "Street parking around Tipitina's fills fast on any notable show, and the surrounding Uptown blocks are mostly residential with limited overflow capacity, which makes a reserved pickup meaningfully easier than circling for parking or hunting for a rideshare pickup spot after the last encore.",
      "We cover everything from a couple heading to a Sunday-night show to full group outings tied to a festival weekend, and a visiting band or industry guest who needs a reliable, on-time ride to a load-in or soundcheck.",
    ],
    highlights: [
      "Flat-rate pricing — no surge on show nights",
      "Chauffeurs who know Uptown's limited parking around the venue",
      "Post-show pickup coordinated by text with your chauffeur",
      "Load-in and soundcheck timing for visiting performers",
      "Group-friendly SUVs and Sprinter vans for larger outings",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "Why parking is the real challenge at Tipitina's",
        paragraphs: [
          "Napoleon Avenue and the surrounding Uptown side streets offer street parking only, and that parking disappears quickly once a popular show's doors open. Rather than adding to that search, we drop you as close to the entrance as the block allows and stage nearby so your vehicle is ready when the show lets out, rather than circling the neighborhood.",
          "Local fans who'd normally walk or bike to a neighborhood show still book us for a late weeknight set when getting home safely afterward matters more than the short distance covered.",
        ],
      },
      {
        h2: "Fess Fest, Carnival season and festival weekends",
        paragraphs: [
          "Tipitina's hosts its own notable annual events, including tributes tied to Professor Longhair's legacy, and gets busier still during Jazz Fest and Mardi Gras season when touring and local acts fill the calendar most nights. We check the show calendar and any related street activity before dispatching a vehicle on a festival-adjacent night.",
        ],
      },
      {
        h2: "Visiting performers and industry guests",
        paragraphs: [
          "Touring musicians, tour managers and industry guests flying into MSY for a Tipitina's date can be met at the airport and delivered straight to load-in, with flight tracking and a flat rate confirmed before the trip. We can also run a post-show pickup timed to the actual set length rather than the venue's posted schedule.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Is parking difficult near Tipitina's?", a: "Yes. The venue and surrounding Uptown blocks offer street parking only, and it fills quickly before a popular show. A reserved pickup and drop-off avoids that search entirely." },
      { q: "Can you time a post-show pickup to when the set actually ends?", a: "Yes. Coordinate by text with your chauffeur as the show wraps up, and we'll have a vehicle ready rather than working from the venue's posted end time alone." },
      { q: "Do you handle airport transfers for touring musicians playing Tipitina's?", a: "Yes. Flight-tracked MSY pickups with direct delivery to load-in or soundcheck are a regular booking for visiting performers and tour staff." },
      { q: "How far is Tipitina's from MSY airport?", a: "About 13 miles and 20 to 25 minutes, depending on traffic." },
      { q: "What is the cancellation policy for Tipitina's bookings?", a: "Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter van and multi-vehicle bookings require 12 hours' notice." },
    ],
    related: [
      { label: "Uptown New Orleans Limo Service", to: "/uptown-new-orleans-limo-service" },
      { label: "House of Blues New Orleans Transportation", to: "/house-of-blues-new-orleans-transportation" },
      { label: "Concert & Event Transportation", to: "/concert-transportation" },
      { label: "Garden District & Uptown Transportation Guide", to: "/garden-district-uptown-transportation-guide" },
      { label: "Special Events", to: "/services/special-events" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans, LA", "Uptown New Orleans"], serviceType: "Event transportation" },
  },
  {
    slug: "orpheum-theater-new-orleans-transportation",
    type: "event",
    name: "The Orpheum Theater",
    badge: "THEATER & CONCERTS",
    h1: "Orpheum Theater Transportation",
    metaTitle: "Orpheum Theater Transportation | New Orleans",
    metaDescription: "Car and limo service to the Orpheum Theater in downtown New Orleans — concerts, symphony and touring shows. Call (877) 609-1919.",
    stats: [
      { label: "Location", value: "University Place, Downtown New Orleans" },
      { label: "From MSY", value: "≈ 13 miles · 20–25 minutes" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "The Orpheum Theater on University Place, just off Canal Street in downtown New Orleans, is home to the Louisiana Philharmonic Orchestra and a regular stop for touring concerts, comedy and theatrical productions in a restored 1918 vaudeville house. MSY Limo Service covers the Orpheum with the same flat-rate, flight-tracked reliability we bring to any downtown venue, including curbside drop-off right where the CBD's parking garages and surge-priced rideshares make the entrance harder to reach than it should be.",
      "Its University Place location puts it a short walk from Canal Street hotels, the French Quarter and the Warehouse District, which makes it an easy add-on for a dinner-and-show evening without needing a second vehicle for a separate leg of the night.",
      "We handle everything from a couple attending a symphony performance to groups coordinating a theater night with dinner beforehand, and VIP transportation for performers and show organizers who need a reliable, discreet ride to and from the stage door.",
    ],
    highlights: [
      "Curbside drop-off avoiding CBD garage and surge-pricing hassles",
      "Easy pairing with Canal Street, French Quarter or Warehouse District dinners",
      "Post-show pickup coordinated by text with your chauffeur",
      "VIP and stage-door transportation for performers and organizers",
      "Flight tracking and complimentary wait time on airport pickups",
      "Flat-rate pricing confirmed before you ride",
    ],
    sections: [
      {
        h2: "A convenient downtown location",
        paragraphs: [
          "University Place sits just off Canal Street, within easy reach of downtown hotels and the edge of the French Quarter, which makes the Orpheum one of the more flexible downtown venues to build an evening around. We can run a single reservation that covers dinner nearby, the show itself, and a drop-off back at your hotel afterward.",
          "CBD parking garages fill on a popular show night and on-demand rideshare pricing tends to spike at the same time thousands of attendees are trying to leave at once. A reserved pickup avoids both problems with a flat rate set before the night starts.",
        ],
      },
      {
        h2: "Symphony nights and touring shows",
        paragraphs: [
          "The Louisiana Philharmonic Orchestra's regular season draws a dressed-up, punctuality-minded crowd that values arriving with time to spare rather than searching for parking minutes before curtain. Touring concerts and comedy shows bring a different crowd on a different schedule, and we plan the pickup timing around whichever the night calls for.",
        ],
      },
      {
        h2: "Performers and show organizers",
        paragraphs: [
          "Visiting performers, conductors and show organizers flying into MSY can be met with flight tracking and delivered directly to the stage door with time for soundcheck, and we coordinate a confidential, on-time return trip after the performance as well.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Can you drop off right at the Orpheum Theater entrance?", a: "Yes. We provide curbside drop-off at University Place, which avoids the CBD's parking garage and surge-pricing hassles on a popular show night." },
      { q: "Can you build an evening around dinner and the show?", a: "Yes. The Orpheum's downtown location near Canal Street and the French Quarter makes it easy to combine a dinner stop with the performance and your return trip in one reservation." },
      { q: "Do you provide transportation for visiting performers and conductors?", a: "Yes. We offer flight-tracked MSY pickups and direct delivery to the stage door, with time built in for soundcheck, plus a confidential return trip after the show." },
      { q: "How far is the Orpheum Theater from MSY airport?", a: "About 13 miles and 20 to 25 minutes, depending on traffic." },
      { q: "What is the cancellation policy for Orpheum Theater bookings?", a: "Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter van and multi-vehicle bookings require 12 hours' notice." },
    ],
    related: [
      { label: "Warehouse District and CBD Limo Service", to: "/warehouse-district-cbd-limo-service" },
      { label: "Fillmore New Orleans Transportation", to: "/fillmore-new-orleans-transportation" },
      { label: "Saenger Theatre Transportation", to: "/saenger-theatre-transportation" },
      { label: "Concert & Event Transportation", to: "/concert-transportation" },
      { label: "Special Events", to: "/services/special-events" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans, LA", "Downtown New Orleans"], serviceType: "Event transportation" },
  },
  {
    slug: "fillmore-new-orleans-transportation",
    type: "event",
    name: "The Fillmore New Orleans",
    badge: "CONCERTS & EVENTS",
    h1: "Fillmore New Orleans Transportation",
    metaTitle: "Fillmore New Orleans Transportation | Canal St.",
    metaDescription: "Car and limo service to the Fillmore New Orleans on Canal Street — concerts and live shows near the riverfront. Call (877) 609-1919.",
    stats: [
      { label: "Location", value: "Canal Street, Downtown New Orleans" },
      { label: "From MSY", value: "≈ 14 miles · 20–30 minutes" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "The Fillmore New Orleans, at the foot of Canal Street near the riverfront and the base of the Four Seasons Hotel, brought the legendary Fillmore concert brand to New Orleans with a mid-size room built for touring acts that have outgrown a club but don't need an arena. MSY Limo Service covers the Fillmore with flat-rate, flight-tracked service and curbside drop-off right on Canal Street, steps from where the riverfront crowd gathers before a show.",
      "The venue's foot of Canal Street location puts it within easy reach of the French Quarter, the Warehouse District and the Canal Street hotel corridor, making it a natural stop for visitors already downtown for a convention or a weekend trip who want to add a show without arranging a separate car service relationship.",
      "We handle everything from couples and small groups heading to a single show to full group bookings for a sold-out night, along with VIP and artist transportation coordinated directly with tour management.",
    ],
    highlights: [
      "Curbside drop-off at the foot of Canal Street",
      "Easy add-on for convention attendees and downtown hotel guests",
      "Post-show pickup coordinated by text with your chauffeur",
      "VIP and artist transportation coordinated with tour management",
      "Flight tracking and complimentary wait time on airport pickups",
      "Flat-rate pricing confirmed before you ride",
    ],
    sections: [
      {
        h2: "A riverfront location built for convention and hotel guests",
        paragraphs: [
          "Because the Fillmore sits at the foot of Canal Street near the river, convention attendees and hotel guests staying downtown can add a show to an existing trip without needing a separate ground-transportation plan — we simply fold the Fillmore stop into whatever airport or hotel transfer you've already booked with us.",
          "On a sold-out night, Canal Street traffic and rideshare demand both spike at once as the show lets out, and a reserved pickup staged nearby avoids competing with that crowd for a ride.",
        ],
      },
      {
        h2: "Pairing a show with dinner or a riverfront evening",
        paragraphs: [
          "The Fillmore's location makes it simple to build a full evening — dinner in the Warehouse District or the Quarter, the show itself, and a return to your hotel — under one reservation rather than several separate bookings through the night.",
        ],
      },
      {
        h2: "Artist and tour staff transportation",
        paragraphs: [
          "Touring artists and crew flying into MSY for a Fillmore date get flight-tracked pickups with direct delivery to load-in, and we coordinate timing directly with tour management for a schedule that can shift as load-in and soundcheck run long or short.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Can you drop off right at the Fillmore New Orleans entrance?", a: "Yes. We provide curbside drop-off at the foot of Canal Street, close to where the pre-show crowd gathers." },
      { q: "Can I combine a Fillmore show with an existing hotel or convention transfer?", a: "Yes. If you're already booked with us for a downtown hotel or convention transfer, we can fold a Fillmore stop into the same reservation." },
      { q: "Do you provide transportation for touring artists and tour staff?", a: "Yes. Flight-tracked MSY pickups with direct delivery to load-in are a regular booking, coordinated directly with tour management." },
      { q: "How far is the Fillmore from MSY airport?", a: "About 14 miles and 20 to 30 minutes, depending on traffic." },
      { q: "What is the cancellation policy for Fillmore New Orleans bookings?", a: "Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter van and multi-vehicle bookings require 12 hours' notice." },
    ],
    related: [
      { label: "Orpheum Theater Transportation", to: "/orpheum-theater-new-orleans-transportation" },
      { label: "Warehouse District and CBD Limo Service", to: "/warehouse-district-cbd-limo-service" },
      { label: "New Orleans Convention Center Transportation", to: "/new-orleans-convention-center-transportation" },
      { label: "Concert & Event Transportation", to: "/concert-transportation" },
      { label: "Special Events", to: "/services/special-events" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans, LA", "Downtown New Orleans"], serviceType: "Event transportation" },
  },
  {
    slug: "university-of-new-orleans-transportation",
    type: "event",
    name: "University of New Orleans",
    badge: "CAMPUS TRANSPORTATION",
    h1: "University of New Orleans Transportation",
    metaTitle: "University of New Orleans Transportation | UNO",
    metaDescription: "Car and limo service to the University of New Orleans Lakefront campus — move-in, graduation and Lakefront Arena events. (877) 609-1919.",
    stats: [
      { label: "Location", value: "Lakefront, New Orleans" },
      { label: "From MSY", value: "≈ 12 miles · 20–25 minutes" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "The University of New Orleans sits on the Lakefront along Lake Pontchartrain, a short drive from downtown and a distinct campus community from Tulane, Loyola and Xavier on the other side of the city. MSY Limo Service covers UNO for the same seasonal rhythm every college town runs on — move-in, parents' weekends, commencement — plus concerts and events at the Lakefront Arena, with the same flat-rate, flight-tracked service we bring to any campus pickup.",
      "Families flying in for move-in day or commencement book us to skip a rental car entirely, with a chauffeur who already knows which residence halls and campus buildings sit where on the Lakefront grounds and loads bags curbside rather than leaving a family to navigate campus parking on a first visit.",
      "The Lakefront Arena also hosts concerts, commencement ceremonies for multiple area schools and community events throughout the year, bringing visitors who appreciate a reserved vehicle over hunting for lakefront-area parking on a busy event night.",
    ],
    highlights: [
      "Move-in, parents' weekend and commencement transfers",
      "About 20–25 minutes from MSY — a short, predictable campus run",
      "Chauffeurs who know the Lakefront campus layout",
      "Concert and event transportation for the Lakefront Arena",
      "Flight tracking and complimentary wait time on airport pickups",
      "Sprinter vans for family groups and move-in loads",
    ],
    sections: [
      {
        h2: "Move-in, parents' weekends and commencement",
        paragraphs: [
          "UNO's academic calendar brings predictable surges of family travel — move-in day loaded with bins and furniture, parents' weekend visits, and commencement ceremonies that fill the Lakefront with family from out of town. We track incoming flights and have a chauffeur ready with a vehicle sized to whatever the trip requires, from a sedan for a single parent's visit to a Sprinter van for a full move-in haul.",
          "Students flying home for breaks and back for the semester are an equally routine booking, often arranged by a parent from out of state and confirmed directly with the student by text.",
        ],
      },
      {
        h2: "Lakefront Arena concerts and events",
        paragraphs: [
          "The Lakefront Arena hosts touring concerts, multi-school commencement ceremonies and community events throughout the year, and parking in the surrounding lakefront area tightens considerably on a busy event night. A reserved pickup and drop-off removes that search, with your chauffeur staging nearby so you're not walking far after the event lets out.",
        ],
      },
      {
        h2: "Getting to and from MSY",
        paragraphs: [
          "The University of New Orleans sits about 12 miles from MSY, generally 20 to 25 minutes depending on traffic, making it one of the more straightforward campus transfers in our service area. The same flat rate, flight tracking and complimentary wait time apply here as on any other MSY pickup.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Do you handle UNO move-in day and family travel?", a: "Yes. Move-in day, parents' weekends and commencement are routine bookings, and we size the vehicle to the trip — a sedan for a quick visit or a Sprinter van for a full move-in haul." },
      { q: "How far is the University of New Orleans from MSY airport?", a: "About 12 miles, generally 20 to 25 minutes depending on traffic." },
      { q: "Do you provide transportation for Lakefront Arena concerts and events?", a: "Yes. We offer flat-rate pickup and drop-off for Lakefront Arena events, which avoids the tight parking in the surrounding area on a busy night." },
      { q: "Can a parent book a ride for a student remotely?", a: "Yes. Parents frequently book and pay for a student's pickup from out of state, and we confirm the details directly with the student by text." },
      { q: "What is the cancellation policy for campus bookings?", a: "Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter van bookings require 12 hours' notice." },
    ],
    related: [
      { label: "Tulane University Transportation", to: "/tulane-university-transportation" },
      { label: "Loyola University Transportation", to: "/loyola-university-transportation" },
      { label: "Xavier University Transportation", to: "/xavier-university-transportation" },
      { label: "New Orleans Graduation Limo Service", to: "/new-orleans-graduation-limo-service" },
      { label: "Concert & Event Transportation", to: "/concert-transportation" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans, LA", "Lakefront New Orleans"], serviceType: "Event transportation" },
  },
];
