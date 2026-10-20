// Batch 7 (2026-10-17): 15 new Louisiana / Gulf-Coast / New-Orleans-area
// landing pages — four New Orleans proper neighborhoods that Batches 3–5
// mention in passing but never gave their own page (New Orleans East,
// Central City, Irish Channel, Broadmoor), one Westbank/Jefferson Parish
// town (Terrytown), one Barataria fishing community (Jean Lafitte), one
// St. Bernard Parish town (Meraux), two St. Charles Parish River Parishes
// towns (Boutte, Paradis), two St. Tammany Parish towns (Folsom, Pearl
// River), one Tangipahoa Parish town (Independence), two Ascension Parish
// towns (Prairieville, Donaldsonville) and one Livingston Parish town
// (Walker). Same entry shape as MARYLAND_PAGES (the name is historical —
// these are Louisiana pages). None of these fifteen slugs exist in
// MARYLAND_PAGES, routesData.js or venuesData.js before this batch.
const VEHICLES = [
  { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "solo executives and couples" },
  { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "VIP and executive travel" },
  { name: "Cadillac Escalade", cls: "Premium SUV", seats: 6, best: "families and small groups with luggage" },
  { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "airport runs with beach or golf luggage" },
  { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "wedding parties, corporate teams and groups" },
  { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "proms, weddings and celebrations" },
];

const vehicles = () => VEHICLES.map((v) => ({ ...v }));

