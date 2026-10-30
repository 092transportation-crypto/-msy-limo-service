// Batch 11 (2026-10-24, round 6 Louisiana pages) — 30 new landing pages filling
// gaps left by batches 3-10: six Louisiana towns with no page at all yet
// (Thibodaux, Morgan City, New Iberia, Opelousas, Bogalusa, Raceland, Des
// Allemands, Lutcher/Gramercy, Jefferson, Geismar, Lake Charles — 12 city
// pages), six MSY-to-neighborhood routes for New Orleans areas that only had
// a city/service page and no dedicated airport-transfer page (Garden
// District, Warehouse District, Uptown, Marigny/Bywater, Thibodaux, Breaux
// Bridge), and twelve new occasion/industry/attraction verticals (birthday
// parties, funerals, Bayou Classic, NOWFE, Fair Grounds Race Course,
// Treasure Chest Casino, Steamboat Natchez, corporate shuttles, "near me"
// local-intent, point-to-point, black SUV, stretch limo rental). Same entry
// shape and six-vehicle fleet as MARYLAND_BATCH9/10 (the file name
// "marylandPages..." is historical — these are Louisiana pages). Distances
// for the new city pages are set to agree with the closest already-published
// town in marylandPagesBatch3/5/6/7/9 (e.g. Houma at 55 mi / Gonzales at 58
// mi) rather than invented fresh. None of these 30 slugs exist anywhere else
// in the data files before this batch — verified against every existing
// marylandPages*.js, routesData.js, venuesData.js and guides.js slug.
const VEHICLES = [
  { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "solo executives and couples" },
  { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "VIP and executive travel" },
  { name: "Lincoln Navigator", cls: "Premium SUV", seats: 6, best: "families and small groups with luggage" },
  { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "airport runs with extra luggage" },
  { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "wedding parties, corporate teams and groups" },
  { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "proms, weddings and celebrations" },
];
const vehicles = () => VEHICLES.map((v) => ({ ...v }));

