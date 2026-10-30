// Batch 12 (2026-10-27, round 7 Louisiana pages) — 10 new landing pages:
// five Louisiana towns/areas with no page at all yet (Hahnville — the St.
// Charles Parish seat, sitting in a gap between the already-published Luling
// and Des Allemands pages; Venice — the end-of-the-road Plaquemines Parish
// oil/gas and sportfishing hub, well beyond the existing Belle Chasse page;
// Cut Off & Golden Meadow — the Lafourche Parish oilfield corridor south of
// the existing Raceland page; Port Allen — the West Baton Rouge Parish seat
// across the river from the existing Baton Rouge page; and Breaux Bridge —
// the Crawfish Capital, which previously only had an MSY-to-Breaux-Bridge
// airport-transfer service page in Batch 11, not a standalone city page), and
// five long-tail service pages filling gaps next to existing similar pages
// (bachelor party, next to the existing bachelorette page; pet-friendly;
// private city sightseeing tour charter; MSY private jet / FBO transfers;
// and golf course transportation for English Turn / TPC Louisiana corporate
// outings). Same entry shape and six-vehicle fleet as MARYLAND_BATCH9/10/11
// (the file name "marylandPages..." is historical — these are Louisiana
// pages). None of these 10 slugs exist anywhere else in the data files
// before this batch — verified against every existing marylandPages*.js,
// routesData.js, venuesData.js and guides.js slug (both quoted "slug": and
// unquoted slug: key styles).
const VEHICLES = [
  { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "solo executives and couples" },
  { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "VIP and executive travel" },
  { name: "Lincoln Navigator", cls: "Premium SUV", seats: 6, best: "families and small groups with luggage" },
  { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "airport runs with extra luggage" },
  { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "wedding parties, corporate teams and groups" },
  { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "proms, weddings and celebrations" },
];
const vehicles = () => VEHICLES.map((v) => ({ ...v }));

