// Batch 5 (2026-10-09): 6 River Parishes / St. Bernard / Westbank city pages,
// 2 Uptown-area neighborhood pages, and 2 New Orleans wedding-tradition /
// milestone service pages. Same entry shape as MARYLAND_PAGES (the name is
// historical — these are Louisiana pages).
const VEHICLES = [
  { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "solo executives and couples" },
  { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "VIP and executive travel" },
  { name: "Cadillac Escalade", cls: "Premium SUV", seats: 6, best: "families and small groups with luggage" },
  { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "airport runs with beach or golf luggage" },
  { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "wedding parties, corporate teams and groups" },
  { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "proms, weddings and celebrations" },
];

const vehicles = () => VEHICLES.map((v) => ({ ...v }));

export const MARYLAND_BATCH5 = [
  // ───────────────────────── Cities ─────────────────────────
  {
    slug: "harvey-la-limo-service",
    type: "city",
    name: "Harvey",
    badge: "Westbank Limo Service",
    h1: "Harvey, LA Limo Service",
    metaTitle: "Harvey LA Limo Service | Westbank Car Service",
    metaDescription: "Chauffeured limo and car service in Harvey, LA on the Westbank. MSY airport transfers, corporate travel and events. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 16 mi · 25–30 minutes" },
      { label: "Parish", value: "Jefferson (Westbank)" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Harvey sits at the eastern end of the Westbank Expressway, a short river crossing from MSY but a different world from the East Bank once you're across. MSY Limo Service sends chauffeured sedans, SUVs, Sprinter vans and stretch limousines throughout Harvey, with chauffeurs who cross the Huey P. Long Bridge and the Crescent City Connection every day and know which one is faster at any given hour.",
      "The Harvey Canal brings offshore crews and marine workers through town at every hour of the day and night, and we run those transfers on the same flat-rate, flight-tracked standard as any other pickup. Retail along Lapalco Boulevard and the residential streets off Manhattan Boulevard round out the rest of our regular Harvey business.",
      "Whether it's an early flight, a late crew change, or a trip across the river for dinner in the French Quarter, the price is agreed before the chauffeur leaves — no surprise toll add-ons, no bridge-traffic surcharge.",
    ],
    highlights: [
      "Flat-rate or hourly pricing confirmed before you book",
      "Chauffeurs who choose between the Huey P. Long Bridge and Crescent City Connection in real time",
      "45 minutes of complimentary wait on domestic MSY arrivals, 60 on international",
      "Overnight and pre-dawn pickups for offshore crew changes",
      "Child car seats available on request",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up in Harvey",
        paragraphs: [
          "We cover the Lapalco Boulevard retail corridor, the Timberlane neighborhoods off Manhattan Boulevard, the Harvey Canal industrial and marine terminal district, and the residential streets stretching toward Walker Road. Give us a house number, a dock gate, or an office lobby and the chauffeur is there a few minutes early.",
          "Marine terminal and crew-change pickups are routine for us — tell us the gate and the shift time, and dispatch builds the pickup around it rather than a fixed clock.",
        ],
      },
      {
        h2: "Harvey to MSY and back",
        paragraphs: [
          "Most airport runs from Harvey cross the Huey P. Long Bridge and continue on I-10 to the Loyola Drive exit, though a Crescent City Connection crossing through downtown is sometimes faster depending on the hour. Chauffeurs who drive this corridor daily make that call before you ever get in the car.",
          "On the return trip, we track your flight rather than a schedule. A delayed arrival doesn't change your pickup time — it just shifts automatically, with the complimentary wait clock starting at touchdown.",
        ],
      },
      {
        h2: "Business travel and nights across the river",
        paragraphs: [
          "Marine and industrial employers along the Harvey Canal book us for crew transport, visiting contractors, and executive travel to the airport. Hourly service keeps one chauffeur with you through a full day of site visits without a gap between stops.",
          "For an evening out, the ride into downtown New Orleans or the French Quarter is short once you're across the bridge — the trouble is always parking on the other end, which a chauffeur removes entirely.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How much does car service from Harvey to MSY cost?", a: "It's a flat rate based on your pickup address and vehicle choice, confirmed before you book. There's no meter and no bridge surcharge. Call (877) 609-1919 for an exact quote." },
      { q: "Which bridge do you use to reach Harvey?", a: "Whichever is faster at the time — the Huey P. Long Bridge or the Crescent City Connection. Your chauffeur checks real-time conditions rather than defaulting to one route." },
      { q: "Do you handle offshore crew change pickups?", a: "Yes, routinely, including overnight and early-morning transfers to marine terminals along the Harvey Canal." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings need 12 hours." },
      { q: "Do you offer hourly service in Harvey?", a: "Yes. Hourly bookings keep the vehicle and chauffeur with you for site visits, meetings or errands across the Westbank." },
    ],
    related: [
      { label: "MSY to Harvey", to: "/msy-to-harvey" },
      { label: "Marrero Limo Service", to: "/marrero-la-limo-service" },
      { label: "Gretna and Westbank Limo Service", to: "/gretna-westbank-limo-service" },
      { label: "Algiers Limo Service", to: "/algiers-limo-service" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Harvey, LA", "Jefferson Parish"], serviceType: "Limousine and car service" },
  },
  {
    slug: "marrero-la-limo-service",
    type: "city",
    name: "Marrero",
    badge: "Westbank Limo Service",
    h1: "Marrero, LA Limo Service",
    metaTitle: "Marrero LA Limo Service | Car Service Marrero, LA",
    metaDescription: "Chauffeured limo and car service in Marrero, LA. MSY airport transfers, Jean Lafitte National Park trips, weddings and events. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 19 mi · 30–35 minutes" },
      { label: "Parish", value: "Jefferson (Westbank)" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Marrero stretches along Barataria Boulevard toward the Jean Lafitte wetlands, the furthest-down-river stop we cover regularly on the Westbank. MSY Limo Service sends chauffeured sedans, SUVs, and Sprinter vans throughout the Estelle and Woodmere neighborhoods, with a flat rate agreed before the chauffeur ever leaves the lot.",
      "Louis Armstrong International is about 19 miles away, usually a 30 to 35 minute drive across the Huey P. Long Bridge and down the Westbank Expressway. That extra distance compared to closer Westbank towns is exactly why a reserved chauffeur matters more here — a missed pickup costs real time on an already longer trip.",
      "Marrero is also the natural gateway for visitors heading to the Barataria Preserve's swamp tours and nature trails, and we run those transfers on the same flat-rate basis as any airport run.",
    ],
    highlights: [
      "Flat-rate or hourly pricing confirmed before you book",
      "Chauffeurs experienced with the full Westbank Expressway and Barataria Boulevard corridor",
      "Flight tracking with 45 minutes complimentary wait on domestic arrivals, 60 on international",
      "Early pickups for swamp tour departures at Jean Lafitte National Park",
      "SUVs and Sprinter vans for groups with gear",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up in Marrero",
        paragraphs: [
          "We cover the Barataria Boulevard corridor, the Estelle and Woodmere neighborhoods, the Lapalco Boulevard retail strip as it continues west, and the gateway communities near the Jean Lafitte National Historical Park entrance. Give us an address and the chauffeur will be there early.",
          "Visitors staying near the swamp tour operators are a regular booking — give us your tour departure time and we'll back-time the pickup so you're never rushing the drive in.",
        ],
      },
      {
        h2: "Marrero to MSY and back",
        paragraphs: [
          "The route crosses the Huey P. Long Bridge and follows the Westbank Expressway and Barataria Boulevard. Afternoon traffic on the Expressway is the main variable, and chauffeurs who drive this corridor daily know when to stay the course and when to cut over early.",
          "On arrival, we track your flight rather than the printed schedule, so a delay simply shifts your pickup window without any extra steps on your end.",
        ],
      },
      {
        h2: "Swamp tours and beyond",
        paragraphs: [
          "The Barataria Preserve draws visitors year-round for boardwalk trails and ranger-led swamp tours, and Marrero is the closest town to the entrance. Many visitors pair a morning at the preserve with an afternoon flight out of MSY, which we coordinate as a single booking.",
          "For Marrero residents, the value is a predictable, flat-rate ride to the airport that doesn't depend on a neighbor's schedule or rideshare availability during the Westbank's less-served hours.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Marrero from MSY airport?", a: "About 19 miles, usually a 30 to 35 minute drive via the Huey P. Long Bridge, the Westbank Expressway and Barataria Boulevard, depending on traffic." },
      { q: "Can you drop us at Jean Lafitte National Park for a swamp tour?", a: "Yes. We regularly handle gateway drop-offs and pickups for the Barataria Preserve, timed to your tour departure." },
      { q: "Is Marrero priced differently than closer Westbank towns?", a: "The flat rate reflects the slightly longer distance but is still confirmed before you book, with no surge pricing. Call (877) 609-1919 for an exact quote." },
      { q: "Do you pick up early for morning tours or flights?", a: "Yes, any hour. Early-morning Marrero pickups for tours and flights are routine, and dispatch runs 24/7." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings need 12 hours." },
    ],
    related: [
      { label: "MSY to Marrero", to: "/msy-to-marrero" },
      { label: "Harvey Limo Service", to: "/harvey-la-limo-service" },
      { label: "Gretna and Westbank Limo Service", to: "/gretna-westbank-limo-service" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Hourly Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Marrero, LA", "Jefferson Parish"], serviceType: "Limousine and car service" },
  },
  {
    slug: "destrehan-la-limo-service",
    type: "city",
    name: "Destrehan",
    badge: "River Parishes Limo Service",
    h1: "Destrehan, LA Limo Service",
    metaTitle: "Destrehan LA Limo Service | Plantation & Car Service",
    metaDescription: "Chauffeured limo and car service in Destrehan, LA. MSY airport transfers, Destrehan Plantation tours and industrial corridor pickups. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 23 mi · 25–35 minutes" },
      { label: "Parish", value: "St. Charles" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Destrehan sits on the River Road just upriver from Kenner, home to Destrehan Plantation and a corridor of refineries and chemical plants that anchor St. Charles Parish's economy. MSY Limo Service covers both sides of that community — history-minded visitors touring the plantation and parish residents and contractors commuting to the industrial corridor.",
      "The drive from MSY runs about 25 to 35 minutes via I-10 West and the LA-48 exit onto River Road. It's close enough that a plantation tour and a flight can realistically share the same day, something a rental car and an unfamiliar exit make harder than it needs to be.",
      "We also connect Destrehan onward to LaPlace and Luling for visitors building a longer River Parishes itinerary, all at a flat rate agreed before the chauffeur leaves.",
    ],
    highlights: [
      "Under 40 minutes door to door from MSY via I-10 and River Road",
      "Timed arrivals for Destrehan Plantation tour schedules",
      "Flat-rate or hourly pricing confirmed before you book",
      "Shift-friendly pickups for refinery and plant contractors",
      "Flight tracking with complimentary wait time on airport pickups",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Destrehan Plantation and the River Road",
        paragraphs: [
          "Destrehan Plantation, built in 1787, is one of the oldest documented plantation homes in the Lower Mississippi Valley and draws steady tour traffic from visitors staying in New Orleans or flying through MSY. We time pickups to your tour slot so you arrive a few minutes early rather than rushed off a flight.",
          "The River Road corridor along the natural levee also holds Ormond Plantation and other historic sites, and many visitors combine two or three stops into a single hourly-charter afternoon.",
        ],
      },
      {
        h2: "St. Charles Parish's industrial corridor",
        paragraphs: [
          "Refineries and chemical plants along the river employ much of St. Charles Parish, and we run shift-change and contractor transfers on the same flat-rate basis as any other pickup, day or night.",
          "Workers flying in for turnarounds or temporary assignments book us directly from MSY to a plant gate, with dispatch coordinating around shift start times rather than a fixed clock.",
        ],
      },
      {
        h2: "Destrehan to MSY and onward",
        paragraphs: [
          "The route runs I-10 West to LA-48, with the Kenner and River Parishes interchange the main traffic variable. Your chauffeur checks conditions before pickup and adjusts the timing accordingly.",
          "For visitors continuing west, LaPlace and the rest of the River Parishes are a short extension, and for Westbank connections, the Hale Boggs Bridge in Luling is nearby.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How long is the drive from MSY to Destrehan Plantation?", a: "About 25 to 35 minutes via I-10 West and River Road, depending on traffic through the Kenner and River Parishes interchange area." },
      { q: "Can you time our pickup to a plantation tour schedule?", a: "Yes. Tell us your tour time when you book and we'll back-time the pickup so you arrive a few minutes early." },
      { q: "Do you serve refinery and plant workers in Destrehan?", a: "Yes, regularly, including shift-change and contractor transfers across the St. Charles Parish industrial corridor." },
      { q: "What does a car service from MSY to Destrehan cost?", a: "A flat rate by vehicle class, confirmed before you book, with no surge pricing. Call (877) 609-1919 for an exact quote." },
      { q: "Can you combine Destrehan with other River Road plantations?", a: "Yes. Many visitors book hourly, as-directed service to cover multiple River Road stops in one day." },
    ],
    related: [
      { label: "MSY to Destrehan", to: "/msy-to-destrehan" },
      { label: "MSY to LaPlace", to: "/msy-to-laplace" },
      { label: "Kenner Limo Service", to: "/kenner-limo-service" },
      { label: "Hourly Charter", to: "/services/hourly-charter" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Destrehan, LA", "St. Charles Parish"], serviceType: "Limousine and car service" },
  },
  {
    slug: "laplace-la-limo-service",
    type: "city",
    name: "LaPlace",
    badge: "River Parishes Limo Service",
    h1: "LaPlace, LA Limo Service",
    metaTitle: "LaPlace LA Limo Service | St. John Parish Car Service",
    metaDescription: "Chauffeured limo and car service in LaPlace, LA. Direct MSY airport transfers, corporate travel and industrial corridor pickups. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 28 mi · 30–35 minutes" },
      { label: "Parish", value: "St. John the Baptist" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "LaPlace is the commercial hub of St. John the Baptist Parish and one of the most direct runs we make from MSY — a straight shot up I-10 West with no bridge crossing and no downtown traffic. For residents who fly out of MSY almost by default, and for visitors coming the other direction, that directness is exactly the point.",
      "The drive typically takes 30 to 35 minutes, with the I-10/I-55 interchange through Kenner the only real variable. Our chauffeurs check conditions there before confirming a pickup time rather than guessing.",
      "We serve the retail corridor along Belle Terre Boulevard and Main Street, the parish's industrial employers, and residential neighborhoods throughout LaPlace, Reserve and Garyville, including seasonal transportation for the Andouille Festival crowds LaPlace draws each year.",
    ],
    highlights: [
      "Direct I-10 route — no bridge crossing, no downtown detour",
      "30 to 35 minute drive time in normal conditions",
      "Flat-rate or hourly pricing confirmed before you book",
      "Shift-friendly scheduling for industrial and plant employees",
      "Flight tracking with complimentary wait time on airport pickups",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up in LaPlace",
        paragraphs: [
          "We cover the Belle Terre Boulevard retail corridor, the industrial plants and contractor sites along the river, and residential streets throughout LaPlace, Reserve and Garyville. Give us an address and the chauffeur is there a few minutes early.",
          "LaPlace's Andouille Festival draws regional crowds each year, and we run flat-rate and group-van transportation for festival visitors on request.",
        ],
      },
      {
        h2: "LaPlace to MSY, the direct way",
        paragraphs: [
          "The route is almost entirely I-10 West, with the interchange near Kenner the one stretch worth watching. Because there's no bridge and no downtown detour, LaPlace is one of our most predictable drive times.",
          "On the return leg, we track your flight and adjust automatically, with the complimentary wait clock starting at touchdown rather than the scheduled time.",
        ],
      },
      {
        h2: "Why LaPlace chooses MSY",
        paragraphs: [
          "With no regional commercial airport nearby, LaPlace residents fly out of MSY by default. A reserved chauffeur removes the pre-dawn-favor problem of an early flight — one flat rate, booked in advance, with a chauffeur on your schedule rather than someone else's.",
          "For industrial contractors and consultants coming into the parish, routing through MSY's much larger nonstop schedule beats connecting through a smaller regional field, with a straight I-10 ride on the other end.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is LaPlace from MSY airport?", a: "About 28 miles, typically a 30 to 35 minute drive straight up I-10 West with no bridge crossing involved." },
      { q: "Do you serve industrial plant workers in LaPlace?", a: "Yes, regularly, including early-morning and overnight shift-change transfers along the parish's industrial corridor." },
      { q: "What does a car service from MSY to LaPlace cost?", a: "A flat rate by vehicle class, confirmed before you book, with no surge pricing. Call (877) 609-1919 for an exact quote." },
      { q: "Can you handle group transportation for the Andouille Festival?", a: "Yes. Sprinter vans and SUVs are available for festival groups, with flat rates confirmed ahead of the event weekend." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings need 12 hours." },
    ],
    related: [
      { label: "MSY to LaPlace", to: "/msy-to-laplace" },
      { label: "MSY to Destrehan", to: "/msy-to-destrehan" },
      { label: "Kenner Limo Service", to: "/kenner-limo-service" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Hourly Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["LaPlace, LA", "St. John the Baptist Parish"], serviceType: "Limousine and car service" },
  },
  {
    slug: "chalmette-la-limo-service",
    type: "city",
    name: "Chalmette",
    badge: "St. Bernard Parish Limo Service",
    h1: "Chalmette, LA Limo Service",
    metaTitle: "Chalmette LA Limo Service | St. Bernard Car Service",
    metaDescription: "Chauffeured limo and car service in Chalmette, LA and St. Bernard Parish. MSY airport transfers and Battlefield tours. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 26 mi · 35–45 minutes" },
      { label: "Parish", value: "St. Bernard" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Chalmette is the seat of St. Bernard Parish, just downriver from the French Quarter and home to the Chalmette Battlefield, where the Battle of New Orleans was fought in 1815. It's close to the city but routinely overlooked by rideshare drivers unfamiliar with the parish, which is exactly where a reserved chauffeur earns its keep.",
      "From MSY, the drive runs east on I-10 through New Orleans and down into St. Bernard Parish via Judge Perez Drive or St. Claude Avenue, typically 35 to 45 minutes with downtown traffic the main variable.",
      "We cover all of St. Bernard Parish — Chalmette, Arabi, Meraux and Violet — on the same flat-rate, flight-tracked standard as any other New Orleans address.",
    ],
    highlights: [
      "Flat-rate or hourly pricing from any St. Bernard Parish address",
      "Chauffeurs who know Judge Perez Drive and St. Claude Avenue equally well",
      "Flight tracking with complimentary wait time on every airport pickup",
      "Timed drop-offs for Chalmette Battlefield tours and ranger programs",
      "24/7 dispatch for reliable late-night pickups",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Chalmette Battlefield and parish landmarks",
        paragraphs: [
          "The Chalmette Battlefield and National Cemetery, part of Jean Lafitte National Historical Park, preserves the site of the 1815 Battle of New Orleans with ranger-led programs and walking trails. We time pickups around tour and ranger program schedules so a visit isn't rushed.",
          "The St. Bernard Parish Government Complex and the Paris Road retail corridor round out our regular Chalmette pickups, alongside residential neighborhoods throughout the parish.",
        ],
      },
      {
        h2: "Chalmette to MSY and into the city",
        paragraphs: [
          "The route runs I-10 East through downtown New Orleans before dropping into St. Bernard Parish via Judge Perez Drive, or along St. Claude Avenue through the Lower Ninth Ward for a more local approach. Chauffeurs choose based on current traffic rather than habit.",
          "Nights in the French Quarter or the Warehouse District are a short, direct ride upriver once you're past the parish line, with the chauffeur handling the return as well.",
        ],
      },
      {
        h2: "A parish rebuilt, and well served",
        paragraphs: [
          "St. Bernard Parish rebuilt block by block after Hurricane Katrina, and rideshare availability here can still be thinner than in the city proper, especially late at night. A reserved chauffeur is committed to your trip the moment you book it, not dependent on who happens to be nearby.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How long does it take to get from MSY to Chalmette?", a: "Typically 35 to 45 minutes via I-10 East and Judge Perez Drive or St. Claude Avenue, depending on downtown traffic." },
      { q: "Can you time a pickup around a Battlefield tour?", a: "Yes. Tell us your tour or ranger program time when you book and we'll plan the pickup with time to spare." },
      { q: "Do you serve all of St. Bernard Parish?", a: "Yes — Chalmette, Arabi, Meraux and Violet, all at a flat rate confirmed before you book." },
      { q: "What does a car service from MSY to Chalmette cost?", a: "A flat rate by vehicle class, confirmed before you book, with no surge pricing. Call (877) 609-1919 for an exact quote." },
      { q: "Is it easy to get a late-night ride from Chalmette?", a: "With us, yes. Dispatch runs 24/7 and your reservation is committed in advance, unlike rideshare availability in St. Bernard Parish late at night." },
    ],
    related: [
      { label: "MSY to Chalmette", to: "/msy-to-chalmette" },
      { label: "Algiers Limo Service", to: "/algiers-limo-service" },
      { label: "Treme Limo Service", to: "/treme-limo-service" },
      { label: "French Quarter Limo Service", to: "/french-quarter-limo-service" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Chalmette, LA", "St. Bernard Parish", "Arabi, LA", "Meraux, LA"], serviceType: "Limousine and car service" },
  },
  {
    slug: "westwego-la-limo-service",
    type: "city",
    name: "Westwego",
    badge: "Westbank Limo Service",
    h1: "Westwego, LA Limo Service",
    metaTitle: "Westwego LA Limo Service | Westbank Car Service",
    metaDescription: "Chauffeured limo and car service in Westwego, LA on the Westbank. MSY airport transfers, corporate travel and events. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 21 mi · 30–35 minutes" },
      { label: "Parish", value: "Jefferson (Westbank)" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Westwego sits at the western edge of the Westbank Expressway corridor, a working river town known for its historic farmers market and its proximity to the Jean Lafitte wetlands. MSY Limo Service covers Westwego on the same flat-rate, flight-tracked basis as every other Jefferson Parish community we serve.",
      "The drive from MSY runs about 21 miles and 30 to 35 minutes, crossing the Huey P. Long Bridge and continuing west on the Westbank Expressway. Our chauffeurs drive this corridor daily and adjust between the bridge and the Crescent City Connection depending on the time of day.",
      "We pick up throughout Westwego's residential neighborhoods, the Westwego Farmers & Fisheries Market, and the river-adjacent industrial sites that bring contractors and crew through town.",
    ],
    highlights: [
      "Flat-rate or hourly pricing confirmed before you book",
      "Chauffeurs experienced with the Westbank Expressway and both river crossings",
      "Flight tracking with 45 minutes complimentary wait on domestic arrivals, 60 on international",
      "Overnight and early pickups for shift workers and early flights",
      "SUVs and Sprinter vans for families and groups",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up in Westwego",
        paragraphs: [
          "We cover the residential streets throughout Westwego, the historic Sala Avenue area near the Farmers & Fisheries Market, and the industrial sites along the river that bring contractors through town on shifting schedules.",
          "Give us a house number or a gate and the chauffeur will be there a few minutes early, timed to your flight or your shift.",
        ],
      },
      {
        h2: "Westwego to MSY and back",
        paragraphs: [
          "The route crosses the Huey P. Long Bridge and follows the Westbank Expressway east, or the Crescent City Connection through downtown when that proves faster. Chauffeurs who cross both daily make the call in real time rather than defaulting to one option.",
          "On arrival, we track your flight and adjust the pickup automatically rather than working from the printed schedule.",
        ],
      },
      {
        h2: "Beyond the airport",
        paragraphs: [
          "Westwego is a short hop from Marrero and the Jean Lafitte National Historical Park entrance, and we run swamp tour transfers on the same flat-rate basis as any other trip.",
          "For an evening in the French Quarter or downtown, the ride across the river is short once you're across the bridge, with the chauffeur handling the return at a time you set.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Westwego from MSY airport?", a: "About 21 miles, usually a 30 to 35 minute drive via the Huey P. Long Bridge and the Westbank Expressway, depending on traffic." },
      { q: "Which bridge do you use to reach Westwego?", a: "Whichever is fastest at the time — the Huey P. Long Bridge or the Crescent City Connection. We check real-time conditions before every pickup." },
      { q: "Can you take us to the Jean Lafitte wetlands from Westwego?", a: "Yes. The Barataria Preserve entrance is a short drive away, and we run tour transfers on request." },
      { q: "What does a car service from MSY to Westwego cost?", a: "A flat rate by vehicle class, confirmed before you book, with no surge pricing. Call (877) 609-1919 for an exact quote." },
      { q: "Do you pick up overnight for shift workers?", a: "Yes. Dispatch runs 24/7, and overnight and early-morning Westwego pickups are routine." },
    ],
    related: [
      { label: "Marrero Limo Service", to: "/marrero-la-limo-service" },
      { label: "Harvey Limo Service", to: "/harvey-la-limo-service" },
      { label: "Gretna and Westbank Limo Service", to: "/gretna-westbank-limo-service" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Hourly Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Westwego, LA", "Jefferson Parish"], serviceType: "Limousine and car service" },
  },
  // ───────────────────────── Neighborhoods ─────────────────────────
  {
    slug: "carrollton-riverbend-limo-service",
    type: "neighborhood",
    name: "Carrollton & Riverbend",
    badge: "Uptown New Orleans Limo Service",
    h1: "Carrollton & Riverbend Limo Service",
    metaTitle: "Carrollton Riverbend Limo Service | New Orleans Car Service",
    metaDescription: "Chauffeured limo and car service in Carrollton and the Riverbend, New Orleans. MSY airport transfers, Tulane/Loyola trips, dinners. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 15 mi · 20–25 minutes" },
      { label: "Area", value: "Uptown New Orleans" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Carrollton and the Riverbend sit where the St. Charles Avenue streetcar line curves with the Mississippi River, a neighborhood of oak-lined streets, the Camellia Grill, and some of Uptown's best small restaurants. MSY Limo Service covers the whole area, from the historic Carrollton Courthouse to the river-adjacent streets near Maple and Oak.",
      "The drive from MSY runs about 15 miles and 20 to 25 minutes via I-10 and Carrollton Avenue, a straightforward trip outside of peak Tulane and Loyola move-in weekends when Uptown traffic thickens considerably.",
      "We regularly serve Tulane and Loyola students and families staying near campus, Riverbend diners headed to Jacques-Imo's or Boucherie, and residents who'd rather book a reserved ride than fight for scarce parking on Oak Street on a Friday night.",
    ],
    highlights: [
      "Flat-rate or hourly pricing confirmed before you book",
      "Chauffeurs who know the Carrollton streetcar curve and Riverbend one-ways",
      "Flight tracking with 45 minutes complimentary wait on domestic arrivals, 60 on international",
      "Direct trips to Tulane and Loyola for move-in, parents weekend and graduation",
      "Door-to-door drop-off for Oak Street dinners without the parking hunt",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up in Carrollton & the Riverbend",
        paragraphs: [
          "We cover the streets around the Carrollton Courthouse, the Oak Street restaurant and shopping corridor, the Riverbend's winding residential blocks near the levee, and the Palmer Park area where the streetcar line curves south onto Carrollton Avenue.",
          "Give us a house number, a restaurant door, or a campus gate and the chauffeur will be there a few minutes early, even on the narrow one-way streets near the river.",
        ],
      },
      {
        h2: "Tulane, Loyola and campus weekends",
        paragraphs: [
          "Carrollton borders the Tulane and Loyola campuses, and we run airport-to-dorm transfers for move-in day, hotel shuttles for parents weekend, and coordinated pickups for graduation weekend when several family flights need to land on the same schedule.",
          "SUVs and Sprinter vans are the popular choice for move-in day loads, and chauffeurs who know which residence hall gate to use save real time over circling the block in an unfamiliar rental car.",
        ],
      },
      {
        h2: "Dinners, nights out and the streetcar line",
        paragraphs: [
          "Oak Street's restaurant row and the Riverbend's small plates spots are some of Uptown's best-kept dining secrets, but parking disappears fast on weekend nights. A chauffeured drop-off at the door, with a pickup timed to your reservation, removes the only real friction point in an Uptown dinner.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Carrollton from MSY airport?", a: "About 15 miles, usually a 20 to 25 minute drive via I-10 and Carrollton Avenue, longer during Tulane or Loyola move-in and graduation weekends." },
      { q: "Can you handle move-in day loads near Tulane and Loyola?", a: "Yes. Our Cadillac Escalade SUVs and Mercedes Sprinter vans are the popular choice for move-in day boxes and furniture." },
      { q: "Can you drop us at Oak Street restaurants?", a: "Yes, directly at the door whenever possible, with a pickup timed to your reservation so there's no post-dinner parking hunt." },
      { q: "What does a car service from MSY to Carrollton cost?", a: "A flat rate by vehicle class, confirmed before you book, with no surge pricing even on campus move-in weekends. Call (877) 609-1919 for an exact quote." },
      { q: "Do you offer hourly service for a day in Uptown?", a: "Yes. Hourly bookings keep the vehicle and chauffeur with you for campus visits, shopping on Oak Street, and dinner, all in one booking." },
    ],
    related: [
      { label: "Tulane University Transportation", to: "/tulane-university-transportation" },
      { label: "Loyola University Transportation", to: "/loyola-university-transportation" },
      { label: "Uptown New Orleans Limo Service", to: "/uptown-new-orleans-limo-service" },
      { label: "Garden District Limo Service", to: "/garden-district-limo-service" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Carrollton, New Orleans", "Riverbend, New Orleans", "Uptown New Orleans"], serviceType: "Limousine and car service" },
  },
  {
    slug: "faubourg-st-john-limo-service",
    type: "neighborhood",
    name: "Faubourg St. John",
    badge: "Mid-City New Orleans Limo Service",
    h1: "Faubourg St. John Limo Service",
    metaTitle: "Faubourg St. John Limo Service | New Orleans Car Service",
    metaDescription: "Chauffeured limo and car service in Faubourg St. John, New Orleans. MSY airport transfers, City Park trips, dinners. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 13 mi · 20–25 minutes" },
      { label: "Area", value: "Mid-City New Orleans" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Faubourg St. John wraps around Bayou St. John between Mid-City and Esplanade Ridge, one of New Orleans' oldest residential neighborhoods and a short walk from City Park and the New Orleans Museum of Art. MSY Limo Service covers the whole area, from the bungalows along Moss Street to the restaurant blocks on Esplanade Avenue.",
      "The drive from MSY is about 13 miles, typically 20 to 25 minutes via I-10 and the Orleans Avenue or Carrollton Avenue exits, with Jazz Fest weekends at the nearby Fair Grounds the main exception that brings heavier traffic to the area.",
      "We regularly serve City Park and NOMA visitors staying in the neighborhood, Jazz Fest attendees looking to avoid the parking crunch around the Fair Grounds, and residents who use us for airport runs and evenings out along Bayou St. John.",
    ],
    highlights: [
      "Flat-rate or hourly pricing confirmed before you book",
      "Chauffeurs who know the Bayou St. John and Esplanade Avenue approach cold",
      "Flight tracking with 45 minutes complimentary wait on domestic arrivals, 60 on international",
      "Timed pickups around Jazz Fest and Fair Grounds street closures",
      "Easy connections to City Park, NOMA and the Besthoff Sculpture Garden",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up in Faubourg St. John",
        paragraphs: [
          "We cover the streets along Moss Street and Bayou St. John, the Esplanade Avenue mansion corridor, and the blocks closer to Mid-City near the Lafitte Greenway. Give us an address and the chauffeur will be there a few minutes early.",
          "The neighborhood's narrow, bayou-side streets are familiar territory for our chauffeurs, who know which blocks to avoid during festival closures.",
        ],
      },
      {
        h2: "City Park, NOMA and the Fair Grounds",
        paragraphs: [
          "Faubourg St. John is one of the closest residential neighborhoods to City Park, the New Orleans Museum of Art, and the Fair Grounds Race Course, home of the Jazz and Heritage Festival each spring. We run both everyday park visits and festival-weekend transportation, timed around street closures that change by the day during Jazz Fest.",
          "Visitors staying in the neighborhood for the festival regularly book us to avoid parking entirely, with a pre-agreed pickup point a short walk from the restricted streets.",
        ],
      },
      {
        h2: "Dinners along Esplanade and beyond",
        paragraphs: [
          "The restaurant scene along Esplanade Avenue and nearby Mid-City has grown steadily, and a chauffeured evening removes the only real complication: parking on a street that fills up fast once the sun goes down.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Faubourg St. John from MSY airport?", a: "About 13 miles, usually a 20 to 25 minute drive via I-10, longer during Jazz Fest weekends when Fair Grounds traffic affects the area." },
      { q: "Can you handle Jazz Fest pickups from this neighborhood?", a: "Yes. We regularly run festival transportation from Faubourg St. John, with a pre-agreed pickup point outside the restricted streets." },
      { q: "Is this neighborhood close to City Park?", a: "Yes, it borders City Park and NOMA directly, making it one of the most convenient areas for a museum or park day." },
      { q: "What does a car service from MSY to Faubourg St. John cost?", a: "A flat rate by vehicle class, confirmed before you book, with no surge pricing even during festival season. Call (877) 609-1919 for an exact quote." },
      { q: "Do you offer hourly service for a day around the bayou?", a: "Yes. Hourly bookings keep the vehicle with you for City Park, NOMA, and a dinner stop, all in one booking." },
    ],
    related: [
      { label: "City Park & NOMA Transportation", to: "/city-park-nola-transportation" },
      { label: "Jazz Fest Transportation", to: "/jazz-fest-fair-grounds-transportation" },
      { label: "Mid-City New Orleans Limo Service", to: "/mid-city-new-orleans-limo-service" },
      { label: "Lakeview New Orleans Limo Service", to: "/lakeview-new-orleans-limo-service" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Faubourg St. John, New Orleans", "Mid-City, New Orleans", "Esplanade Ridge, New Orleans"], serviceType: "Limousine and car service" },
  },
  // ───────────────────────── Services / events ─────────────────────────
  {
    slug: "second-line-wedding-parade-transportation",
    type: "event",
    name: "Second Line Wedding Transportation",
    badge: "New Orleans Wedding Traditions",
    h1: "Second Line Wedding Parade Transportation",
    metaTitle: "Second Line Wedding Transportation | New Orleans Limo",
    metaDescription: "Chauffeured transportation for a New Orleans second line wedding send-off. Staging, brass band coordination and guest shuttles. Call (877) 609-1919.",
    stats: [
      { label: "Tradition", value: "Brass band wedding send-off" },
      { label: "Typical length", value: "15–30 minute parade route" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "A second line is New Orleans' signature wedding send-off: the couple and their guests follow a brass band through a few blocks of the French Quarter or Uptown, waving handkerchiefs and dancing behind the horns before the real party begins. It's one of the most purely New Orleans things a couple can add to a wedding day, and it comes with a logistics question most other weddings never face — what happens to everyone's cars, and their shoes, once the parade ends.",
      "MSY Limo Service handles the piece the band doesn't: staging a vehicle at the second line's starting point, following at a respectful distance for guests who'd rather ride than walk the whole route, and waiting at the end point to take the wedding party onward to the reception without anyone changing out of parade mode in a parking garage.",
      "We work routes starting at French Quarter hotels and churches, Garden District venues, and City Park's Pavilion of the Two Sisters, coordinating directly with the couple's chosen brass band so the parade and the vehicles move as one plan rather than two separate schedules.",
    ],
    highlights: [
      "Staging and pickup coordinated with your brass band's timing",
      "Guest shuttle vehicles following the route for anyone who'd rather ride",
      "Direct transfer from the second line's end point to your reception",
      "Comfortable waiting for the wedding party while the parade runs its course",
      "Sprinter vans and stretch limousines sized to your wedding party",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "Why the second line needs its own transportation plan",
        paragraphs: [
          "A second line isn't a quick walk from Point A to Point B — it winds, it pauses for photos, and brass bands play for the crowd as much as the couple, which means the timeline is genuinely unpredictable even with a planned route. That unpredictability is exactly why we book these as hourly, as-directed service rather than a fixed point-to-point transfer: your chauffeur stays with the plan and adjusts as the parade actually unfolds, not as a schedule assumed it would.",
          "Guests in dress shoes and formal wear often want to join the parade for a few blocks and then ride the rest of the way, especially on a hot afternoon or a longer route. A shuttle vehicle trailing the second line gives them that option without anyone standing on a curb trying to flag a rideshare mid-parade.",
        ],
      },
      {
        h2: "Coordinating with your brass band",
        paragraphs: [
          "Most couples book their second line through the same brass bands that play funerals, festivals and parades year-round, and those bands have their own sense of pacing and preferred routes through the Quarter or Uptown. We talk directly with the band leader or your wedding planner ahead of time so the staging vehicle and the band's starting point match exactly, down to which corner and which side of the street.",
          "At the route's end, your chauffeur is already positioned, so the transition from second line to reception doesn't require anyone to backtrack for a car left blocks away at the ceremony site.",
        ],
      },
      {
        h2: "Popular New Orleans second line routes",
        paragraphs: [
          "French Quarter routes typically run from a Royal or Chartres Street church or hotel toward a Frenchmen Street or Bourbon Street reception, a route your chauffeur knows block by block, including which streets close for other events on a given Saturday. Garden District and Uptown couples often route along St. Charles Avenue under the oak canopy, a genuinely scenic backdrop for both the parade and the trailing vehicle.",
          "City Park weddings at the Pavilion of the Two Sisters sometimes add a shorter second line around the lagoons before guests transfer by vehicle to a reception elsewhere in the city — a combination we coordinate as a single wedding-day booking.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Can you follow our second line route with a vehicle?", a: "Yes. We stage a vehicle at the route's starting point and can trail the parade at a respectful distance for guests who want to ride rather than walk the whole route." },
      { q: "How do you coordinate with our brass band?", a: "We speak directly with your band leader or wedding planner ahead of time to match staging locations and timing to their planned route." },
      { q: "Is second line transportation booked hourly or point-to-point?", a: "Hourly, as-directed service is almost always the better fit, since a parade's actual pace and length can vary from the planned route." },
      { q: "Can you transfer the wedding party straight to the reception afterward?", a: "Yes. Your chauffeur is positioned at the route's end point and ready to continue directly to your reception venue." },
      { q: "What does second line wedding transportation cost?", a: "It's quoted hourly based on your wedding party size and vehicle choice, confirmed before you book. Call (877) 609-1919 for an exact quote." },
    ],
    related: [
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "New Orleans Wedding Limo Service", to: "/new-orleans-wedding-limo-service" },
      { label: "Garden District Limo Service", to: "/garden-district-limo-service" },
      { label: "French Quarter Limo Service", to: "/french-quarter-limo-service" },
      { label: "City Park & NOMA Transportation", to: "/city-park-nola-transportation" },
      { label: "Hourly Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["French Quarter, New Orleans", "Garden District, New Orleans", "Uptown New Orleans"], serviceType: "Wedding transportation" },
    destinationsTitle: "Where New Orleans Second Lines End Up",
    destinations: [
      { name: "Frenchmen Street", blurb: "A natural reception-night follow-up once the parade reaches the Marigny's live music clubs." },
      { name: "French Quarter hotels", blurb: "Many routes start or end at a Quarter hotel's doorstep, with the vehicle ready either way." },
      { name: "Garden District mansions", blurb: "St. Charles Avenue second lines often end at a private reception venue nearby." },
      { name: "City Park's Pavilion of the Two Sisters", blurb: "A shorter lagoon-side second line before guests transfer onward." },
      { name: "Warehouse District event spaces", blurb: "A short ride from most French Quarter parade routes for an after-party." },
      { name: "Your reception venue", blurb: "Wherever the night continues, your chauffeur is already positioned to take you there." },
    ],
  },
  {
    slug: "new-orleans-quinceanera-limo-service",
    type: "event",
    name: "New Orleans Quinceañera Limo Service",
    badge: "New Orleans Celebrations",
    h1: "New Orleans Quinceañera Limo Service",
    metaTitle: "New Orleans Quinceañera Limo Service | MSY Limo",
    metaDescription: "Chauffeured quinceañera limo service in New Orleans. Church to reception transportation, photo stops and guest shuttles. Call (877) 609-1919.",
    stats: [
      { label: "Occasion", value: "Quinceañera church to reception" },
      { label: "Typical party size", value: "Honoree + court of up to 14" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "A quinceañera is one of the biggest days in a young woman's life, and the arrival matters as much as the party itself. MSY Limo Service provides chauffeured transportation for the honoree, her court of damas and chambelanes, and family members across New Orleans and the surrounding parishes, from the church or mass to the photo session to the reception hall.",
      "Metairie, Kenner and New Orleans proper are home to a growing Hispanic community, and we've built our quinceañera service around what that day actually requires: a stretch limousine or Sprinter van large enough for the honoree's full court, a schedule that accounts for photos at the Besthoff Sculpture Garden or the French Quarter, and a chauffeur who treats the day with the formality it deserves.",
      "Families often book a second vehicle for parents and grandparents, timed to arrive just ahead of the honoree for a coordinated entrance — the kind of multi-vehicle choreography we handle routinely for both quinceañeras and weddings.",
    ],
    highlights: [
      "Stretch limousines and Sprinter vans sized for a full court of damas and chambelanes",
      "Coordinated multi-vehicle arrivals for the honoree and family",
      "Photo-session stops at City Park, the Garden District or the French Quarter",
      "Church-to-reception timing built around your mass and photographer's schedule",
      "Decorated vehicles available on request",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "Building the day's timeline",
        paragraphs: [
          "A quinceañera's schedule usually runs from a morning or early-afternoon mass, through a photo session at a scenic location, and into an evening reception with its own choreographed entrance. We build the chauffeur's schedule around your photographer's and your parish's timing, not the other way around, since a tight photo window is often the hardest part of the day to recover if transportation runs late.",
          "Hourly, as-directed booking is the most common choice for quinceañeras, since it keeps the vehicle and chauffeur with the honoree's party from the church through photos and on to the reception without rebooking at each stop.",
        ],
      },
      {
        h2: "Popular photo and celebration spots",
        paragraphs: [
          "The Besthoff Sculpture Garden at City Park, the Garden District's oak-lined streets, and the French Quarter's balconies and courtyards are all popular quinceañera photo backdrops, and our chauffeurs know how to time a stop at each without running into a wedding party or another event doing the same thing.",
          "For the reception itself, Sprinter vans comfortably move a full court plus family between the photo location and the hall, keeping everyone together for the grand entrance rather than arriving in scattered cars.",
        ],
      },
      {
        h2: "A celebration treated with the respect it deserves",
        paragraphs: [
          "Our chauffeurs understand that a quinceañera is a formal rite of passage, not simply a party, and dress and conduct the vehicle accordingly. Families can request a decorated vehicle, a specific arrival song cued to coincide with the entrance, or a particular photo backdrop stop — tell us when you book and we'll build it into the plan.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "What vehicle fits a full quinceañera court?", a: "A Mercedes Sprinter van comfortably seats the honoree and a court of up to 14 damas and chambelanes, and a stretch limousine works well for smaller courts of 6 to 8." },
      { q: "Can you add a photo stop at City Park or the French Quarter?", a: "Yes. Tell us the location and your photographer's timing when you book, and we'll build it into the day's schedule." },
      { q: "Do you coordinate multiple vehicles for the honoree and family?", a: "Yes. We regularly run a second vehicle for parents and grandparents, timed to arrive just ahead of or alongside the honoree." },
      { q: "Is quinceañera transportation booked hourly or as a single trip?", a: "Most families book hourly, as-directed service covering the mass, photos and reception in one continuous booking." },
      { q: "What does quinceañera limo service cost?", a: "It's quoted hourly or as a flat rate depending on your schedule, confirmed before you book. Call (877) 609-1919 for an exact quote." },
    ],
    related: [
      { label: "Prom Limo Service", to: "/new-orleans-prom-limo-service" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "City Park & NOMA Transportation", to: "/city-park-nola-transportation" },
      { label: "Metairie Limo Service", to: "/metairie-limo-service" },
      { label: "Kenner Limo Service", to: "/kenner-limo-service" },
      { label: "Hourly Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans, LA", "Metairie, LA", "Kenner, LA"], serviceType: "Special event transportation" },
  },
];