export const MARYLAND_BATCH11 = [
  // ───────────────────────── New Louisiana city pages ─────────────────────────
  {
    slug: "thibodaux-la-limo-service",
    type: "city",
    name: "Thibodaux",
    badge: "Louisiana Limo Service",
    h1: "Thibodaux, LA Limo Service",
    metaTitle: "Thibodaux LA Limo Service | Car Service Thibodaux",
    metaDescription: "Chauffeured limo & car service in Thibodaux, LA. Nicholls State, weddings, MSY airport transfers & corporate travel. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 52 mi · 60–70 minutes" },
      { label: "Coverage", value: "Downtown, Nicholls State, Bayou Lafourche" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Thibodaux is the seat of Lafourche Parish and home to Nicholls State University, and MSY Limo Service runs it the same way we run every parish we cover: a licensed chauffeur, a flat rate confirmed before you book, and a vehicle that actually shows up on time for a wedding at a Bayou Lafourche venue, a Nicholls parents'-weekend visit, or a flight out of New Orleans.",
      "Most Thibodaux trips to MSY run about 52 miles and 60 to 70 minutes down US-90, the same corridor our chauffeurs drive daily on the way to Raceland and Houma, so there's nothing improvised about the route — it's one we already know well.",
      "Local bookings run just as often as airport transfers: Nicholls State commencement weekends, Bayou Lafourche wedding venues, and corporate visits to the sugar mills and oilfield service companies headquartered in and around town.",
    ],
    highlights: [
      "Flat-rate MSY transfers, about 52 miles via US-90",
      "Nicholls State move-in, parents' weekend and graduation pickups",
      "Wedding transportation for Bayou Lafourche venues",
      "Corporate accounts for Thibodaux-area employers",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "The drive between Thibodaux and MSY",
        paragraphs: [
          "The run to Louis Armstrong International is almost entirely US-90, the same stretch our chauffeurs drive to Raceland and Houma every week, so there's no guesswork about timing — we know how that corridor behaves at 6 a.m. versus 5 p.m.",
          "Flight tracking means a delayed inbound flight doesn't leave you waiting on a stranded chauffeur, and a delayed drive home doesn't leave your flight waiting on a stranded car; we adjust the pickup to the real schedule, not the printed one.",
        ],
      },
      {
        h2: "Nicholls State and local Thibodaux bookings",
        paragraphs: [
          "Move-in weekends, parents' weekend and commencement all bring a predictable spike in demand for reliable local transportation, and we run those as flat-rate bookings rather than per-mile fares that climb when the campus area is busiest.",
          "Weddings along Bayou Lafourche, and corporate travel for the sugar and oilfield-service companies based here, round out most of our non-airport Thibodaux business — book early for a Saturday in spring or fall.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A 52-mile run to MSY is well within same-day booking range most weeks, but Nicholls State commencement, parents' weekend and any Saturday in wedding season fill the Thibodaux calendar first, so reserving two to three weeks out secures your preferred vehicle rather than whatever is still available. Every Thibodaux booking includes real-time flight tracking and 45 minutes of complimentary wait time on domestic arrivals at no extra charge.",
          "Sedan and SUV transfers can be cancelled free of charge up to 3 hours before pickup; Sprinter van, limousine and wedding bookings follow the 12-hour window. Call (877) 609-1919 any hour to book, adjust or confirm a Thibodaux reservation.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Thibodaux from MSY airport?", a: "About 52 miles, usually 60 to 70 minutes via US-90, the same corridor we drive daily to Raceland and Houma." },
      { q: "Do you serve Nicholls State University move-in and graduation weekends?", a: "Yes. We run flat-rate airport and local transfers for move-in, parents' weekend and commencement, booked well ahead for the busiest dates." },
      { q: "Can you handle a Bayou Lafourche wedding?", a: "Yes. We plan the full day — getting ready, ceremony, photos and reception — with a chauffeur who stays with the wedding party." },
      { q: "Is the rate for a Thibodaux airport transfer flat?", a: "Yes, confirmed before you book by vehicle class, with no surge pricing regardless of time or traffic." },
      { q: "Do you offer corporate accounts for Thibodaux businesses?", a: "Yes. Sugar mills, oilfield-service companies and other local employers book recurring travel through a corporate account with consolidated billing." },
    ],
    related: [
      { label: "Raceland, LA Limo Service", to: "/raceland-la-limo-service" },
      { label: "Houma Limo Service", to: "/houma-limo-service" },
      { label: "MSY to Thibodaux", to: "/msy-to-thibodaux" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Thibodaux, LA", "Lafourche Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "morgan-city-la-limo-service",
    type: "city",
    name: "Morgan City",
    badge: "Louisiana Limo Service",
    h1: "Morgan City, LA Limo Service",
    metaTitle: "Morgan City LA Limo Service | Car Service Morgan City",
    metaDescription: "Chauffeured limo & car service in Morgan City, LA. Offshore/shipbuilding corporate travel, MSY airport transfers, weddings. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 85 mi · 90–105 minutes" },
      { label: "Coverage", value: "Downtown, Atchafalaya River, Berwick" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Morgan City sits where the Atchafalaya River meets the Gulf Intracoastal Waterway, and its shipbuilding and offshore-service economy brings a steady flow of executives, crew-change travelers and visiting vendors through MSY rather than a small regional strip. MSY Limo Service runs this corridor on committed reservations rather than hoping a rideshare driver accepts an 85-mile fare.",
      "The drive is about 85 miles and 90 to 105 minutes down US-90 through the heart of bayou country, and because we book it as a reservation rather than an on-demand request, both the outbound pickup and the return trip are confirmed before you ever board a flight.",
      "Beyond airport transfers, we run corporate accounts for shipyards and offshore-service companies based in Morgan City and neighboring Berwick, along with wedding and event transportation for venues along the river.",
    ],
    highlights: [
      "Committed reservations for the 85-mile MSY run — no declined rideshare requests",
      "Return trip confirmed at booking, not left to chance",
      "Corporate accounts for shipbuilding and offshore-service companies",
      "Wedding and event transportation along the Atchafalaya",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "Why a reservation beats a rideshare request here",
        paragraphs: [
          "Eighty-five miles is at the edge of what most rideshare drivers will accept, and finding a driver willing to make the return trip from Morgan City back toward New Orleans is even harder. A reserved chauffeur solves both directions at the time you book, not the moment you land.",
          "Crew-change and offshore-service travel often runs on compressed schedules — a flight in, a quick turnaround, a flight back out — and flight tracking keeps the pickup aligned to the actual arrival rather than the printed one.",
        ],
      },
      {
        h2: "Shipbuilding, offshore-service and local Morgan City travel",
        paragraphs: [
          "Shipyards and offshore-service companies based in Morgan City and Berwick book recurring executive and vendor travel through a corporate account with consolidated billing, the same way our oil-and-gas corporate clients elsewhere in Louisiana do.",
          "Weddings and events along the river are a smaller but regular part of our Morgan City business, usually booked as hourly, as-directed charter rather than a single flat-rate transfer.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "Because the 85-mile Morgan City run sits at the edge of what rideshare reliably covers, we recommend booking at least a week ahead for a standard airport transfer and two to three weeks ahead for a shipyard crew-change rotation or a wedding along the river, so both legs are locked in well before anyone boards a flight. Flight tracking and 45 minutes of complimentary domestic wait time are included on every transfer, no add-on fee.",
          "Sedan and SUV bookings cancel free up to 3 hours before pickup; Sprinter van and event bookings follow the 12-hour window. Corporate accounts for shipbuilding and offshore-service employers can set a standing reservation rhythm rather than booking each crew change individually — call (877) 609-1919 to set one up.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Morgan City from MSY airport?", a: "About 85 miles, usually 90 to 105 minutes via US-90 through the heart of bayou country." },
      { q: "Is the return trip guaranteed, or do I need to find a ride back?", a: "It's confirmed at booking. Both the outbound pickup and the return trip are reserved before you fly, so you're never trying to find a driver willing to make the long trip back." },
      { q: "Do you serve shipyards and offshore-service companies?", a: "Yes. We run corporate accounts with consolidated billing for Morgan City and Berwick shipbuilding and offshore-service employers." },
      { q: "Can you handle a wedding or event along the Atchafalaya River?", a: "Yes, typically as hourly, as-directed charter covering multiple stops through the day." },
      { q: "Is the rate flat regardless of the 85-mile distance?", a: "Yes. The flat rate is confirmed before you book by vehicle class, with no surge pricing or mileage surprises." },
    ],
    related: [
      { label: "Houma Limo Service", to: "/houma-limo-service" },
      { label: "Lafayette, LA Limo Service", to: "/lafayette-la-limo-service" },
      { label: "Louisiana Oil & Gas Corporate Transportation", to: "/louisiana-oil-gas-energy-corporate-transportation" },
      { label: "New Orleans Port & Maritime Transportation", to: "/new-orleans-port-maritime-transportation" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Morgan City, LA", "St. Mary Parish", "Berwick, LA", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "new-iberia-la-limo-service",
    type: "city",
    name: "New Iberia",
    badge: "Louisiana Limo Service",
    h1: "New Iberia, LA Limo Service",
    metaTitle: "New Iberia LA Limo Service | Car Service New Iberia",
    metaDescription: "Chauffeured limo & car service in New Iberia, LA. Avery Island, Tabasco tours, weddings, MSY airport transfers. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 120 mi · 2 hours" },
      { label: "Coverage", value: "Downtown, Avery Island, Iberia Parish" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "New Iberia is the heart of Teche Country — a bayou-side historic district, Avery Island and the Tabasco factory, and the commercial center of Iberia Parish's sugarcane and energy economy. MSY Limo Service runs committed reservations here rather than leaving a 120-mile trip to whichever rideshare driver happens to accept it.",
      "The drive from Louis Armstrong International is about 120 miles and two hours, west on I-10 and down US-90 past Lafayette, and we book it as a reservation with the return trip confirmed at the same time as the outbound pickup.",
      "Groups touring Avery Island and the Tabasco factory, wedding parties at historic Teche Country venues, and energy-sector business travelers are our three most common New Iberia bookings.",
    ],
    highlights: [
      "Committed reservations for the 120-mile, two-hour MSY run",
      "Avery Island and Tabasco factory tour transportation",
      "Wedding transportation for historic Teche Country venues",
      "Corporate accounts for Iberia Parish energy and agriculture employers",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "MSY to New Iberia, booked both ways",
        paragraphs: [
          "At 120 miles, this run is beyond what rideshare reliably serves: outbound requests get declined, and finding a car for the return trip from Iberia Parish is close to impossible. Reserving it in advance solves both directions at once.",
          "The route runs west on I-10 and down US-90 past Lafayette, and your chauffeur tracks your inbound flight so the pickup lines up with your actual arrival, not the schedule printed weeks earlier.",
        ],
      },
      {
        h2: "Avery Island, Tabasco tours and Teche Country weddings",
        paragraphs: [
          "Avery Island and the Tabasco factory draw groups year-round, and a Sprinter van is usually the most efficient way to move a tour group there and back without splitting across several cars.",
          "Teche Country's historic venues host weddings regularly, and we plan those as a full-day itinerary — getting ready, ceremony, photos and reception — the same way we plan any wedding in our service area.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "At 120 miles each way, a New Iberia reservation is worth locking in several days ahead for a routine transfer and two to three weeks ahead for an Avery Island tour group or a Teche Country wedding Saturday, since those dates compete with every other long-distance booking on our calendar. Every quote already includes flight tracking and 45 minutes of complimentary wait time on domestic arrivals.",
          "Sedan and SUV transfers cancel free of charge up to 3 hours before pickup; Sprinter van and wedding bookings follow the 12-hour window. Call (877) 609-1919 to confirm both legs of a New Iberia trip at once.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is New Iberia from MSY airport?", a: "About 120 miles, roughly two hours via I-10 West and US-90 through Lafayette." },
      { q: "Can you take a group to Avery Island and the Tabasco factory?", a: "Yes. A Sprinter van is typically the most efficient way to move a tour group together for the day." },
      { q: "Is the return trip from New Iberia guaranteed?", a: "Yes. Both legs are reserved at booking, so you're not relying on finding a rideshare driver willing to make the long trip back." },
      { q: "Do you handle weddings at historic Teche Country venues?", a: "Yes, planned as a full-day itinerary with a chauffeur who stays with the wedding party." },
      { q: "Is the rate flat for a New Iberia transfer?", a: "Yes, confirmed before you book by vehicle class, with no surge pricing added for distance." },
    ],
    related: [
      { label: "Lafayette, LA Limo Service", to: "/lafayette-la-limo-service" },
      { label: "Opelousas, LA Limo Service", to: "/opelousas-la-limo-service" },
      { label: "MSY to Lafayette", to: "/msy-to-lafayette" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "River Road Plantation Tour Transportation", to: "/river-road-plantation-tour-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Iberia, LA", "Iberia Parish", "Avery Island, LA", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "opelousas-la-limo-service",
    type: "city",
    name: "Opelousas",
    badge: "Louisiana Limo Service",
    h1: "Opelousas, LA Limo Service",
    metaTitle: "Opelousas LA Limo Service | Car Service Opelousas",
    metaDescription: "Chauffeured limo & car service in Opelousas, LA, the Zydeco Capital. Weddings, corporate travel, MSY airport transfers. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 140 mi · 2.25–2.5 hours" },
      { label: "Coverage", value: "Downtown, St. Landry Parish" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Opelousas, the self-proclaimed Zydeco Capital of the World and seat of St. Landry Parish, is one of the longer runs in our Louisiana network — far enough that an on-demand app routinely fails travelers in both directions. MSY Limo Service books it as a committed reservation instead.",
      "The drive from Louis Armstrong International is about 140 miles and 2.25 to 2.5 hours via I-10 West through Baton Rouge and I-49 North past Lafayette, depending on traffic through the two cities.",
      "Zydeco and Creole heritage festivals bring visitors to Opelousas year-round, alongside weddings, family events and a steady base of St. Landry Parish corporate and agricultural travel.",
    ],
    highlights: [
      "Committed reservations for the 140-mile MSY run, booked both ways",
      "Zydeco Festival and local heritage-event transportation",
      "Wedding and family-event transportation across St. Landry Parish",
      "Corporate travel for agricultural and parish-based employers",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "Why Opelousas is booked as a reservation, not an app request",
        paragraphs: [
          "One hundred forty miles is outside rideshare's reliable range — outbound requests go unanswered, and the return trip from Opelousas may as well not exist in the app on a festival weekend. Our reservations work the opposite way: book ahead and the vehicle, chauffeur and flat rate are committed regardless of demand.",
          "The route runs through Baton Rouge and past Lafayette, two cities with their own rush-hour patterns, and dispatch plans around both before your flight ever lands.",
        ],
      },
      {
        h2: "Zydeco Festival, weddings and St. Landry Parish travel",
        paragraphs: [
          "Opelousas's Zydeco and Creole heritage festivals draw regional and out-of-state visitors, and we run flat-rate group transfers for festival weekends booked well in advance of the biggest dates.",
          "Weddings and family events across St. Landry Parish round out most of our non-festival Opelousas bookings, typically as hourly, as-directed charter for the full day.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "Opelousas sits far enough out that we book it exclusively as a reservation, never an on-demand request, and festival weekends tied to Zydeco and Creole heritage events sell out our Sprinter vans and limousines first — two to three weeks' notice is the safe window for a festival date, with shorter notice usually fine for a standard transfer. Flight tracking and 45 minutes of complimentary domestic wait time come standard on every booking.",
          "Sedan and SUV fares cancel free up to 3 hours ahead; Sprinter van, limousine and festival group bookings follow the 12-hour window. Call (877) 609-1919 to reserve both the outbound and return legs together.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Opelousas from MSY airport?", a: "About 140 miles, roughly 2.25 to 2.5 hours via I-10 West through Baton Rouge and I-49 North past Lafayette." },
      { q: "Do you run group transfers for Zydeco Festival weekends?", a: "Yes, booked as a flat-rate group transfer — reserve well ahead for the festival's biggest dates, when vehicles book out first." },
      { q: "Is the return trip from Opelousas guaranteed?", a: "Yes. The return is scheduled at booking, before you fly, rather than left to chance." },
      { q: "Do you handle weddings in St. Landry Parish?", a: "Yes, typically as hourly, as-directed charter covering the full wedding-day itinerary." },
      { q: "Is the rate flat for the Opelousas run?", a: "Yes, confirmed before you book by vehicle class, with no surge pricing regardless of festival demand." },
    ],
    related: [
      { label: "Lafayette, LA Limo Service", to: "/lafayette-la-limo-service" },
      { label: "New Iberia, LA Limo Service", to: "/new-iberia-la-limo-service" },
      { label: "Baton Rouge Limo Service", to: "/baton-rouge-limo-service" },
      { label: "MSY to Lafayette", to: "/msy-to-lafayette" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Opelousas, LA", "St. Landry Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "bogalusa-la-limo-service",
    type: "city",
    name: "Bogalusa",
    badge: "Louisiana Limo Service",
    h1: "Bogalusa, LA Limo Service",
    metaTitle: "Bogalusa LA Limo Service | Car Service Bogalusa",
    metaDescription: "Chauffeured limo & car service in Bogalusa, LA. Washington Parish weddings, corporate travel, MSY & NEW airport transfers. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 75 mi · 85–95 minutes" },
      { label: "Coverage", value: "Downtown, Washington Parish" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Bogalusa sits at the northern edge of Washington Parish near the Mississippi state line, a paper-mill and timber town far enough from New Orleans that on-demand rideshare coverage thins out noticeably. MSY Limo Service covers it the same way we cover Pearl River and Slidell — with a committed reservation and a flat rate confirmed before you book.",
      "The drive from Louis Armstrong International runs about 75 miles and 85 to 95 minutes, east on I-10 through Slidell and then north on US-11 and LA-21 toward Bogalusa.",
      "Most of our Bogalusa business is a mix of airport transfers for travelers connecting through New Orleans, weddings and family events across Washington Parish, and corporate travel tied to the area's timber and manufacturing employers.",
    ],
    highlights: [
      "Flat-rate MSY transfers, about 75 miles via I-10 and US-11",
      "Service across Washington Parish, not just downtown Bogalusa",
      "Wedding and family-event transportation",
      "Corporate accounts for timber and manufacturing employers",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "The drive from MSY to Bogalusa",
        paragraphs: [
          "The route runs east on I-10 through Slidell, then north toward the Mississippi line on US-11 and LA-21, a corridor our chauffeurs already drive regularly for Pearl River and Slidell bookings.",
          "Flight tracking means your pickup is dispatched against the real arrival time, which matters most on the longer drive north — nobody wants to discover a delay after the car has already left.",
        ],
      },
      {
        h2: "Washington Parish weddings and corporate travel",
        paragraphs: [
          "Weddings and family events across Washington Parish are typically booked as hourly, as-directed charter, since the day usually involves more than one stop.",
          "Bogalusa's timber and manufacturing employers book recurring executive and visitor travel through a corporate account with consolidated billing, the same way other Louisiana parish employers do with us.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A standard Bogalusa airport transfer is usually fine with a few days' notice, but Washington Parish wedding season and any weekend tied to a timber or manufacturing company's visiting-executive schedule should be booked two to three weeks out to guarantee a Sprinter van or sedan at the exact time you need it. Flight tracking and 45 minutes of complimentary domestic wait time are included at no extra charge.",
          "Sedan and SUV bookings cancel free up to 3 hours before pickup; Sprinter van and wedding bookings follow the 12-hour window. Call (877) 609-1919 for same-day availability or an advance reservation.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Bogalusa from MSY airport?", a: "About 75 miles, usually 85 to 95 minutes via I-10 through Slidell and then US-11/LA-21 north." },
      { q: "Do you cover all of Washington Parish, or only downtown Bogalusa?", a: "All of Washington Parish. Tell us the exact address when you book and we'll confirm the flat rate." },
      { q: "Can you handle a wedding or family event in the Bogalusa area?", a: "Yes, typically as hourly, as-directed charter covering the full day's stops." },
      { q: "Do you offer corporate accounts for Bogalusa employers?", a: "Yes. Timber and manufacturing companies book recurring travel through a corporate account with consolidated billing." },
      { q: "Is the rate flat for a Bogalusa transfer?", a: "Yes, confirmed before you book by vehicle class, with no surge pricing added." },
    ],
    related: [
      { label: "Slidell Limo Service", to: "/slidell-limo-service" },
      { label: "Pearl River, LA Limo Service", to: "/pearl-river-la-limo-service" },
      { label: "Covington, LA Limo Service", to: "/covington-la-limo-service" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Bogalusa, LA", "Washington Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "abita-springs-la-limo-service",
    type: "city",
    name: "Abita Springs",
    badge: "Louisiana Limo Service",
    h1: "Abita Springs, LA Limo Service",
    metaTitle: "Abita Springs LA Limo Service | Car Service",
    metaDescription: "Chauffeured limo & car service in Abita Springs, LA. Brewery tours, weddings, Causeway airport transfers from MSY. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 45 mi · 50–60 minutes" },
      { label: "Coverage", value: "Town Square, Abita Brewing Co." },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Abita Springs is a small Northshore town built around its town square, its folk-art Mystery House, and Louisiana's oldest craft brewery, and MSY Limo Service treats it the same way we treat every Northshore address: a licensed chauffeur who crosses the Causeway daily, a flat rate confirmed before you book, and a car that's actually waiting when your flight lands.",
      "Most Abita Springs trips to MSY run about 45 miles and 50 to 60 minutes, almost entirely the 24-mile Lake Pontchartrain Causeway followed by a short run through Mandeville and Covington into town.",
      "Brewery tours at Abita Brewing Company are our single most common local booking, with weddings, Mystery House visits and family weekend trips filling out most of the rest.",
    ],
    highlights: [
      "Flat-rate MSY transfers via the Lake Pontchartrain Causeway",
      "Abita Brewing Company tour and tasting-room transfers",
      "Wedding and event transportation in the town square area",
      "Chauffeurs who cross the Causeway daily and track conditions in real time",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "Crossing the Causeway to Abita Springs",
        paragraphs: [
          "The 24-mile Lake Pontchartrain Causeway can slow dramatically in fog or high wind, and our chauffeurs cross it constantly and know current conditions before you ever leave the terminal, planning around closures rather than finding out mid-bridge.",
          "The Causeway toll is already built into your flat rate — no surprise fee when you land, no mental math at the toll booth.",
        ],
      },
      {
        h2: "Brewery tours and local Abita Springs bookings",
        paragraphs: [
          "Abita Brewing Company draws visitors from across the region, and we regularly handle tour and tasting-room transfers, often combined with other Northshore stops as part of an hourly charter.",
          "The town square, the Mystery House and nearby Covington and Mandeville round out a typical half-day or full-day Northshore itinerary we run for weekend visitors.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "Most Abita Springs trips — a brewery tour, a Causeway airport transfer — can be booked just a day or two ahead, though weekend brewery-tour slots and any Northshore wedding Saturday fill up faster and are worth reserving a week or two out. Every quote includes the Causeway toll, real-time flight tracking on airport runs, and 45 minutes of complimentary domestic wait time.",
          "Sedan and SUV transfers cancel free of charge up to 3 hours before pickup; Sprinter van and event bookings follow the 12-hour window. Call (877) 609-1919 to combine a brewery tour with other Northshore stops on one hourly reservation.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How long does it take to get from MSY to Abita Springs?", a: "Usually 50 to 60 minutes, most of it spent crossing the 24-mile Lake Pontchartrain Causeway before a short run through Mandeville and Covington into town." },
      { q: "Is the Causeway toll included in the price?", a: "Yes. Your flat rate is all-inclusive, confirmed before you book, with no added toll or surge fee." },
      { q: "Can you book a brewery tour at Abita Brewing Company?", a: "Yes, and we can combine it with other Northshore stops as part of an hourly charter." },
      { q: "What happens if the Causeway closes for weather?", a: "Your chauffeur monitors conditions and plans an alternate route over the Twin Span if needed, at no change to your confirmed flat rate." },
      { q: "Do you handle weddings in Abita Springs?", a: "Yes, typically booked as hourly, as-directed charter for the full wedding day." },
    ],
    related: [
      { label: "Covington, LA Limo Service", to: "/covington-la-limo-service" },
      { label: "Mandeville Limo Service", to: "/mandeville-limo-service" },
      { label: "MSY to Abita Springs", to: "/msy-to-abita-springs" },
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Abita Springs, LA", "St. Tammany Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "raceland-la-limo-service",
    type: "city",
    name: "Raceland",
    badge: "Louisiana Limo Service",
    h1: "Raceland, LA Limo Service",
    metaTitle: "Raceland LA Limo Service | Car Service Raceland",
    metaDescription: "Chauffeured limo & car service in Raceland, LA. Lafourche Parish weddings, corporate travel, MSY airport transfers. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 48 mi · 55–65 minutes" },
      { label: "Coverage", value: "Downtown Raceland, Lafourche Parish" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Raceland sits along US-90 in Lafourche Parish, on the same corridor our chauffeurs already drive to reach Des Allemands and Houma, which means Raceland bookings are never an improvised detour — they're part of a route we run every week.",
      "The airport run is about 48 miles and 55 to 65 minutes, crossing the Mississippi River at Luling via I-310 before continuing west on US-90 through Des Allemands.",
      "Local bookings are mostly weddings, family events and corporate travel tied to the sugar and oilfield-service companies with operations along this stretch of Bayou Lafourche.",
    ],
    highlights: [
      "Flat-rate MSY transfers, about 48 miles via I-310 and US-90",
      "Part of our regular Des Allemands–Raceland–Houma corridor",
      "Wedding and family-event transportation",
      "Corporate travel for sugar and oilfield-service employers",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "The Raceland corridor",
        paragraphs: [
          "There's no interstate the whole way: the route crosses the Mississippi River at Luling on I-310 and then runs west on US-90 through Des Allemands before reaching Raceland, a corridor we drive constantly for Houma bookings as well.",
          "Because it's a route we already know, timing is predictable even without a direct interstate connection — your chauffeur knows exactly where the drive slows down and plans around it.",
        ],
      },
      {
        h2: "Weddings and local Raceland travel",
        paragraphs: [
          "Weddings and family gatherings in and around Raceland are typically booked as hourly, as-directed charter, covering multiple stops through the day.",
          "Sugar and oilfield-service companies with a presence along Bayou Lafourche book recurring executive travel through a corporate account with consolidated billing.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "Raceland sits on a corridor we drive constantly, so a standard airport transfer is usually easy to arrange with just a day or two of notice; a Lafourche Parish wedding Saturday or a large corporate group for a sugar or oilfield-service company is worth booking two to three weeks ahead. Flight tracking and 45 minutes of complimentary domestic wait time are included on every airport run, no extra charge.",
          "Sedan and SUV fares cancel free up to 3 hours before pickup; Sprinter van and wedding bookings follow the 12-hour window. Call (877) 609-1919 any hour to book a Raceland pickup.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Raceland from MSY airport?", a: "About 48 miles, usually 55 to 65 minutes via I-310 across the river at Luling and then US-90 west." },
      { q: "Is there a direct interstate to Raceland?", a: "No — the route uses I-310 and US-90, a corridor we drive regularly for Des Allemands and Houma bookings as well." },
      { q: "Can you handle a wedding in the Raceland area?", a: "Yes, typically as hourly, as-directed charter for the full wedding day." },
      { q: "Do you offer corporate accounts for Lafourche Parish employers?", a: "Yes. Sugar and oilfield-service companies book recurring travel through a corporate account with consolidated billing." },
      { q: "Is the rate flat for a Raceland transfer?", a: "Yes, confirmed before you book by vehicle class, with no surge pricing added." },
    ],
    related: [
      { label: "Des Allemands, LA Limo Service", to: "/des-allemands-la-limo-service" },
      { label: "Houma Limo Service", to: "/houma-limo-service" },
      { label: "Thibodaux, LA Limo Service", to: "/thibodaux-la-limo-service" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Raceland, LA", "Lafourche Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "des-allemands-la-limo-service",
    type: "city",
    name: "Des Allemands",
    badge: "Louisiana Limo Service",
    h1: "Des Allemands, LA Limo Service",
    metaTitle: "Des Allemands LA Limo Service | Car Service",
    metaDescription: "Chauffeured limo & car service in Des Allemands, LA. Swamp tour transfers, weddings, MSY airport transfers. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 30 mi · 35–40 minutes" },
      { label: "Coverage", value: "Downtown, swamp tour docks" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Des Allemands bills itself as the catfish capital of Louisiana and sits right at the edge of the swamp, which makes it one of the closer-in bayou towns we cover and a regular stop for visitors headed to a swamp tour dock rather than a downtown address.",
      "The run from MSY is about 30 miles and 35 to 40 minutes, crossing the Mississippi River at Luling on I-310 before a short stretch of US-90 west into town.",
      "Most of our Des Allemands bookings are swamp-tour transfers — airport-to-dock or hotel-to-dock — along with a smaller number of weddings and local family events.",
    ],
    highlights: [
      "Flat-rate MSY transfers, about 30 miles via I-310 and US-90",
      "Swamp tour dock transfers from MSY or your hotel",
      "Wedding and family-event transportation",
      "Group-friendly Sprinter vans for tour parties",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "Swamp tour transfers through Des Allemands",
        paragraphs: [
          "A number of New Orleans-area swamp tour operators run out of docks near Des Allemands, and we handle the transfer either straight from MSY for visitors landing the same day, or from a French Quarter or downtown hotel for anyone already in the city. See our swamp tour transportation page for the full picture of how we plan that trip.",
          "A Sprinter van is usually the right call for a tour group traveling together, keeping the whole party in one vehicle rather than splitting across several cars for a short regional hop.",
        ],
      },
      {
        h2: "The drive and local bookings",
        paragraphs: [
          "The route crosses the river at Luling on I-310, a short, predictable run that our chauffeurs also use on the way to Raceland and Houma, so Des Allemands is never an unfamiliar detour.",
          "Weddings and family events in the area are typically booked as hourly, as-directed charter rather than a single point-to-point fare.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "Swamp tour transfers are frequently booked just a day or two ahead, especially for travelers adding the stop the moment they land, though a group tour booked through a hotel concierge or a Des Allemands wedding should be reserved a week or two out to guarantee a Sprinter van on the right morning. Flight tracking, 45 minutes of complimentary domestic wait time, and door-to-dock routing are all included in the quoted flat rate.",
          "Sedan and SUV transfers cancel free up to 3 hours before pickup; Sprinter van and event bookings follow the 12-hour window. Call (877) 609-1919 to pair an MSY landing with a same-day swamp tour pickup.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Des Allemands from MSY airport?", a: "About 30 miles, usually 35 to 40 minutes via I-310 across the river at Luling and then a short stretch of US-90." },
      { q: "Can you pick up a swamp tour group directly from MSY?", a: "Yes. We run airport-to-dock transfers for swamp tour visitors landing the same day, as well as hotel-to-dock transfers." },
      { q: "What vehicle is best for a swamp tour group?", a: "A Sprinter van, which keeps the whole party together for the trip out to the dock and back." },
      { q: "Do you handle weddings near Des Allemands?", a: "Yes, typically as hourly, as-directed charter for the full event." },
      { q: "Is the rate flat for a Des Allemands transfer?", a: "Yes, confirmed before you book by vehicle class, with no surge pricing added." },
    ],
    related: [
      { label: "Swamp Tour Transportation", to: "/swamp-tour-transportation" },
      { label: "Raceland, LA Limo Service", to: "/raceland-la-limo-service" },
      { label: "Houma Limo Service", to: "/houma-limo-service" },
      { label: "Luling, LA Limo Service", to: "/luling-la-limo-service" },
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Des Allemands, LA", "St. Charles Parish", "Lafourche Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "lutcher-gramercy-la-limo-service",
    type: "city",
    name: "Lutcher & Gramercy",
    badge: "Louisiana Limo Service",
    h1: "Lutcher & Gramercy, LA Limo Service",
    metaTitle: "Lutcher & Gramercy LA Limo Service | Car Service",
    metaDescription: "Chauffeured limo & car service in Lutcher & Gramercy, LA. River Parishes corporate travel, weddings, MSY airport transfers. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 37 mi · 40–45 minutes" },
      { label: "Coverage", value: "Lutcher, Gramercy, St. James Parish" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Lutcher and Gramercy sit side by side on the River Parishes corridor in St. James Parish, close enough together that we book them as one service area — the same way our LaPlace and Reserve coverage works just a few miles east.",
      "The airport run is about 37 miles and 40 to 45 minutes, straight up I-10 West to the LA-3214/Lutcher exit, with no bridge crossing involved.",
      "Industrial and petrochemical plants along the river corridor drive most of our corporate business here, alongside weddings and family events throughout both towns.",
    ],
    highlights: [
      "Flat-rate MSY transfers, about 37 miles via I-10 West",
      "Coverage across both Lutcher and Gramercy as one service area",
      "Corporate accounts for River Parishes industrial employers",
      "Wedding and family-event transportation",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "The River Parishes run from MSY",
        paragraphs: [
          "The drive is a straight shot up I-10 West to the Lutcher exit, no bridge crossing required, which keeps the trip predictable compared with River Parishes towns on the opposite bank.",
          "Flight tracking applies to every MSY pickup here the same as anywhere else we serve — your chauffeur is positioned against your real arrival time, not the printed schedule.",
        ],
      },
      {
        h2: "Industrial corporate travel and local events",
        paragraphs: [
          "The petrochemical and industrial plants along this stretch of the Mississippi River book recurring executive, contractor and turnaround-crew travel through a corporate account with consolidated billing.",
          "Weddings and family events across Lutcher and Gramercy are typically booked as hourly, as-directed charter for the full day.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A River Parishes transfer to Lutcher or Gramercy is generally easy to arrange on short notice, but plant turnaround season brings a surge of contractor and executive travel that's worth scheduling two to three weeks ahead so a recurring corporate account has guaranteed capacity rather than competing for same-day vehicles. Flight tracking and 45 minutes of complimentary domestic wait time are included on every quote.",
          "Sedan and SUV transfers cancel free up to 3 hours before pickup; Sprinter van and event bookings follow the 12-hour window. Call (877) 609-1919 to set up a standing corporate account for recurring River Parishes travel.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far are Lutcher and Gramercy from MSY airport?", a: "About 37 miles, usually 40 to 45 minutes straight up I-10 West, no bridge crossing involved." },
      { q: "Do you serve both Lutcher and Gramercy?", a: "Yes, we treat them as one service area and quote a flat rate based on your exact address." },
      { q: "Do you handle industrial and turnaround-crew travel for River Parishes plants?", a: "Yes. We run corporate accounts with consolidated billing for petrochemical and industrial employers along this stretch of the river." },
      { q: "Can you handle a wedding in Lutcher or Gramercy?", a: "Yes, typically as hourly, as-directed charter for the full wedding day." },
      { q: "Is the rate flat for this route?", a: "Yes, confirmed before you book by vehicle class, with no surge pricing added." },
    ],
    related: [
      { label: "LaPlace, LA Limo Service", to: "/laplace-la-limo-service" },
      { label: "Reserve, LA Limo Service", to: "/reserve-la-limo-service" },
      { label: "Donaldsonville, LA Limo Service", to: "/donaldsonville-la-limo-service" },
      { label: "Louisiana Oil & Gas Corporate Transportation", to: "/louisiana-oil-gas-energy-corporate-transportation" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Lutcher, LA", "Gramercy, LA", "St. James Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "jefferson-la-limo-service",
    type: "city",
    name: "Jefferson",
    badge: "Louisiana Limo Service",
    h1: "Jefferson, LA Limo Service",
    metaTitle: "Jefferson LA Limo Service | Car Service Jefferson LA",
    metaDescription: "Chauffeured limo & car service in Jefferson, LA, near Metairie. MSY airport transfers, corporate travel, weddings. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 11 mi · 15–20 minutes" },
      { label: "Coverage", value: "Jefferson Highway, Causeway Blvd corridor" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Jefferson is the small, unincorporated stretch of Jefferson Parish tucked between New Orleans and Metairie along Jefferson Highway and the Causeway Boulevard corridor — close enough to the city that residents often use Uptown and Garden District addresses for reference, but its own community for airport and local transportation.",
      "MSY is about 11 miles away, usually a 15 to 20 minute drive via Jefferson Highway or I-10, one of the shorter airport runs in our Jefferson Parish service area.",
      "We run both airport transfers and local corporate travel here, with easy connections to Metairie, Harahan and Uptown New Orleans for anyone splitting a day between addresses on both sides of the parish line.",
    ],
    highlights: [
      "Flat-rate MSY transfers, about 11 miles via Jefferson Highway or I-10",
      "Easy same-trip connections to Metairie, Harahan and Uptown",
      "Corporate travel for Causeway Boulevard-corridor offices",
      "Wedding and event transportation",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "A short, predictable airport run",
        paragraphs: [
          "At about 11 miles, the drive to MSY is short even by the standards of our closer-in Jefferson Parish coverage, usually run via Jefferson Highway or a short stretch of I-10.",
          "A short trip is exactly why a flat rate and flight tracking still matter — there's no excuse for a late car on a run this predictable, and we hold ourselves to that standard every time.",
        ],
      },
      {
        h2: "Local Jefferson and Causeway Boulevard travel",
        paragraphs: [
          "Offices along the Causeway Boulevard corridor book recurring executive travel through a corporate account, and the short distance to Metairie, Harahan and Uptown makes same-day, multi-stop bookings easy to plan.",
          "Weddings and events here often combine a Jefferson pickup with an Uptown or Garden District venue — tell us both addresses and we'll quote the whole day as one itinerary.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "At 11 miles, a Jefferson airport run is one of the easier same-day bookings in our service area, with availability usually open right up to the day of travel; a multi-stop day combining Jefferson with Uptown or the Garden District is worth confirming a few days ahead so one chauffeur can be scheduled for the whole itinerary. Flight tracking and 45 minutes of complimentary domestic wait time are included at no extra charge.",
          "Sedan and SUV fares cancel free up to 3 hours before pickup; Sprinter van and event bookings follow the 12-hour window. Call (877) 609-1919 to add a second address to a Jefferson pickup.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Jefferson from MSY airport?", a: "About 11 miles, usually 15 to 20 minutes via Jefferson Highway or I-10." },
      { q: "Can you combine a Jefferson pickup with an Uptown or Metairie stop?", a: "Yes. Tell us both addresses and we'll quote the day as one itinerary with a single chauffeur." },
      { q: "Do you serve offices along the Causeway Boulevard corridor?", a: "Yes, with corporate accounts and consolidated billing for recurring executive travel." },
      { q: "Can you handle a wedding with a Jefferson pickup?", a: "Yes, typically as hourly, as-directed charter for the full day." },
      { q: "Is the rate flat for a Jefferson transfer?", a: "Yes, confirmed before you book by vehicle class, with no surge pricing added." },
    ],
    related: [
      { label: "Metairie Limo Service", to: "/metairie-limo-service" },
      { label: "Harahan, LA Limo Service", to: "/harahan-la-limo-service" },
      { label: "Uptown New Orleans Limo Service", to: "/uptown-new-orleans-limo-service" },
      { label: "River Ridge, LA Limo Service", to: "/river-ridge-la-limo-service" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Jefferson, LA", "Jefferson Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "geismar-la-limo-service",
    type: "city",
    name: "Geismar",
    badge: "Louisiana Limo Service",
    h1: "Geismar, LA Limo Service",
    metaTitle: "Geismar LA Limo Service | Car Service Geismar",
    metaDescription: "Chauffeured limo & car service in Geismar, LA. Ascension industrial corridor corporate travel, MSY airport transfers. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 62 mi · 65–75 minutes" },
      { label: "Coverage", value: "Ascension industrial corridor" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Geismar anchors a dense stretch of petrochemical and industrial plants along the Mississippi River in Ascension Parish, between Gonzales and Donaldsonville, and most of our Geismar business is corporate — executives, contractors and turnaround crews moving between MSY and a plant gate rather than tourists moving between hotels.",
      "The drive from Louis Armstrong International is about 62 miles and 65 to 75 minutes via I-10 West, the same interstate corridor we run daily to Gonzales and Prairieville.",
      "Plant shutdowns and turnarounds bring surges in demand for reliable, flat-rate group transportation, and we run those as scheduled, recurring bookings rather than one-off requests.",
    ],
    highlights: [
      "Flat-rate MSY transfers, about 62 miles via I-10 West",
      "Corporate accounts for Ascension industrial corridor plants",
      "Scheduled group transportation for turnarounds and shutdowns",
      "Flight-tracked pickups for visiting executives and contractors",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "Industrial corporate travel in Geismar",
        paragraphs: [
          "Plants along this stretch of the river book recurring executive and contractor travel through a corporate account with consolidated billing, the same structure our Gonzales and oil-and-gas corporate clients use elsewhere in Louisiana.",
          "Turnaround and shutdown periods bring a sharp, predictable spike in group transportation demand, and we schedule those as recurring bookings rather than treating each trip as a new request.",
        ],
      },
      {
        h2: "The drive from MSY",
        paragraphs: [
          "The route is almost entirely I-10 West, the same corridor our chauffeurs drive daily to Gonzales and Prairieville, so Geismar bookings run on a route we already know well rather than an unfamiliar one.",
          "Every pickup is flight-tracked, so a visiting executive's delayed inbound flight doesn't leave a chauffeur waiting at the wrong time.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "Routine Geismar executive transfers are usually bookable with a day or two of notice, but plant turnaround and shutdown periods bring a sharp, predictable spike in demand for group transportation, and we recommend locking in a recurring schedule two to three weeks before the turnaround date rather than booking each leg as a one-off. Flight tracking and 45 minutes of complimentary domestic wait time are included on every transfer.",
          "Sedan and SUV bookings cancel free up to 3 hours before pickup; Sprinter van and scheduled group bookings follow the 12-hour window. Call (877) 609-1919 to set up corporate billing ahead of a turnaround.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Geismar from MSY airport?", a: "About 62 miles, usually 65 to 75 minutes via I-10 West." },
      { q: "Do you handle turnaround and shutdown group transportation?", a: "Yes. We schedule recurring group bookings for plant turnarounds and shutdowns rather than treating each trip as a one-off request." },
      { q: "Do you offer corporate accounts for Ascension corridor plants?", a: "Yes, with consolidated billing for recurring executive and contractor travel." },
      { q: "Is pickup flight-tracked for visiting executives?", a: "Yes, every MSY pickup is flight-tracked and dispatched against the real arrival time." },
      { q: "Is the rate flat for a Geismar transfer?", a: "Yes, confirmed before you book by vehicle class, with no surge pricing added." },
    ],
    related: [
      { label: "Gonzales, LA Limo Service", to: "/gonzales-la-limo-service" },
      { label: "Prairieville, LA Limo Service", to: "/prairieville-la-limo-service" },
      { label: "Donaldsonville, LA Limo Service", to: "/donaldsonville-la-limo-service" },
      { label: "Louisiana Oil & Gas Corporate Transportation", to: "/louisiana-oil-gas-energy-corporate-transportation" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Geismar, LA", "Ascension Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "lake-charles-la-limo-service",
    type: "city",
    name: "Lake Charles",
    badge: "Louisiana Limo Service",
    h1: "Lake Charles, LA Limo Service",
    metaTitle: "Lake Charles LA Limo Service | Car Service Lake Charles",
    metaDescription: "Chauffeured limo & car service in Lake Charles, LA. Casino resorts, LNG/petrochemical corporate travel, MSY airport transfers. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 205 mi · 3–3.5 hours" },
      { label: "Coverage", value: "Downtown, lakefront casino resorts" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Lake Charles anchors Southwest Louisiana — lakefront casino resorts, one of the largest LNG and petrochemical corridors in the world, and a steady flow of business travelers who find that flying into New Orleans beats the connections into the regional airport. MSY Limo Service covers the city with the same committed-reservation model we use for every long-distance Louisiana run.",
      "The drive from Louis Armstrong International covers about 205 miles and 3 to 3.5 hours via I-10 West, passing Baton Rouge and the Atchafalaya Basin along the way.",
      "Casino-resort guests, LNG and petrochemical executives, and families relocating to Southwest Louisiana are our three most common Lake Charles bookings, alongside weddings at lakefront venues.",
    ],
    highlights: [
      "Committed reservations for the 205-mile MSY run, booked both ways",
      "Lakefront casino resort transfers",
      "Corporate accounts for LNG and petrochemical employers",
      "Wedding transportation for lakefront venues",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "MSY to Lake Charles, booked both ways",
        paragraphs: [
          "At 205 miles, this is one of the longest routes in our Louisiana network, and a reserved chauffeur turns three-plus hours behind the wheel into time you can actually use — working, resting, or simply not driving yourself through Baton Rouge traffic.",
          "Many Lake Charles travelers connect through New Orleans because MSY's flight options beat the regional airport's connections, and we run that leg as a committed reservation with the return trip confirmed at the same time as the outbound booking.",
        ],
      },
      {
        h2: "Casino resorts, LNG corporate travel and weddings",
        paragraphs: [
          "The lakefront casino resorts draw a steady stream of visitors we transfer directly from MSY, and group bookings are common for golf trips and corporate incentive travel.",
          "LNG and petrochemical employers along the Lake Charles industrial corridor book recurring executive and contractor travel through a corporate account, and we also run wedding transportation for several lakefront venues.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "At 205 miles, a Lake Charles reservation should be made at least a week ahead for a standard transfer and two to three weeks ahead for a casino-resort group trip, an LNG corporate rotation, or a lakefront wedding, since both the outbound and return legs need a committed vehicle rather than an on-demand one. Flight tracking and 45 minutes of complimentary domestic wait time are included in every quoted flat rate.",
          "Sedan and SUV transfers cancel free up to 3 hours before pickup; Sprinter van, limousine and event bookings follow the 12-hour window. Call (877) 609-1919 to reserve both directions of a Lake Charles trip together.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Lake Charles from MSY airport?", a: "About 205 miles, usually 3 to 3.5 hours via I-10 West through Baton Rouge and the Atchafalaya Basin." },
      { q: "Why do Lake Charles travelers fly into MSY instead of Lake Charles Regional?", a: "MSY typically offers more flight options and connections, and our airport-to-airport service also runs the direct transfer if you're departing from LCH instead." },
      { q: "Can you transfer us to a lakefront casino resort?", a: "Yes, with group bookings available for golf trips and corporate incentive travel." },
      { q: "Do you offer corporate accounts for LNG and petrochemical companies?", a: "Yes, with consolidated billing for recurring executive and contractor travel along the Lake Charles industrial corridor." },
      { q: "Is the return trip from Lake Charles guaranteed?", a: "Yes. Both legs are reserved at booking, confirmed before you fly." },
    ],
    related: [
      { label: "MSY to Lake Charles", to: "/msy-to-lake-charles" },
      { label: "MSY to Lake Charles Airport", to: "/msy-to-lake-charles-airport" },
      { label: "Lafayette, LA Limo Service", to: "/lafayette-la-limo-service" },
      { label: "Baton Rouge Limo Service", to: "/baton-rouge-limo-service" },
      { label: "Louisiana Oil & Gas Corporate Transportation", to: "/louisiana-oil-gas-energy-corporate-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Lake Charles, LA", "Calcasieu Parish", "Southwest Louisiana", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },

  // ───────────────────────── MSY-to-neighborhood route pages ─────────────────────────
  {
    slug: "msy-to-garden-district",
    type: "service",
    name: "MSY to Garden District",
    badge: "Airport Transfer",
    h1: "MSY Airport to Garden District Car Service",
    metaTitle: "MSY Airport to Garden District Car Service | MSY Limo",
    metaDescription: "Private car service from MSY airport to the Garden District — mansion-row hotels & B&Bs, flat rates, flight tracking. Call (877) 609-1919.",
    stats: [
      { label: "Distance", value: "≈ 14 mi · 25–35 minutes" },
      { label: "Coverage", value: "St. Charles Ave, Magazine St, Coliseum Sq" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "The Garden District's narrow, oak-shaded streets and historic mansions-turned-B&Bs make it one of the more rewarding — and more particular — drop-offs we handle from MSY, and your chauffeur knows exactly which blocks a full-size SUV can turn into and which call for a sedan instead.",
      "The drive from Louis Armstrong International is about 14 miles and 25 to 35 minutes via I-10 and the Pontchartrain Expressway, landing you on St. Charles Avenue or a Magazine Street side street depending on your exact address.",
      "Guests of the District's historic bed-and-breakfasts, St. Charles Avenue streetcar-line hotels, and visitors headed straight to a Garden District wedding or event all book this route regularly.",
    ],
    highlights: [
      "Flat-rate pricing confirmed before you ride",
      "Chauffeurs who know which Garden District streets fit which vehicles",
      "Real-time flight tracking on every MSY pickup",
      "45 minutes of complimentary wait time on domestic arrivals",
      "Sedans and SUVs sized correctly for narrow historic streets",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "Why vehicle size matters for a Garden District drop-off",
        paragraphs: [
          "Many Garden District and Uptown streets are narrow and tree-lined with a tight turning radius that doesn't suit a full stretch limousine or a longer SUV. We check your exact address in advance and recommend a sedan or a Lincoln Navigator instead when the street calls for it, rather than discovering the problem curbside.",
          "A Sprinter van works well for a group heading to the same B&B or wedding venue, since it handles the District's layout better than several separate sedans trying to park on the same block.",
        ],
      },
      {
        h2: "Booking the ride",
        paragraphs: [
          "Your flat rate is confirmed before you fly and covers the full 14-mile run, with your chauffeur tracking your flight and adjusting for any delay automatically.",
          "For weddings and multi-stop Garden District days, hourly, as-directed charter is usually the better fit — see our wedding limo service page for how we plan that kind of day.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A single Garden District transfer is routinely available with same-day or next-day booking, though a wedding weekend or a hotel group filling several District B&Bs on the same Saturday should be reserved two to three weeks out to guarantee the right mix of sedans and a Sprinter van. Flight tracking and 45 minutes of complimentary domestic wait time are included on every airport run, no extra charge.",
          "Sedan and SUV fares cancel free up to 3 hours before pickup; Sprinter van and wedding bookings follow the 12-hour window. Call (877) 609-1919 and we'll confirm which vehicle actually fits your exact Garden District address.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is the Garden District from MSY airport?", a: "About 14 miles, usually 25 to 35 minutes via I-10 and the Pontchartrain Expressway." },
      { q: "Can a stretch limousine reach every Garden District address?", a: "Not every one. Many streets are narrow with a tight turning radius, so we check your exact address and may recommend a sedan or Navigator instead." },
      { q: "Do you serve the historic bed-and-breakfasts in the District?", a: "Yes, regularly, along with St. Charles Avenue streetcar-line hotels." },
      { q: "Is the rate flat for this route?", a: "Yes, confirmed before you book, with real-time flight tracking included." },
      { q: "Can you plan a full wedding day starting in the Garden District?", a: "Yes, typically as hourly, as-directed charter — see our wedding limo service page for details." },
    ],
    related: [
      { label: "Garden District Limo Service", to: "/garden-district-limo-service" },
      { label: "Garden District & Uptown Transportation Guide", to: "/garden-district-uptown-transportation-guide" },
      { label: "Uptown New Orleans Limo Service", to: "/uptown-new-orleans-limo-service" },
      { label: "MSY to Warehouse District", to: "/msy-to-warehouse-district" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Garden District, New Orleans", "New Orleans", "Louisiana"], serviceType: "Airport car service" },
  },
  {
    slug: "msy-to-warehouse-district",
    type: "service",
    name: "MSY to Warehouse District",
    badge: "Airport Transfer",
    h1: "MSY Airport to Warehouse District Car Service",
    metaTitle: "MSY Airport to Warehouse District Car Service | MSY Limo",
    metaDescription: "Private car service from MSY airport to the Warehouse District — hotels, galleries, National WWII Museum. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "Distance", value: "≈ 14 mi · 20–30 minutes" },
      { label: "Coverage", value: "Julia St, Convention Center Blvd, Arts District" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "The Warehouse District is New Orleans's arts-and-convention neighborhood — boutique hotels, the National WWII Museum, gallery rows on Julia Street, and the Convention Center's steady flow of business travelers — and it's one of our most frequent MSY drop-offs.",
      "The drive from Louis Armstrong International is about 14 miles and 20 to 30 minutes via I-10 East into the CBD, with your chauffeur tracking your flight and adjusting the route through Earhart Boulevard when Convention Center traffic calls for it.",
      "Convention attendees, museum visitors, and guests of the District's boutique hotels — the Ace, Maison de la Luz, the Pontchartrain-adjacent properties — make up most of this route's bookings.",
    ],
    highlights: [
      "Flat-rate pricing confirmed before you ride",
      "Direct drop-off at Warehouse District hotels and the Convention Center",
      "Real-time flight tracking on every MSY pickup",
      "45 minutes of complimentary wait time on domestic arrivals",
      "Sprinter vans available for convention exhibit teams and group check-ins",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "Convention and museum travelers",
        paragraphs: [
          "Convention Center arrivals often come in waves tied to a specific show's schedule, and Sprinter vans are a common request for exhibit teams or groups checking into the same hotel together rather than splitting across several cars.",
          "Visitors headed straight to the National WWII Museum from the airport are a regular booking too, and we're glad to route the drop-off there instead of a hotel when that's the first stop of the day.",
        ],
      },
      {
        h2: "Booking the ride",
        paragraphs: [
          "The flat rate covers the full run regardless of Convention Center event traffic, and your chauffeur monitors conditions before your flight lands to choose the fastest path into the District.",
          "For a multi-stop day combining the Warehouse District with the French Quarter or the Garden District, hourly, as-directed charter keeps one chauffeur with you the whole time.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "Individual Warehouse District drop-offs are usually fine with a day's notice, but a convention week at the Morial Convention Center fills our Sprinter vans fast for exhibit-team and group check-in transfers, so booking two to three weeks before a major show's move-in date is the safer window. Flight tracking and 45 minutes of complimentary domestic wait time are included at no additional cost.",
          "Sedan and SUV transfers cancel free up to 3 hours before pickup; Sprinter van and group bookings follow the 12-hour window. Call (877) 609-1919 to arrange a block of transfers for a convention team arriving on multiple flights.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is the Warehouse District from MSY airport?", a: "About 14 miles, usually 20 to 30 minutes via I-10 East into the CBD." },
      { q: "Do you handle group drop-offs for convention exhibit teams?", a: "Yes, Sprinter vans are a common choice for groups checking in together rather than splitting across several cars." },
      { q: "Can you take us straight to the National WWII Museum?", a: "Yes. We're happy to make the museum your first stop instead of a hotel." },
      { q: "Is the rate flat regardless of Convention Center traffic?", a: "Yes, confirmed before you book, with your chauffeur adjusting the route as needed." },
      { q: "Can you plan a multi-neighborhood day from the Warehouse District?", a: "Yes, typically as hourly, as-directed charter with one chauffeur for the whole day." },
    ],
    related: [
      { label: "Warehouse District & CBD Limo Service", to: "/warehouse-district-cbd-limo-service" },
      { label: "National WWII Museum Transportation", to: "/national-wwii-museum-transportation" },
      { label: "New Orleans Convention Center Transportation", to: "/new-orleans-convention-center-transportation" },
      { label: "MSY to Garden District", to: "/msy-to-garden-district" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Warehouse District, New Orleans", "New Orleans", "Louisiana"], serviceType: "Airport car service" },
  },
  {
    slug: "msy-to-uptown-new-orleans",
    type: "service",
    name: "MSY to Uptown New Orleans",
    badge: "Airport Transfer",
    h1: "MSY Airport to Uptown New Orleans Car Service",
    metaTitle: "MSY Airport to Uptown New Orleans Car Service | MSY Limo",
    metaDescription: "Private car service from MSY airport to Uptown New Orleans — Tulane, Loyola, St. Charles Ave. Flat rates, flight tracking. (877) 609-1919.",
    stats: [
      { label: "Distance", value: "≈ 15 mi · 25–35 minutes" },
      { label: "Coverage", value: "St. Charles Ave, Tulane, Loyola, Freret St" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Uptown New Orleans runs along the St. Charles Avenue streetcar line through Tulane and Loyola's campuses and the Freret Street corridor, and it's where a large share of our university move-in, parents'-weekend and alumni-event bookings start and end.",
      "The drive from Louis Armstrong International is about 15 miles and 25 to 35 minutes via I-10 and either South Carrollton Avenue or the Pontchartrain Expressway, depending on your exact address and the time of day.",
      "Tulane and Loyola families, Uptown hotel guests, and residents booking a routine airport run all use this route, and streetcar-line traffic is one of the first things your chauffeur plans around.",
    ],
    highlights: [
      "Flat-rate pricing confirmed before you ride",
      "Tulane and Loyola move-in, parents' weekend and graduation pickups",
      "Real-time flight tracking on every MSY pickup",
      "45 minutes of complimentary wait time on domestic arrivals",
      "Chauffeurs who plan around St. Charles Ave streetcar traffic",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "University travel through Uptown",
        paragraphs: [
          "Move-in weekends, parents' weekend and commencement bring a predictable spike in Tulane and Loyola family travel, and we run those as flat-rate bookings rather than fares that climb when campus traffic is heaviest. See our Tulane and Loyola university transportation pages for details specific to each campus.",
          "A Sprinter van is often the right call for a family moving a student in with a full car's worth of belongings, or for a group of parents sharing one ride from the same flight.",
        ],
      },
      {
        h2: "Booking the ride",
        paragraphs: [
          "The flat rate covers the full run and accounts for St. Charles Avenue streetcar crossings and game-day traffic near the universities when it applies.",
          "For a day that combines an Uptown pickup with a French Quarter dinner or a Garden District stop, hourly, as-directed charter keeps one chauffeur and vehicle with you throughout.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A single Uptown transfer books easily on short notice most of the year, but Tulane and Loyola move-in weekend, parents' weekend and commencement fill vehicles quickly, so reserving two to three weeks ahead of those specific dates is the best way to guarantee a Sprinter van for a family moving a full carload. Flight tracking and 45 minutes of complimentary domestic wait time are included on every pickup.",
          "Sedan and SUV fares cancel free up to 3 hours before pickup; Sprinter van and event bookings follow the 12-hour window. Call (877) 609-1919 ahead of a university weekend to lock in your preferred vehicle class.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Uptown New Orleans from MSY airport?", a: "About 15 miles, usually 25 to 35 minutes via I-10 and South Carrollton Avenue or the Pontchartrain Expressway." },
      { q: "Do you handle Tulane and Loyola move-in weekends?", a: "Yes, as flat-rate bookings, with Sprinter vans available for families moving a full carload of belongings." },
      { q: "Does streetcar traffic on St. Charles Avenue affect the drive?", a: "Your chauffeur plans around it; it's a factor we account for rather than something that catches us off guard." },
      { q: "Is the rate flat for this route?", a: "Yes, confirmed before you book, with real-time flight tracking included." },
      { q: "Can you combine an Uptown pickup with other New Orleans stops?", a: "Yes, typically as hourly, as-directed charter for a multi-stop day." },
    ],
    related: [
      { label: "Uptown New Orleans Limo Service", to: "/uptown-new-orleans-limo-service" },
      { label: "Tulane University Transportation", to: "/tulane-university-transportation" },
      { label: "Loyola University Transportation", to: "/loyola-university-transportation" },
      { label: "Garden District & Uptown Transportation Guide", to: "/garden-district-uptown-transportation-guide" },
      { label: "MSY to Garden District", to: "/msy-to-garden-district" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Uptown New Orleans", "New Orleans", "Louisiana"], serviceType: "Airport car service" },
  },
  {
    slug: "msy-to-bywater-marigny",
    type: "service",
    name: "MSY to Marigny & Bywater",
    badge: "Airport Transfer",
    h1: "MSY Airport to Marigny & Bywater Car Service",
    metaTitle: "MSY Airport to Marigny & Bywater Car Service | MSY Limo",
    metaDescription: "Private car service from MSY airport to the Marigny & Bywater — Frenchmen St, live music venues. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "Distance", value: "≈ 17 mi · 25–35 minutes" },
      { label: "Coverage", value: "Frenchmen St, Esplanade Ave, St. Claude Ave" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "The Faubourg Marigny and Bywater — colorful shotgun houses, Frenchmen Street's live-music strip, and a growing cluster of boutique guesthouses — sit just downriver from the French Quarter, and this route is a regular request for music-focused visitors who'd rather skip the Quarter's hotel scene entirely.",
      "The drive from Louis Armstrong International is about 17 miles and 25 to 35 minutes via I-10 and either Elysian Fields Avenue or North Claiborne Avenue, depending on the exact block.",
      "Guesthouse guests, Frenchmen Street regulars, and visitors staying through the neighborhood's gallery and music-venue circuit are our most frequent bookings on this route.",
    ],
    highlights: [
      "Flat-rate pricing confirmed before you ride",
      "Direct drop-off at Marigny and Bywater guesthouses",
      "Real-time flight tracking on every MSY pickup",
      "45 minutes of complimentary wait time on domestic arrivals",
      "Chauffeurs familiar with the neighborhood's narrower residential blocks",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "Frenchmen Street and the music-venue circuit",
        paragraphs: [
          "Visitors coming for the live-music scene along Frenchmen Street often prefer to land in the Marigny rather than the French Quarter, and a late-night pickup after a show is as common a request as the initial airport drop-off. Our Frenchmen Street live-music transportation guide covers the evening side of that trip in more detail.",
          "Some Marigny and Bywater streets are narrower residential blocks rather than wide avenues, and your chauffeur knows which approach works best for a given address.",
        ],
      },
      {
        h2: "Booking the ride",
        paragraphs: [
          "The flat rate is confirmed before you fly, with your chauffeur tracking your inbound flight and adjusting for any delay automatically.",
          "For an evening that includes Frenchmen Street plus a French Quarter stop, hourly, as-directed charter keeps one chauffeur with you for the whole night rather than booking separate point-to-point rides.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "Most Marigny and Bywater transfers, including late-night pickups after a Frenchmen Street show, are bookable same-day or next-day; a weekend combining an airport arrival with multiple music-venue stops is easiest to plan a few days ahead so one chauffeur can stay with you the whole evening. Flight tracking and 45 minutes of complimentary domestic wait time are included on the airport leg at no extra charge.",
          "Sedan and SUV fares cancel free up to 3 hours before pickup; Sprinter van and event bookings follow the 12-hour window. Call (877) 609-1919 and we'll build the night's stops into one hourly reservation.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is the Marigny/Bywater from MSY airport?", a: "About 17 miles, usually 25 to 35 minutes via I-10 and Elysian Fields Avenue or North Claiborne Avenue." },
      { q: "Can you pick us up late at night after a Frenchmen Street show?", a: "Yes, late-night pickups after live music are a common request on this route." },
      { q: "Do you serve the Marigny and Bywater's narrower residential streets?", a: "Yes, your chauffeur knows the neighborhood's layout and the best approach for a given address." },
      { q: "Is the rate flat for this route?", a: "Yes, confirmed before you book, with real-time flight tracking included." },
      { q: "Can you combine Frenchmen Street with a French Quarter stop the same night?", a: "Yes, typically as hourly, as-directed charter with one chauffeur for the whole evening." },
    ],
    related: [
      { label: "Marigny & Bywater Limo Service", to: "/marigny-bywater-limo-service" },
      { label: "Frenchmen Street Live Music Transportation", to: "/blog/frenchmen-street-live-music-night-transportation" },
      { label: "French Quarter Limo Service", to: "/french-quarter-limo-service" },
      { label: "House of Blues New Orleans Transportation", to: "/house-of-blues-new-orleans-transportation" },
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Marigny, New Orleans", "Bywater, New Orleans", "New Orleans", "Louisiana"], serviceType: "Airport car service" },
  },
  {
    slug: "msy-to-thibodaux",
    type: "service",
    name: "MSY to Thibodaux",
    badge: "Airport Transfer",
    h1: "MSY Airport to Thibodaux Car Service",
    metaTitle: "MSY Airport to Thibodaux Car Service | MSY Limo",
    metaDescription: "Private car service from MSY airport to Thibodaux, LA. Nicholls State, weddings & corporate transfers. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "Distance", value: "≈ 52 mi · 60–70 minutes" },
      { label: "Coverage", value: "Downtown Thibodaux, Nicholls State" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Thibodaux travelers flying through Louis Armstrong International get a committed, flight-tracked transfer down US-90 rather than an on-demand request that may or may not get accepted for a 52-mile fare.",
      "The drive runs about 52 miles and 60 to 70 minutes, the same corridor our chauffeurs drive daily toward Raceland and Houma, so there's nothing unfamiliar about the route.",
      "Nicholls State families, Bayou Lafourche wedding guests, and business travelers connecting to Thibodaux employers are our most frequent bookings on this run.",
    ],
    highlights: [
      "Flat-rate pricing confirmed before you ride",
      "Real-time flight tracking on every MSY pickup",
      "45 minutes of complimentary wait time on domestic arrivals",
      "Nicholls State move-in and parents'-weekend transfers",
      "Sprinter vans for wedding guest groups",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "The drive to Thibodaux",
        paragraphs: [
          "US-90 carries most of the trip, a corridor we already know well from Raceland and Houma bookings, so timing is predictable rather than improvised.",
          "Flight tracking means a delayed arrival doesn't leave your chauffeur stranded at the curb, and a delayed drive doesn't leave your onward plans stranded either.",
        ],
      },
      {
        h2: "Nicholls State and wedding guest travel",
        paragraphs: [
          "Move-in, parents' weekend and commencement bring predictable spikes in demand, and we run those as flat-rate bookings reserved well ahead of the busiest dates.",
          "Wedding guests flying in for a Bayou Lafourche ceremony are a regular group booking, usually handled with a Sprinter van delivering everyone straight to the venue or hotel block.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A single airport-to-Thibodaux transfer is typically easy to book within a day or two of travel; a group of Nicholls State families on commencement weekend or a block of wedding guests flying in the same afternoon should book two to three weeks ahead to guarantee a Sprinter van rather than splitting across several sedans. Flight tracking and 45 minutes of complimentary domestic wait time are included in every quoted rate.",
          "Sedan and SUV fares cancel free up to 3 hours before pickup; Sprinter van and group bookings follow the 12-hour window. Call (877) 609-1919 to coordinate pickups for several guests arriving on different flights.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Thibodaux from MSY airport?", a: "About 52 miles, usually 60 to 70 minutes via US-90." },
      { q: "Do you serve Nicholls State University travel?", a: "Yes, including move-in, parents' weekend and commencement, booked as flat-rate transfers." },
      { q: "Can you bring a group of wedding guests from MSY to Thibodaux?", a: "Yes, usually in a Sprinter van delivered straight to the venue or hotel block on a flat rate." },
      { q: "Is the rate flat for this route?", a: "Yes, confirmed before you book, with real-time flight tracking included." },
      { q: "Do you serve Thibodaux-area corporate travel too?", a: "Yes. See our Thibodaux limo service page for corporate account details." },
    ],
    related: [
      { label: "Thibodaux, LA Limo Service", to: "/thibodaux-la-limo-service" },
      { label: "MSY to Houma", to: "/msy-to-houma" },
      { label: "Raceland, LA Limo Service", to: "/raceland-la-limo-service" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Thibodaux, LA", "Lafourche Parish", "Louisiana"], serviceType: "Airport car service" },
  },
  {
    slug: "msy-to-breaux-bridge",
    type: "service",
    name: "MSY to Breaux Bridge",
    badge: "Airport Transfer",
    h1: "MSY Airport to Breaux Bridge Car Service",
    metaTitle: "MSY Airport to Breaux Bridge Car Service | MSY Limo",
    metaDescription: "Private car service from MSY to Breaux Bridge, LA, the Crawfish Capital. Weddings, Cajun Country tours. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "Distance", value: "≈ 130 mi · 2–2.25 hours" },
      { label: "Coverage", value: "Downtown, Lake Martin, Cajun Country" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Breaux Bridge, the self-declared Crawfish Capital of the World and gateway to the Lake Martin swamp and Cajun Country's zydeco dance halls, is a committed-reservation route for us rather than an on-demand gamble — the distance puts it beyond where most rideshare drivers will go in either direction.",
      "The drive from Louis Armstrong International is about 130 miles and 2 to 2.25 hours, west on I-10 across the Atchafalaya Basin Bridge before the short run into town near Lafayette.",
      "Crawfish Festival visitors, Lake Martin tour groups, and wedding parties at Cajun Country venues make up most of our Breaux Bridge bookings.",
    ],
    highlights: [
      "Committed reservations for the 130-mile MSY run, booked both ways",
      "Crawfish Festival weekend group transportation",
      "Lake Martin swamp tour transfers",
      "Wedding transportation for Cajun Country venues",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "MSY to Breaux Bridge, booked both ways",
        paragraphs: [
          "At 130 miles, this trip is reserved in advance rather than requested on demand — the Atchafalaya Basin Bridge crossing is a scenic eighteen miles, but it puts real distance between you and a rideshare driver willing to make the return trip.",
          "Crawfish Festival weekends in particular see a spike in demand, and booking well ahead secures your vehicle before the festival calendar fills.",
        ],
      },
      {
        h2: "Lake Martin tours and Cajun Country weddings",
        paragraphs: [
          "Lake Martin's swamp tours draw visitors year-round, and a Sprinter van is typically the most efficient way to move a tour group from MSY to the dock and back in one vehicle.",
          "Weddings at Cajun Country venues are planned as a full-day itinerary, the same way we plan any wedding in our service area, with a chauffeur who stays with the wedding party throughout.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "At 130 miles, we recommend booking a Breaux Bridge transfer at least a week ahead for a standard trip and two to three weeks ahead for Crawfish Festival weekend or a Cajun Country wedding, since both directions need a committed chauffeur rather than an on-demand one willing to make the long trip back. Flight tracking and 45 minutes of complimentary domestic wait time are included in the flat rate.",
          "Sedan and SUV fares cancel free up to 3 hours before pickup; Sprinter van, limousine and festival or wedding group bookings follow the 12-hour window. Call (877) 609-1919 to reserve the round trip together.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Breaux Bridge from MSY airport?", a: "About 130 miles, roughly 2 to 2.25 hours via I-10 West across the Atchafalaya Basin Bridge." },
      { q: "Do you run group transportation for Crawfish Festival weekend?", a: "Yes, booked as a flat-rate group transfer — reserve well ahead, since that weekend books out first." },
      { q: "Can you take a group to Lake Martin for a swamp tour?", a: "Yes, typically in a Sprinter van that keeps the whole group together for the trip." },
      { q: "Is the return trip from Breaux Bridge guaranteed?", a: "Yes. Both legs are reserved at booking, before you fly." },
      { q: "Do you handle weddings at Cajun Country venues?", a: "Yes, planned as a full wedding-day itinerary with a dedicated chauffeur." },
    ],
    related: [
      { label: "Lafayette, LA Limo Service", to: "/lafayette-la-limo-service" },
      { label: "MSY to Lafayette", to: "/msy-to-lafayette" },
      { label: "New Iberia, LA Limo Service", to: "/new-iberia-la-limo-service" },
      { label: "Swamp Tour Transportation", to: "/swamp-tour-transportation" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Breaux Bridge, LA", "St. Martin Parish", "Louisiana"], serviceType: "Airport car service" },
  },

  // ───────────────────────── Occasion, industry & attraction verticals ─────────────────────────
  {
    slug: "new-orleans-birthday-party-limo-service",
    type: "service",
    name: "New Orleans Birthday Party Limo",
    badge: "Celebrations",
    h1: "New Orleans Birthday Party Limo Service",
    metaTitle: "New Orleans Birthday Party Limo Service | MSY Limo",
    metaDescription: "Birthday party limo service in New Orleans — milestone birthdays, group nights out, flat rates by the hour. Call (877) 609-1919 to book.",
    stats: [
      { label: "Pricing", value: "Hourly, as-directed charter" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Coverage", value: "Citywide" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "A milestone birthday deserves a night where nobody has to think about parking, surge pricing, or who's designated to drive, and our hourly birthday party limo service is built around exactly that — one vehicle, one chauffeur, and a schedule that bends to however the night actually unfolds.",
      "Whether it's a 21st, a 30th, a 40th or a big round number further on, we build the evening around your plan: dinner in the French Quarter, a stop at a Warehouse District bar, a late finish on Frenchmen Street — all on one hourly reservation rather than a string of separate rideshare calls.",
      "Groups book a stretch limousine or a Sprinter van to keep everyone together for the whole night, while smaller parties often prefer a Lincoln Navigator or a sedan for the guest of honor.",
    ],
    highlights: [
      "One chauffeur and vehicle for the whole night, as-directed",
      "Multi-stop itineraries built around your plan, not a fixed route",
      "Sprinter vans and stretch limousines for larger groups",
      "Flat hourly rate confirmed before you book — no surge",
      "Complimentary champagne toast commonly included",
      "Licensed, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "Planning a birthday night, stop by stop",
        paragraphs: [
          "Most birthday bookings run three to five hours, moving between a dinner reservation, a bar or two, and a final destination, with your chauffeur staying nearby and ready rather than dispatched fresh for each leg.",
          "If the night includes somewhere with narrow streets — deep in the French Quarter, for instance — we plan a perimeter pickup point in advance so nobody loses time waiting on a block the vehicle can't reach.",
        ],
      },
      {
        h2: "Vehicles for every group size",
        paragraphs: [
          "A sedan or Navigator suits a couple or a small group celebrating quietly; a Sprinter van or stretch limousine keeps a larger group together for a proper night out, especially useful when the birthday crowd is splitting a hotel block.",
          "Call ahead for a popular Friday or Saturday night, since weekend evenings are our highest-demand hourly bookings.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A weekday or off-season birthday booking can often be arranged with just a few days' notice, but Friday and Saturday nights are our highest-demand hourly window, and a milestone birthday worth planning around deserves two to three weeks of lead time to guarantee a stretch limousine or Sprinter van for the date you want. The flat hourly rate, confirmed before you book, already covers the chauffeur staying with you from the first stop to the last.",
          "Hourly, as-directed bookings follow the standard 12-hour cancellation window for Sprinter vans and limousines, or 3 hours for a sedan or SUV booking. Call (877) 609-1919 to build the night's itinerary and reserve your vehicle.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How is a birthday party limo booking priced?", a: "Hourly, as-directed charter, typically a three-hour minimum, with the rate confirmed before you book and no surge pricing added." },
      { q: "Can we make multiple stops during the night?", a: "Yes. That's exactly what hourly, as-directed service is built for — one chauffeur who stays with you from the first stop to the last." },
      { q: "What vehicle works best for a group birthday celebration?", a: "A Sprinter van or stretch limousine for larger groups; a sedan or Lincoln Navigator for smaller celebrations." },
      { q: "Can you pick us up deep in the French Quarter?", a: "We'll plan a nearby perimeter pickup point in advance, since several Quarter streets are closed to vehicle traffic at night." },
      { q: "Is a champagne toast included?", a: "A complimentary champagne toast is commonly included — mention it when you book so it's ready for your celebration." },
    ],
    related: [
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "New Orleans Anniversary Limo Service", to: "/new-orleans-anniversary-limo-service" },
      { label: "New Orleans Bachelorette Party Transportation", to: "/new-orleans-bachelorette-party-transportation" },
      { label: "New Orleans Stretch Limo Service", to: "/new-orleans-stretch-limo-rental" },
      { label: "Special Events", to: "/services/special-events" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans", "Greater New Orleans Area", "Louisiana"], serviceType: "Birthday party chauffeur service" },
  },
  {
    slug: "new-orleans-funeral-limousine-service",
    type: "service",
    name: "New Orleans Funeral Limousine",
    badge: "Funeral & Memorial Service",
    h1: "New Orleans Funeral Limousine Car Service",
    metaTitle: "New Orleans Funeral Limousine Service | MSY Limo",
    metaDescription: "Dignified funeral limousine service in New Orleans — family cars, out-of-town guest transfers, flat rates. Call (877) 609-1919 to arrange.",
    stats: [
      { label: "Coverage", value: "Citywide & surrounding parishes" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinter vans" },
      { label: "Pricing", value: "Flat rate by service" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "A funeral day calls for transportation that simply works, quietly and on time, so a family can focus on the service and each other rather than logistics. Our funeral limousine service provides a dedicated vehicle and a professional, appropriately dressed chauffeur for the family car, out-of-town guest transfers, or a procession vehicle, coordinated directly with your funeral home's schedule.",
      "We also handle the practical side that often gets overlooked — airport transfers for out-of-town family flying into MSY on short notice, timed and flight-tracked the same as any other arrival, and a quiet, dignified ride from the airport straight to a hotel or the family home.",
      "Every booking is confirmed as a flat rate in advance, with no last-minute price changes added to what is already a difficult day.",
    ],
    highlights: [
      "Dedicated family car coordinated with your funeral home's schedule",
      "Flight-tracked MSY transfers for out-of-town family",
      "Sprinter vans for larger family groups",
      "Professional, appropriately dressed chauffeurs",
      "Flat rate confirmed in advance — no surprises",
      "Available on short notice, 24/7",
    ],
    sections: [
      {
        h2: "Coordinating with your funeral home",
        paragraphs: [
          "We work directly with your funeral home or family contact to confirm pickup times, the service location, and the cemetery or reception address, so the vehicle and chauffeur are simply present and ready rather than something the family has to manage on the day itself.",
          "Short-notice bookings are common for this kind of service, and we accommodate them whenever possible — call directly rather than booking online if your timeline is tight.",
        ],
      },
      {
        h2: "Out-of-town family and airport transfers",
        paragraphs: [
          "Family flying into MSY on short notice gets the same flight tracking and complimentary wait time as any other arrival, so an unexpected delay doesn't add stress to an already difficult trip.",
          "A Sprinter van is often the practical choice when several family members are arriving on the same or nearby flights and want to travel together to the service or the family home.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "Funeral transportation is one of the few services we routinely book on short notice, often within 24 to 48 hours of a call, because we understand the timeline isn't always in a family's control; a pre-planned memorial service or a larger out-of-town family group benefits from a few days' advance notice when that's possible, but it's never required. The flat rate quoted at booking includes coordination directly with your funeral home and flight tracking for any out-of-town arrivals.",
          "Given the nature of this service, cancellations or timing changes are handled directly with your dispatch contact rather than a fixed policy window — call (877) 609-1919 and we'll adjust as the day requires.",
        ],
      },
    ],
    vehicles: [
      { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "the family car" },
      { name: "Lincoln Navigator", cls: "Premium SUV", seats: 6, best: "family groups and luggage" },
      { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "out-of-town family airport transfers" },
      { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "larger family groups traveling together" },
      { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "immediate family transport" },
      { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "memorial processions when requested" },
    ],
    faqs: [
      { q: "How far in advance do you need to arrange funeral transportation?", a: "We accommodate short-notice requests whenever possible — call us directly rather than booking online when your timeline is tight." },
      { q: "Do you coordinate directly with the funeral home?", a: "Yes. We confirm pickup times and locations with your funeral home or family contact so the day runs without you managing the logistics." },
      { q: "Can you handle airport transfers for out-of-town family?", a: "Yes, with the same flight tracking and complimentary wait time as any other MSY arrival." },
      { q: "What's the best vehicle for a larger family group?", a: "A Sprinter van, which keeps family traveling on the same or nearby flights together in one vehicle." },
      { q: "Is the rate confirmed in advance?", a: "Yes, as a flat rate confirmed before the day, with no added charges." },
    ],
    related: [
      { label: "Contact Us", to: "/contact" },
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "MSY Airport Arrival Pickup", to: "/msy-airport-arrival-pickup" },
      { label: "New Orleans Black Car Service", to: "/new-orleans-black-car-service" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans", "Greater New Orleans Area", "Louisiana"], serviceType: "Funeral limousine service" },
  },
  {
    slug: "bayou-classic-transportation",
    type: "event",
    name: "Bayou Classic",
    badge: "Annual Event",
    h1: "Bayou Classic Transportation",
    metaTitle: "Bayou Classic Transportation | Superdome Car Service",
    metaDescription: "Bayou Classic weekend transportation in New Orleans — Caesars Superdome car service, group shuttles, flat rates. Call (877) 609-1919.",
    stats: [
      { label: "Venue", value: "Caesars Superdome" },
      { label: "Weekend", value: "Thanksgiving weekend, annually" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Bayou Classic weekend fills New Orleans every Thanksgiving with alumni, bands and families from two of the country's most storied HBCU football programs, and the Superdome area turns into one of the city's busiest traffic pockets of the entire year. We run flat-rate transportation for the whole weekend rather than letting you discover the parking and rideshare surge on game day.",
      "Most bookings combine an MSY airport transfer — flight-tracked, the same as any other arrival — with game-day drop-off and pickup at the Superdome, plus whatever alumni events, tailgates or hotel stays fill the rest of the weekend.",
      "Because Thanksgiving weekend is also a heavy travel weekend on its own, both for Bayou Classic and for family holiday travel, booking your car service as early as possible is the single best way to lock in your vehicle before the weekend sells out.",
    ],
    highlights: [
      "Flat-rate pricing — no Thanksgiving-weekend or game-day surge",
      "Flight-tracked MSY transfers for out-of-town alumni and families",
      "Direct Superdome drop-off and post-game pickup coordination",
      "Sprinter vans for alumni groups and tailgate parties",
      "Hourly charters for a full weekend of events",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "Game-day logistics at the Superdome",
        paragraphs: [
          "We drop you as close to the Superdome entrance as event-day traffic control allows, then stage nearby so your vehicle is moving toward the pickup point as the stadium empties rather than starting from a distant lot.",
          "Post-game pickup is coordinated by text with your chauffeur, the same system we use for every Superdome event — see our Caesars Superdome transportation page for more on how that works.",
        ],
      },
      {
        h2: "Booking a full Bayou Classic weekend",
        paragraphs: [
          "Many groups book an hourly charter that covers an MSY arrival, a tailgate, the game itself, and an evening alumni event, keeping one chauffeur and vehicle for the whole stay rather than arranging separate rides for each piece.",
          "Thanksgiving weekend books out early for both hotels and ground transportation citywide, so reserving as soon as your travel dates are set is the best way to guarantee a Sprinter van or stretch limousine for a larger group.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "Thanksgiving weekend books out earlier than almost any other date on our calendar, for both Bayou Classic travel and family holiday travel competing for the same vehicles, so reserving as soon as your travel dates are confirmed — ideally a month or more ahead — is the only reliable way to guarantee a Sprinter van or stretch limousine for alumni groups. Flight tracking and 45 minutes of complimentary domestic wait time are included on every MSY pickup at no extra charge.",
          "Sedan and SUV transfers cancel free up to 3 hours before pickup; Sprinter van and group bookings follow the 12-hour window. Call (877) 609-1919 early to lock in Bayou Classic weekend transportation.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "What weekend is Bayou Classic held?", a: "Thanksgiving weekend, annually, at the Caesars Superdome in New Orleans." },
      { q: "Can you handle both an MSY pickup and Superdome drop-off the same day?", a: "Yes, these are commonly booked together, with your chauffeur tracking the flight and then handling the Superdome drop-off directly." },
      { q: "Is pricing higher for Bayou Classic weekend?", a: "No. Your flat rate is confirmed before you book, with no Thanksgiving-weekend or game-day surge added." },
      { q: "Do you handle alumni group and tailgate transportation?", a: "Yes, usually with a Sprinter van that keeps a larger group together for the day." },
      { q: "How far ahead should we book for Bayou Classic?", a: "As early as your travel dates are confirmed — Thanksgiving weekend books out quickly across both hotels and ground transportation citywide." },
    ],
    related: [
      { label: "Caesars Superdome Transportation", to: "/caesars-superdome-transportation" },
      { label: "Sugar Bowl & New Year's Superdome Transportation", to: "/sugar-bowl-new-years-superdome-transportation" },
      { label: "Special Events", to: "/services/special-events" },
      { label: "MSY Airport Arrival Pickup", to: "/msy-airport-arrival-pickup" },
      { label: "New Orleans Party Bus Transportation", to: "/new-orleans-party-bus-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans", "Caesars Superdome", "Louisiana"], serviceType: "Event transportation" },
  },
  {
    slug: "new-orleans-wine-food-experience-transportation",
    type: "event",
    name: "NOWFE",
    badge: "Annual Event",
    h1: "New Orleans Wine & Food Experience Transportation",
    metaTitle: "NOWFE Transportation | New Orleans Wine & Food Experience",
    metaDescription: "Transportation for the New Orleans Wine & Food Experience (NOWFE) — French Quarter venues, no driving after tastings. Call (877) 609-1919.",
    stats: [
      { label: "Timing", value: "Spring, annually" },
      { label: "Venues", value: "French Quarter & CBD" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "The New Orleans Wine & Food Experience spreads its seminars, grand tastings and chef dinners across French Quarter and CBD venues every spring, and transportation between them is exactly the kind of detail a reserved chauffeur handles better than driving yourself — nobody should be behind the wheel after an afternoon of tastings.",
      "We run hourly, as-directed charter for the festival's multi-venue days, moving you between a hotel, a tasting venue and a chef dinner on one reservation rather than several separate rides, and a flat-rate MSY transfer for anyone flying in for the weekend.",
      "Groups attending together often book a Sprinter van to move between venues as one party, which also solves the parking problem that comes with several of the festival's most popular French Quarter and CBD locations.",
    ],
    highlights: [
      "No one has to drive after a tasting or a chef dinner",
      "Hourly charter covering multiple festival venues in one day",
      "Flat-rate MSY transfers for out-of-town festival guests",
      "Sprinter vans for groups attending together",
      "Chauffeurs who know French Quarter and CBD venue staging",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "Moving between tastings, seminars and dinners",
        paragraphs: [
          "The festival's events are spread across multiple French Quarter and CBD venues over several days, and an hourly reservation keeps the same chauffeur and vehicle with you from one stop to the next rather than booking a fresh ride each time.",
          "Grand tasting venues and chef dinners can end at unpredictable times, and your chauffeur plans to be nearby and ready rather than dispatched only when you call.",
        ],
      },
      {
        h2: "Flying in for the festival",
        paragraphs: [
          "Out-of-town guests flying into MSY for the weekend get the same flight tracking and complimentary wait time as any other arrival, with a direct transfer to a French Quarter or CBD hotel.",
          "Groups of friends or a company's hospitality team attending together typically book a Sprinter van, which also sidesteps parking near the festival's busiest venues.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "NOWFE weekend fills hotel blocks and ground transportation across the French Quarter and CBD quickly each spring, so booking two to three weeks ahead of the festival dates is the safest window for a group wanting a Sprinter van for multiple venues over several days. Flight tracking for out-of-town guests and 45 minutes of complimentary domestic wait time are included at no extra charge.",
          "Sedan and SUV fares cancel free up to 3 hours before pickup; Sprinter van and multi-day hourly bookings follow the 12-hour window. Call (877) 609-1919 to map out a multi-venue festival schedule in advance.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "When is the New Orleans Wine & Food Experience held?", a: "Each spring, with seminars, grand tastings and chef dinners spread across French Quarter and CBD venues." },
      { q: "Can you move us between multiple festival venues in one day?", a: "Yes, that's exactly what hourly, as-directed charter is for — one chauffeur with you from venue to venue." },
      { q: "Do you handle MSY transfers for festival weekend guests?", a: "Yes, with the same flight tracking and wait time included as any other arrival." },
      { q: "What's the best vehicle for a group attending together?", a: "A Sprinter van, which also solves parking near the festival's most popular venues." },
      { q: "Is the rate flat for festival-weekend bookings?", a: "Yes, confirmed before you book, with no surge pricing." },
    ],
    related: [
      { label: "French Quarter Limo Service", to: "/french-quarter-limo-service" },
      { label: "French Quarter Festival Transportation", to: "/french-quarter-festival-transportation" },
      { label: "Warehouse District & CBD Limo Service", to: "/warehouse-district-cbd-limo-service" },
      { label: "Special Events", to: "/services/special-events" },
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["French Quarter, New Orleans", "New Orleans", "Louisiana"], serviceType: "Event transportation" },
  },
  {
    slug: "fair-grounds-race-course-transportation",
    type: "event",
    name: "Fair Grounds Race Course",
    badge: "Horse Racing",
    h1: "Fair Grounds Race Course Transportation",
    metaTitle: "Fair Grounds Race Course Transportation | MSY Limo",
    metaDescription: "Private car service to Fair Grounds Race Course in New Orleans — race days, clubhouse reservations, flat rates. Call (877) 609-1919.",
    stats: [
      { label: "Venue", value: "Fair Grounds Race Course & Slots" },
      { label: "Season", value: "Thanksgiving through late March" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinter vans" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Fair Grounds Race Course runs live thoroughbred racing from Thanksgiving through late March — a different crowd and a different calendar than the same venue's spring Jazz Fest weekends — and we run it the same way we run every New Orleans venue: a flat rate, a drop-off as close to the gate as track-day traffic allows, and a pickup coordinated for whenever your day ends.",
      "Clubhouse reservations, a day at the rail with friends, and corporate hospitality bookings for a company outing are the most common reasons groups book this route, and a Sprinter van is the easiest way to keep a group of six to thirteen together for the day.",
      "Racing season weekends can bring real crowds on marquee stakes days, and reserving ahead means your car is simply there when you're ready to leave rather than competing with everyone else trying to find a ride home at once.",
    ],
    highlights: [
      "Flat-rate pricing — no surge on big stakes-race days",
      "Drop-off as close to the gate as track-day traffic allows",
      "Clubhouse and corporate hospitality group bookings",
      "Sprinter vans for groups of six to thirteen",
      "Pickup coordinated for whenever your day ends",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "Racing season at the Fair Grounds",
        paragraphs: [
          "The live racing season runs Thanksgiving through late March, a distinct calendar from the venue's better-known spring Jazz Fest weekends, and we treat it as its own kind of booking — generally lighter traffic than a festival day, but still worth a reservation on marquee stakes days.",
          "Clubhouse reservations and corporate hospitality tables are common group bookings, and we coordinate pickup for whenever the group decides to leave rather than a fixed time set in advance.",
        ],
      },
      {
        h2: "Booking a day at the races",
        paragraphs: [
          "A Sprinter van keeps a group of friends or coworkers together for the drive out and back, which also means nobody has to think about parking or a post-race rideshare wait.",
          "For a day that includes lunch beforehand or a stop afterward, hourly, as-directed charter is the better fit than a single point-to-point fare.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A single race-day transfer is usually easy to book within a day or two during the regular season, but marquee stakes days and opening weekend in late November draw bigger crowds, and clubhouse or corporate hospitality groups should book a Sprinter van a week or two ahead to guarantee availability. The flat rate, confirmed before you book, already includes coordinating pickup for whenever your group is ready to leave.",
          "Sedan and SUV fares cancel free up to 3 hours before pickup; Sprinter van and group bookings follow the 12-hour window. Call (877) 609-1919 ahead of a big stakes-race Saturday.",
        ],
      },
    ],
    vehicles: [
      { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "a day at the rail with friends" },
      { name: "Lincoln Navigator", cls: "Premium SUV", seats: 6, best: "clubhouse groups" },
      { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "corporate hospitality outings" },
      { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "larger groups of six to thirteen" },
      { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "a stylish arrival for stakes days" },
      { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "a celebratory group outing" },
    ],
    faqs: [
      { q: "When does Fair Grounds Race Course run live racing?", a: "From Thanksgiving through late March, a different season from the venue's spring Jazz Fest weekends." },
      { q: "Can you drop us close to the clubhouse entrance?", a: "Yes, as close as track-day traffic control allows." },
      { q: "What's the best vehicle for a group outing to the races?", a: "A Sprinter van for groups of six to thirteen; a sedan or Navigator for smaller groups." },
      { q: "Is pricing higher on big stakes-race days?", a: "No. Your flat rate is confirmed before you book, with no surge pricing." },
      { q: "Can you time pickup for whenever we're ready to leave?", a: "Yes, we coordinate pickup by text for whenever your group decides to head out." },
    ],
    related: [
      { label: "Jazz Fest Fair Grounds Transportation", to: "/jazz-fest-fair-grounds-transportation" },
      { label: "Limo Service Near Jazz Fest Fair Grounds", to: "/limo-service-near-jazz-fest-fair-grounds" },
      { label: "Mid-City New Orleans Limo Service", to: "/mid-city-new-orleans-limo-service" },
      { label: "Special Events", to: "/services/special-events" },
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Fair Grounds Race Course", "Mid-City, New Orleans", "New Orleans", "Louisiana"], serviceType: "Event transportation" },
  },
  {
    slug: "treasure-chest-casino-transportation",
    type: "event",
    name: "Treasure Chest Casino",
    badge: "Casino",
    h1: "Treasure Chest Casino Transportation",
    metaTitle: "Treasure Chest Casino Transportation | Kenner Car Service",
    metaDescription: "Private car service to Treasure Chest Casino in Kenner — MSY airport transfers, group outings, flat rates. Call (877) 609-1919.",
    stats: [
      { label: "Location", value: "Kenner, LA, Lake Pontchartrain" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinter vans" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Treasure Chest Casino sits on the Lake Pontchartrain shoreline in Kenner, a short, predictable run from MSY that makes it a natural stop for visitors landing with a few hours to spare before a hotel check-in or a flight home.",
      "We run both flat-rate point-to-point transfers and hourly, as-directed charter for a casino visit, depending on whether it's a quick stop on the way to or from the airport or a full evening out.",
      "Group outings — a birthday celebration, a bachelor or bachelorette stop, or simply a group of friends wanting one vehicle for the night — are common bookings, usually in a Sprinter van or stretch limousine.",
    ],
    highlights: [
      "Short, predictable run from MSY and Kenner hotels",
      "Flat rate or hourly charter, depending on your plan",
      "Group bookings for birthdays, bachelor/bachelorette and nights out",
      "Pickup coordinated for whenever you're ready to leave",
      "Sprinter vans and stretch limousines for larger groups",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "A convenient stop near MSY and Kenner hotels",
        paragraphs: [
          "Because Treasure Chest sits so close to both the airport and Kenner's hotel corridor, it's a common add-on for travelers with a layover-length gap before a flight or a check-in, booked as a simple flat-rate transfer.",
          "For a full night out, hourly charter lets you set your own return time rather than committing to a fixed pickup in advance.",
        ],
      },
      {
        h2: "Group nights at the casino",
        paragraphs: [
          "Birthday celebrations, bachelor and bachelorette outings, and groups of friends wanting one vehicle for the whole night are regular bookings, and a Sprinter van or stretch limousine keeps everyone together rather than splitting into separate rides.",
          "Pickup is coordinated by text with your chauffeur for whenever your group is ready, the same as any other hourly booking.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "Most Treasure Chest transfers, including a quick stop on the way to or from MSY, are easy to book same-day or next-day; a larger birthday or bachelor/bachelorette group wanting a Sprinter van or stretch limousine for a full night out is worth reserving a week ahead, especially for a Friday or Saturday. Flight tracking on the airport leg and 45 minutes of complimentary domestic wait time are included at no extra charge.",
          "Sedan and SUV fares cancel free up to 3 hours before pickup; Sprinter van and limousine group bookings follow the 12-hour window. Call (877) 609-1919 to set your return pickup time, whether that's fixed or open-ended.",
        ],
      },
    ],
    vehicles: [
      { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "a quick stop before a flight" },
      { name: "Lincoln Navigator", cls: "Premium SUV", seats: 6, best: "small group nights out" },
      { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "airport layover stops" },
      { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "larger group casino nights" },
      { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "a stylish casino arrival" },
      { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "birthday and bachelor/bachelorette groups" },
    ],
    faqs: [
      { q: "How far is Treasure Chest Casino from MSY airport?", a: "A short, predictable run — it's a common add-on for travelers with a few hours before a flight or hotel check-in." },
      { q: "Can we book a flat-rate transfer rather than hourly?", a: "Yes, for a simple point-to-point trip to or from the casino, MSY or a Kenner hotel." },
      { q: "What's the best vehicle for a group casino night?", a: "A Sprinter van or stretch limousine, which keeps a larger group together for the whole evening." },
      { q: "Can pickup be timed for whenever we're ready to leave?", a: "Yes, with hourly charter we coordinate pickup by text for your actual departure time, not a fixed hour." },
      { q: "Is the rate flat for a casino transfer?", a: "Yes, confirmed before you book, with no surge pricing." },
    ],
    related: [
      { label: "Kenner Limo Service", to: "/kenner-limo-service" },
      { label: "Caesars New Orleans Casino Transportation", to: "/caesars-new-orleans-casino-transportation" },
      { label: "Metairie Limo Service", to: "/metairie-limo-service" },
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "Special Events", to: "/services/special-events" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Kenner, LA", "Jefferson Parish", "Louisiana"], serviceType: "Casino transportation" },
  },
  {
    slug: "steamboat-natchez-transportation",
    type: "event",
    name: "Steamboat Natchez",
    badge: "Riverboat Cruise",
    h1: "Steamboat Natchez Transportation",
    metaTitle: "Steamboat Natchez Transportation | New Orleans Car Service",
    metaDescription: "Private car service to the Steamboat Natchez dock in New Orleans — jazz cruise pickup & drop-off, flat rates. Call (877) 609-1919.",
    stats: [
      { label: "Dock", value: "Toulouse Street Wharf, French Quarter" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinter vans" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "The Steamboat Natchez departs the Toulouse Street Wharf for its jazz dinner and sightseeing cruises, and parking anywhere near the French Quarter riverfront on a boarding afternoon is exactly the kind of hassle a reserved pickup avoids entirely.",
      "We handle both directions — a direct transfer to the dock in time for boarding, and a return pickup timed to when the boat actually ties back up, which we track rather than guess at.",
      "Many guests pair the cruise with dinner in the Quarter or the Warehouse District beforehand, which is simple to add as an hourly charter rather than two separate bookings.",
    ],
    highlights: [
      "Direct drop-off at the Toulouse Street Wharf",
      "Return pickup timed to the boat's actual docking",
      "No French Quarter riverfront parking to find",
      "Easy to pair with a French Quarter or Warehouse District dinner",
      "Sprinter vans for group and corporate bookings",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "Boarding and return pickup",
        paragraphs: [
          "Boarding times for the jazz dinner and sightseeing cruises are fixed, so we build in buffer to get you to the wharf without rushing, especially on a weekend when Quarter streets near the riverfront get crowded.",
          "For the return, we'd rather track the boat's actual arrival than assume the posted schedule is exact — your chauffeur is positioned and ready when you walk off the gangway.",
        ],
      },
      {
        h2: "Pairing the cruise with dinner or a group event",
        paragraphs: [
          "A French Quarter or Warehouse District dinner before or after the cruise is simple to add as one hourly reservation, keeping the same chauffeur and vehicle for the whole evening.",
          "Corporate groups and wedding parties who book the Natchez for a private event often add a Sprinter van to move the whole group from a hotel to the wharf together.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A single Natchez drop-off and pickup is routinely bookable with a day or two of notice; a corporate or wedding group chartering the boat for a private event should reserve a Sprinter van a week or more ahead so the whole party can be moved from a hotel to the wharf together. The flat rate already accounts for tracking the boat's actual docking time rather than the posted schedule alone.",
          "Sedan and SUV fares cancel free up to 3 hours before pickup; Sprinter van and private-event bookings follow the 12-hour window. Call (877) 609-1919 to pair the cruise with a French Quarter or Warehouse District dinner.",
        ],
      },
    ],
    vehicles: [
      { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "a couple's evening cruise" },
      { name: "Lincoln Navigator", cls: "Premium SUV", seats: 6, best: "small group bookings" },
      { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "families heading to the wharf" },
      { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "group and corporate event bookings" },
      { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "a polished dinner-cruise arrival" },
      { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "celebratory group outings" },
    ],
    faqs: [
      { q: "Where does the Steamboat Natchez depart from?", a: "The Toulouse Street Wharf on the French Quarter riverfront." },
      { q: "Do you track the boat's actual return time?", a: "Yes, we'd rather position your chauffeur against the actual docking than the posted schedule alone." },
      { q: "Can we add dinner before or after the cruise?", a: "Yes, easily, as one hourly reservation covering the whole evening." },
      { q: "What vehicle works for a corporate event on the Natchez?", a: "A Sprinter van, which moves a group from a hotel to the wharf together." },
      { q: "Is the rate flat for a Natchez transfer?", a: "Yes, confirmed before you book, with no surge pricing added for riverfront traffic." },
    ],
    related: [
      { label: "French Quarter Limo Service", to: "/french-quarter-limo-service" },
      { label: "New Orleans Cruise Port Car Service", to: "/new-orleans-cruise-port-car-service" },
      { label: "Warehouse District & CBD Limo Service", to: "/warehouse-district-cbd-limo-service" },
      { label: "Special Events", to: "/services/special-events" },
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["French Quarter, New Orleans", "New Orleans", "Louisiana"], serviceType: "Riverboat cruise transportation" },
  },
  {
    slug: "new-orleans-corporate-shuttle-service",
    type: "service",
    name: "New Orleans Corporate Shuttle",
    badge: "Corporate Transportation",
    h1: "New Orleans Corporate Shuttle Transportation Service",
    metaTitle: "New Orleans Corporate Shuttle Service | MSY Limo",
    metaDescription: "Recurring corporate shuttle service in New Orleans — employee transport, conference shuttles, consolidated billing. Call (877) 609-1919.",
    stats: [
      { label: "Pricing", value: "Recurring contract or per-run" },
      { label: "Fleet", value: "Sprinter vans · SUVs · Sedans" },
      { label: "Coverage", value: "Citywide & surrounding parishes" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "A corporate shuttle is a different booking than a single executive car — it's a recurring run on a fixed schedule, moving a group of employees, conference attendees or visiting staff the same route day after day, and it's priced and dispatched that way rather than as a series of one-off trips.",
      "We run shuttle contracts for office campuses moving staff between a parking lot and a building, conventions moving attendees between hotels and the Morial Convention Center, and companies running a recurring hotel-to-office loop for relocating or visiting employees.",
      "Every shuttle contract is billed through a single corporate account with consolidated invoicing, and the schedule is built around your actual need — a single morning and evening run, an all-day rotating loop, or anything in between.",
    ],
    highlights: [
      "Recurring, scheduled shuttle runs rather than one-off bookings",
      "Consolidated corporate billing for the whole contract",
      "Sprinter vans sized for group shuttle routes",
      "Convention and hotel-to-venue shuttle loops",
      "Flexible scheduling — single runs or all-day rotations",
      "Licensed & Insured Carrier, 24/7 dispatch",
    ],
    sections: [
      {
        h2: "How a shuttle contract is set up",
        paragraphs: [
          "We start with your actual need — how many riders, how often, and over what route — and build a schedule around it, whether that's a single morning pickup and evening return or an all-day rotating loop between a hotel block and a venue.",
          "Sprinter vans are the standard vehicle for shuttle work, sized to move a meaningful group per run without the cost or complexity of a full-size bus.",
        ],
      },
      {
        h2: "Common New Orleans shuttle use cases",
        paragraphs: [
          "Conventions and conferences often need a shuttle loop between the host hotels and the Morial Convention Center, run on a fixed schedule rather than individual car bookings for every attendee — see our convention center transportation guide for more on how planners typically structure that.",
          "Companies relocating or hosting visiting employees also book a recurring hotel-to-office shuttle for the length of a project or assignment, billed as one consolidated account rather than individual trip invoices.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A recurring shuttle contract typically takes one to two weeks to set up properly — confirming rider counts, the route, and the schedule before the first run — so starting that conversation as soon as a convention date or an office relocation is confirmed gives dispatch enough time to assign dedicated Sprinter vans rather than scrambling at the last minute. Every contract is billed through one consolidated corporate account rather than per-trip invoices.",
          "Individual shuttle runs follow the same cancellation terms as any hourly booking — 3 hours' notice for a sedan or SUV, 12 hours for a Sprinter van — though an active contract's ongoing schedule is managed directly with your dispatch contact. Call (877) 609-1919 to scope out a shuttle contract.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How is a corporate shuttle different from booking individual cars?", a: "It's a recurring, scheduled run on a fixed route rather than separate one-off trips, priced and billed as a single contract." },
      { q: "Can you run a shuttle loop for a convention?", a: "Yes, between host hotels and the Morial Convention Center, scheduled around the event's actual sessions." },
      { q: "Do you bill shuttle contracts as one invoice?", a: "Yes, through consolidated corporate billing for the full contract rather than individual run invoices." },
      { q: "What vehicle do you use for shuttle service?", a: "Sprinter vans are standard, sized to move a meaningful group per run." },
      { q: "Can we set up a recurring hotel-to-office shuttle for visiting employees?", a: "Yes, for the length of a project or assignment, on whatever schedule your team needs." },
    ],
    related: [
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "New Orleans Corporate Car Service", to: "/new-orleans-corporate-car-service" },
      { label: "Convention Center Transportation Guide for Planners", to: "/blog/convention-center-transportation-guide-for-planners" },
      { label: "New Orleans Convention Center Transportation", to: "/new-orleans-convention-center-transportation" },
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans", "Greater New Orleans Area", "Louisiana"], serviceType: "Corporate shuttle service" },
  },
  {
    slug: "new-orleans-limo-service-near-me",
    type: "service",
    name: "New Orleans Limo Service Near Me",
    badge: "Local Chauffeur Service",
    h1: "New Orleans Limo Service Near Me",
    metaTitle: "New Orleans Limo Service Near Me | MSY Limo",
    metaDescription: "Looking for limo service near you in New Orleans? Licensed chauffeurs, flat rates, 24/7 dispatch citywide. Call (877) 609-1919 to book.",
    stats: [
      { label: "Coverage", value: "Every New Orleans neighborhood" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Wherever you are in New Orleans — the French Quarter, Uptown, Mid-City, the West Bank or a Northshore address — the chauffeur closest to you is already dispatched from the same citywide fleet, so \"near me\" for us means every neighborhood, not just a handful of popular ones.",
      "We cover the French Quarter, Garden District, Uptown, Mid-City, Marigny and Bywater, Algiers and the West Bank, Metairie and Kenner, and the Northshore, each with chauffeurs who know that specific area's streets, parking patterns and venue drop-off points.",
      "Whether you need a car in the next hour or a reservation booked weeks ahead, the same flat-rate, flight-tracked, no-surge standard applies no matter which part of the metro you're calling from.",
    ],
    highlights: [
      "Citywide coverage — every New Orleans neighborhood",
      "Chauffeurs who know each area's specific streets and venues",
      "Same-day and advance bookings both available",
      "Flat rate or hourly pricing, confirmed before you book",
      "No surge pricing at any hour or on any event night",
      "Licensed & Insured Carrier, 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Coverage across every New Orleans area",
        paragraphs: [
          "Each neighborhood has its own quirks — the French Quarter's narrow one-way streets, the Garden District's tight turning radius, Mid-City's proximity to City Park and the Fair Grounds — and your chauffeur is matched to a vehicle and route that fits your specific address rather than a one-size answer.",
          "Our dedicated neighborhood pages go into more detail for the French Quarter, Garden District, Uptown, Metairie and the West Bank if you want specifics for your exact area before you book.",
        ],
      },
      {
        h2: "Booking same-day or in advance",
        paragraphs: [
          "Call for a same-day request and dispatch will confirm the nearest available vehicle and a flat rate before it's sent your way; for weddings, events or airport transfers, booking in advance guarantees your preferred vehicle class.",
          "Either way, the standard doesn't change by neighborhood or by how far ahead you book — the rate confirmed at booking is the rate you pay.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "Same-day requests are common and usually accommodated citywide, since dispatch draws from one fleet rather than a neighborhood-specific pool; for a wedding, a major event weekend or a specific vehicle class, booking a week or more ahead guarantees your first choice rather than whatever's nearest when you call. Every flat-rate quote already includes flight tracking where it applies and the standard 45-minute complimentary wait window on domestic arrivals.",
          "Sedan and SUV fares cancel free up to 3 hours before pickup; Sprinter van and event bookings follow the 12-hour window, the same standard across every neighborhood we serve. Call (877) 609-1919 for same-day dispatch or an advance reservation.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Do you cover every New Orleans neighborhood?", a: "Yes. From the French Quarter to the West Bank to the Northshore, the same citywide fleet and flat-rate standard applies everywhere we serve." },
      { q: "Can I book a car for today, or only in advance?", a: "Both. Call for a same-day request and we'll confirm the nearest available vehicle, or book ahead to guarantee a specific vehicle class." },
      { q: "Is pricing different depending on my neighborhood?", a: "The flat rate reflects distance and vehicle class, not neighborhood, and is always confirmed before you book." },
      { q: "Do your chauffeurs know specific neighborhood parking and street patterns?", a: "Yes, which is why we match vehicles to addresses — a full stretch limousine isn't sent down a street it can't navigate." },
      { q: "Is there a surge for busy nights?", a: "No. Pricing holds regardless of demand, events or time of day." },
    ],
    related: [
      { label: "French Quarter Limo Service", to: "/french-quarter-limo-service" },
      { label: "Metairie Limo Service", to: "/metairie-limo-service" },
      { label: "Gretna & Westbank Limo Service", to: "/gretna-westbank-limo-service" },
      { label: "New Orleans Black Car Service", to: "/new-orleans-black-car-service" },
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans", "Greater New Orleans Area", "Louisiana"], serviceType: "Local chauffeur service" },
  },
  {
    slug: "point-to-point-car-service-new-orleans",
    type: "service",
    name: "Point-to-Point Car Service",
    badge: "Chauffeur Service",
    h1: "Point-to-Point Car Service in New Orleans",
    metaTitle: "Point-to-Point Car Service New Orleans | MSY Limo",
    metaDescription: "Point-to-point car service in New Orleans — one fixed pickup, one fixed drop-off, flat rate confirmed before you book. Call (877) 609-1919.",
    stats: [
      { label: "Pricing", value: "Flat rate, single trip" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinter vans" },
      { label: "Coverage", value: "Citywide & surrounding parishes" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Point-to-point service is the simplest booking we offer: one pickup address, one drop-off address, one flat rate confirmed before the car leaves — no hourly minimum, no as-directed stops, just a single trip done cleanly.",
      "It's the right fit for an airport transfer, a one-way trip to a dinner or a meeting, or any single leg where you know exactly where you're starting and exactly where you're going, with no detours planned along the way.",
      "If your day turns out to need more than one stop, you can always add hourly, as-directed charter instead — but for a clean, single trip, point-to-point keeps the booking and the price as simple as the trip itself.",
    ],
    highlights: [
      "One pickup, one drop-off, one flat rate — no hourly minimum",
      "Flat rate confirmed before you book, every time",
      "Ideal for airport transfers, meetings and one-way trips",
      "Real-time flight tracking included on airport runs",
      "Easy to upgrade to hourly charter if your plans add a stop",
      "Licensed & Insured Carrier, 24/7 dispatch",
    ],
    sections: [
      {
        h2: "When point-to-point is the right booking",
        paragraphs: [
          "A single, known trip — airport to hotel, home to a dinner reservation, office to a meeting — is exactly what point-to-point pricing is built for: you know both ends of the trip, so the rate is simple to confirm up front.",
          "It's also the standard structure for every airport transfer we run, with flight tracking built in regardless of whether you're booking a single leg or a round trip.",
        ],
      },
      {
        h2: "Point-to-point vs. hourly charter",
        paragraphs: [
          "The moment a trip needs more than one stop — a reception after a ceremony, a second meeting across town, a late addition to the plan — hourly, as-directed charter becomes the better fit, since it keeps one chauffeur and vehicle with you rather than booking a second point-to-point trip.",
          "Tell us your plan when you book and we'll recommend whichever structure actually fits it; we'd rather quote the right service than the more expensive one.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A single point-to-point trip is often bookable with just a few hours' notice, since it's the simplest reservation we run; booking a day or more ahead is still the safer choice during a major event weekend when every vehicle class is in higher demand citywide. The quoted flat rate already includes flight tracking on any airport leg, with no separate add-on fee.",
          "Point-to-point bookings follow the standard cancellation terms — 3 hours for a sedan or SUV, 12 hours for a Sprinter van or limousine. Call (877) 609-1919 and we'll confirm your single pickup and drop-off before the car is dispatched.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "What is point-to-point car service?", a: "A single trip with one fixed pickup and one fixed drop-off, priced as a flat rate confirmed before you book." },
      { q: "Is there an hourly minimum for point-to-point trips?", a: "No. Point-to-point is priced per trip, not by the hour." },
      { q: "Is flight tracking included on a point-to-point airport transfer?", a: "Yes, every airport pickup is flight-tracked regardless of booking structure." },
      { q: "What if my plans change mid-trip and I need another stop?", a: "We can usually convert the booking to hourly, as-directed charter — call your chauffeur or dispatch and we'll sort out the right pricing." },
      { q: "Is the rate flat for point-to-point service?", a: "Yes, confirmed before you book, with no surge pricing." },
    ],
    related: [
      { label: "MSY Airport Transportation", to: "/services/airport-transportation" },
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "New Orleans Black Car Service", to: "/new-orleans-black-car-service" },
      { label: "New Orleans Corporate Car Service", to: "/new-orleans-corporate-car-service" },
      { label: "MSY to French Quarter", to: "/msy-to-french-quarter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans", "Greater New Orleans Area", "Louisiana"], serviceType: "Point-to-point car service" },
  },
  {
    slug: "new-orleans-black-suv-service",
    type: "service",
    name: "New Orleans Black SUV",
    badge: "Chauffeur Service",
    h1: "New Orleans Black SUV Car Service",
    metaTitle: "New Orleans Black SUV Car Service | MSY Limo",
    metaDescription: "Black SUV car service in New Orleans — Lincoln Navigators & Chevrolet Suburbans, flat rates, airport & corporate transfers. (877) 609-1919.",
    stats: [
      { label: "Fleet", value: "Lincoln Navigator · Chevrolet Suburban" },
      { label: "Seats", value: "Up to 6 passengers + luggage" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "A black SUV is the right call when a sedan is too small and a full stretch limousine is more than the trip calls for — families with luggage, small executive groups, or anyone who simply prefers the extra room and presence of a Lincoln Navigator or Chevrolet Suburban.",
      "We run black SUV service for MSY airport transfers, corporate travel, and group outings that need six-passenger capacity without the length of a limousine, which also makes an SUV easier to use on narrower Garden District or Uptown streets than a stretch vehicle.",
      "Every SUV in the fleet is late-model, professionally maintained, and driven by a licensed, background-checked chauffeur — the same standard across every vehicle class we run.",
    ],
    highlights: [
      "Lincoln Navigators and Chevrolet Suburbans, late-model and maintained",
      "Seats up to six passengers with room for luggage",
      "Flat-rate airport transfers or hourly charter",
      "Easier street access than a stretch limousine on narrower blocks",
      "Licensed, background-checked chauffeurs",
      "Available 24/7, citywide",
    ],
    sections: [
      {
        h2: "When a black SUV is the right vehicle",
        paragraphs: [
          "Families flying in with checked bags, small executive groups traveling together, and anyone who wants extra room without booking a van all tend toward a black SUV rather than a sedan or a full Sprinter.",
          "On streets where a stretch limousine's turning radius is a problem — parts of the Garden District and Uptown, for example — a Lincoln Navigator is often the better practical choice while still delivering a premium ride.",
        ],
      },
      {
        h2: "Booking black SUV service",
        paragraphs: [
          "For an MSY airport transfer, a black SUV is booked the same way as any other vehicle class — a flat rate confirmed before you fly, with your flight tracked and your chauffeur positioned ahead of your arrival.",
          "For a multi-stop day, hourly, as-directed charter keeps the same SUV and chauffeur with you throughout rather than booking separate point-to-point trips.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A single black SUV transfer is generally available same-day or next-day; a corporate account needing SUVs on a recurring schedule, or a family booking around a major holiday or event weekend, should reserve a week or more ahead to guarantee a Lincoln Navigator or Chevrolet Suburban rather than a substitute vehicle class. Flight tracking on airport runs and 45 minutes of complimentary domestic wait time are included at no extra cost.",
          "Sedan and SUV fares cancel free up to 3 hours before pickup; Sprinter van and multi-vehicle group bookings follow the 12-hour window. Call (877) 609-1919 to confirm SUV availability for your date.",
        ],
      },
    ],
    vehicles: [
      { name: "Lincoln Navigator", cls: "Premium SUV", seats: 6, best: "families and small groups with luggage" },
      { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "airport runs and corporate travel" },
      { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "solo travelers who don't need SUV capacity" },
      { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "VIP and executive travel" },
      { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "groups larger than SUV capacity" },
      { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "celebrations where the vehicle is part of the event" },
    ],
    faqs: [
      { q: "What black SUVs are in the fleet?", a: "Lincoln Navigators and Chevrolet Suburbans, both late-model and seating up to six passengers with luggage room." },
      { q: "When should I book a black SUV instead of a sedan?", a: "When you have more passengers, more luggage, or simply prefer the extra room — families and small executive groups are common SUV bookings." },
      { q: "Can a black SUV reach narrow Garden District or Uptown streets?", a: "Generally yes, more easily than a stretch limousine, though we still check your exact address in advance." },
      { q: "Is black SUV pricing flat for airport transfers?", a: "Yes, confirmed before you book by vehicle class, with no surge pricing." },
      { q: "Can I book a black SUV by the hour instead of point-to-point?", a: "Yes, as hourly, as-directed charter for a multi-stop day." },
    ],
    related: [
      { label: "New Orleans Black Car Service", to: "/new-orleans-black-car-service" },
      { label: "MSY Airport Transportation", to: "/services/airport-transportation" },
      { label: "New Orleans Corporate Car Service", to: "/new-orleans-corporate-car-service" },
      { label: "Fleet", to: "/fleet" },
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans", "Greater New Orleans Area", "Louisiana"], serviceType: "Black SUV car service" },
  },
  {
    slug: "new-orleans-stretch-limo-rental",
    type: "service",
    name: "New Orleans Stretch Limo",
    badge: "Limousine Rental",
    h1: "New Orleans Stretch Limo Service",
    metaTitle: "New Orleans Stretch Limo Service | Rental With Chauffeur",
    metaDescription: "Stretch limo rental in New Orleans with a professional chauffeur — proms, weddings, bachelorette parties. Flat rates. (877) 609-1919.",
    stats: [
      { label: "Seats", value: "Up to 8 passengers" },
      { label: "Pricing", value: "Hourly, 3-hour minimum typical" },
      { label: "Coverage", value: "Citywide & surrounding parishes" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "A stretch limousine is still the vehicle most people picture for a prom, a wedding party, a bachelorette night or a milestone celebration, and we rent ours the way they're meant to be used — with a professional, licensed chauffeur included, not a self-drive rental.",
      "Our stretch limousines seat up to eight and are booked by the hour, as-directed, which means the same vehicle and chauffeur stay with your group from the first pickup to the last drop-off rather than a single point-to-point fare.",
      "Because stretch limousines have a longer wheelbase and wider turning radius than a sedan or SUV, we check your pickup and drop-off addresses in advance — some narrow Garden District, Uptown and French Quarter streets fit a sedan or Navigator better, and we'll tell you honestly if that's the case for your venue.",
    ],
    highlights: [
      "Professional chauffeur included — not a self-drive rental",
      "Seats up to eight passengers",
      "Hourly, as-directed charter — typically a three-hour minimum",
      "Popular for proms, weddings, bachelorette parties and milestone birthdays",
      "Complimentary champagne toast commonly included",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "Booking a stretch limo for your event",
        paragraphs: [
          "Prom season and peak wedding weekends are our highest-demand windows for stretch limousines, so reserving a few weeks ahead — or months ahead for a peak spring or fall wedding Saturday — is the best way to guarantee the vehicle for your date.",
          "Hourly pricing means you set the plan: a straight pickup-to-venue-to-drop-off run, or a longer evening with several stops, all on the same reservation.",
        ],
      },
      {
        h2: "Street access and vehicle fit",
        paragraphs: [
          "A stretch limousine's length can be a genuine problem on some of New Orleans's narrower historic streets, and we'd rather flag that honestly when you book than discover it on the day. A Lincoln Navigator is often the better practical substitute for those specific addresses while still delivering a premium ride.",
          "For French Quarter pickups specifically, we typically stage at a nearby perimeter street rather than attempting to navigate the Quarter's narrowest blocks directly.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "Prom season and peak spring and fall wedding Saturdays are our highest-demand windows for stretch limousines, and those dates are worth reserving a month or more ahead; an off-peak birthday or bachelorette night can often be booked with a week or two of notice instead. The hourly rate, confirmed before you book, already includes a professional chauffeur and the complimentary champagne toast commonly added for celebrations.",
          "Stretch limousine rentals follow the 12-hour cancellation window standard for Sprinter vans and limousines; a sedan or SUV substitute booking follows the 3-hour window instead. Call (877) 609-1919 to check limo availability for your date before you commit to a venue.",
        ],
      },
    ],
    vehicles: [
      { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "proms, weddings and celebrations" },
      { name: "Lincoln Navigator", cls: "Premium SUV", seats: 6, best: "narrow-street venues a limo can't reach" },
      { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "larger wedding parties and groups" },
      { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "couples and smaller celebrations" },
      { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "a VIP arrival alternative to a limo" },
      { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "group outings with luggage or gear" },
    ],
    faqs: [
      { q: "Does a stretch limo rental include a chauffeur?", a: "Yes, every rental includes a professional, licensed chauffeur — we don't offer self-drive rentals." },
      { q: "How many passengers fit in a stretch limousine?", a: "Up to eight, depending on the specific vehicle assigned to your booking." },
      { q: "Is there a minimum booking time?", a: "Typically a three-hour minimum for hourly, as-directed charter." },
      { q: "Can a stretch limo reach every New Orleans venue?", a: "Not every one — some Garden District, Uptown and French Quarter streets are too narrow, and we'll recommend a Lincoln Navigator instead when that's the case." },
      { q: "How far ahead should I book for prom or wedding season?", a: "A few weeks ahead for prom season, and ideally months ahead for a peak spring or fall wedding Saturday." },
    ],
    related: [
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "New Orleans Prom Limo Service", to: "/new-orleans-prom-limo-service" },
      { label: "New Orleans Bachelorette Party Transportation", to: "/new-orleans-bachelorette-party-transportation" },
      { label: "New Orleans Birthday Party Limo Service", to: "/new-orleans-birthday-party-limo-service" },
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans", "Greater New Orleans Area", "Louisiana"], serviceType: "Stretch limousine rental with chauffeur" },
  },
];