export const MARYLAND_BATCH12 = [
  // ───────────────────────── New Louisiana city pages ─────────────────────────
  {
    slug: "hahnville-la-limo-service",
    type: "city",
    name: "Hahnville",
    badge: "Louisiana Limo Service",
    h1: "Hahnville, LA Limo Service",
    metaTitle: "Hahnville LA Limo Service | Car Service Hahnville",
    metaDescription: "Chauffeured limo & car service in Hahnville, LA. St. Charles Parish courthouse, MSY airport transfers, corporate travel. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 26 mi · 30–40 minutes" },
      { label: "Coverage", value: "Parish Courthouse, River Road, Mississippi River" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Hahnville is the seat of St. Charles Parish, sitting on the Mississippi River between the Luling and Des Allemands communities we already run daily, and MSY Limo Service treats parish courthouse business, industrial corridor travel and MSY airport runs the same way we treat every River Parish trip: a licensed chauffeur, a flat rate confirmed before you book, and a car that actually shows up when the schedule says it will.",
      "The drive to MSY runs about 26 miles and 30 to 40 minutes, mostly along the River Road corridor and I-310, the same stretch our chauffeurs already cover getting to Luling and Destrehan, so there is nothing improvised about a Hahnville pickup.",
      "Parish government business at the St. Charles Parish Courthouse, industrial and petrochemical corporate accounts along the river, and local weddings and events round out most of our non-airport Hahnville bookings.",
    ],
    highlights: [
      "Flat-rate MSY transfers, about 26 miles via River Road and I-310",
      "St. Charles Parish Courthouse and parish government bookings",
      "Corporate accounts for River Road industrial and petrochemical employers",
      "Wedding and event transportation for Hahnville and nearby River Parishes",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "The drive between Hahnville and MSY",
        paragraphs: [
          "The run to Louis Armstrong International stays mostly on River Road and I-310, a corridor our chauffeurs already drive daily on the way to Luling and Destrehan, so timing a Hahnville pickup around real River Parish traffic patterns is routine rather than guesswork.",
          "Flight tracking means a delayed inbound flight does not leave a chauffeur waiting at the curb for nothing, and a delayed drive to the airport does not leave your flight waiting on a stranded car — we adjust the pickup to the real schedule.",
        ],
      },
      {
        h2: "Parish courthouse and industrial corridor travel",
        paragraphs: [
          "St. Charles Parish Courthouse business — attorneys, parish officials and visiting vendors — is a regular, predictable source of local Hahnville bookings, and we run it the same flat-rate way we run airport transfers.",
          "The petrochemical and industrial plants along this stretch of River Road also book recurring executive and contractor travel through a corporate account with consolidated billing, the same arrangement our Destrehan and Norco corporate clients already use.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A 26-mile run to MSY is well within same-day booking range most weeks, but parish court dates, industrial turnaround schedules and any Saturday in wedding season fill the calendar first, so reserving a few days to a week out secures your preferred vehicle rather than whatever is still available. Every Hahnville booking includes real-time flight tracking and 45 minutes of complimentary wait time on domestic arrivals at no extra charge.",
          "Sedan and SUV transfers can be cancelled free of charge up to 3 hours before pickup; Sprinter van, limousine and wedding bookings follow the 12-hour window. Call (877) 609-1919 any hour to book, adjust or confirm a Hahnville reservation.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Hahnville from MSY airport?", a: "About 26 miles, usually 30 to 40 minutes via River Road and I-310, the same corridor we drive daily to Luling and Destrehan." },
      { q: "Do you serve the St. Charles Parish Courthouse?", a: "Yes. Attorneys, parish officials and visiting vendors book flat-rate local transportation to and from the courthouse regularly." },
      { q: "Do you offer corporate accounts for River Road industrial employers near Hahnville?", a: "Yes. Petrochemical plants and industrial facilities along this stretch of River Road book recurring executive and contractor travel through a corporate account with consolidated billing." },
      { q: "Is the rate for a Hahnville airport transfer flat?", a: "Yes, confirmed before you book by vehicle class, with no surge pricing regardless of time or traffic." },
      { q: "Can you handle a wedding or local event in Hahnville?", a: "Yes. We run weddings and events throughout St. Charles Parish with a chauffeur who stays with the group for the full day if needed." },
    ],
    related: [
      { label: "Luling, LA Limo Service", to: "/luling-la-limo-service" },
      { label: "Destrehan, LA Limo Service", to: "/destrehan-la-limo-service" },
      { label: "Des Allemands, LA Limo Service", to: "/des-allemands-la-limo-service" },
      { label: "MSY to LaPlace", to: "/msy-to-laplace" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Hahnville, LA", "St. Charles Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "venice-la-limo-service",
    type: "city",
    name: "Venice",
    badge: "Louisiana Limo Service",
    h1: "Venice, LA Limo Service",
    metaTitle: "Venice LA Limo Service | Car Service Venice, Louisiana",
    metaDescription: "Chauffeured car service to Venice, LA — the end of the road. Offshore crew travel, sportfishing charters, MSY transfers. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 90 mi · 2 hours" },
      { label: "Coverage", value: "Venice Marina, Tidewater, Cypress Cove" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Venice sits at the literal end of Louisiana Highway 23, the southernmost point reachable by road in Plaquemines Parish, and it exists almost entirely around two things: offshore oil and gas crew travel, and some of the best sportfishing charters in the country. MSY Limo Service runs this corridor on committed reservations rather than hoping a rideshare driver accepts a 90-mile fare to the end of the road.",
      "The drive is about 90 miles and roughly 2 hours south from MSY along LA-23 through Belle Chasse and down the length of Plaquemines Parish, and because we book it as a reservation rather than an on-demand request, the return trip is confirmed at the same time as the outbound pickup.",
      "Crew-change travel for offshore oil and gas workers, visiting anglers heading to Venice Marina or Cypress Cove for a charter, and the occasional corporate visit to an oilfield-service operation round out our Venice bookings.",
    ],
    highlights: [
      "Committed reservations for the 90-mile MSY-to-Venice run",
      "Return trip confirmed at booking, not left to chance",
      "Offshore crew-change travel for oil and gas workers",
      "Sportfishing charter transfers to Venice Marina and Cypress Cove",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "Why a reservation beats a rideshare request at the end of the road",
        paragraphs: [
          "Ninety miles down a single highway to a town with no return fares waiting is well beyond what most rideshare drivers will accept, and finding a driver willing to make the trip back north is harder still. A reserved chauffeur solves both directions at the time you book.",
          "Crew-change and charter-fishing schedules both run early — predawn departures for a full day offshore or on the water — and flight tracking keeps an MSY pickup aligned to your actual arrival time rather than a printed one.",
        ],
      },
      {
        h2: "Offshore crew travel and sportfishing charter transfers",
        paragraphs: [
          "Oil and gas companies running crew changes out of Venice book recurring executive and crew travel through a corporate account with consolidated billing, the same arrangement our Morgan City and Houma offshore clients use.",
          "Anglers flying into MSY for a Venice Marina or Cypress Cove charter are a steady, separate stream of bookings — we coordinate pickup around an early charter departure and a late return with gear and a cooler of fish in tow.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "Because the 90-mile Venice run sits well beyond what rideshare reliably covers, we recommend booking at least a week ahead for a standard transfer and two to three weeks ahead for a crew-change rotation or a peak-season fishing charter weekend, so both legs are locked in before anyone boards a flight. Flight tracking and 45 minutes of complimentary domestic wait time are included on every transfer at no extra charge.",
          "Sedan and SUV bookings cancel free up to 3 hours before pickup; Sprinter van bookings follow the 12-hour window. Corporate accounts for offshore employers can set a standing reservation rhythm rather than booking each crew change individually — call (877) 609-1919 to set one up.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Venice from MSY airport?", a: "About 90 miles, usually around 2 hours south via LA-23 through Belle Chasse and the length of Plaquemines Parish." },
      { q: "Is the return trip guaranteed, or do I need to find a ride back?", a: "It's confirmed at booking. Both the outbound pickup and the return trip are reserved before you fly, so you're never trying to find a driver willing to make the long trip back from the end of the road." },
      { q: "Do you handle offshore crew-change travel?", a: "Yes. We run corporate accounts with consolidated billing for oil and gas companies coordinating crew changes out of Venice." },
      { q: "Can you take us to a sportfishing charter at Venice Marina or Cypress Cove?", a: "Yes, including early-morning pickups timed to a charter's departure and late return pickups after a full day on the water." },
      { q: "Is the rate flat regardless of the 90-mile distance?", a: "Yes. The flat rate is confirmed before you book by vehicle class, with no surge pricing or mileage surprises." },
    ],
    related: [
      { label: "Belle Chasse, LA Limo Service", to: "/belle-chasse-limo-service" },
      { label: "Houma Limo Service", to: "/houma-limo-service" },
      { label: "Louisiana Oil, Gas & Energy Corporate Transportation", to: "/louisiana-oil-gas-energy-corporate-transportation" },
      { label: "MSY to Harvey", to: "/msy-to-harvey" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Venice, LA", "Plaquemines Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "cut-off-golden-meadow-la-limo-service",
    type: "city",
    name: "Cut Off & Golden Meadow",
    badge: "Louisiana Limo Service",
    h1: "Cut Off & Golden Meadow, LA Limo Service",
    metaTitle: "Cut Off & Golden Meadow LA Limo Service | MSY Limo",
    metaDescription: "Chauffeured car service in Cut Off & Golden Meadow, LA. Lafourche oilfield corridor, MSY airport transfers, weddings. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 75 mi · 85–95 minutes" },
      { label: "Coverage", value: "Bayou Lafourche, oilfield service companies" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Cut Off and Golden Meadow sit side by side along Bayou Lafourche south of the Raceland and Larose area we already serve, forming the heart of Lafourche Parish's oilfield-service and commercial-fishing economy, and MSY Limo Service covers both communities as one corridor the same way we cover every stretch of bayou country: flat rates, licensed chauffeurs and reservations that actually hold.",
      "The drive from MSY is about 75 miles and 85 to 95 minutes south on LA-1 through Raceland and Larose, a route our chauffeurs already run regularly on the way to the Lafourche Parish oilfield corridor.",
      "Crew-change travel for offshore and oilfield-service companies headquartered along this stretch of Bayou Lafourche, along with weddings and local events, make up most of our non-airport Cut Off and Golden Meadow business.",
    ],
    highlights: [
      "Flat-rate MSY transfers, about 75 miles via LA-1 through Raceland and Larose",
      "Corporate accounts for Lafourche Parish oilfield-service companies",
      "Crew-change and vendor travel coordinated around compressed schedules",
      "Wedding and event transportation along Bayou Lafourche",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "The drive between Cut Off, Golden Meadow and MSY",
        paragraphs: [
          "LA-1 south through Raceland and Larose is the only practical route, and it's one our chauffeurs already drive regularly, so a 75-mile Cut Off or Golden Meadow pickup is planned around real traffic patterns on that corridor rather than guesswork.",
          "Flight tracking keeps the pickup aligned to your actual arrival rather than the printed schedule, which matters most on the compressed turnaround days common to offshore crew-change travel.",
        ],
      },
      {
        h2: "Oilfield-service and offshore crew travel",
        paragraphs: [
          "Oilfield-service and offshore-support companies based along this stretch of Bayou Lafourche book recurring executive and crew-change travel through a corporate account with consolidated billing, the same arrangement our Houma and Morgan City offshore clients use.",
          "Weddings and local events in Cut Off and Golden Meadow are typically booked as hourly, as-directed charter covering multiple stops across a wedding day or celebration.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "We recommend booking at least a week ahead for a standard airport transfer and two to three weeks ahead for a crew-change rotation or a Saturday wedding, since both the long drive and the busiest local dates fill up fastest. Flight tracking and 45 minutes of complimentary domestic wait time are included on every transfer at no extra charge.",
          "Sedan and SUV bookings cancel free up to 3 hours before pickup; Sprinter van, limousine and wedding bookings follow the 12-hour window. Call (877) 609-1919 to set up a standing reservation rhythm for a Lafourche Parish corporate account.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far are Cut Off and Golden Meadow from MSY airport?", a: "About 75 miles, usually 85 to 95 minutes via LA-1 through Raceland and Larose." },
      { q: "Do you serve oilfield-service companies in this area?", a: "Yes. We run corporate accounts with consolidated billing for offshore and oilfield-service employers based along Bayou Lafourche." },
      { q: "Is the return trip for crew-change travel confirmed at booking?", a: "Yes. Both the outbound pickup and the return trip are reserved before you fly, which matters on compressed crew-change schedules." },
      { q: "Can you handle a wedding along Bayou Lafourche?", a: "Yes, typically as hourly, as-directed charter covering the full day from getting-ready through reception." },
      { q: "Is the rate flat regardless of the 75-mile distance?", a: "Yes, confirmed before you book by vehicle class, with no surge pricing or mileage surprises." },
    ],
    related: [
      { label: "Raceland, LA Limo Service", to: "/raceland-la-limo-service" },
      { label: "Thibodaux, LA Limo Service", to: "/thibodaux-la-limo-service" },
      { label: "Houma Limo Service", to: "/houma-limo-service" },
      { label: "Louisiana Oil, Gas & Energy Corporate Transportation", to: "/louisiana-oil-gas-energy-corporate-transportation" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Cut Off, LA", "Golden Meadow, LA", "Lafourche Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "port-allen-la-limo-service",
    type: "city",
    name: "Port Allen",
    badge: "Capital Region Limo Service",
    h1: "Port Allen, LA Limo Service",
    metaTitle: "Port Allen LA Limo Service | Car Service Port Allen",
    metaDescription: "Chauffeured limo & car service in Port Allen, LA. West Baton Rouge Parish seat, river port, MSY transfers. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 80 mi · 85–95 minutes" },
      { label: "Coverage", value: "Downtown, Mississippi River port, West Baton Rouge Parish" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Port Allen is the seat of West Baton Rouge Parish, sitting directly across the Mississippi River from Baton Rouge and anchored by one of the busiest inland ports on the river, and MSY Limo Service runs it the same way we've long run Baton Rouge itself: committed reservations, flat rates and corporate accounts for the industrial and logistics companies based here.",
      "The drive from MSY is about 80 miles and 85 to 95 minutes up I-10, almost identical to the already-published Baton Rouge route since Port Allen sits just across the river from it, so there's nothing untested about the corridor.",
      "Port and logistics-company corporate travel, parish government business at the West Baton Rouge Parish Courthouse, and weddings or events along the river round out our Port Allen bookings.",
    ],
    highlights: [
      "Flat-rate MSY transfers, about 80 miles via I-10",
      "Corporate accounts for Port of Greater Baton Rouge logistics companies",
      "West Baton Rouge Parish Courthouse and government bookings",
      "Wedding and event transportation along the river",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "The drive between Port Allen and MSY",
        paragraphs: [
          "The run up I-10 to Port Allen is nearly identical to our long-established Baton Rouge route, just a few minutes further to cross the river, so our chauffeurs already know how this corridor behaves at commuter rush hour versus a quiet midday run.",
          "Flight tracking means a delayed inbound flight doesn't leave a chauffeur waiting at the curb, and a delayed drive to the airport doesn't leave your flight waiting on a stranded car.",
        ],
      },
      {
        h2: "Port, logistics and parish government travel",
        paragraphs: [
          "Companies operating through the Port of Greater Baton Rouge on the Port Allen side of the river book recurring executive and vendor travel through a corporate account with consolidated billing, the same arrangement our Baton Rouge corporate clients already use.",
          "West Baton Rouge Parish Courthouse business and local weddings along the river are a smaller but regular part of our Port Allen bookings, usually arranged as flat-rate or hourly charter depending on the itinerary.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "An 80-mile run to MSY is usually bookable within a few days' notice, but peak wedding Saturdays and parish court dates fill the calendar first, so reserving a week or two out secures your preferred vehicle. Every Port Allen booking includes real-time flight tracking and 45 minutes of complimentary wait time on domestic arrivals at no extra charge.",
          "Sedan and SUV transfers cancel free of charge up to 3 hours before pickup; Sprinter van, limousine and wedding bookings follow the 12-hour window. Call (877) 609-1919 to set up a standing corporate account for recurring Port Allen travel.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Port Allen from MSY airport?", a: "About 80 miles, usually 85 to 95 minutes via I-10, nearly identical to our Baton Rouge route since Port Allen sits just across the river." },
      { q: "Do you serve Port of Greater Baton Rouge logistics companies?", a: "Yes. We run corporate accounts with consolidated billing for port and logistics companies based in Port Allen and West Baton Rouge Parish." },
      { q: "Do you handle parish government and courthouse travel?", a: "Yes. We run flat-rate local transportation for West Baton Rouge Parish Courthouse business." },
      { q: "Is the rate for a Port Allen airport transfer flat?", a: "Yes, confirmed before you book by vehicle class, with no surge pricing regardless of time or traffic." },
      { q: "Can you handle a wedding or event along the river in Port Allen?", a: "Yes, typically as hourly, as-directed charter covering the full day." },
    ],
    related: [
      { label: "Baton Rouge Limo Service", to: "/baton-rouge-limo-service" },
      { label: "Baton Rouge Corporate Car Service", to: "/baton-rouge-corporate-car-service" },
      { label: "Baton Rouge Wedding Limo", to: "/baton-rouge-limo-service-for-weddings" },
      { label: "MSY to Baton Rouge", to: "/msy-to-baton-rouge" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Port Allen, LA", "West Baton Rouge Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "breaux-bridge-la-limo-service",
    type: "city",
    name: "Breaux Bridge",
    badge: "Cajun Country Limo Service",
    h1: "Breaux Bridge, LA Limo Service",
    metaTitle: "Breaux Bridge LA Limo Service | Car Service Cajun Country",
    metaDescription: "Chauffeured limo & car service in Breaux Bridge, LA, the Crawfish Capital. Weddings, Lake Martin tours, MSY transfers. (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 130 mi · 2–2.25 hours" },
      { label: "Coverage", value: "Downtown, Lake Martin, Cajun Country" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Breaux Bridge calls itself the Crawfish Capital of the World for good reason, and between its zydeco dance halls, the Lake Martin swamp just outside town and a wedding scene that draws couples from well beyond Cajun Country, it generates plenty of local bookings beyond the MSY-to-Breaux-Bridge airport transfers we've long offered. MSY Limo Service runs both the same way: a licensed chauffeur, a flat rate, and a car that shows up.",
      "For travelers flying in, the drive is about 130 miles and 2 to 2.25 hours west on I-10 across the Atchafalaya Basin Bridge, the same corridor we already run to Lafayette and New Iberia. For couples and groups already in town, we run local wedding transportation, Lake Martin swamp tour transfers and zydeco-hall nights without anyone needing to touch a steering wheel.",
      "Breaux Bridge's wedding venues book up well in advance, and we treat a Saturday in spring or fall the same way we treat Lafayette's — plan ahead or risk finding the fleet already committed.",
    ],
    highlights: [
      "MSY airport transfers, about 130 miles via I-10 and the Atchafalaya Basin Bridge",
      "Local Breaux Bridge wedding and zydeco-hall transportation",
      "Lake Martin swamp tour transfers",
      "Crawfish Festival season bookings",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "Local Breaux Bridge transportation, not just airport runs",
        paragraphs: [
          "A Breaux Bridge wedding day often moves between a getting-ready location, a ceremony venue, a reception hall and a zydeco send-off, and we run that as one hourly, as-directed charter rather than a single point-to-point fare.",
          "Lake Martin swamp tours are a popular pairing with a Breaux Bridge visit, and we coordinate the drop-off and pickup around the tour operator's schedule rather than leaving you to arrange your own ride to and from the water.",
        ],
      },
      {
        h2: "Crawfish Festival and peak-season demand",
        paragraphs: [
          "The Breaux Bridge Crawfish Festival each spring draws crowds well beyond what local parking and rideshare can comfortably absorb, and we recommend booking group transportation for that weekend as early as possible.",
          "Wedding season Saturdays fill the same way — book a month or more ahead for peak spring and fall dates to secure the vehicle class you want.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "For an MSY airport transfer, a few days' notice is usually enough outside of festival weekends; for a local wedding or a Crawfish Festival weekend, book several weeks ahead. Every airport transfer includes real-time flight tracking and 45 minutes of complimentary wait time on domestic arrivals.",
          "Sedan and SUV bookings cancel free up to 3 hours before pickup; Sprinter van, limousine and wedding bookings follow the 12-hour window. Call (877) 609-1919 to book a Breaux Bridge airport transfer or a local Cajun Country wedding day.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Breaux Bridge from MSY airport?", a: "About 130 miles, usually 2 to 2.25 hours via I-10 and the Atchafalaya Basin Bridge." },
      { q: "Do you handle local Breaux Bridge weddings, not just airport transfers?", a: "Yes. We run full wedding-day charter covering getting-ready, ceremony, reception and a zydeco-hall send-off." },
      { q: "Can you arrange transportation to a Lake Martin swamp tour?", a: "Yes. We coordinate drop-off and pickup around the tour operator's schedule." },
      { q: "Do you cover the Breaux Bridge Crawfish Festival?", a: "Yes, and we recommend booking well ahead since it's our busiest weekend in this area." },
      { q: "Is the rate flat for the 130-mile airport run?", a: "Yes, confirmed before you book by vehicle class, with no surge pricing or mileage surprises." },
    ],
    related: [
      { label: "MSY to Breaux Bridge", to: "/msy-to-breaux-bridge" },
      { label: "Lafayette, LA Limo Service", to: "/lafayette-la-limo-service" },
      { label: "New Iberia, LA Limo Service", to: "/new-iberia-la-limo-service" },
      { label: "Lafayette Wedding Limo", to: "/lafayette-la-limo-service-for-weddings" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Breaux Bridge, LA", "St. Martin Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  // ───────────────────────── New long-tail service pages ─────────────────────────
  {
    slug: "new-orleans-bachelor-party-transportation",
    type: "service",
    name: "Bachelor Party Transportation",
    badge: "Celebration Transportation",
    h1: "New Orleans Bachelor Party Transportation",
    metaTitle: "New Orleans Bachelor Party Transportation | MSY Limo",
    metaDescription: "Private bachelor party transportation in New Orleans. Bourbon Street, bars, casinos — one vehicle, one chauffeur. Call (877) 609-1919.",
    stats: [
      { label: "Fleet", value: "Sprinter vans · Stretch limos · SUVs" },
      { label: "Booking", value: "Hourly, as-directed charter" },
      { label: "Coverage", value: "Bourbon Street, CBD, casinos, late night" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "A New Orleans bachelor party weekend usually means moving a group of eight to fourteen guys between a hotel, dinner, Bourbon Street, a casino and whatever bar someone insists is 'just one more stop' — all after most of the group has had a few drinks. MSY Limo Service runs the whole night as one reserved vehicle with one professional chauffeur, so nobody is driving, nobody is splitting up into separate rideshares, and nobody gets left behind at 1 a.m.",
      "We book bachelor party nights as hourly, as-directed charter: you tell us the stops in roughly the order you want them, and the chauffeur adjusts in real time when plans change mid-evening, which they usually do.",
      "A Mercedes Sprinter van or executive shuttle keeps a full group together for the whole night; a stretch limousine or Lincoln Navigator works well for a smaller crew that wants a louder entrance.",
    ],
    highlights: [
      "One reserved vehicle keeps the whole group together all night",
      "Hourly, as-directed charter that adjusts to a changing itinerary",
      "Sprinter vans for larger groups, limos and SUVs for smaller ones",
      "Bourbon Street, CBD bar crawls and casino runs",
      "A sober, professional chauffeur for the entire night",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "Why one vehicle beats splitting into rideshares",
        paragraphs: [
          "Once a bachelor party group splits across three or four separate rideshare cars, somebody inevitably ends up at the wrong address, waiting outside a closed bar, or stuck without a working phone. A single reserved vehicle keeps the group physically together between every stop, which turns out to matter most exactly when the night gets loose.",
          "Surge pricing on a Friday or Saturday night in the French Quarter can also make several separate rideshare fares add up to more than one flat-rate hourly charter for the same group.",
        ],
      },
      {
        h2: "Planning a typical bachelor party route",
        paragraphs: [
          "A common pattern is a dinner reservation, a few hours on Bourbon Street or Frenchmen Street, a casino stop at Caesars New Orleans, and a late-night return to the hotel — we build the hourly block around that shape and let the chauffeur adjust stop order and timing as the group decides in the moment.",
          "We don't require a fixed, locked-in itinerary at booking; a rough plan and an hourly block is enough, and the chauffeur handles the rest.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "Weekend nights, especially during Mardi Gras, Jazz Fest or a major sporting event, book up fastest — reserve two to three weeks ahead for those dates, and a week ahead otherwise. The hourly rate, confirmed before you book, includes the chauffeur and standard wait time between stops.",
          "Sprinter van and limousine bookings follow the 12-hour cancellation window; a sedan or SUV substitute follows the 3-hour window. Call (877) 609-1919 to put together a bachelor party itinerary and lock in your vehicle.",
        ],
      },
    ],
    vehicles: [
      { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "larger bachelor party groups" },
      { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "a classic bachelor party entrance" },
      { name: "Lincoln Navigator", cls: "Premium SUV", seats: 6, best: "smaller groups and narrow-street venues" },
      { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "groups with golf clubs or gear" },
      { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "a quieter arrival before the night gets loud" },
      { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "a smaller pair or trio" },
    ],
    faqs: [
      { q: "How many guys fit in a Sprinter van for a bachelor party?", a: "Up to 14, which covers most bachelor party groups in a single vehicle." },
      { q: "Can the itinerary change during the night?", a: "Yes. Hourly, as-directed charter means the chauffeur adjusts stop order and timing as the group decides in the moment." },
      { q: "Is there a minimum hourly booking?", a: "Typically a three-hour minimum for hourly, as-directed charter." },
      { q: "Can you pick up from an Airbnb or hotel outside the French Quarter?", a: "Yes, we serve pickups and drop-offs throughout the New Orleans metro area, not just downtown hotels." },
      { q: "How far ahead should we book for a Mardi Gras or Jazz Fest weekend?", a: "Two to three weeks ahead at minimum — those weekends are our busiest for group charter." },
    ],
    related: [
      { label: "New Orleans Bachelorette Party Transportation", to: "/new-orleans-bachelorette-party-transportation" },
      { label: "New Orleans Party Bus Transportation", to: "/new-orleans-party-bus-transportation" },
      { label: "Bourbon Street Transportation", to: "/bourbon-street-transportation" },
      { label: "Caesars New Orleans Casino Transportation", to: "/caesars-new-orleans-casino-transportation" },
      { label: "New Orleans Stretch Limo Rental", to: "/new-orleans-stretch-limo-rental" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans", "French Quarter", "Louisiana"], serviceType: "Bachelor party hourly charter transportation" },
  },
  {
    slug: "new-orleans-pet-friendly-limo-service",
    type: "service",
    name: "Pet-Friendly Limo Service",
    badge: "Pet-Friendly Transportation",
    h1: "New Orleans Pet-Friendly Limo Service",
    metaTitle: "New Orleans Pet-Friendly Limo & Car Service | MSY Limo",
    metaDescription: "Pet-friendly chauffeured car service in New Orleans. Dogs, cats & carriers welcome with advance notice. MSY transfers. (877) 609-1919.",
    stats: [
      { label: "Pets", value: "Dogs, cats & carriers welcome with notice" },
      { label: "Fleet", value: "SUVs, Sprinters and sedans" },
      { label: "Coverage", value: "MSY transfers, local trips, relocations" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Traveling with a pet shouldn't mean gambling on whether a rideshare driver accepts the trip once they see a carrier or a dog in the back seat. MSY Limo Service welcomes pets on a trip booked in advance so we can assign the right vehicle, protect the interior appropriately, and make sure your pet travels as comfortably as you do.",
      "We ask that pet trips be flagged at booking rather than as a surprise at pickup, which lets us confirm crate or carrier requirements, bring protective seat covers if needed, and match the trip to an SUV or Sprinter van with enough room for a crate.",
      "Most pet-friendly bookings are MSY airport transfers for travelers flying with a pet, local vet or groomer runs, and household relocations where a pet rides along with the family rather than separately.",
    ],
    highlights: [
      "Dogs, cats and carriers welcome with advance notice",
      "Protective seat covers available on request",
      "SUVs and Sprinter vans sized for crates and larger dogs",
      "MSY airport transfers for travelers flying with a pet",
      "Local vet, groomer and relocation trips",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "What to tell us when you book",
        paragraphs: [
          "Let us know the type and size of pet, whether it will be crated or riding loose with a harness, and whether you need a protective seat cover — this lets dispatch assign a vehicle with the right amount of cargo and passenger space rather than discovering a mismatch at pickup.",
          "A small dog in a carrier fits easily in a sedan; a large dog, multiple pets, or a crate generally needs an SUV or Sprinter van, especially alongside luggage for an airport run.",
        ],
      },
      {
        h2: "MSY airport transfers with a pet",
        paragraphs: [
          "Flying with a pet already involves enough logistics at the terminal — we handle the ground transportation side so you're not also trying to flag down a rideshare driver willing to take a carrier. Flight tracking applies the same way it does on every airport transfer, so a delayed flight doesn't strand you and your pet at baggage claim.",
          "Reserve the return trip at the same time as the outbound pickup if you'd like both legs locked in before you travel.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "Same-day booking is usually possible for a pet trip, but flagging it a day or two ahead gives dispatch the best chance to match the ideal vehicle. Every trip includes the same flat rate and wait-time policy as a standard booking — pet-friendly service carries no separate surcharge for a single well-behaved pet.",
          "Sedan and SUV bookings cancel free of charge up to 3 hours before pickup; Sprinter van bookings follow the 12-hour window. Call (877) 609-1919 to book a pet-friendly trip and flag your pet's size and carrier needs.",
        ],
      },
    ],
    vehicles: [
      { name: "Lincoln Navigator", cls: "Premium SUV", seats: 6, best: "larger dogs and crates alongside luggage" },
      { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "multiple pets or a large crate" },
      { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "pet relocations with extra belongings" },
      { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "a small pet in a carrier" },
      { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "a single small, well-behaved pet" },
      { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "not recommended for pet trips" },
    ],
    faqs: [
      { q: "Do I need to tell you in advance that I'm traveling with a pet?", a: "Yes. Flagging it at booking lets us assign the right vehicle and bring a protective seat cover if needed." },
      { q: "Is there an extra fee for traveling with a pet?", a: "No separate surcharge for a single well-behaved pet in a carrier or on a harness; multiple pets or a large crate may affect which vehicle class is assigned." },
      { q: "What size pets can you accommodate?", a: "Small carriers fit in a sedan; larger dogs, crates or multiple pets generally need an SUV or Sprinter van." },
      { q: "Can my pet ride loose, or does it need to be crated?", a: "Either works if arranged in advance — a harnessed pet riding loose or a crated pet, whichever you prefer and whatever local airline or venue rules require." },
      { q: "Do you serve pet airport transfers at MSY?", a: "Yes, including flight-tracked pickups for travelers flying in or out with a pet." },
    ],
    related: [
      { label: "MSY Airport Arrival Pickup", to: "/msy-airport-arrival-pickup" },
      { label: "MSY Airport Departure Drop-Off", to: "/msy-airport-departure-drop-off" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "New Orleans Black SUV", to: "/new-orleans-black-suv-service" },
      { label: "Point-to-Point Car Service", to: "/point-to-point-car-service-new-orleans" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans", "Greater New Orleans Area", "Louisiana"], serviceType: "Pet-friendly chauffeured car service" },
  },
  {
    slug: "new-orleans-sightseeing-tour-car-service",
    type: "service",
    name: "Private Sightseeing Tour Car Service",
    badge: "Sightseeing Charter",
    h1: "New Orleans Private Sightseeing Tour Car Service",
    metaTitle: "New Orleans Private Sightseeing Tour Car Service",
    metaDescription: "Private chauffeured sightseeing tours of New Orleans. French Quarter, Garden District, City Park & plantations. (877) 609-1919.",
    stats: [
      { label: "Booking", value: "Hourly, as-directed charter" },
      { label: "Coverage", value: "French Quarter, Garden District, City Park, River Road" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "A hop-on bus tour moves on someone else's schedule and someone else's route. A private sightseeing car puts a chauffeur who knows the city at your disposal for a block of hours, moving at your pace between the French Quarter, the Garden District's historic mansions, City Park and, for a longer day, the River Road plantations west of the city.",
      "We book sightseeing charter the same way we book any hourly, as-directed trip: you tell us roughly what you want to see and how long you have, and the chauffeur builds the route and adjusts it in real time as you decide to linger somewhere longer or skip a stop that doesn't interest you.",
      "This is a common booking for first-time visitors with a single free day, out-of-town family in town for a wedding weekend, and conference attendees who want to see the city without renting a car or coordinating a group tour bus.",
    ],
    highlights: [
      "Hourly, as-directed charter at your own pace",
      "French Quarter, Garden District and City Park in one trip",
      "River Road plantation day tours for longer bookings",
      "No fixed route or schedule like a bus tour",
      "Sedans, SUVs and Sprinter vans for any group size",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "Building a sightseeing route that fits your day",
        paragraphs: [
          "A common half-day route covers the French Quarter's historic core, a drive through the Garden District to see the mansions along St. Charles Avenue, and a stop at City Park; a full day can extend out to a River Road plantation like Oak Alley or Whitney Plantation.",
          "Because the booking is hourly rather than a fixed per-stop tour package, there's no penalty for spending an extra thirty minutes somewhere that turned out to be more interesting than expected, or skipping a planned stop entirely.",
        ],
      },
      {
        h2: "Who books a private sightseeing charter",
        paragraphs: [
          "First-time visitors with one free day before or after a conference, out-of-town wedding guests filling the day before the ceremony, and small family groups who'd rather not navigate unfamiliar streets or find parking downtown are the most common bookings.",
          "Groups that would otherwise split across two or three rideshare cars for a day of sightseeing often find a single Sprinter van, with everyone together and a chauffeur narrating along the way, works out simpler and often less expensive overall.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A sightseeing charter can usually be booked with a day or two of notice outside of peak festival weekends; for Mardi Gras, Jazz Fest or French Quarter Festival, book at least two weeks ahead since the fleet fills up with wedding and event charters during those dates. The hourly rate, confirmed before you book, includes the chauffeur.",
          "Sedan and SUV bookings cancel free of charge up to 3 hours before pickup; Sprinter van bookings follow the 12-hour window. Call (877) 609-1919 to put together a sightseeing itinerary for your group.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Is this a guided tour with narration, or just transportation?", a: "Our chauffeurs are knowledgeable about the city and happy to point things out along the way, but this is private charter transportation, not a licensed tour-guide narration service." },
      { q: "Can we include a River Road plantation in the same day?", a: "Yes, for a full-day booking. A plantation visit adds significant drive time, so we plan the itinerary around it rather than squeezing it into a half-day route." },
      { q: "What's the minimum booking length?", a: "Typically a three-hour minimum for hourly, as-directed sightseeing charter." },
      { q: "Can the route change while we're out?", a: "Yes. The chauffeur adjusts stop order and timing as you decide in the moment — nothing is locked to a fixed schedule." },
      { q: "What vehicle is best for a family of four doing a half-day tour?", a: "A Mercedes-Benz E-Class sedan or Lincoln Navigator both work well; a larger family or multi-generational group often prefers the extra room of a Suburban or Sprinter van." },
    ],
    related: [
      { label: "River Road Plantation Tour Transportation", to: "/river-road-plantation-tour-transportation" },
      { label: "French Quarter Limo Service", to: "/french-quarter-limo-service" },
      { label: "Garden District Limo Service", to: "/garden-district-limo-service" },
      { label: "City Park Transportation", to: "/city-park-nola-transportation" },
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans", "Greater New Orleans Area", "Louisiana"], serviceType: "Private sightseeing hourly charter transportation" },
  },
  {
    slug: "msy-airport-private-jet-fbo-transportation",
    type: "service",
    name: "MSY Private Jet & FBO Transportation",
    badge: "Private Aviation Transfer",
    h1: "MSY Airport Private Jet & FBO Transportation",
    metaTitle: "MSY Private Jet & FBO Car Service | MSY Limo",
    metaDescription: "Private jet & FBO ground transportation at MSY airport. Discreet chauffeured transfers for owners, crew & guests. (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "MSY FBO terminals, private aviation ramp" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Flying private through one of MSY's fixed-base operators removes most of the friction of commercial travel, and the ground transportation on either end should match that standard. MSY Limo Service coordinates directly with FBO ramp staff so a chauffeur is positioned and ready when a private flight lands or before it departs, without the owner or passengers needing to manage that coordination themselves.",
      "We work from a tail number and estimated ramp time rather than a commercial flight number, adjusting the pickup in real time if a departure slides earlier or later, which happens often with private aviation.",
      "Discretion matters as much as timing for this kind of travel — our chauffeurs are trained to handle VIP and executive transfers quietly and professionally, without drawing attention at the FBO or the destination.",
    ],
    highlights: [
      "Direct coordination with MSY FBO ramp staff",
      "Tracking by tail number and ramp time, not a commercial flight number",
      "Discreet, professional chauffeurs trained for VIP transfers",
      "Flat-rate or hourly pricing depending on the itinerary",
      "Sedans, SUVs and Sprinter vans for owners, crew and guests",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "How FBO coordination works",
        paragraphs: [
          "Once we have the tail number and expected ramp time, our dispatch team coordinates directly with the FBO so the chauffeur is cleared to meet the aircraft or wait in the appropriate area, rather than being turned away at a gate without proper arrangement.",
          "Private aviation schedules shift more than commercial ones — a departure slot change or a late-arriving passenger is normal, and we build that flexibility into the booking rather than treating it as an exception.",
        ],
      },
      {
        h2: "Crew transportation and standing arrangements",
        paragraphs: [
          "Flight crews based at or regularly transiting through MSY can set up a standing arrangement for recurring hotel and layover transportation, billed through a single corporate account rather than booked trip by trip.",
          "Charter brokers and management companies coordinating ground transportation on behalf of clients are welcome to set up a direct account relationship with our dispatch team for faster booking on short notice.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "Private aviation transfers are often booked on short notice, and we accommodate that whenever possible — call dispatch directly rather than booking online for the fastest confirmation on a same-day request. The flat or hourly rate, confirmed before you book, includes a professional, discreet chauffeur.",
          "Sedan and SUV bookings cancel free of charge up to 3 hours before pickup; Sprinter van bookings follow the 12-hour window. Call (877) 609-1919 for FBO coordination and tail-number tracking on your next private flight through MSY.",
        ],
      },
    ],
    vehicles: [
      { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "a discreet VIP arrival" },
      { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "a single owner or executive" },
      { name: "Lincoln Navigator", cls: "Premium SUV", seats: 6, best: "owners traveling with a small party" },
      { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "guests with luggage from a private flight" },
      { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "flight crew or a larger traveling party" },
      { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "not typically used for FBO transfers" },
    ],
    faqs: [
      { q: "Do you coordinate directly with MSY FBOs?", a: "Yes. We work directly with ramp staff using your tail number and expected ramp time to position a chauffeur appropriately." },
      { q: "What if our departure or arrival time changes?", a: "We expect it to, with private aviation, and adjust the chauffeur's timing in real time rather than treating a shift as a missed pickup." },
      { q: "Can charter brokers or management companies set up an account?", a: "Yes. We work directly with brokers and management companies on behalf of their clients, billed through a corporate account." },
      { q: "Is this service discreet?", a: "Yes. Our chauffeurs are trained for VIP and executive transfers and are instructed to maintain discretion at the FBO and at the destination." },
      { q: "Can you arrange standing transportation for flight crew layovers?", a: "Yes, through a corporate account billed centrally rather than booked trip by trip." },
    ],
    related: [
      { label: "MSY Airport Black Car Service", to: "/msy-airport-black-car-service" },
      { label: "MSY Airport Corporate Car Service", to: "/msy-airport-corporate-car-service" },
      { label: "New Orleans Black SUV", to: "/new-orleans-black-suv-service" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["MSY Airport", "New Orleans", "Louisiana"], serviceType: "Private jet and FBO ground transportation" },
  },
  {
    slug: "new-orleans-golf-course-transportation",
    type: "service",
    name: "Golf Course Transportation",
    badge: "Golf Transportation",
    h1: "New Orleans Golf Course Transportation",
    metaTitle: "New Orleans Golf Course Car Service | MSY Limo",
    metaDescription: "Chauffeured golf course transportation in New Orleans. English Turn, TPC Louisiana & corporate outings. Clubs transported free. (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "English Turn, TPC Louisiana, Audubon Golf Course" },
      { label: "Booking", value: "Flat rate or hourly" },
      { label: "Fleet", value: "SUVs and Sprinter vans for clubs" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "A round of golf at English Turn or TPC Louisiana is a common fixture of a New Orleans corporate trip or a golf-focused group weekend, and getting a foursome plus clubs to the course without renting cars or splitting into separate rideshares is where we come in. MSY Limo Service transports clubs free alongside passengers in an SUV or Sprinter van sized for the group.",
      "Corporate golf outings tied to a conference or client event are a regular booking for us — we coordinate pickup from a downtown hotel or the MSY terminal, a round at the course, and a return to a dinner reservation or the airport afterward, all as one reserved itinerary.",
      "We also run same-day, flat-rate round trips for a single group heading to a tee time and back, without the hourly commitment of a full charter.",
    ],
    highlights: [
      "Golf clubs transported free alongside passengers",
      "English Turn, TPC Louisiana and Audubon Golf Course",
      "Corporate golf outings coordinated with hotel and dinner pickups",
      "SUVs and Sprinter vans sized for foursomes and clubs",
      "Flat-rate round trips or hourly charter for a full outing day",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "Fitting a foursome and clubs in one vehicle",
        paragraphs: [
          "A Lincoln Navigator or Chevrolet Suburban comfortably fits four golfers and their clubs in one trip; larger groups or a full corporate outing typically move into a Mercedes Sprinter van so nobody needs a second car.",
          "Let dispatch know the group size and whether everyone is bringing full bags so the right vehicle is assigned from the start rather than discovered to be too small at pickup.",
        ],
      },
      {
        h2: "Corporate golf outings and conference add-ons",
        paragraphs: [
          "Companies building a golf outing into a conference or client event often book transportation for the full day — hotel to course, a return for lunch or a dinner reservation, and a final drop at the airport or hotel — as one hourly charter rather than piecing together separate trips.",
          "We can also coordinate multiple vehicles for a larger outing with several foursomes arriving in staggered groups.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A single round-trip golf booking can usually be arranged with a day or two of notice; a full corporate outing with multiple vehicles is best booked one to two weeks ahead so the fleet and chauffeurs are confirmed together. The flat or hourly rate, confirmed before you book, includes free club transport.",
          "Sedan and SUV bookings cancel free of charge up to 3 hours before pickup; Sprinter van bookings follow the 12-hour window. Call (877) 609-1919 to book a tee-time transfer or a full corporate golf outing.",
        ],
      },
    ],
    vehicles: [
      { name: "Lincoln Navigator", cls: "Premium SUV", seats: 6, best: "a foursome with clubs" },
      { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "a foursome with extra gear" },
      { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "a full corporate golf outing" },
      { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "a pair of golfers without bags" },
      { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "executives heading to a client round" },
      { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "not typically used for golf transfers" },
    ],
    faqs: [
      { q: "Is there an extra charge for transporting golf clubs?", a: "No. Clubs are transported free alongside passengers; let dispatch know the group size so the right vehicle is assigned." },
      { q: "Can you coordinate a full-day corporate golf outing?", a: "Yes, including hotel pickup, the round, a return for lunch or dinner, and a final airport or hotel drop, all as one itinerary." },
      { q: "What courses do you serve?", a: "English Turn, TPC Louisiana, Audubon Golf Course and other courses throughout the New Orleans area." },
      { q: "Can you handle multiple foursomes arriving in staggered groups?", a: "Yes, we coordinate multiple vehicles for larger outings." },
      { q: "Is a round-trip golf booking flat-rate or hourly?", a: "Either, depending on your itinerary — a simple round trip is usually flat-rate, while a full outing day is typically hourly charter." },
    ],
    related: [
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "MSY Airport Corporate Car Service", to: "/msy-airport-corporate-car-service" },
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "New Orleans Meetings & Events Industry Transportation", to: "/new-orleans-meetings-events-industry-transportation" },
      { label: "Audubon Zoo & Aquarium Transportation", to: "/audubon-zoo-aquarium-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans", "Greater New Orleans Area", "Louisiana"], serviceType: "Golf course chauffeured transportation" },
  },
];