export const MARYLAND_BATCH7 = [
  // ───────────────────────── New Orleans neighborhoods ─────────────────────────
  {
    slug: "new-orleans-east-limo-service",
    type: "city",
    name: "New Orleans East",
    badge: "New Orleans Neighborhood Limo Service",
    h1: "New Orleans East Limo Service",
    metaTitle: "New Orleans East Limo Service | MSY Limo Service",
    metaDescription: "Limo and car service in New Orleans East: Read Boulevard, Lake Forest, the I-10 Twin Span corridor and MSY transfers. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 22 mi · 30–40 minutes" },
      { label: "Parish", value: "Orleans" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "New Orleans East is the largest geographic section of the city, running from the Industrial Canal out past Chef Menteur Highway to the St. Tammany Parish line, and it rebuilt itself largely on its own terms after Hurricane Katrina. MSY Limo Service sends chauffeured sedans, SUVs, Sprinter vans and stretch limousines to Read Boulevard, Lake Forest, Plum Orchard, Village de L'Est and the subdivisions off Bullard Avenue.",
      "Louis Armstrong New Orleans International Airport is about 22 miles away, usually 30 to 40 minutes, since the drive runs the full length of I-10 through downtown and Mid-City before reaching Kenner. That distance is exactly why a flat rate and a chauffeur who tracks your flight matter here more than almost anywhere else in the city — a long drive is the wrong place for a surprise.",
      "Beyond the airport, New Orleans East clients book us for NASA Michoud Assembly Facility shifts and contractor visits, Vietnamese and Honduran community weddings and family gatherings in Village de L'Est, and the drive into the CBD or the Quarter for a night that ends well after the last bus has stopped running.",
    ],
    highlights: [
      "Flat-rate or hourly pricing confirmed before you book",
      "Flight tracking on every MSY pickup, with 45 minutes of complimentary wait on domestic arrivals and 60 on international",
      "Chauffeurs who know Read Boulevard, Lake Forest and the Bullard Avenue subdivisions",
      "NASA Michoud Assembly Facility shift and contractor transportation",
      "Sprinter vans and stretch limousines for weddings and family celebrations",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up in New Orleans East",
        paragraphs: [
          "We cover Read Boulevard East and West, Lake Forest, Plum Orchard, Pines Village, Little Woods and the Vietnamese-American community around Village de L'Est and the Mary Queen of Vietnam Church. The NASA Michoud Assembly Facility, where Boeing and NASA build spacecraft hardware along the Intracoastal Waterway, is a regular stop for contractors and visiting staff.",
          "Gated subdivisions and apartment complexes along Bullard Avenue and Morrison Road are no trouble — add the gate code or leasing office entrance when you book.",
        ],
      },
      {
        h2: "New Orleans East to MSY and back",
        paragraphs: [
          "The airport run is the longest standard trip in our New Orleans service area, almost entirely on I-10 through downtown, Mid-City and Metairie before reaching Kenner. Weekday rush hour through the CBD and any Superdome event traffic are the two variables that can stretch a 30-minute trip toward 40 or more, so your chauffeur builds in margin rather than quoting the best case.",
          "On your return, we track your flight rather than the printed schedule, and an early landing or a delay both adjust the pickup automatically. The complimentary wait clock starts once your aircraft is actually on the ground.",
        ],
      },
      {
        h2: "Weddings, family gatherings and the drive into the city",
        paragraphs: [
          "Family celebrations at community halls and churches around Village de L'Est and Lake Forest book Sprinter vans and stretch limousines that keep a large extended family together for the day rather than splitting across several cars. For a night in the CBD or the French Quarter, the drive in from New Orleans East is straightforward, but the drive home at 2 a.m. is not something to leave to chance — a reserved chauffeur is waiting at the agreed corner rather than circling for a fare.",
        ],
      },
      {
        h2: "A neighborhood still rebuilding its own way",
        paragraphs: [
          "New Orleans East's rebuilding since Hurricane Katrina has followed its own path rather than a single master plan — some blocks along Read Boulevard have come back as busy retail corridors, others remain quieter residential streets rebuilding house by house, and our chauffeurs who cover the area regularly have learned the difference rather than treating the whole section as one uniform trip.",
          "The sheer size of New Orleans East, the largest geographic section of the city, also means two addresses that look close together on a map can be a genuine ten-minute drive apart along Chef Menteur Highway or Hayne Boulevard, which is why we confirm the exact address and nearest cross street at booking rather than quoting a flat neighborhood-wide estimate.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is New Orleans East from MSY?", a: "About 22 miles, usually 30 to 40 minutes via I-10 through downtown and Metairie. It's one of the longer standard airport runs in our New Orleans service area, so we build in extra margin." },
      { q: "Do you serve the NASA Michoud Assembly Facility?", a: "Yes. We regularly run shift and contractor transportation for Michoud, with flat rates for recurring trips and flexibility for schedule changes." },
      { q: "Can you handle a large family wedding or gathering in New Orleans East?", a: "Yes. Sprinter vans and stretch limousines keep an extended family or wedding party together, and multiple vehicles can be coordinated under one reservation." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings need 12 hours." },
      { q: "Do you offer hourly service in New Orleans East?", a: "Yes. Hourly bookings keep the vehicle and chauffeur with you for errands, family visits or a night out, with as many stops as the time allows." },
    ],
    related: [
      { label: "Slidell Limo Service", to: "/slidell-limo-service" },
      { label: "Gentilly Limo Service", to: "/gentilly-limo-service" },
      { label: "Mid-City New Orleans Limo Service", to: "/mid-city-new-orleans-limo-service" },
      { label: "New Orleans Corporate Car Service", to: "/new-orleans-corporate-car-service" },
      { label: "New Orleans Wedding Limo Service", to: "/new-orleans-wedding-limo-service" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans East, New Orleans", "Village de L'Est, New Orleans", "New Orleans, LA"], serviceType: "Limousine and car service" },
  },
  {
    slug: "central-city-new-orleans-limo-service",
    type: "city",
    name: "Central City",
    badge: "New Orleans Neighborhood Limo Service",
    h1: "Central City New Orleans Limo Service",
    metaTitle: "Central City New Orleans Limo Service | MSY Limo",
    metaDescription: "Limo and car service in Central City New Orleans: Oretha Castle Haley Boulevard, MSY transfers and CBD-adjacent pickups. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 14 mi · 20–30 minutes" },
      { label: "Landmarks", value: "Oretha Castle Haley Blvd · Taylor Park · the Pythian" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Central City sits between the Garden District and downtown, a historically significant neighborhood built around Oretha Castle Haley Boulevard's civil-rights history, second-line culture and a growing run of restaurants and small businesses. MSY Limo Service provides limo and car service throughout the neighborhood, from residential blocks off LaSalle Street to the corporate and medical offices at its downtown edge.",
      "Louis Armstrong New Orleans International Airport is about 14 miles away, usually 20 to 30 minutes by way of the Pontchartrain Expressway and I-10, one of the shorter airport runs in New Orleans proper. The flat rate is confirmed before you ride and the chauffeur tracks your flight.",
      "Central City clients book us for second-line parade Sundays, dinners along the Oretha Castle Haley corridor, residents commuting to the medical district and CBD, and the short hop downtown for a convention or a Saints game.",
    ],
    highlights: [
      "Pickups from LaSalle Street to the Pontchartrain Expressway and every block toward Central City's downtown edge",
      "MSY transfers with flight tracking and 45 or 60 minutes of complimentary wait",
      "Chauffeurs who plan around second-line parade routes on Sunday afternoons",
      "Quick, flat-rate hops to the CBD, the medical district and the Superdome",
      "Sedans and SUVs for commuters, Sprinter vans for second-line groups",
      "Flat rate or hourly pricing confirmed before you book",
    ],
    sections: [
      {
        h2: "Where we pick up in Central City",
        paragraphs: [
          "We cover the neighborhood from the Pontchartrain Expressway to Martin Luther King Jr. Boulevard and from St. Charles Avenue to Claiborne Avenue, including the Oretha Castle Haley Boulevard corridor, Taylor Park and the blocks around the Pythian Building on Loyola Avenue. The neighborhood's close proximity to the Garden District and the CBD means many trips here connect directly to those districts on the same booking.",
          "Street parking is tight on event weekends, so tell us if your address has a driveway or a preferred side and the chauffeur will use it.",
        ],
      },
      {
        h2: "Central City car service to MSY",
        paragraphs: [
          "The airport run leaves by way of the Pontchartrain Expressway to I-10 west, one of the most direct routes to MSY from anywhere in New Orleans proper. Rush hour on the expressway and any Superdome event are the main variables, and dispatch recommends a pickup time that allows for both. On arrival, the chauffeur meets you at the commercial pickup area or inside baggage claim and brings you home.",
        ],
      },
      {
        h2: "Second lines, dinners and chauffeur service by the hour",
        paragraphs: [
          "Social Aid and Pleasure Club second lines regularly step off from or pass through Central City, and an hourly chauffeur who knows the route lets your group follow along without worrying about parking or a parade detour. For dinner along the Oretha Castle Haley corridor or a quick trip to the Pythian's rooftop bar, hourly service covers the evening with one car and one driver rather than several separate rides.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How much is a car from Central City to MSY?", a: "A flat rate based on your address and vehicle class, confirmed before you book. Call (877) 609-1919 or reserve online for an exact quote." },
      { q: "Can you work around second-line parade routes?", a: "Yes. We check the published route and step-off time for your date and plan the pickup point and timing around it, which is particularly useful for Sunday afternoon second lines." },
      { q: "How far is Central City from the Garden District and CBD?", a: "Just a few minutes by car. Central City borders both, and many of our Central City trips connect directly to a Garden District or downtown stop on the same booking." },
      { q: "Do you offer hourly service for an evening out?", a: "Yes. Hourly bookings keep the same chauffeur and vehicle with you for dinner, a second line or a night that moves between a few stops." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings need 12 hours." },
    ],
    related: [
      { label: "Garden District Limo Service", to: "/garden-district-limo-service" },
      { label: "Irish Channel Limo Service", to: "/irish-channel-limo-service" },
      { label: "Warehouse District and CBD Limo Service", to: "/warehouse-district-cbd-limo-service" },
      { label: "Broadmoor New Orleans Limo Service", to: "/broadmoor-new-orleans-limo-service" },
      { label: "Caesars Superdome Transportation", to: "/caesars-superdome-transportation" },
      { label: "Second Line Wedding Parade Transportation", to: "/second-line-wedding-parade-transportation" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Central City, New Orleans", "New Orleans, LA"], serviceType: "Limousine and car service" },
  },
  {
    slug: "irish-channel-limo-service",
    type: "city",
    name: "Irish Channel",
    badge: "New Orleans Neighborhood Limo Service",
    h1: "Irish Channel Limo Service",
    metaTitle: "Irish Channel Limo Service | MSY Limo Service",
    metaDescription: "Limo and car service in the Irish Channel: Tchoupitoulas Street, Magazine Street and MSY airport transfers. Call (877) 609-1919 to book.",
    stats: [
      { label: "MSY Airport", value: "≈ 15 mi · 25–35 minutes" },
      { label: "Landmarks", value: "Tchoupitoulas St · Magazine St · Washington Ave" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "The Irish Channel runs between Magazine Street and the river, a narrow grid of shotgun houses and corner bars settled by Irish and German dockworkers in the 19th century and now one of the most walkable riverside neighborhoods in New Orleans. MSY Limo Service provides limo and car service throughout the Channel, with a chauffeur who knows that half the streets are one-way and parking is tight on both sides.",
      "Louis Armstrong New Orleans International Airport is about 15 miles away, usually 25 to 35 minutes by way of the Pontchartrain Expressway and I-10. The flat rate is confirmed before you ride and dispatch tracks your flight.",
      "Residents book us for airport runs and evenings on Magazine Street. Visitors book us for guesthouse pickups, the short ride to the Garden District or the Quarter, and St. Patrick's Day parade weekend, when the Channel's own parade fills the neighborhood's streets for a full afternoon.",
    ],
    highlights: [
      "Pickups on Tchoupitoulas, Annunciation, Religious and every cross street to Magazine",
      "MSY transfers with flight tracking and 45 or 60 minutes of complimentary wait",
      "Chauffeurs who plan around the Irish Channel St. Patrick's Day parade route",
      "Quiet guesthouse and private-home arrivals at any hour",
      "Hourly chauffeur service for Magazine Street dinners and riverside walks",
      "Flat rate or hourly pricing confirmed before you book",
    ],
    sections: [
      {
        h2: "Where we pick up in the Irish Channel",
        paragraphs: [
          "We cover the neighborhood from Jackson Avenue to Louisiana Avenue, between Magazine Street and the riverfront levee, including St. Mary's Assumption Church and the corner bars along Tchoupitoulas Street. The Channel's narrow one-way streets and tight parking mean a chauffeur who works the neighborhood regularly saves real time over a first-time visit.",
          "Give us the exact address and any driveway or side-street preference, and your chauffeur will already know the approach.",
        ],
      },
      {
        h2: "Irish Channel car service to MSY",
        paragraphs: [
          "The airport run leaves by way of the Pontchartrain Expressway to I-10 west, the same quick route used by the neighboring Garden District. The chauffeur watches traffic on the morning of an early flight and leaves earlier if the interstate is slow. On the return, dispatch follows your flight, and the chauffeur meets you at the commercial pickup area or inside baggage claim.",
        ],
      },
      {
        h2: "St. Patrick's Day, Magazine Street and chauffeur service by the hour",
        paragraphs: [
          "The Irish Channel's own St. Patrick's Day parade, separate from the Metairie and French Quarter parades, closes neighborhood streets for a full afternoon every March, and an hourly reservation keeps a chauffeur on the right side of the route rather than stuck behind it. For an evening on Magazine Street or a quiet walk along the river, hourly service covers dinner, a cocktail and a ride home without you tracking down a car on a narrow one-way block.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How much is a car from the Irish Channel to MSY?", a: "A flat rate based on your address and vehicle class, confirmed before you book. Call (877) 609-1919 or reserve online for an exact quote." },
      { q: "Can you work around the Irish Channel St. Patrick's Day parade?", a: "Yes. We check the route and timing for your date and plan the pickup point around the closures, which is essential during that weekend." },
      { q: "Is the Irish Channel close to the Garden District?", a: "Yes, they're adjacent, and many of our bookings here connect directly to a Garden District pickup or drop-off on the same trip." },
      { q: "Do you provide late-night guesthouse pickups?", a: "Yes. Quiet, on-time arrivals at private homes and guesthouses at any hour are routine for our Irish Channel chauffeurs." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings need 12 hours." },
    ],
    related: [
      { label: "Garden District Limo Service", to: "/garden-district-limo-service" },
      { label: "Central City New Orleans Limo Service", to: "/central-city-new-orleans-limo-service" },
      { label: "Warehouse District and CBD Limo Service", to: "/warehouse-district-cbd-limo-service" },
      { label: "Garden District and Uptown Transportation Guide", to: "/garden-district-uptown-transportation-guide" },
      { label: "New Orleans Wedding Limo Service", to: "/new-orleans-wedding-limo-service" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Irish Channel, New Orleans", "New Orleans, LA"], serviceType: "Limousine and car service" },
  },
  {
    slug: "broadmoor-new-orleans-limo-service",
    type: "city",
    name: "Broadmoor",
    badge: "New Orleans Neighborhood Limo Service",
    h1: "Broadmoor New Orleans Limo Service",
    metaTitle: "Broadmoor New Orleans Limo Service | MSY Limo Service",
    metaDescription: "Limo and car service in Broadmoor, New Orleans: South Broad Street, Napoleon Avenue and MSY airport transfers. Call (877) 609-1919 to book.",
    stats: [
      { label: "MSY Airport", value: "≈ 14 mi · 25–35 minutes" },
      { label: "Landmarks", value: "S. Broad St · Napoleon Ave · Rosa Keller Library" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Broadmoor sits in a natural low bowl between Uptown and Mid-City, a neighborhood of raised bungalows and shotgun doubles that became a national symbol of grassroots rebuilding after Hurricane Katrina through the Broadmoor Improvement Association's recovery effort. MSY Limo Service provides limo and car service throughout the neighborhood, from the Rosa F. Keller Library to the residential blocks off South Broad Street.",
      "Louis Armstrong New Orleans International Airport is about 14 miles away, usually 25 to 35 minutes by way of South Claiborne Avenue or Earhart Boulevard to I-10 west. The flat rate is confirmed before you ride and the chauffeur tracks your flight.",
      "Broadmoor clients book us for commutes to Uptown's hospitals and universities, family events at the library and neighborhood schools, and the short ride downtown or to the airport without navigating South Claiborne traffic yourself.",
    ],
    highlights: [
      "Pickups from Fontainebleau Drive to South Broad Street and every block in between",
      "MSY transfers with flight tracking and 45 or 60 minutes of complimentary wait",
      "Chauffeurs who know the South Claiborne and Napoleon Avenue approach to the interstate",
      "Quick connections to Uptown, Tulane-adjacent hospitals and Mid-City",
      "Sedans and SUVs for daily commuters, Sprinter vans for family events",
      "Flat rate or hourly pricing confirmed before you book",
    ],
    sections: [
      {
        h2: "Where we pick up in Broadmoor",
        paragraphs: [
          "We cover the neighborhood roughly bounded by South Claiborne Avenue, Fontainebleau Drive, South Broad Street and Napoleon Avenue, including the Rosa F. Keller Library and Community Center and the schools along General Pershing Street. Broadmoor's low-lying bowl shape means a few streets flood faster than others in heavy rain, and our chauffeurs plan an alternate approach when that happens rather than driving into standing water.",
          "Tell us your exact address and any driveway preference, and the chauffeur will be at the door a few minutes early.",
        ],
      },
      {
        h2: "Broadmoor car service to MSY",
        paragraphs: [
          "The airport run usually leaves by way of South Claiborne Avenue or Earhart Boulevard to I-10 west, with the chauffeur choosing whichever is moving better that morning. Dispatch recommends a pickup time from your flight and your airline's check-in guidance, with extra margin at weekday rush hour. On arrival at MSY, the chauffeur meets you at the commercial pickup area or inside baggage claim.",
        ],
      },
      {
        h2: "Commutes, family events and chauffeur service by the hour",
        paragraphs: [
          "Broadmoor's central location makes it a convenient base for commuters heading to Uptown's hospitals and universities or downtown to the CBD, and a standing weekly arrangement with one chauffeur removes the daily variability of traffic and parking. For a family celebration at the library or a neighborhood school, Sprinter vans and SUVs keep everyone moving together rather than coordinating separate rides.",
          "Broadmoor's position between Uptown and Mid-City also makes it a sensible meeting point for groups coming from both neighborhoods for a shared airport run or a group outing, since a chauffeur can collect passengers from each side without a long detour either way.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How much is a car from Broadmoor to MSY?", a: "A flat rate based on your address and vehicle class, confirmed before you book. Call (877) 609-1919 or reserve online for an exact quote." },
      { q: "Do you adjust routes for flooding on low-lying streets?", a: "Yes. Our chauffeurs know which Broadmoor streets are prone to standing water in heavy rain and plan an alternate approach rather than driving into it." },
      { q: "How close is Broadmoor to Uptown and the hospitals?", a: "Just a few minutes. Broadmoor borders Uptown, and many of our trips here connect directly to a hospital, university or Magazine Street stop." },
      { q: "Can you set up a standing weekly commute?", a: "Yes. A recurring booking with the same chauffeur is available for regular commutes to Uptown, the medical district or downtown." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings need 12 hours." },
    ],
    related: [
      { label: "Uptown New Orleans Limo Service", to: "/uptown-new-orleans-limo-service" },
      { label: "Mid-City New Orleans Limo Service", to: "/mid-city-new-orleans-limo-service" },
      { label: "Central City New Orleans Limo Service", to: "/central-city-new-orleans-limo-service" },
      { label: "Garden District and Uptown Transportation Guide", to: "/garden-district-uptown-transportation-guide" },
      { label: "New Orleans Corporate Car Service", to: "/new-orleans-corporate-car-service" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Broadmoor, New Orleans", "New Orleans, LA"], serviceType: "Limousine and car service" },
  },
  // ───────────────────────── Jefferson Parish & Barataria ─────────────────────────
  {
    slug: "terrytown-la-limo-service",
    type: "city",
    name: "Terrytown",
    badge: "Jefferson Parish Limo Service",
    h1: "Terrytown Limo Service",
    metaTitle: "Terrytown LA Limo Service | Westbank Car Service",
    metaDescription: "Chauffeured limo and car service in Terrytown, LA — Westbank Expressway corridor, MSY transfers and Crescent City Connection crossings. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 16 mi · 25–35 minutes" },
      { label: "Parish", value: "Jefferson" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Terrytown is the busiest retail and residential stretch of the Westbank outside Gretna proper, built up along Behrman Highway and the Westbank Expressway between Belle Chasse Highway and the Huey P. Long Bridge approach. MSY Limo Service sends chauffeured sedans, SUVs, Sprinter vans and stretch limousines to Terrytown's subdivisions, apartment communities and the Behrman Highway retail corridor.",
      "Louis Armstrong New Orleans International Airport is about 16 miles away, usually 25 to 35 minutes depending on which bridge the chauffeur chooses and the traffic on it. The flat rate is confirmed before you ride, and dispatch tracks your flight so a late arrival just moves the car.",
      "Terrytown clients use us for airport runs with the bridge traffic left to someone else, commutes to the East Bank for work or medical appointments, and weddings and proms where a Sprinter van or stretch limousine handles the crossing without anyone worrying about parking downtown.",
    ],
    highlights: [
      "Flat-rate or hourly pricing confirmed before you book",
      "Flight tracking on every MSY pickup, with 45 minutes of complimentary wait on domestic arrivals and 60 on international",
      "Chauffeurs who time the Crescent City Connection and the Huey P. Long Bridge at rush hour",
      "Pickups throughout the Behrman Highway and Lapalco Boulevard corridors",
      "Sprinter vans and stretch limousines for Westbank weddings and proms",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up in Terrytown",
        paragraphs: [
          "We cover the subdivisions and apartment communities off Behrman Highway and Lapalco Boulevard, the retail corridor anchored by the Westbank Expressway, and the residential streets toward Gretna and Belle Chasse Highway. Gated communities are no trouble — add the gate code or leasing office entrance when you book.",
          "Terrytown's position between Gretna and Belle Chasse Highway makes it a convenient staging point for trips further down the Westbank toward Belle Chasse and Plaquemines Parish.",
        ],
      },
      {
        h2: "Terrytown to MSY and back",
        paragraphs: [
          "The airport run typically crosses the Crescent City Connection to the Pontchartrain Expressway and I-10 west, though the chauffeur can use the Huey P. Long Bridge and Jefferson Highway instead when the Crescent City Connection is backed up after a Superdome event or at weekday rush hour. Either way, the bridge — not the distance — is what determines whether the trip runs closer to 25 minutes or 35.",
          "On your return, we track your flight and adjust the pickup automatically, with the complimentary wait clock starting once your aircraft is on the ground rather than at the scheduled arrival time.",
        ],
      },
      {
        h2: "Weddings, proms and commutes across the river",
        paragraphs: [
          "A stretch limousine or Sprinter van is a common booking for Terrytown weddings and proms headed to a reception or venue on the East Bank, since the chauffeur handles the bridge crossing and timing rather than leaving it to a parent or wedding party driving themselves. For daily commuters heading to the CBD, Uptown or the medical district, a standing arrangement with the same chauffeur removes the guesswork of which bridge is moving on a given morning.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Terrytown from MSY?", a: "About 16 miles, usually 25 to 35 minutes depending on bridge traffic. Your chauffeur chooses between the Crescent City Connection and the Huey P. Long Bridge based on conditions that day." },
      { q: "Which bridge do you use to cross the river?", a: "Usually the Crescent City Connection to I-10, but we switch to the Huey P. Long Bridge and Jefferson Highway when the Connection is backed up, particularly after a Superdome event." },
      { q: "Do you serve the Behrman Highway retail corridor?", a: "Yes. We pick up and drop off throughout the Behrman Highway and Lapalco Boulevard corridors, including the surrounding apartment and subdivision communities." },
      { q: "Can you handle a wedding or prom crossing to the East Bank?", a: "Yes. A stretch limousine or Sprinter van is a common choice for Terrytown weddings and proms headed across the river, with the bridge timing planned in advance." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings need 12 hours." },
    ],
    related: [
      { label: "Gretna and Westbank Limo Service", to: "/gretna-westbank-limo-service" },
      { label: "Algiers Limo Service", to: "/algiers-limo-service" },
      { label: "Belle Chasse Limo Service", to: "/belle-chasse-limo-service" },
      { label: "Harvey Limo Service", to: "/harvey-la-limo-service" },
      { label: "MSY to Gretna", to: "/msy-to-gretna" },
      { label: "New Orleans Wedding Limo Service", to: "/new-orleans-wedding-limo-service" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Terrytown, LA", "Jefferson Parish"], serviceType: "Limousine and car service" },
  },
  {
    slug: "jean-lafitte-la-limo-service",
    type: "city",
    name: "Jean Lafitte",
    badge: "Jefferson Parish Limo Service",
    h1: "Jean Lafitte Limo Service",
    metaTitle: "Jean Lafitte LA Limo Service | Barataria Car Service",
    metaDescription: "Chauffeured limo and car service in Jean Lafitte, LA — Barataria Preserve, the fishing docks and MSY transfers. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 27 mi · 40–50 minutes" },
      { label: "Parish", value: "Jefferson" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "The town of Jean Lafitte sits at the end of the Westbank Expressway's reach into Barataria, a fishing and boating community wrapped around the bayous that give the Jean Lafitte National Historical Park's Barataria Preserve its name. MSY Limo Service sends chauffeured sedans, SUVs and Sprinter vans down LA-45 to the marinas, seafood docks and the preserve's visitor center.",
      "Louis Armstrong New Orleans International Airport is about 27 miles away, usually 40 to 50 minutes by way of the Westbank Expressway and the Lafitte-Larose Highway. The flat rate is confirmed before you ride, and we track your flight so an early or late landing just adjusts the pickup.",
      "Jean Lafitte clients book us for swamp-tour and fishing-charter transfers, airport runs for visitors staying at Barataria-area rentals, and the drive back into New Orleans proper for dinner after a day on the water.",
    ],
    highlights: [
      "Flat-rate or hourly pricing confirmed before you book",
      "Flight tracking on every MSY pickup, with 45 minutes of complimentary wait on domestic arrivals and 60 on international",
      "Chauffeurs who know the Lafitte-Larose Highway and the marina and dock access roads",
      "Swamp-tour and fishing-charter pickup and return coordination",
      "SUVs and Sprinter vans for groups with coolers, gear and luggage",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up around Jean Lafitte",
        paragraphs: [
          "We cover the town of Jean Lafitte and the surrounding Barataria community along LA-45, including the marinas and seafood docks, the rental camps and houseboats along the bayou, and the Barataria Preserve visitor center at the edge of the Jean Lafitte National Historical Park. The drive in from the Westbank Expressway is a single road for the last several miles, which makes timing straightforward once you're on it.",
          "Fishing charters and swamp tours often start early and run on the water's schedule, not the clock, so tell us your captain's planned return and we'll adjust the pickup rather than holding you to a fixed time.",
        ],
      },
      {
        h2: "Jean Lafitte to MSY and back",
        paragraphs: [
          "The airport run follows the Lafitte-Larose Highway back to the Westbank Expressway and across to I-10, and the LA-45 stretch itself is the one two-lane section where a slow-moving boat trailer or farm vehicle can occasionally add a few minutes. Your chauffeur builds that into the schedule rather than assuming an open road the whole way.",
          "On your return, we track your flight and the complimentary wait clock starts once your aircraft is on the ground, which matters on a 40-to-50-minute route where you'd rather not be guessing about pickup timing from a boat landing.",
        ],
      },
      {
        h2: "Swamp tours, fishing trips and the ride back to the city",
        paragraphs: [
          "Groups booking a swamp tour or a fishing charter out of Jean Lafitte often want transportation from a French Quarter or CBD hotel straight to the dock and back, and an SUV or Sprinter van handles the coolers, rods and life jackets without crowding the cabin. After a day on the water, the same chauffeur can carry the group back into the city for dinner rather than ending the trip at the dock.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Jean Lafitte from MSY?", a: "About 27 miles, usually 40 to 50 minutes via the Westbank Expressway and the Lafitte-Larose Highway." },
      { q: "Can you coordinate pickup around a fishing charter or swamp tour?", a: "Yes. We work around the captain's planned return time rather than a fixed schedule, since trips on the water rarely run exactly on the clock." },
      { q: "Do you serve the Barataria Preserve?", a: "Yes. We provide transportation to and from the Jean Lafitte National Historical Park's Barataria Preserve visitor center and nearby trailheads." },
      { q: "Can you handle a group with fishing or swamp-tour gear?", a: "Yes. SUVs and Sprinter vans have the room for coolers, rods and life jackets without crowding passengers." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans and special-event bookings need 12 hours." },
    ],
    related: [
      { label: "Gretna and Westbank Limo Service", to: "/gretna-westbank-limo-service" },
      { label: "Marrero Limo Service", to: "/marrero-la-limo-service" },
      { label: "Westwego Limo Service", to: "/westwego-la-limo-service" },
      { label: "Swamp Tour Transportation", to: "/swamp-tour-transportation" },
      { label: "Terrytown Limo Service", to: "/terrytown-la-limo-service" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Hourly Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Jean Lafitte, LA", "Barataria, LA", "Jefferson Parish"], serviceType: "Limousine and car service" },
  },
  // ───────────────────────── St. Bernard Parish ─────────────────────────
  {
    slug: "meraux-la-limo-service",
    type: "city",
    name: "Meraux",
    badge: "St. Bernard Parish Limo Service",
    h1: "Meraux Limo Service",
    metaTitle: "Meraux LA Limo Service | St. Bernard Parish Car Service",
    metaDescription: "Chauffeured limo and car service in Meraux, LA — St. Bernard Highway, Docville Farm and MSY transfers. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 24 mi · 35–45 minutes" },
      { label: "Parish", value: "St. Bernard" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Meraux sits on St. Bernard Highway between Chalmette and Violet, a riverfront community built around the refinery that anchors the parish's economy and the farmland-turned-event-space at Docville Farm. MSY Limo Service sends chauffeured sedans, SUVs, Sprinter vans and stretch limousines throughout Meraux's residential streets and out to the highway's commercial stretch.",
      "Louis Armstrong New Orleans International Airport is about 24 miles away, usually 35 to 45 minutes by way of St. Claiborne Avenue or St. Bernard Highway to I-10 west. The flat rate is confirmed before you ride, and dispatch tracks your flight.",
      "Meraux clients use us for refinery shift and contractor transportation, weddings and events at Docville Farm, and the drive into Chalmette or downtown New Orleans for dinner, a ballgame or a night out.",
    ],
    highlights: [
      "Flat-rate or hourly pricing confirmed before you book",
      "Flight tracking on every MSY pickup, with 45 minutes of complimentary wait on domestic arrivals and 60 on international",
      "Refinery shift and contractor transportation along St. Bernard Highway",
      "Chauffeurs who know Docville Farm and the surrounding event venues",
      "Sprinter vans and stretch limousines for weddings and celebrations",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up in Meraux",
        paragraphs: [
          "We cover the residential streets on both sides of St. Bernard Highway between Chalmette and Violet, including the subdivisions near Docville Farm and the homes closer to the river levee. The refinery and its contractor lots are a regular stop for shift workers and visiting staff who need a predictable, insured ride when a personal vehicle isn't an option.",
          "Give us the address and any gate or lot entrance details, and the chauffeur will already have them before arrival.",
        ],
      },
      {
        h2: "Meraux to MSY and back",
        paragraphs: [
          "The airport run usually follows St. Claiborne Avenue or St. Bernard Highway into the city before picking up I-10 west, with the chauffeur choosing whichever is moving better that morning. We recommend a pickup time built from your flight and your airline's check-in guidance, with extra margin at weekday rush hour through Chalmette and the Industrial Canal crossing.",
          "On your return, we track your flight and the complimentary wait clock starts once your aircraft is on the ground, not the scheduled time.",
        ],
      },
      {
        h2: "Weddings, events and chauffeur service by the hour",
        paragraphs: [
          "Docville Farm hosts weddings and private events on its grounds, and a stretch limousine or Sprinter van fits naturally for a wedding party or a large guest group. For refinery contractors on a multi-day assignment, hourly or daily service with the same chauffeur provides a consistent, reliable ride between the plant, a hotel and meals without the uncertainty of rideshare availability in a smaller market.",
          "Meraux's proximity to Chalmette and the St. Bernard government and museum complex also makes it a convenient base for visitors touring Battle of New Orleans historic sites along St. Bernard Highway, with a chauffeur who can plan a half-day loop between several stops rather than a single point-to-point ride.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Meraux from MSY?", a: "About 24 miles, usually 35 to 45 minutes via St. Bernard Highway or St. Claiborne Avenue to I-10." },
      { q: "Do you provide refinery shift transportation in Meraux?", a: "Yes. We run scheduled pickups for shift workers and contractors, with flat rates for recurring trips and coordination for gate or lot access." },
      { q: "Can you handle a wedding at Docville Farm?", a: "Yes. Stretch limousines and Sprinter vans are regular bookings for Docville Farm weddings and private events." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings need 12 hours." },
      { q: "Do you offer hourly or multi-day service for contractors?", a: "Yes. Hourly and standing daily bookings are available for contractors on multi-day assignments who need a consistent, insured ride." },
    ],
    related: [
      { label: "Chalmette Limo Service", to: "/chalmette-la-limo-service" },
      { label: "Violet Limo Service", to: "/violet-la-limo-service" },
      { label: "Arabi Limo Service", to: "/arabi-la-limo-service" },
      { label: "MSY to Chalmette", to: "/msy-to-chalmette" },
      { label: "New Orleans Wedding Limo Service", to: "/new-orleans-wedding-limo-service" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Meraux, LA", "St. Bernard Parish"], serviceType: "Limousine and car service" },
  },
  // ───────────────────────── St. Charles Parish ─────────────────────────
  {
    slug: "boutte-la-limo-service",
    type: "city",
    name: "Boutte",
    badge: "St. Charles Parish Limo Service",
    h1: "Boutte Limo Service",
    metaTitle: "Boutte LA Limo Service | St. Charles Parish Car Service",
    metaDescription: "Chauffeured limo and car service in Boutte, LA — US-90, Bayou Des Allemands and MSY airport transfers. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 30 mi · 35–45 minutes" },
      { label: "Parish", value: "St. Charles" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Boutte sits along US-90 on the west end of St. Charles Parish, a crossroads community where the highway meets Bayou Des Allemands and the swamp country that stretches toward Des Allemands and Lafourche Parish. MSY Limo Service sends chauffeured sedans, SUVs and Sprinter vans to Boutte's residential streets and out to the bayou-side camps and boat launches.",
      "Louis Armstrong New Orleans International Airport is about 30 miles away, usually 35 to 45 minutes by way of US-90 and I-310 to I-10 east. The flat rate is confirmed before you ride, and we track your flight so a delay simply adjusts the pickup.",
      "Boutte clients book us for airport runs, swamp-tour and fishing transfers out to Bayou Des Allemands, and the drive into New Orleans or Metairie for work, medical appointments or a night out.",
    ],
    highlights: [
      "Flat-rate or hourly pricing confirmed before you book",
      "Flight tracking on every MSY pickup, with 45 minutes of complimentary wait on domestic arrivals and 60 on international",
      "Chauffeurs who know US-90 and the I-310 bridge approach",
      "Swamp-tour and fishing-charter transfers to Bayou Des Allemands",
      "SUVs and Sprinter vans for groups with gear and luggage",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up in Boutte",
        paragraphs: [
          "We cover the residential streets along US-90 and the roads leading out to Bayou Des Allemands, including the camps, marinas and boat launches used for swamp tours and fishing. Boutte's position at the US-90 and LA-20 junction makes it a convenient staging point for trips further out toward Des Allemands or back toward the River Parishes.",
          "Rural addresses and camp roads are no trouble — give us clear directions or a landmark when you book and the chauffeur will confirm the approach in advance.",
        ],
      },
      {
        h2: "Boutte to MSY and back",
        paragraphs: [
          "The airport run follows US-90 to I-310, crossing the Mississippi River bridge before picking up I-10 east toward Kenner. The I-310 bridge and the I-10 interchange are the two spots that can add time at rush hour, and your chauffeur builds that margin in rather than quoting the open-road best case.",
          "On your return, we track your flight and the complimentary wait clock starts once your aircraft is on the ground, which matters on a route where a wrong turn off US-90 at night can cost real time.",
        ],
      },
      {
        h2: "Swamp tours, fishing trips and commutes",
        paragraphs: [
          "Visitors booking a swamp tour or fishing trip near Bayou Des Allemands often want a transfer from a New Orleans hotel straight to the launch and back, and an SUV or Sprinter van carries the group and gear without crowding the cabin. For residents commuting toward Metairie or New Orleans for work, a standing arrangement with the same chauffeur removes the daily guesswork of I-310 and I-10 traffic.",
          "Boutte also sees a steady stream of airboat and fishing charter traffic heading further out toward Des Allemands and Lac des Allemands, and our chauffeurs are used to early starts well before sunrise when a charter captain needs the group at the dock ahead of first light.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Boutte from MSY?", a: "About 30 miles, usually 35 to 45 minutes via US-90 and I-310 to I-10 east." },
      { q: "Can you take us to a swamp tour near Bayou Des Allemands?", a: "Yes. We regularly run transfers between New Orleans hotels and the marinas and boat launches around Bayou Des Allemands." },
      { q: "Do you serve rural addresses and camp roads near Boutte?", a: "Yes. Give us clear directions or a landmark when you book and your chauffeur will confirm the approach before the trip." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans and special-event bookings need 12 hours." },
      { q: "Do you offer standing commute service from Boutte?", a: "Yes. A recurring booking with the same chauffeur is available for regular commutes toward Metairie or New Orleans." },
    ],
    related: [
      { label: "Destrehan Limo Service", to: "/destrehan-la-limo-service" },
      { label: "Luling Limo Service", to: "/luling-la-limo-service" },
      { label: "Paradis Limo Service", to: "/paradis-la-limo-service" },
      { label: "Swamp Tour Transportation", to: "/swamp-tour-transportation" },
      { label: "MSY to Destrehan", to: "/msy-to-destrehan" },
      { label: "Hourly Charter", to: "/services/hourly-charter" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Boutte, LA", "St. Charles Parish"], serviceType: "Limousine and car service" },
  },
  {
    slug: "paradis-la-limo-service",
    type: "city",
    name: "Paradis",
    badge: "St. Charles Parish Limo Service",
    h1: "Paradis Limo Service",
    metaTitle: "Paradis LA Limo Service | St. Charles Parish Car Service",
    metaDescription: "Chauffeured limo and car service in Paradis, LA — Bayou Gauche, US-90 and MSY airport transfers. Flat rates, flight tracking. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 33 mi · 40–50 minutes" },
      { label: "Parish", value: "St. Charles" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Paradis is a small, close-knit community on the swamp edge of St. Charles Parish, just west of Boutte along US-90 toward Bayou Gauche, where rural homesteads and fishing camps sit at the end of the drivable road before the wetlands take over. MSY Limo Service sends chauffeured sedans, SUVs and Sprinter vans into Paradis for airport runs, medical trips and the occasional wedding or family gathering.",
      "Louis Armstrong New Orleans International Airport is about 33 miles away, usually 40 to 50 minutes by way of US-90 and I-310 to I-10 east, one of the longer standard drives in our River Parishes coverage area. The flat rate is confirmed before you ride, and we track your flight so a delay doesn't leave you waiting on a car that already left.",
      "Paradis clients book us for airport and medical-appointment transportation when a long drive isn't something they want to handle themselves, and for visiting family who want a reliable ride in from the city rather than navigating US-90 at night for the first time.",
    ],
    highlights: [
      "Flat-rate or hourly pricing confirmed before you book",
      "Flight tracking on every MSY pickup, with 45 minutes of complimentary wait on domestic arrivals and 60 on international",
      "Chauffeurs who know US-90, Bayou Gauche Road and the I-310 bridge approach",
      "Medical-appointment transportation for a genuinely long drive",
      "SUVs and Sprinter vans for family gatherings and visiting relatives",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up in Paradis",
        paragraphs: [
          "We cover the homes and fishing camps along US-90 and Bayou Gauche Road, at the western edge of St. Charles Parish where the drivable road gives way to wetlands. Paradis is small enough that most trips are arranged by landmark or nearest crossroad rather than a conventional street address, and our chauffeurs confirm that detail with you before the day of the trip.",
          "If your pickup is at a camp without a formal address, a quick phone call to dispatch ahead of time means the chauffeur arrives with clear directions rather than guessing at the end of a gravel road.",
        ],
      },
      {
        h2: "Paradis to MSY and back",
        paragraphs: [
          "The airport run follows US-90 east to I-310, across the Mississippi River bridge, then I-10 east toward Kenner — a genuinely long drive by local standards, and one where leaving extra time matters more than usual. The I-310 bridge and the I-10 interchange near Kenner are the two spots most likely to add unplanned minutes.",
          "On your return, we track your flight and the complimentary wait clock starts once your aircraft is on the ground, which gives real breathing room on a trip this long rather than a rushed pickup the moment you land.",
        ],
      },
      {
        h2: "Medical trips, family visits and the long drive in",
        paragraphs: [
          "For medical appointments in New Orleans, Metairie or Baton Rouge, a reserved sedan removes the stress of a long unfamiliar drive, with a chauffeur who waits during the appointment on an hourly booking rather than leaving you to arrange a separate return trip. Visiting family members flying into MSY appreciate a direct, flat-rate transfer rather than trying to navigate US-90 and Bayou Gauche Road after dark for the first time.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Paradis from MSY?", a: "About 33 miles, usually 40 to 50 minutes via US-90 and I-310 to I-10 east. It's one of the longer standard drives in our River Parishes service area." },
      { q: "Do you pick up at camps without a formal street address?", a: "Yes. Call dispatch ahead of time with a landmark or nearest crossroad and we'll confirm the exact approach before your chauffeur arrives." },
      { q: "Can you handle a medical appointment trip from Paradis?", a: "Yes. Hourly bookings let the chauffeur wait during an appointment in New Orleans, Metairie or Baton Rouge and then bring you home." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans and special-event bookings need 12 hours." },
      { q: "Can you pick up visiting family at MSY for a trip to Paradis?", a: "Yes. We track the flight and provide a direct, flat-rate transfer rather than leaving visiting relatives to navigate an unfamiliar drive themselves." },
    ],
    related: [
      { label: "Boutte Limo Service", to: "/boutte-la-limo-service" },
      { label: "Luling Limo Service", to: "/luling-la-limo-service" },
      { label: "Destrehan Limo Service", to: "/destrehan-la-limo-service" },
      { label: "Swamp Tour Transportation", to: "/swamp-tour-transportation" },
      { label: "MSY to Destrehan", to: "/msy-to-destrehan" },
      { label: "Hourly Charter", to: "/services/hourly-charter" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Paradis, LA", "St. Charles Parish"], serviceType: "Limousine and car service" },
  },
  // ───────────────────────── St. Tammany Parish ─────────────────────────
  {
    slug: "folsom-la-limo-service",
    type: "city",
    name: "Folsom",
    badge: "St. Tammany Parish Limo Service",
    h1: "Folsom Limo Service",
    metaTitle: "Folsom LA Limo Service | Northshore Horse Country",
    metaDescription: "Chauffeured limo and car service in Folsom, LA — Northshore horse country, MSY airport transfers and event transportation. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 52 mi · 65–75 minutes" },
      { label: "Parish", value: "St. Tammany" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Folsom is Northshore horse country, a quiet town of farms, stables and small event venues tucked between Covington and the Mississippi state line. MSY Limo Service sends chauffeured sedans, SUVs and Sprinter vans up to Folsom for airport transfers, weddings at the area's farm venues and the Folsom Zydeco Festival that draws crowds from across the region every Labor Day weekend.",
      "Louis Armstrong New Orleans International Airport is about 52 miles away, usually 65 to 75 minutes by way of either the Causeway Bridge or the I-10 Twin Span, then north on LA-25 or LA-40. The flat rate is confirmed before you ride, and we track your flight so an early or late landing simply adjusts your pickup.",
      "Folsom clients book us for airport runs, weddings at the area's horse farms and barns, and the Folsom Zydeco Festival weekend, when vehicle availability across the Northshore tightens well before the event itself.",
    ],
    highlights: [
      "Flat-rate or hourly pricing confirmed before you book",
      "Flight tracking on every MSY pickup, with 45 minutes of complimentary wait on domestic arrivals and 60 on international",
      "Chauffeurs who know LA-25, LA-40 and the farm and stable access roads",
      "Wedding and event transportation for Folsom's farm and barn venues",
      "Folsom Zydeco Festival transportation each Labor Day weekend",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up in Folsom",
        paragraphs: [
          "We cover the farms, stables and rural subdivisions along LA-25 and LA-40, including the barn and farm venues that host weddings and private events throughout the year. Many addresses here are gravel-drive farms rather than conventional streets, so a landmark or gate description when you book helps the chauffeur arrive without hesitation.",
          "Folsom's horse-country roads are narrow in places and can be busy during major equestrian events, so we check the local calendar before confirming a pickup window.",
        ],
      },
      {
        h2: "Folsom to MSY and back",
        paragraphs: [
          "The airport run crosses Lake Pontchartrain on either the 24-mile Causeway Bridge or the I-10 Twin Span, and the chauffeur picks based on which is moving better and which approach suits your pickup point in Folsom. From either crossing, LA-25 or LA-40 carries the trip the rest of the way north, generally the calmest stretch of the drive.",
          "Because this is one of the longer standard routes we run, we build real margin into early-morning or international-arrival pickups rather than cutting it close on a 65-to-75-minute trip.",
        ],
      },
      {
        h2: "Weddings, the Zydeco Festival and event transportation",
        paragraphs: [
          "Farm and barn wedding venues around Folsom call for Sprinter vans and stretch limousines that can handle a gravel drive and a tented reception without trouble, and our chauffeurs plan the staging point with the venue in advance. The Folsom Zydeco Festival each Labor Day weekend draws a regional crowd, and vehicles for that weekend book out well ahead — we recommend reserving as soon as your plans are set rather than waiting until the week of the festival.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Folsom from MSY?", a: "About 52 miles, usually 65 to 75 minutes via the Causeway Bridge or the I-10 Twin Span and then LA-25 or LA-40 north." },
      { q: "Do you provide wedding transportation for Folsom's farm venues?", a: "Yes. Sprinter vans and stretch limousines are regular bookings for barn and farm weddings, with the staging point confirmed with the venue in advance." },
      { q: "Can you handle Folsom Zydeco Festival transportation?", a: "Yes, but book early. Labor Day weekend is one of the busiest stretches on the Northshore for vehicle availability." },
      { q: "Do you serve rural farm addresses without a conventional street number?", a: "Yes. Give us a landmark or gate description when you book and the chauffeur will confirm the approach in advance." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings need 12 hours." },
    ],
    related: [
      { label: "Madisonville Limo Service", to: "/madisonville-la-limo-service" },
      { label: "Covington Limo Service", to: "/covington-la-limo-service" },
      { label: "Mandeville Limo Service", to: "/mandeville-limo-service" },
      { label: "Northshore Transportation Guide", to: "/new-orleans-northshore-transportation-guide" },
      { label: "New Orleans Wedding Limo Service", to: "/new-orleans-wedding-limo-service" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Folsom, LA", "St. Tammany Parish"], serviceType: "Limousine and car service" },
  },
  {
    slug: "pearl-river-la-limo-service",
    type: "city",
    name: "Pearl River",
    badge: "St. Tammany Parish Limo Service",
    h1: "Pearl River Limo Service",
    metaTitle: "Pearl River LA Limo Service | Northshore Car Service",
    metaDescription: "Chauffeured limo and car service in Pearl River, LA — Honey Island Swamp, I-59 and MSY airport transfers. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 45 mi · 55–65 minutes" },
      { label: "Parish", value: "St. Tammany" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Pearl River sits on the eastern edge of St. Tammany Parish near the Pearl River itself and the Honey Island Swamp, a gateway town for swamp tours and a residential community just off I-59 near the Mississippi state line. MSY Limo Service sends chauffeured sedans, SUVs and Sprinter vans to Pearl River's neighborhoods and out to the swamp tour launches that bring visitors from across the region.",
      "Louis Armstrong New Orleans International Airport is about 45 miles away, usually 55 to 65 minutes by way of I-10 east through Slidell and then I-59 north. The flat rate is confirmed before you ride, and dispatch tracks your flight.",
      "Pearl River clients book us for airport runs, Honey Island Swamp tour transfers, and the drive into Slidell or across the lake to New Orleans for work, shopping or a night out.",
    ],
    highlights: [
      "Flat-rate or hourly pricing confirmed before you book",
      "Flight tracking on every MSY pickup, with 45 minutes of complimentary wait on domestic arrivals and 60 on international",
      "Chauffeurs who know I-59 and the Honey Island Swamp tour launch roads",
      "Swamp-tour pickup and return coordination",
      "SUVs and Sprinter vans for groups with gear and luggage",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up in Pearl River",
        paragraphs: [
          "We cover the residential neighborhoods along I-59 and West Causeway-adjacent roads, as well as the boat launches and tour operators on the edge of the Honey Island Swamp. Pearl River's proximity to the Mississippi state line makes it a natural staging point for trips that continue toward the Mississippi Gulf Coast.",
          "Tour companies here run on the water's schedule, so tell us the planned return time for a swamp tour and we'll build the pickup around it rather than a fixed clock time.",
        ],
      },
      {
        h2: "Pearl River to MSY and back",
        paragraphs: [
          "The airport run follows I-10 west through Slidell, crosses the I-10 Twin Span over Lake Pontchartrain, and continues through New Orleans East to Kenner — I-59's merge with I-10 near Slidell and the Twin Span itself are the two spots most likely to slow things down. Your chauffeur checks both before committing to a departure time.",
          "On your return, international and domestic wait times apply as usual, with the clock starting once your aircraft is actually on the ground.",
        ],
      },
      {
        h2: "Honey Island Swamp tours and chauffeur service",
        paragraphs: [
          "Groups visiting the Honey Island Swamp for an airboat or pontoon tour often want a transfer from a New Orleans or Slidell hotel straight to the launch, and an SUV or Sprinter van handles the group and gear comfortably. For residents commuting toward Slidell or across the lake, hourly and standing bookings with the same chauffeur simplify a trip that otherwise depends on bridge and interstate traffic.",
          "Pearl River's location also makes it a practical stop on a longer day that combines a swamp tour with a visit to the antique shops and restaurants of downtown Slidell, and a single hourly booking can cover both rather than arranging two separate trips.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Pearl River from MSY?", a: "About 45 miles, usually 55 to 65 minutes via I-10 through Slidell and then I-59 north." },
      { q: "Can you take us to a Honey Island Swamp tour?", a: "Yes. We regularly run transfers between New Orleans or Slidell hotels and the boat launches used for Honey Island Swamp tours." },
      { q: "Do you work around a tour operator's return schedule?", a: "Yes. Tell us the planned return time and we'll build the pickup around it rather than holding to a fixed clock time." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans and special-event bookings need 12 hours." },
      { q: "Do you serve destinations toward the Mississippi Gulf Coast from Pearl River?", a: "Yes. Pearl River's position near the state line makes it a convenient staging point for trips continuing toward the Mississippi coast." },
    ],
    related: [
      { label: "Slidell Limo Service", to: "/slidell-limo-service" },
      { label: "MSY to Slidell", to: "/msy-to-slidell" },
      { label: "Mandeville Limo Service", to: "/mandeville-limo-service" },
      { label: "Swamp Tour Transportation", to: "/swamp-tour-transportation" },
      { label: "Northshore Transportation Guide", to: "/new-orleans-northshore-transportation-guide" },
      { label: "Hourly Charter", to: "/services/hourly-charter" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Pearl River, LA", "St. Tammany Parish"], serviceType: "Limousine and car service" },
  },
  // ───────────────────────── Tangipahoa Parish ─────────────────────────
  {
    slug: "independence-la-limo-service",
    type: "city",
    name: "Independence",
    badge: "Tangipahoa Parish Limo Service",
    h1: "Independence Limo Service",
    metaTitle: "Independence LA Limo Service | Tangipahoa Parish Car Service",
    metaDescription: "Chauffeured limo and car service in Independence, LA — Italian heritage festivals, I-55 and MSY airport transfers. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 58 mi · 65–75 minutes" },
      { label: "Parish", value: "Tangipahoa" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Independence is a small Tangipahoa Parish town just off I-55, known across the region for its Italian heritage and the Independence Italian Festival held every spring. MSY Limo Service sends chauffeured sedans, SUVs and Sprinter vans up to Independence for airport transfers, festival weekends and family events.",
      "Louis Armstrong New Orleans International Airport is about 58 miles away, usually 65 to 75 minutes by way of I-10 east and I-55 north, one of the longer drives in our Florida Parishes coverage area. The flat rate is confirmed before you ride, and we track your flight so the pickup adjusts automatically to an early or delayed arrival.",
      "Independence clients book us for airport runs timed around a genuinely long drive, the Independence Italian Festival each spring, and family gatherings and weddings where a Sprinter van or stretch limousine keeps everyone together for the day.",
    ],
    highlights: [
      "Flat-rate or hourly pricing confirmed before you book",
      "Flight tracking on every MSY pickup, with 45 minutes of complimentary wait on domestic arrivals and 60 on international",
      "Chauffeurs who know I-55 and the downtown festival-grounds approach",
      "Independence Italian Festival transportation each spring",
      "Sprinter vans and stretch limousines for weddings and family events",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up in Independence",
        paragraphs: [
          "We cover the town of Independence and the surrounding rural Tangipahoa Parish addresses along I-55 and LA-40, including the downtown festival grounds that host the Independence Italian Festival. The town's close-knit layout means most addresses are a short, direct drive from the interstate exit.",
          "Festival weekends bring road closures around downtown, and our chauffeurs check the published map for your date rather than assuming last year's route still applies.",
        ],
      },
      {
        h2: "Independence to MSY and back",
        paragraphs: [
          "The airport run follows I-55 south to I-10, then I-10 west through Baton Rouge-bound traffic patterns and on toward Kenner. Because this is one of the longer standard routes in our coverage area, we recommend building real margin into early-morning or tight-connection pickups rather than counting on the best-case drive time.",
          "On your return, international arrivals carry 60 minutes of complimentary wait time and domestic arrivals 45, both measured from actual touchdown — useful cushion on a trip this length.",
        ],
      },
      {
        h2: "The Italian Festival and family events",
        paragraphs: [
          "The Independence Italian Festival each spring draws visitors from across the Florida Parishes and beyond for food, music and parade events downtown, and vehicles book out well before festival weekend — we recommend reserving as soon as your plans are confirmed. For weddings and family reunions, a Sprinter van or stretch limousine keeps a large group together for the day rather than splitting across several cars for a long-distance trip.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Independence from MSY?", a: "About 58 miles, usually 65 to 75 minutes via I-10 and I-55. It's one of the longer standard drives in our Florida Parishes service area." },
      { q: "Can you handle Independence Italian Festival transportation?", a: "Yes, but book early. Festival weekend is the busiest stretch of the year for vehicles in this area, and we recommend reserving as soon as your dates are set." },
      { q: "Do you provide wedding or family-event transportation?", a: "Yes. Sprinter vans and stretch limousines are regular bookings for weddings and family reunions, keeping a large group together for a long-distance trip." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings need 12 hours." },
      { q: "How much wait time is included for an MSY pickup after flying in?", a: "45 minutes for domestic arrivals and 60 minutes for international arrivals, both measured from actual touchdown, which gives real cushion on a drive this long." },
    ],
    related: [
      { label: "Hammond Limo Service", to: "/hammond-la-limo-service" },
      { label: "MSY to Hammond", to: "/msy-to-hammond" },
      { label: "Ponchatoula Limo Service", to: "/ponchatoula-la-limo-service" },
      { label: "New Orleans Wedding Limo Service", to: "/new-orleans-wedding-limo-service" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Hourly Charter", to: "/services/hourly-charter" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Independence, LA", "Tangipahoa Parish"], serviceType: "Limousine and car service" },
  },
  // ───────────────────────── Ascension Parish ─────────────────────────
  {
    slug: "prairieville-la-limo-service",
    type: "city",
    name: "Prairieville",
    badge: "Ascension Parish Limo Service",
    h1: "Prairieville Limo Service",
    metaTitle: "Prairieville LA Limo Service | Ascension Parish Car Service",
    metaDescription: "Chauffeured limo and car service in Prairieville, LA — Baton Rouge suburb, Airline Highway and MSY transfers. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 58 mi · 65–75 minutes" },
      { label: "Parish", value: "Ascension" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Prairieville is one of the fastest-growing suburbs south of Baton Rouge, a residential and retail community along Airline Highway and LA-73 in Ascension Parish. MSY Limo Service sends chauffeured sedans, SUVs, Sprinter vans and stretch limousines throughout Prairieville's subdivisions and out to the surrounding retail and medical corridors.",
      "Louis Armstrong New Orleans International Airport is about 58 miles away, usually 65 to 75 minutes by way of I-10 west, one of the longer standard drives we run but a straightforward one on open interstate for most of the trip. The flat rate is confirmed before you ride, and we track your flight.",
      "Prairieville clients book us for airport runs timed around a predictable long drive, weddings and family events at the area's event venues, and the commute into Baton Rouge for work, medical appointments or LSU events.",
    ],
    highlights: [
      "Flat-rate or hourly pricing confirmed before you book",
      "Flight tracking on every MSY pickup, with 45 minutes of complimentary wait on domestic arrivals and 60 on international",
      "Chauffeurs who know Airline Highway, LA-73 and the Baton Rouge approach",
      "Wedding and event transportation for Ascension Parish venues",
      "Sprinter vans and stretch limousines for weddings and celebrations",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up in Prairieville",
        paragraphs: [
          "We cover the subdivisions and retail corridors along Airline Highway, LA-73 and LA-74, including the medical offices and event venues that have grown alongside Prairieville's residential expansion. The area's rapid growth means new subdivisions appear often, so we confirm the current address and nearest cross street when you book.",
          "Prairieville's position close to Baton Rouge makes it a natural staging point for trips continuing into the capital for business or LSU events.",
        ],
      },
      {
        h2: "Prairieville to MSY and back",
        paragraphs: [
          "The airport run is mostly open interstate on I-10 west, which makes it one of the more predictable long drives we run even though the distance is significant. The main variable is traffic through the Baton Rouge interchange area at the start of the trip and the final stretch into Kenner near the end.",
          "On your return, we track your flight and the complimentary wait clock starts once your aircraft is on the ground, which gives real breathing room on a 65-to-75-minute route.",
        ],
      },
      {
        h2: "Weddings, Baton Rouge commutes and events",
        paragraphs: [
          "Prairieville's event venues and churches regularly book stretch limousines and Sprinter vans for weddings, and our chauffeurs plan the staging and timing with the venue in advance. For residents commuting into Baton Rouge for work, medical care or LSU events, a standing arrangement with the same chauffeur simplifies a trip that's otherwise subject to Airline Highway and I-10 traffic.",
          "LSU home games are the single biggest demand spike for vehicles anywhere around Baton Rouge, Prairieville included, and both the roads into the stadium and the return trip afterward can run well behind a normal commute time. We recommend booking gameday trips as soon as the schedule is out rather than waiting for kickoff week.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Prairieville from MSY?", a: "About 58 miles, usually 65 to 75 minutes via I-10 west, mostly open interstate for the length of the trip." },
      { q: "Do you provide wedding transportation for Prairieville venues?", a: "Yes. Stretch limousines and Sprinter vans are regular bookings for Ascension Parish weddings, with staging planned with the venue in advance." },
      { q: "Can you handle a commute into Baton Rouge from Prairieville?", a: "Yes. A standing arrangement with the same chauffeur is available for regular trips into Baton Rouge for work, medical appointments or LSU events." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings need 12 hours." },
      { q: "Do you serve new subdivisions in Prairieville?", a: "Yes. The area grows quickly, so we confirm the current address and nearest cross street when you book to make sure the chauffeur has the right location." },
    ],
    related: [
      { label: "Gonzales Limo Service", to: "/gonzales-la-limo-service" },
      { label: "Baton Rouge Limo Service", to: "/baton-rouge-limo-service" },
      { label: "Donaldsonville Limo Service", to: "/donaldsonville-la-limo-service" },
      { label: "MSY to Baton Rouge", to: "/msy-to-baton-rouge" },
      { label: "New Orleans Wedding Limo Service", to: "/new-orleans-wedding-limo-service" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Prairieville, LA", "Ascension Parish"], serviceType: "Limousine and car service" },
  },
  {
    slug: "donaldsonville-la-limo-service",
    type: "city",
    name: "Donaldsonville",
    badge: "Ascension Parish Limo Service",
    h1: "Donaldsonville Limo Service",
    metaTitle: "Donaldsonville LA Limo Service | River Road Car Service",
    metaDescription: "Chauffeured limo and car service in Donaldsonville, LA — historic River Road, plantation venues and MSY transfers. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 62 mi · 70–80 minutes" },
      { label: "Parish", value: "Ascension" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Donaldsonville is one of the oldest towns on the Mississippi River, a historic river port in Ascension Parish with one of the largest National Register historic districts in Louisiana and a cluster of plantation-era venues nearby along River Road. MSY Limo Service sends chauffeured sedans, SUVs, Sprinter vans and stretch limousines into downtown Donaldsonville and out to the surrounding River Road estates.",
      "Louis Armstrong New Orleans International Airport is about 62 miles away, usually 70 to 80 minutes by way of River Road or I-10 to LA-70, one of the longer drives in our service area. The flat rate is confirmed before you ride, and we track your flight so the pickup adjusts to an early or delayed arrival.",
      "Donaldsonville clients book us for weddings at the nearby River Road plantation estates, historic-district tours, and airport transfers for visitors timing a long drive around a flight rather than a fixed schedule.",
    ],
    highlights: [
      "Flat-rate or hourly pricing confirmed before you book",
      "Flight tracking on every MSY pickup, with 45 minutes of complimentary wait on domestic arrivals and 60 on international",
      "Chauffeurs who know River Road and the surrounding plantation estate approaches",
      "Wedding and event transportation for River Road venues near Donaldsonville",
      "Historic-district tour transportation by the hour",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up in Donaldsonville",
        paragraphs: [
          "We cover downtown Donaldsonville's historic district, the residential streets around it, and the plantation-era estates along River Road in both directions from town, several of which host weddings and private events. The historic district's narrow, older streets call for a chauffeur who plans the approach rather than guessing at a one-way grid.",
          "River Road itself runs along the levee in both directions, and addresses are sometimes easier to find by the nearest plantation name or mile marker than by street number — tell us the nearest landmark when you book.",
        ],
      },
      {
        h2: "Donaldsonville to MSY and back",
        paragraphs: [
          "The airport run can follow the River Road corridor along the Mississippi or cut inland to I-10 and LA-70, and the chauffeur chooses based on time of day and which road is moving better. Either way, this is one of the longer standard drives we run, so we build real margin into early or tightly connected flights.",
          "On your return, we track your flight and the complimentary wait clock starts once your aircraft is on the ground — valuable cushion on a trip of this length.",
        ],
      },
      {
        h2: "Weddings, plantation venues and historic-district tours",
        paragraphs: [
          "The River Road plantation estates near Donaldsonville are a popular wedding and event setting, and a stretch limousine or Sprinter van handles long, tree-lined entrance drives and tented reception areas without trouble. For visitors touring the historic district or the surrounding River Road estates, hourly service covers several stops at a relaxed, unhurried pace rather than a fixed point-to-point schedule.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Donaldsonville from MSY?", a: "About 62 miles, usually 70 to 80 minutes via River Road or I-10 and LA-70." },
      { q: "Do you provide wedding transportation for River Road plantation venues?", a: "Yes. Stretch limousines and Sprinter vans are regular bookings for weddings at the River Road estates near Donaldsonville." },
      { q: "Can you find addresses by landmark along River Road?", a: "Yes. River Road addresses are often easier to describe by the nearest plantation name or mile marker, and we confirm that detail with you before the trip." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings need 12 hours." },
      { q: "Do you offer hourly tours of the historic district and River Road?", a: "Yes. Hourly bookings cover several stops along the historic district and River Road estates at an unhurried pace." },
    ],
    related: [
      { label: "Gonzales Limo Service", to: "/gonzales-la-limo-service" },
      { label: "Prairieville Limo Service", to: "/prairieville-la-limo-service" },
      { label: "River Road Plantation Tour Transportation", to: "/river-road-plantation-tour-transportation" },
      { label: "MSY to Baton Rouge", to: "/msy-to-baton-rouge" },
      { label: "New Orleans Wedding Limo Service", to: "/new-orleans-wedding-limo-service" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Hourly Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Donaldsonville, LA", "Ascension Parish"], serviceType: "Limousine and car service" },
  },
  // ───────────────────────── Livingston Parish ─────────────────────────
  {
    slug: "walker-la-limo-service",
    type: "city",
    name: "Walker",
    badge: "Livingston Parish Limo Service",
    h1: "Walker Limo Service",
    metaTitle: "Walker LA Limo Service | Livingston Parish Car Service",
    metaDescription: "Chauffeured limo and car service in Walker, LA — Baton Rouge eastern suburb, I-12 and MSY airport transfers. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 62 mi · 70–80 minutes" },
      { label: "Parish", value: "Livingston" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Walker sits just off I-12 east of Baton Rouge, a fast-growing Livingston Parish community of subdivisions and small businesses that has become a popular alternative to the capital's closer-in suburbs. MSY Limo Service sends chauffeured sedans, SUVs, Sprinter vans and stretch limousines throughout Walker's residential streets and retail corridors.",
      "Louis Armstrong New Orleans International Airport is about 62 miles away, usually 70 to 80 minutes by way of I-12 to I-10 west, one of the longer drives in our service area but a steady one on open interstate for most of the trip. The flat rate is confirmed before you ride, and we track your flight.",
      "Walker clients book us for airport runs, weddings and family events at the area's venues, and commutes into Baton Rouge for work, medical appointments or LSU game days.",
    ],
    highlights: [
      "Flat-rate or hourly pricing confirmed before you book",
      "Flight tracking on every MSY pickup, with 45 minutes of complimentary wait on domestic arrivals and 60 on international",
      "Chauffeurs who know I-12, the Walker/Denham Springs corridor and the Baton Rouge approach",
      "Wedding and event transportation for Livingston Parish venues",
      "Sprinter vans and stretch limousines for weddings and celebrations",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up in Walker",
        paragraphs: [
          "We cover the subdivisions and retail corridors along I-12 and LA-447, including the neighborhoods that have grown steadily between Walker and neighboring Denham Springs. The area's rapid residential growth means we confirm current addresses and nearest cross streets when you book, since new subdivisions appear regularly.",
          "Walker's position just off I-12 makes it a convenient staging point for trips continuing into Baton Rouge or further east toward Mississippi.",
        ],
      },
      {
        h2: "Walker to MSY and back",
        paragraphs: [
          "The airport run follows I-12 west to the Baton Rouge interchange and then I-10 west toward Kenner, mostly open interstate for a long but predictable drive. The Baton Rouge interchange itself is the one spot most likely to add time at rush hour, and your chauffeur plans around it.",
          "On your return, we track your flight and the complimentary wait clock starts once your aircraft is on the ground, giving real cushion on a 70-to-80-minute route.",
        ],
      },
      {
        h2: "Weddings, family events and Baton Rouge commutes",
        paragraphs: [
          "Walker and the surrounding Livingston Parish venues regularly host weddings and family celebrations, and a Sprinter van or stretch limousine keeps a large group together for the day. For residents commuting into Baton Rouge for work, medical appointments or LSU game days, a standing arrangement with the same chauffeur simplifies the regular drive along I-12.",
          "LSU home football Saturdays are the busiest stretch of the year for vehicles anywhere east of Baton Rouge, Walker included, and gameday traffic on I-12 and I-10 can add real time on both ends of the trip. Booking a few days ahead of a home game, rather than the morning of, gives dispatch room to plan around the stadium crowd.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Walker from MSY?", a: "About 62 miles, usually 70 to 80 minutes via I-12 to I-10 west, mostly open interstate for the length of the trip." },
      { q: "Do you provide wedding transportation for Livingston Parish venues?", a: "Yes. Sprinter vans and stretch limousines are regular bookings for weddings and family celebrations around Walker and Denham Springs." },
      { q: "Can you handle a commute into Baton Rouge from Walker?", a: "Yes. A standing arrangement with the same chauffeur is available for regular trips into Baton Rouge for work, medical care or LSU game days." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings need 12 hours." },
      { q: "Do you serve new subdivisions in Walker?", a: "Yes. The area grows quickly, so we confirm the current address and nearest cross street when you book to make sure the chauffeur has the right location." },
    ],
    related: [
      { label: "Denham Springs Limo Service", to: "/denham-springs-la-limo-service" },
      { label: "Baton Rouge Limo Service", to: "/baton-rouge-limo-service" },
      { label: "MSY to Baton Rouge", to: "/msy-to-baton-rouge" },
      { label: "New Orleans Wedding Limo Service", to: "/new-orleans-wedding-limo-service" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Walker, LA", "Livingston Parish"], serviceType: "Limousine and car service" },
  },
];
