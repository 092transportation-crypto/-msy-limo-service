// Batch 9 (2026-10-21, round 5 Louisiana pages) — 10 new landing pages: four
// city+service combinations not covered by batches 3-8 (Baton Rouge and
// Mandeville weddings, Houma weddings, Slidell corporate), five
// industry-vertical corporate car service pages (hospitality/tourism, oil &
// gas/energy, healthcare, legal, meetings & events/conventions — all big
// New Orleans-area employment sectors), and one event-venue page (the
// Pontchartrain Center in Kenner, a major convention/trade-show/concert
// venue not previously covered by venuesData.js or an earlier batch). Same
// entry shape as MARYLAND_BATCH8 (the file name "marylandPages..." is
// historical — these are Louisiana pages). Facts for the city pages (distances,
// routes, neighborhoods) are carried over from each city's existing base page
// in marylandPagesBatch3.js so the two pages agree with each other. None of
// these 10 slugs exist anywhere else in the data files before this batch.
const VEHICLES = [
  { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "solo executives and couples" },
  { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "VIP and executive travel" },
  { name: "Cadillac Escalade", cls: "Premium SUV", seats: 6, best: "families and small groups with luggage" },
  { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "airport runs with beach or golf luggage" },
  { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "wedding parties, corporate teams and groups" },
  { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "proms, weddings and celebrations" },
];

const vehicles = () => VEHICLES.map((v) => ({ ...v }));

export const MARYLAND_BATCH9 = [
  // ───────────────────────── City + service combinations ─────────────────────────
  {
    slug: "baton-rouge-limo-service-for-weddings",
    type: "service",
    name: "Baton Rouge Wedding Limo",
    badge: "Wedding Transportation",
    h1: "Baton Rouge Limo Service for Weddings",
    metaTitle: "Baton Rouge Wedding Limo Service | MSY Limo",
    metaDescription: "Baton Rouge, LA wedding limo service: LSU-area ceremonies, Capitol-district receptions and guest shuttles. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "Downtown, LSU, Perkins & Bluebonnet" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Baton Rouge weddings book out fast every spring and fall, especially the Saturdays that fall near an LSU home game or a Mardi Gras-adjacent weekend. MSY Limo Service plans each wedding day around the city's two busiest wedding corridors — the historic churches and venues downtown near the Capitol, and the garden and event spaces along Perkins Road and Bluebonnet Boulevard — rather than treating every booking as a generic point-to-point run.",
      "Most Baton Rouge wedding days move through three or four stops: a getting-ready suite, a ceremony site, a photo location and a reception venue, sometimes with a side trip past the State Capitol grounds or the LSU campus for photos. We confirm every address and build buffer into the timeline, because a long receiving line or a photographer running behind schedule is normal on a wedding day, not an emergency.",
      "Guest shuttles are a regular request for out-of-town family and LSU alumni flying in from out of state, running a timed loop between a downtown or Perkins Road hotel block and the venue so nobody has to find parking at a wedding they're attending for the first time.",
    ],
    highlights: [
      "Itinerary planned leg by leg — getting ready, ceremony, photos, reception, getaway",
      "Sprinter vans and stretch limousines for wedding parties and guest shuttles",
      "Hotel room-block pickups near downtown and the Perkins Road / Bluebonnet corridor",
      "A dedicated chauffeur who stays with the wedding party all day",
      "Flat rate or hourly pricing confirmed before you book",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "How a Baton Rouge wedding day runs",
        paragraphs: [
          "Most Baton Rouge weddings move between a getting-ready suite, a ceremony site — often downtown near the Capitol or a church along Perkins Road — and a reception venue, with a photo stop added for couples who want the Capitol grounds, LSU's campus or the riverfront in the background. We confirm all addresses and approximate timing in advance, then build slack into the schedule so a late start doesn't cascade into a late ceremony.",
          "The same chauffeur and vehicle stay with the wedding party from the first pickup to the last drop-off whenever possible, which matters most when the reception runs long or an LSU game that weekend has downtown traffic running later than usual.",
        ],
      },
      {
        h2: "Guest shuttles for out-of-town family and LSU alumni",
        paragraphs: [
          "Weddings that draw heavily from LSU alumni networks or out-of-state family often fill a hotel block downtown or along the Bluebonnet corridor, and a Sprinter van running a timed loop between the hotel and the venue removes the parking question for guests unfamiliar with the city. We coordinate the loop schedule with the planner or the couple directly, with a single dispatch contact for the whole group.",
          "Vehicles range from a stretch limousine for the couple to Sprinter vans that keep a twelve-person bridal party together, and multiple vehicles can be coordinated under one reservation and one invoice.",
        ],
      },
      {
        h2: "Booking lead time, game days and cancellation",
        paragraphs: [
          "Spring and fall Saturdays book out first, and any date that overlaps an LSU home game fills earliest of all, so reserving two to three months ahead secures first choice of Sprinter vans and stretch limousines. A smaller wedding party or an off-peak date can often be arranged with a few weeks' notice.",
          "Sprinter van and limousine wedding bookings can be cancelled free of charge up to 12 hours before the first pickup; sedan and SUV add-ons follow the standard 3-hour window. Call (877) 609-1919 to confirm or adjust a reservation at any hour.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Can you plan multiple stops for a Baton Rouge wedding day?", a: "Yes. We plan getting-ready pickups, the ceremony, photos, the reception and the getaway car as one itinerary, with a chauffeur who stays with the wedding party rather than being dispatched fresh for each leg." },
      { q: "Do you run guest shuttles from hotel room blocks?", a: "Yes. A Sprinter van running a timed loop between a downtown or Perkins Road / Bluebonnet hotel and your venue is a common booking, coordinated with the planner or couple directly." },
      { q: "Does an LSU home game weekend affect our wedding transportation?", a: "It can affect downtown and campus-area traffic, so we build extra buffer into the schedule for any wedding date that overlaps a home game and plan the route accordingly." },
      { q: "How far ahead should we book a Baton Rouge wedding?", a: "Two to three months for spring and fall Saturdays, especially any date near an LSU home game, when Sprinter vans and stretch limousines book out first." },
      { q: "What is the cancellation policy for wedding transportation?", a: "Sprinter van and limousine wedding bookings cancel free of charge up to 12 hours before the first pickup; sedan and SUV add-ons follow the standard 3-hour window." },
    ],
    related: [
      { label: "Baton Rouge Limo Service", to: "/baton-rouge-limo-service" },
      { label: "New Orleans Wedding Limo Service", to: "/new-orleans-wedding-limo-service" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Baton Rouge Corporate Car Service", to: "/baton-rouge-corporate-car-service" },
      { label: "Baton Rouge Prom Limo Service", to: "/baton-rouge-prom-limo-service" },
      { label: "MSY to Baton Rouge", to: "/msy-to-baton-rouge" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Baton Rouge, LA", "East Baton Rouge Parish"], serviceType: "Wedding transportation" },
  },
  {
    slug: "houma-limo-service-for-weddings",
    type: "service",
    name: "Houma Wedding Limo",
    badge: "Wedding Transportation",
    h1: "Houma Limo Service for Weddings",
    metaTitle: "Houma LA Wedding Limo Service | MSY Limo",
    metaDescription: "Houma, LA wedding limo service: bayou-country ceremonies, plantation receptions and guest shuttles. Flat rates, 24/7. Call (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "Houma, Bayou Cane, Gray, Schriever" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Terrebonne Parish's bayou-country churches, garden venues and nearby plantation-style estates around Southdown make Houma a genuine wedding market in its own right, separate from the offshore and energy travel most of our Houma bookings involve. MSY Limo Service plans wedding days here the same way we plan them anywhere in our service area — one itinerary, one chauffeur, every stop confirmed in advance.",
      "A typical Houma wedding runs between a getting-ready location, a ceremony at a historic church or garden venue, and a reception at a converted plantation home or a reception hall off West Park Avenue or Main Street. We build the timeline around the couple's actual addresses rather than a generic template, with enough slack for a long receiving line or a photographer who wants a few extra minutes at a scenic stop.",
      "Guests flying in through MSY for a Houma wedding are a regular booking too — about 55 miles and 60 to 75 minutes from the airport via I-310 and US-90 — and we can collect a group off one or two flights and deliver them straight to a hotel or the rehearsal dinner.",
    ],
    highlights: [
      "Itinerary planned leg by leg — getting ready, ceremony, reception, getaway",
      "Sprinter vans and stretch limousines for wedding parties and guest shuttles",
      "MSY airport pickups for out-of-town guests, about 60–75 minutes to Houma",
      "A dedicated chauffeur who stays with the wedding party all day",
      "Flat rate or hourly pricing confirmed before you book",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "How a Houma wedding day runs",
        paragraphs: [
          "Most Houma weddings move between three or four points: a getting-ready suite, a ceremony site, a reception venue, and often a photo stop at one of the area's oak-lined plantation-style properties. We confirm all addresses and approximate timing before the day and build slack into the schedule so a late start at hair and makeup doesn't cascade into a late ceremony.",
          "The same chauffeur and vehicle stay with the wedding party from the first pickup to the last drop-off whenever possible — useful when the reception runs past the scheduled end time, which happens more often than not.",
        ],
      },
      {
        h2: "Out-of-town guests flying into MSY",
        paragraphs: [
          "Because Houma sits roughly an hour from the airport with no direct interstate the whole way, a guest who books their own rideshare for the drive down US-90 is taking on more uncertainty than the trip needs. We meet flights at MSY, track them in real time, and deliver guests directly to a Houma hotel or the rehearsal dinner on a confirmed flat rate.",
          "A Sprinter van is a cost-efficient way to move a group of wedding guests together rather than splitting across several cars, and multiple pickups can be coordinated under one reservation.",
        ],
      },
      {
        h2: "Booking lead time and cancellation",
        paragraphs: [
          "Fall and spring weekends book first in bayou-country wedding season, so reserving two to three months ahead secures first choice of Sprinter vans and stretch limousines. A smaller wedding or an off-peak date can often be booked with a few weeks' notice.",
          "Sprinter van and limousine wedding bookings cancel free of charge up to 12 hours before the first pickup; sedan and SUV add-ons follow the standard 3-hour window. Call (877) 609-1919 to confirm or adjust a reservation at any hour.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Can you plan multiple stops for a Houma wedding day?", a: "Yes. We plan getting-ready pickups, the ceremony, the reception and the getaway car as one itinerary, with a chauffeur who stays with the wedding party rather than being dispatched fresh for each leg." },
      { q: "Can you pick up wedding guests at MSY and bring them to Houma?", a: "Yes. The drive is about 55 miles and 60 to 75 minutes via I-310 and US-90. We track incoming flights and deliver guests directly to a Houma hotel or the rehearsal dinner on a flat rate." },
      { q: "How far ahead should we book a Houma wedding?", a: "Two to three months for peak fall and spring weekends, when Sprinter vans and stretch limousines book out first. Smaller weddings and off-peak dates can often be booked with a few weeks' notice." },
      { q: "Do you serve the plantation-style venues near Houma?", a: "Yes. Our chauffeurs know the approaches to the area's garden and plantation-style event venues and plan wedding-day logistics around them." },
      { q: "What is the cancellation policy for wedding transportation?", a: "Sprinter van and limousine wedding bookings cancel free of charge up to 12 hours before the first pickup; sedan and SUV add-ons follow the standard 3-hour window." },
    ],
    related: [
      { label: "Houma Limo Service", to: "/houma-limo-service" },
      { label: "New Orleans Wedding Limo Service", to: "/new-orleans-wedding-limo-service" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "River Road Plantation Tour Transportation", to: "/river-road-plantation-tour-transportation" },
      { label: "Second Line Wedding Parade Transportation", to: "/second-line-wedding-parade-transportation" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Houma, LA", "Terrebonne Parish"], serviceType: "Wedding transportation" },
  },
  {
    slug: "slidell-corporate-car-service",
    type: "service",
    name: "Slidell Corporate Car Service",
    badge: "Corporate Transportation",
    h1: "Slidell Corporate Car Service",
    metaTitle: "Slidell Corporate Car Service | MSY Limo Service",
    metaDescription: "Slidell, LA corporate car service: executive airport transfers, client pickups and roadshow travel on the Northshore. Call (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "Olde Towne, Gause Blvd, Fremaux" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinter vans" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Slidell sits at the junction of I-10, I-12 and I-59, which has made the Fremaux Town Center area and the Gause Boulevard corridor a growing hub for distribution, logistics and regional offices that pull visitors from Louisiana, Mississippi and beyond. MSY Limo Service runs corporate accounts for the companies based here, moving executives, clients and auditors between the airport, local offices and the hotels along I-10.",
      "A typical Slidell corporate booking is an MSY pickup for a visiting executive or client, flight-tracked so the chauffeur is positioned before the flight lands, followed by a direct run across the Twin Span and through New Orleans East to a Slidell office or warehouse — about 35 miles and 35 to 45 minutes depending on traffic on the bridge.",
      "We also handle same-day round trips for Slidell-based teams heading into New Orleans for client meetings, depositions or a convention downtown, and multi-stop days for sales teams covering several Northshore accounts in one visit.",
    ],
    highlights: [
      "Flight-tracked MSY pickups for visiting executives and clients",
      "Flat-rate pricing confirmed before you book — no surge, no meter",
      "Chauffeurs familiar with the Twin Span and the I-10/I-12/I-59 interchange",
      "Corporate accounts with consolidated billing for recurring travel",
      "Sprinter vans for sales teams and visiting groups",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Airport transfers for Slidell business travel",
        paragraphs: [
          "Visiting executives, auditors and clients flying into MSY for a Slidell meeting get a flight-tracked pickup with 45 minutes of complimentary wait time on domestic arrivals and 60 on international, so a delayed connection never leaves a visitor standing at the curb. The drive to Slidell runs the Twin Span and New Orleans East stretch of I-10, the same route our Slidell city-page travelers use, and we time departures around the morning and afternoon commuter windows that slow that corridor.",
          "A sedan or SUV with the chauffeur already briefed on the office address and the meeting time removes one more variable from a trip that a visiting executive has already spent enough time planning.",
        ],
      },
      {
        h2: "Sales teams, roadshows and multi-stop days",
        paragraphs: [
          "Companies based around Fremaux Town Center and the Gause Boulevard corridor book us for multi-stop days that cover several Northshore accounts or a downtown New Orleans client visit in the same trip, with one chauffeur and one vehicle for the whole itinerary rather than separate rideshares between stops.",
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
      { q: "Do you track flights for executives flying into MSY for Slidell meetings?", a: "Yes. Every airport pickup is flight-tracked, with 45 minutes of complimentary wait on domestic arrivals and 60 on international, so a delayed flight never leaves a visitor without a car." },
      { q: "Can you handle a multi-stop day across several Northshore offices?", a: "Yes. One chauffeur and vehicle can cover several Slidell and Northshore stops, or a combined Slidell-to-downtown New Orleans itinerary, on a single reservation." },
      { q: "Do you offer corporate accounts for recurring Slidell travel?", a: "Yes. Companies with regular travel can set up an account with consolidated monthly billing and a dedicated dispatch contact. Call (877) 609-1919 to set one up." },
      { q: "How long does the drive from MSY to Slidell take?", a: "About 35 miles, generally 35 to 45 minutes depending on traffic on the I-10 Twin Span and through New Orleans East." },
      { q: "What is the cancellation policy for corporate bookings?", a: "Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter van bookings require 12 hours' notice." },
    ],
    related: [
      { label: "Slidell Limo Service", to: "/slidell-limo-service" },
      { label: "Slidell Prom Limo Service", to: "/slidell-prom-limo-service" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "New Orleans Corporate Car Service", to: "/new-orleans-corporate-car-service" },
      { label: "MSY Airport Corporate Car Service", to: "/msy-airport-corporate-car-service" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Slidell, LA", "St. Tammany Parish"], serviceType: "Corporate transportation" },
  },
  {
    slug: "mandeville-limo-service-for-weddings",
    type: "service",
    name: "Mandeville Wedding Limo",
    badge: "Wedding Transportation",
    h1: "Mandeville Limo Service for Weddings",
    metaTitle: "Mandeville LA Wedding Limo Service | MSY Limo",
    metaDescription: "Mandeville, LA wedding limo service: Old Mandeville lakefront ceremonies, Causeway guest transfers. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "Old Mandeville, lakefront, US-190" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Old Mandeville's lakefront along Lakeshore Drive is one of the Northshore's most-booked wedding settings, with ceremony lawns, gazebos and reception halls facing Lake Pontchartrain and a historic downtown within walking distance for photos. MSY Limo Service plans Mandeville wedding days around that geography — tight, walkable, and often involving a short second stop rather than a long drive between venues.",
      "A typical Mandeville wedding moves between a getting-ready suite in Old Mandeville or along US-190, a lakefront or downtown ceremony, and a reception at a nearby hall or private venue, with photos often worked in along the lakefront itself. We confirm every address and timing window in advance and build in slack for a long receiving line or an extra round of photos at golden hour on the lake.",
      "Guests crossing the Causeway from the south shore are routine for Mandeville weddings, and a Sprinter van shuttle from a hotel near the Causeway's north end removes the parking question for anyone unfamiliar with Old Mandeville's narrow lakefront streets.",
    ],
    highlights: [
      "Itinerary planned leg by leg — getting ready, ceremony, photos, reception, getaway",
      "Sprinter vans and stretch limousines for wedding parties and guest shuttles",
      "Causeway guest shuttles from hotels near the north end",
      "A dedicated chauffeur who stays with the wedding party all day",
      "Flat rate or hourly pricing confirmed before you book",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "How a Mandeville lakefront wedding day runs",
        paragraphs: [
          "Most Mandeville weddings stay close together geographically — a getting-ready suite, a lakefront or downtown ceremony, and a reception venue often within a few minutes' drive of each other — but the schedule still depends on confirmed timing for each stop. We plan the day around the couple's actual addresses, with buffer built in for photos along the lakefront or a receiving line that runs past the scheduled time.",
          "The same chauffeur and vehicle stay with the wedding party from the first pickup to the last drop-off whenever possible, which keeps the day's transportation as one continuous service rather than several separate bookings.",
        ],
      },
      {
        h2: "Causeway guest shuttles",
        paragraphs: [
          "Out-of-town guests and south-shore family crossing the Lake Pontchartrain Causeway for a Mandeville wedding are common, and a Sprinter van running a timed loop from a hotel near the Causeway's north end to the venue removes the parking question in Old Mandeville's narrow lakefront streets entirely. We coordinate the loop schedule directly with the planner or couple.",
          "Fog on the Causeway, more common in the cooler months, is the one wrinkle we plan around — dispatch checks bridge conditions before each wedding-day pickup and adjusts timing if the crossing is running slower than usual.",
        ],
      },
      {
        h2: "Booking lead time and cancellation",
        paragraphs: [
          "Lakefront wedding season books out early, particularly spring and fall Saturdays with good weather odds, so reserving two to three months ahead secures first choice of Sprinter vans and stretch limousines. Smaller weddings and off-peak dates can often be arranged with a few weeks' notice.",
          "Sprinter van and limousine wedding bookings cancel free of charge up to 12 hours before the first pickup; sedan and SUV add-ons follow the standard 3-hour window. Call (877) 609-1919 to confirm or adjust a reservation at any hour.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Can you plan multiple stops for a Mandeville wedding day?", a: "Yes. We plan getting-ready pickups, the ceremony, photos, the reception and the getaway car as one itinerary, with a chauffeur who stays with the wedding party rather than being dispatched fresh for each leg." },
      { q: "Do you run guest shuttles across the Causeway?", a: "Yes. A Sprinter van running a timed loop from a hotel near the Causeway's north end to your venue is a common booking, coordinated with the planner or couple directly." },
      { q: "What happens if fog affects the Causeway on our wedding day?", a: "Dispatch checks Causeway conditions before each pickup. If fog is slowing the crossing, we adjust pickup times or route around by I-12 and the Twin Span to keep the day on schedule." },
      { q: "How far ahead should we book a Mandeville wedding?", a: "Two to three months for peak spring and fall Saturdays, when Sprinter vans and stretch limousines book out first. Smaller weddings and off-peak dates can often be booked with a few weeks' notice." },
      { q: "What is the cancellation policy for wedding transportation?", a: "Sprinter van and limousine wedding bookings cancel free of charge up to 12 hours before the first pickup; sedan and SUV add-ons follow the standard 3-hour window." },
    ],
    related: [
      { label: "Mandeville Limo Service", to: "/mandeville-limo-service" },
      { label: "Mandeville Corporate Car Service", to: "/mandeville-corporate-car-service" },
      { label: "Mandeville Prom Limo Service", to: "/mandeville-prom-limo-service" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Covington, LA Limo Service", to: "/covington-la-limo-service" },
      { label: "MSY to Mandeville", to: "/msy-to-mandeville" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Mandeville, LA", "St. Tammany Parish"], serviceType: "Wedding transportation" },
  },
  // ───────────────────────── Industry-vertical corporate pages ─────────────────────────
  {
    slug: "new-orleans-hospitality-tourism-transportation",
    type: "service",
    name: "Hospitality & Tourism Industry",
    badge: "Corporate Transportation",
    h1: "New Orleans Hospitality & Tourism Industry Transportation",
    metaTitle: "Hospitality & Tourism Car Service | New Orleans",
    metaDescription: "Corporate car service for New Orleans hotels, DMCs and tourism companies: VIP arrivals, site visits and FAM tours. Call (877) 609-1919.",
    stats: [
      { label: "Clients", value: "Hotels · DMCs · Tour Operators" },
      { label: "Coverage", value: "French Quarter to MSY" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Tourism and hospitality are one of the largest employers in the New Orleans metro, and the companies that run on it — hotels, destination management companies (DMCs), tour operators and event-production firms — have transportation needs that look nothing like a single traveler's airport ride. MSY Limo Service works as an extension of these teams: VIP guest arrivals, familiarization (FAM) tours for travel buyers, site visits for planners scouting a venue, and overflow transportation when a hotel's own fleet is already committed.",
      "Hotels along Canal Street, in the Warehouse District and around the Convention Center call us for guests who need more than a standard airport transfer — arriving dignitaries, wedding parties booked through the property, or a VIP suite guest whose schedule the concierge is managing minute to minute. DMCs and incentive-travel companies lean on us for FAM tours, where a group of travel buyers or meeting planners is shown several venues and restaurants in one day on a tight, published schedule.",
      "We also support tour operators and attractions that need reliable overflow capacity — a swamp tour or plantation day trip that sold more seats than the operator's own vans can cover, or a cruise line's pre- and post-cruise hotel program.",
    ],
    highlights: [
      "VIP and guest arrival transportation for hotels and resorts",
      "FAM tour and site-visit itineraries for DMCs and meeting planners",
      "Overflow capacity for tour operators and attractions on sold-out days",
      "Sprinter vans and multi-vehicle convoys for group FAM tours",
      "Corporate accounts with consolidated billing for recurring hospitality partners",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "VIP arrivals and hotel guest transportation",
        paragraphs: [
          "Hotels partner with us for guests whose arrival needs more coordination than a standard transfer — a flight-tracked MSY pickup with meet-and-greet inside baggage claim, a vehicle that matches the brand's guest experience, and a chauffeur briefed on the guest's name and itinerary before they land. We work directly with concierge and guest-services teams so a request made an hour before arrival is still handled smoothly.",
          "The same relationship covers wedding parties and groups booked through a property's catering or events team, where the hotel wants one point of contact for transportation rather than guests arranging their own rides individually.",
        ],
      },
      {
        h2: "FAM tours and site visits for DMCs and planners",
        paragraphs: [
          "Destination management companies and convention and visitors bureaus run familiarization tours to show travel buyers and meeting planners what New Orleans offers — several hotels, venues and restaurants in a single day, on a schedule that often changes the night before. We assign a Sprinter van or multi-vehicle convoy with one dispatch contact for the whole group, so the DMC's own staff can focus on the pitch rather than the transportation logistics.",
          "Site visits for a single planner scouting a venue for a future conference follow the same model at a smaller scale — a sedan or SUV, a flexible schedule, and a chauffeur who already knows the venues on the list.",
        ],
      },
      {
        h2: "Overflow capacity and corporate accounts",
        paragraphs: [
          "Tour operators and attractions that sell more seats than their own vehicles can cover on a given day call us for overflow vans, usually with advance notice but sometimes same-day when a tour unexpectedly sells out. A hospitality partner with recurring needs can set up a corporate account with monthly billing and a dedicated dispatch contact — call (877) 609-1919 to discuss a partnership.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Do you work directly with hotel concierge and guest-services teams?", a: "Yes. We coordinate VIP guest arrivals, wedding-party transportation and group bookings directly with hotel staff, with one point of contact for the property." },
      { q: "Can you run a FAM tour for a group of travel buyers or planners?", a: "Yes. We assign a Sprinter van or multi-vehicle convoy with one dispatch contact for the whole day, built around the DMC's published schedule." },
      { q: "Can you provide overflow vehicles for a tour operator on a sold-out day?", a: "Yes, usually with advance notice, though we can often accommodate same-day overflow requests as well. Call dispatch to check availability." },
      { q: "Do you offer corporate accounts for hospitality partners?", a: "Yes. Hotels, DMCs and tour operators with recurring travel can set up an account with consolidated monthly billing and a dedicated dispatch contact." },
      { q: "What is the cancellation policy for corporate hospitality bookings?", a: "Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter van and multi-vehicle bookings require 12 hours' notice." },
    ],
    related: [
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "New Orleans Corporate Car Service", to: "/new-orleans-corporate-car-service" },
      { label: "New Orleans Meetings & Events Industry Transportation", to: "/new-orleans-meetings-events-industry-transportation" },
      { label: "New Orleans Convention Center Transportation", to: "/new-orleans-convention-center-transportation" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "MSY Airport Meet and Greet", to: "/msy-airport-meet-and-greet" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans, LA", "Louisiana"], serviceType: "Corporate transportation" },
  },
  {
    slug: "louisiana-oil-gas-energy-corporate-transportation",
    type: "service",
    name: "Oil, Gas & Energy Industry",
    badge: "Corporate Transportation",
    h1: "Louisiana Oil, Gas & Energy Corporate Transportation",
    metaTitle: "Oil & Gas Industry Car Service | New Orleans",
    metaDescription: "Executive car service for Louisiana's energy sector: crew changes, plant visits and MSY transfers for contractors. Call (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "MSY to the River Parishes & Gulf coast" },
      { label: "Clients", value: "Operators · Contractors · Shipyards" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Louisiana's energy corridor runs the length of the Mississippi River from the River Parishes down through Houma and out to the Gulf, and the petrochemical plants, refineries, shipyards and offshore operators along it bring a steady stream of engineers, contractors, auditors and visiting executives through MSY. MSY Limo Service built our long-distance and corporate transfer business around exactly this kind of travel — reliable, well-documented, and built for people whose schedule isn't theirs to change.",
      "A typical booking is an international or domestic arrival at MSY, flight-tracked so the chauffeur is positioned before touchdown, followed by a transfer to a plant gate, a shipyard, a corporate office or a hotel near the River Parishes, Houma or the Gulf coast. Meet-and-greet inside baggage claim is standard for visitors on a long itinerary who would rather not navigate an unfamiliar airport alone, and every rate is flat and confirmed before the trip.",
      "We also run crew-change rotations and recurring contractor travel for companies that need the same routine every time — a receipt suited to expense reporting, a chauffeur who already knows the route to a specific gate or dock, and dispatch that answers at 3 a.m. for an early flight as readily as it does at noon.",
    ],
    highlights: [
      "Flight-tracked MSY transfers for international and domestic arrivals",
      "Flat-rate pricing confirmed before you book, with receipts suited to expense reports",
      "Chauffeurs experienced with plant-gate, shipyard and dock access routines",
      "Crew-change and recurring contractor travel on a set schedule",
      "24/7 dispatch for pre-dawn departures and late crew changes",
      "SUVs and Sprinter vans with room for gear bags and tool cases",
    ],
    sections: [
      {
        h2: "Airport transfers for visiting energy-sector professionals",
        paragraphs: [
          "Engineers, auditors, surveyors and executives flying into MSY after a long international itinerary are a regular part of our business along the energy corridor. A chauffeur waiting with a name sign inside baggage claim is a far better option than a tired traveler renting a car for an unfamiliar drive down River Road or US-90, and flight tracking means the pickup adjusts automatically if the connection runs late.",
          "From the airport we run direct to a plant office, a shipyard gate, a hotel near the River Parishes or Houma, or onward toward a dock or heliport supporting offshore work, with the chauffeur already briefed on the destination and any site-access requirements.",
        ],
      },
      {
        h2: "Crew changes and recurring contractor travel",
        paragraphs: [
          "Operators and service companies running regular crew rotations set up an account with us so the same pickup pattern repeats trip after trip — a defined pickup window, a consistent vehicle class, and billing that matches the company's expense-reporting requirements. We can coordinate multiple pickups from the same flight or a staggered set of arrivals into one scheduled run.",
          "Contractors and inspection teams on a tight visit schedule get the same reliability: a confirmed flat rate, a chauffeur who already knows the route, and 24/7 dispatch for the early departures and late arrivals this industry runs on.",
        ],
      },
      {
        h2: "Setting up a corporate account",
        paragraphs: [
          "Companies with recurring energy-sector travel through MSY can set up a corporate account with consolidated monthly billing and a dedicated dispatch contact. Call (877) 609-1919 to discuss your rotation schedule and typical routes.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Do you provide transfers for crew changes and contractor rotations?", a: "Yes. We run recurring pickups on a set schedule for crew changes and contractor travel, with consistent vehicles and billing suited to expense reporting." },
      { q: "Can you pick up international arrivals and take them directly to a plant or shipyard?", a: "Yes. Flight tracking covers international itineraries, and meet-and-greet inside baggage claim is available for visitors on a long trip who would rather not navigate alone." },
      { q: "Do your chauffeurs know plant-gate and dock access routines?", a: "Yes. Our chauffeurs who work the energy corridor are experienced with the access routines at plant gates, shipyards and docks along River Road and US-90." },
      { q: "Can we set up a corporate account for recurring travel?", a: "Yes. Companies with recurring energy-sector travel can set up an account with consolidated monthly billing and a dedicated dispatch contact." },
      { q: "What is the cancellation policy for corporate bookings?", a: "Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter van bookings require 12 hours' notice." },
    ],
    related: [
      { label: "Houma Limo Service", to: "/houma-limo-service" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "MSY Airport Corporate Car Service", to: "/msy-airport-corporate-car-service" },
      { label: "New Orleans Corporate Car Service", to: "/new-orleans-corporate-car-service" },
      { label: "MSY to Baton Rouge", to: "/msy-to-baton-rouge" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Louisiana", "New Orleans, LA", "Houma, LA"], serviceType: "Corporate transportation" },
  },
  {
    slug: "new-orleans-healthcare-medical-transportation",
    type: "service",
    name: "Healthcare & Medical Industry",
    badge: "Corporate Transportation",
    h1: "New Orleans Healthcare & Medical Industry Transportation",
    metaTitle: "Healthcare Industry Car Service | New Orleans",
    metaDescription: "Car service for New Orleans hospitals, medical conferences and visiting physicians. Flat rates, flight tracking. Call (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "Tulane, LSU Health & Downtown Medical" },
      { label: "Clients", value: "Hospitals · Conferences · Physicians" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "New Orleans' downtown medical district — anchored by Tulane Medical Center, LSU Health and University Medical Center — along with the region's medical schools and specialty hospitals bring a steady flow of visiting physicians, residency candidates, medical-device representatives and conference attendees through MSY. MSY Limo Service provides the same flat-rate, flight-tracked reliability for this group that we provide for any other corporate traveler, with the discretion and punctuality healthcare schedules require.",
      "A common booking is a visiting specialist or interviewing resident flying in for a set meeting time, or a medical-device sales team moving between hospital visits on a tight calendar. We also support the medical conferences that regularly book the Morial Convention Center and downtown hotels, where attendees need reliable transportation between a hotel block and the conference venue without the uncertainty of rideshare pricing during a busy convention week.",
      "Hospitals and medical practices with recurring visitor travel — recruiting visits, board members, or out-of-town family coordinating around a patient's care — can set up a standing arrangement so every booking follows the same routine.",
    ],
    highlights: [
      "Flight-tracked MSY transfers for visiting physicians and conference attendees",
      "Flat-rate pricing confirmed before you book — no surge during busy convention weeks",
      "Discreet, punctual service suited to tight clinical and interview schedules",
      "Hotel-to-convention-center shuttles for medical conferences",
      "Corporate accounts for hospitals and practices with recurring visitor travel",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Visiting physicians, residency interviews and device representatives",
        paragraphs: [
          "A visiting specialist or interviewing resident with a fixed meeting time benefits from the same thing any traveler with a deadline needs — a flight-tracked pickup, a confirmed flat rate, and a chauffeur who already has the destination and a plan for the route. We serve the downtown medical district as well as the region's other hospitals and medical schools.",
          "Medical-device and pharmaceutical representatives moving between several hospital visits in one trip often book an SUV or sedan for the full day, with the chauffeur waiting between stops rather than the representative arranging separate rides for each appointment.",
        ],
      },
      {
        h2: "Medical conferences at the Convention Center and downtown hotels",
        paragraphs: [
          "New Orleans hosts a steady calendar of medical and healthcare conferences, and attendees staying in a downtown hotel block appreciate a scheduled shuttle to the Morial Convention Center rather than competing for rideshare capacity with every other conventiongoer at the same time. We run these shuttles on a flat rate per vehicle, coordinated with the conference organizer or hotel directly.",
          "Individual attendees and speakers on a tighter schedule can book a sedan or SUV for airport transfers and point-to-point trips around the conference, with the same flight-tracking and flat-rate confirmation as any other booking.",
        ],
      },
      {
        h2: "Setting up a standing arrangement",
        paragraphs: [
          "Hospitals, practices and conference organizers with recurring transportation needs can set up a corporate account with consolidated billing and a dedicated dispatch contact. Call (877) 609-1919 to discuss your visitor schedule.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Can you handle airport transfers for visiting physicians on a tight schedule?", a: "Yes. Every MSY pickup is flight-tracked and the rate is confirmed before you book, so a visiting physician's tight schedule isn't put at risk by an unpredictable ride." },
      { q: "Do you run shuttles for medical conferences at the Convention Center?", a: "Yes. We coordinate scheduled shuttles between a conference hotel block and the Morial Convention Center, billed per vehicle rather than per rider." },
      { q: "Can a medical-device sales team book a car for a full day of hospital visits?", a: "Yes. An SUV or sedan can be booked for a full day with the chauffeur waiting between stops, which is more efficient than arranging separate rides for each appointment." },
      { q: "Do you offer corporate accounts for hospitals and practices?", a: "Yes. Hospitals, practices and conference organizers with recurring travel can set up an account with consolidated billing and a dedicated dispatch contact." },
      { q: "What is the cancellation policy for healthcare-industry bookings?", a: "Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter van and multi-vehicle bookings require 12 hours' notice." },
    ],
    related: [
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "New Orleans Corporate Car Service", to: "/new-orleans-corporate-car-service" },
      { label: "New Orleans Convention Center Transportation", to: "/new-orleans-convention-center-transportation" },
      { label: "New Orleans Meetings & Events Industry Transportation", to: "/new-orleans-meetings-events-industry-transportation" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "MSY Airport Black Car Service", to: "/msy-airport-black-car-service" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans, LA", "Louisiana"], serviceType: "Corporate transportation" },
  },
  {
    slug: "new-orleans-legal-corporate-transportation",
    type: "service",
    name: "Legal Industry",
    badge: "Corporate Transportation",
    h1: "New Orleans Legal Industry Corporate Transportation",
    metaTitle: "Legal Industry Car Service | New Orleans Limo",
    metaDescription: "Car service for New Orleans law firms: court appearances, depositions and visiting counsel transfers. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "CBD Courts & Law Firm Row" },
      { label: "Clients", value: "Law Firms · Courts · Visiting Counsel" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "New Orleans' downtown legal corridor — the federal and state courthouses, the Civil District Court, and the law firms along Poydras Street and the CBD — runs on fixed appearance times that don't move for traffic or a late rideshare driver. MSY Limo Service provides the same flat-rate, flight-tracked reliability for visiting counsel, expert witnesses and litigation support teams that we provide for any client whose schedule has a hard deadline attached.",
      "A common booking is out-of-town counsel or an expert witness flying into MSY for a hearing, deposition or trial date, picked up with flight tracking and delivered directly to a courthouse or law office with time to spare. We also run multi-stop days for litigation teams moving between depositions, document review sites and client meetings, and standing accounts for firms with frequent visiting partners or associates.",
      "Discretion matters as much as punctuality in this work, and our chauffeurs are accustomed to clients who need a quiet cabin to prepare or take a confidential call on the way to a proceeding.",
    ],
    highlights: [
      "Flight-tracked MSY transfers for visiting counsel and expert witnesses",
      "Flat-rate pricing confirmed before you book, timed to fixed court appearances",
      "Discreet service for confidential calls and trial preparation en route",
      "Multi-stop days for litigation teams and document review sites",
      "Corporate accounts for law firms with recurring visitor travel",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Court appearances, depositions and visiting counsel",
        paragraphs: [
          "A court date or deposition has a fixed start time, and a reserved chauffeur removes the uncertainty of an on-demand ride on a morning when it matters most. We pick up at MSY with flight tracking for out-of-town counsel and expert witnesses, and we build in a buffer for downtown parking and courthouse security lines so the arrival time, not just the drive time, lands with room to spare.",
          "Local firms also book us for routine trips between offices, the Civil District Court and the federal courthouse on Poydras Street, with a chauffeur who waits during a short hearing rather than circling the block.",
        ],
      },
      {
        h2: "Litigation teams and multi-stop days",
        paragraphs: [
          "Teams working a case out of town often need to move between a hotel, a document review site, deposition locations and client meetings in the same day. One chauffeur and vehicle assigned for the full day is more efficient and more confidential than separate rides between each stop, and the schedule can shift as the day's proceedings run long or wrap early.",
          "We coordinate multiple vehicles under one reservation when a trial team needs to move several attorneys and paralegals at once, with a single invoice for the engagement.",
        ],
      },
      {
        h2: "Setting up a firm account",
        paragraphs: [
          "Law firms with recurring visiting-counsel or litigation travel can set up a corporate account with consolidated billing and a dedicated dispatch contact. Call (877) 609-1919 to discuss your firm's typical travel pattern.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Can you time a pickup around a fixed court appearance?", a: "Yes. We build in buffer for downtown parking and courthouse security lines so your arrival time, not just the drive time, has room to spare." },
      { q: "Do you provide transportation for visiting counsel and expert witnesses?", a: "Yes. Flight-tracked MSY pickups and direct delivery to a courthouse or law office are a regular booking for out-of-town counsel and expert witnesses." },
      { q: "Can you coordinate multiple vehicles for a trial team?", a: "Yes. We can assign several vehicles under one reservation and one invoice when a trial team needs to move multiple attorneys and paralegals at once." },
      { q: "Do you offer corporate accounts for law firms?", a: "Yes. Firms with recurring visiting-counsel or litigation travel can set up an account with consolidated billing and a dedicated dispatch contact." },
      { q: "What is the cancellation policy for legal-industry bookings?", a: "Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter van and multi-vehicle bookings require 12 hours' notice." },
    ],
    related: [
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "New Orleans Corporate Car Service", to: "/new-orleans-corporate-car-service" },
      { label: "MSY Airport Corporate Car Service", to: "/msy-airport-corporate-car-service" },
      { label: "New Orleans Black Car Service", to: "/new-orleans-black-car-service" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Warehouse District and CBD Limo Service", to: "/warehouse-district-cbd-limo-service" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans, LA", "Louisiana"], serviceType: "Corporate transportation" },
  },
  {
    slug: "new-orleans-meetings-events-industry-transportation",
    type: "service",
    name: "Meetings & Events Industry",
    badge: "Corporate Transportation",
    h1: "New Orleans Meetings & Events Industry Transportation",
    metaTitle: "Meetings & Events Industry Car Service | NOLA",
    metaDescription: "Transportation for New Orleans meeting planners, DMCs and exhibit teams: shuttles, VIP cars and convoys. Call (877) 609-1919.",
    stats: [
      { label: "Clients", value: "Planners · DMCs · Exhibit Teams" },
      { label: "Coverage", value: "Morial Convention Center & CBD Hotels" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "New Orleans runs one of the country's busiest convention and meetings economies, and the Ernest N. Morial Convention Center alone brings in planners, exhibit-service companies, general service contractors and thousands of attendees who all need to move between hotels, the Convention Center and offsite events on a published schedule. MSY Limo Service works alongside meeting planners and show organizers as the ground-transportation partner, not just another vendor they have to manage.",
      "A typical convention engagement includes VIP transportation for keynote speakers and sponsors, scheduled shuttle loops between a hotel block and the Convention Center, airport meet-and-greet for staff and exhibitors flying in before move-in day, and offsite-event transfers for an evening reception at a French Quarter venue or a riverfront space. We assign a single dispatch contact for the whole program so the planner has one number to call, not a different driver's cell phone for every request.",
      "Exhibit and general service contractor teams moving freight crews and site supervisors between a hotel and the exhibit floor during move-in and move-out are a related and recurring booking, usually run on an hourly or multi-day basis rather than a single point-to-point trip.",
    ],
    highlights: [
      "VIP transportation for keynote speakers, sponsors and executives",
      "Scheduled shuttle loops between hotel blocks and the Morial Convention Center",
      "Airport meet-and-greet for staff and exhibitors arriving before move-in",
      "Offsite-event transfers for receptions and evening programs",
      "One dispatch contact for the entire convention program",
      "Sprinter vans and multi-vehicle convoys sized to the event",
    ],
    sections: [
      {
        h2: "Shuttle programs and VIP transportation for conventions",
        paragraphs: [
          "A convention transportation program usually has two layers: a scheduled shuttle loop moving the bulk of attendees between a hotel block and the Convention Center at set intervals, and VIP vehicles for speakers, sponsors and executives who need point-to-point service on their own schedule. We run both from the same dispatch team, so a VIP pickup added the night before doesn't disrupt the published shuttle loop.",
          "Planners get one point of contact for the whole program, with pricing set per vehicle and per shift rather than negotiated fresh for every request that comes up during the show.",
        ],
      },
      {
        h2: "Airport arrivals and move-in logistics",
        paragraphs: [
          "Exhibitors, staff and speakers flying into MSY ahead of a show get flight-tracked pickups with meet-and-greet available inside baggage claim, useful for anyone arriving with freight cases or display materials who would rather not navigate a rideshare pickup lot alone. We can run a block of arrivals across a single afternoon or evening as one coordinated effort rather than separate, disconnected bookings.",
          "During move-in and move-out, general service contractor crews and site supervisors moving between a hotel and the exhibit floor are typically booked on an hourly or multi-day basis, with the same vehicle and chauffeur available across the whole build period.",
        ],
      },
      {
        h2: "Offsite events and setting up a program",
        paragraphs: [
          "Evening receptions, award dinners and offsite programs at French Quarter venues or riverfront spaces get the same shuttle-plus-VIP structure as the main show, scaled to the event. Call (877) 609-1919 well before your event dates to scope a transportation program and lock in vehicle availability for your show's specific dates.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Can you run a full shuttle program for a convention at the Morial Convention Center?", a: "Yes. We set up scheduled shuttle loops between a hotel block and the Convention Center, priced per vehicle and per shift, alongside VIP transportation for speakers and sponsors." },
      { q: "Do you provide one dispatch contact for the whole event?", a: "Yes. Every convention program gets a single dispatch contact so the planner isn't managing separate drivers for each request." },
      { q: "Can you handle airport arrivals for exhibitors and staff before move-in?", a: "Yes. Flight-tracked pickups with meet-and-greet are available, and we can coordinate a block of arrivals across one afternoon or evening as one effort." },
      { q: "Do you support general service contractor crews during move-in and move-out?", a: "Yes. These are typically booked hourly or across multiple days, with the same vehicle and chauffeur available through the build period." },
      { q: "How far ahead should we book a convention transportation program?", a: "As early as possible once your event dates are set — ideally several weeks ahead for larger shows — to lock in vehicle availability. Call (877) 609-1919 to start planning." },
    ],
    related: [
      { label: "New Orleans Convention Center Transportation", to: "/new-orleans-convention-center-transportation" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "New Orleans Hospitality & Tourism Industry Transportation", to: "/new-orleans-hospitality-tourism-transportation" },
      { label: "Pontchartrain Center Transportation", to: "/pontchartrain-center-transportation" },
      { label: "Special Events", to: "/services/special-events" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans, LA", "Louisiana"], serviceType: "Corporate transportation" },
  },
  // ───────────────────────── Event venue ─────────────────────────
  {
    slug: "pontchartrain-center-transportation",
    type: "event",
    name: "Pontchartrain Center",
    badge: "CONVENTIONS & EVENTS",
    h1: "Pontchartrain Center Transportation",
    metaTitle: "Pontchartrain Center Transportation | Kenner, LA",
    metaDescription: "Car and limo service to the Pontchartrain Center in Kenner — trade shows, concerts and conventions. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "Location", value: "Williams Blvd, Kenner, LA" },
      { label: "From MSY", value: "≈ 4 miles · 10 minutes" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "The Pontchartrain Center in Kenner is one of the region's busiest mid-size event venues, hosting trade shows, consumer expos, concerts, graduations and community conventions in a space large enough for a full exhibit floor but close enough to the airport that out-of-town attendees rarely need more than one vehicle for the whole trip. MSY Limo Service covers the venue daily, whether the booking is a single airport-to-door transfer or a full shuttle program for a multi-day show.",
      "Its location on Williams Boulevard in Kenner puts it about 4 miles and roughly 10 minutes from Louis Armstrong New Orleans International Airport, making it one of the easiest venue transfers in our service area and a convenient first or last stop on an arrival or departure day.",
      "We run exhibitor and attendee shuttles for trade shows and expos, VIP transportation for concert and show performers, and family group transportation for graduations and community events, with the same flat-rate pricing and flight tracking as any other MSY pickup.",
    ],
    highlights: [
      "About 10 minutes from MSY — one of our shortest venue transfers",
      "Exhibitor and attendee shuttles for trade shows and expos",
      "VIP transportation for concerts, performers and show organizers",
      "Flight tracking and complimentary wait time on every airport pickup",
      "Sprinter vans for family groups attending graduations and community events",
      "Flat-rate pricing confirmed before you ride",
    ],
    sections: [
      {
        h2: "A short trip from MSY airport",
        paragraphs: [
          "The Pontchartrain Center's Williams Boulevard address in Kenner sits just minutes from the airport, which makes it an easy addition to a same-day arrival or an easy last stop before a departure. We track your inbound flight and have the chauffeur positioned before you clear baggage claim, so an out-of-town attendee can land and be at the venue in well under half an hour.",
          "Local attendees get the same flat-rate reliability for the trip from anywhere in the Kenner, Metairie or New Orleans area, with pricing confirmed before you book rather than quoted on arrival.",
        ],
      },
      {
        h2: "Trade shows, expos and exhibitor logistics",
        paragraphs: [
          "Show organizers and exhibitors running a multi-day trade show or consumer expo at the Pontchartrain Center book us for shuttle loops between nearby hotels and the venue, timed to show-floor hours, along with individual transfers for staff flying in before move-in day. One dispatch contact covers the whole show, so a planner adding a late VIP pickup doesn't need a separate vendor relationship.",
          "Exhibit crews moving freight and display materials between a hotel and the venue during setup and teardown are typically booked hourly, with the vehicle available across the full build period rather than a single one-way trip.",
        ],
      },
      {
        h2: "Concerts, graduations and community events",
        paragraphs: [
          "Performers and show organizers booking the Pontchartrain Center for a concert get VIP transportation to and from the venue with discreet, direct service and a chauffeur who can wait through the performance. Graduations and community conventions bring large family groups, for whom a Sprinter van is typically the most efficient way to move a family together rather than splitting across several cars.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is the Pontchartrain Center from MSY airport?", a: "About 4 miles and roughly 10 minutes, making it one of the shortest venue transfers in our service area." },
      { q: "Can you run a shuttle program for a multi-day trade show?", a: "Yes. We set up shuttle loops between nearby hotels and the venue timed to show-floor hours, with one dispatch contact for the whole event." },
      { q: "Do you provide VIP transportation for concerts and performers?", a: "Yes. We offer discreet, direct service for performers and show organizers, including a chauffeur who can wait through the performance." },
      { q: "Can you handle a large family group for a graduation or community event?", a: "Yes. A Sprinter van is typically the most efficient way to move a family or group together for events at the Pontchartrain Center." },
      { q: "What is the cancellation policy for Pontchartrain Center bookings?", a: "Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter van and multi-vehicle bookings require 12 hours' notice." },
    ],
    related: [
      { label: "Kenner Limo Service", to: "/kenner-limo-service" },
      { label: "Kenner Corporate Car Service", to: "/kenner-corporate-car-service" },
      { label: "New Orleans Meetings & Events Industry Transportation", to: "/new-orleans-meetings-events-industry-transportation" },
      { label: "New Orleans Convention Center Transportation", to: "/new-orleans-convention-center-transportation" },
      { label: "Special Events", to: "/services/special-events" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Kenner, LA", "Jefferson Parish"], serviceType: "Event transportation" },
  },
];
