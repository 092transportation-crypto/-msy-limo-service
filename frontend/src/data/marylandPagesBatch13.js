// Batch 13 (2026-10-28, round 8 Louisiana pages) — 20 new landing pages:
// ten Louisiana towns with no page at all yet, reaching further into River
// Parish plantation country and Acadiana than any prior batch (Vacherie,
// Plaquemine, White Castle, Crowley, Eunice, Abbeville, Jeanerette, Sulphur,
// Franklin, Patterson); two New Orleans neighborhoods that previously had no
// standalone city page (St. Roch, Freret Street); four new MSY-to-neighborhood
// airport-transfer routes for neighborhoods that already had a city page but
// no dedicated route page (Algiers, Mid-City, Treme, Carrollton/Riverbend,
// following the same gap-filling pattern Batch 11 used for Garden District/
// Uptown/Warehouse District); and four new occasion/industry verticals
// (wheelchair-accessible transportation, vow renewal, corporate roadshow,
// film/TV production — "Hollywood South"). Same entry shape and six-vehicle
// fleet as MARYLAND_BATCH9-12, and every entry carries 3 body `sections`
// (not 2) per the round-6 thin-content fix. None of these 20 slugs exist
// anywhere else in the data files before this batch — verified against
// every existing marylandPages*.js, routesData.js, venuesData.js and
// guides.js slug, both quoted "slug": and unquoted slug: key styles.
const VEHICLES = [
  { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "solo executives and couples" },
  { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "VIP and executive travel" },
  { name: "Cadillac Escalade", cls: "Premium SUV", seats: 6, best: "families and small groups with luggage" },
  { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "airport runs with extra luggage" },
  { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "wedding parties, corporate teams and groups" },
  { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "proms, weddings and celebrations" },
];
const vehicles = () => VEHICLES.map((v) => ({ ...v }));

export const MARYLAND_BATCH13 = [
  // ───────────────────────── New Louisiana city pages ─────────────────────────
  {
    slug: "vacherie-la-limo-service",
    type: "city",
    name: "Vacherie",
    badge: "Louisiana Limo Service",
    h1: "Vacherie, LA Limo Service",
    metaTitle: "Vacherie LA Limo Service | Car Service Near Oak Alley",
    metaDescription: "Chauffeured limo & car service in Vacherie, LA. Oak Alley & River Road plantation visits, weddings, MSY airport transfers. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 50 mi · 55–65 minutes" },
      { label: "Coverage", value: "River Road, Oak Alley, St. James Parish" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Vacherie sits on the River Road in St. James Parish, home to Oak Alley Plantation's famous quarter-mile oak canopy and a regular stop on our River Road plantation-tour routes, and MSY Limo Service treats a Vacherie booking the same as every other parish we cover: a licensed chauffeur, a flat rate confirmed before you book, and a car that shows up when the schedule says it will.",
      "The drive to MSY runs about 50 miles and 55 to 65 minutes, mostly along River Road or the Highway 3127/I-10 combination our chauffeurs already drive to Lutcher, Gramercy and Donaldsonville, so a Vacherie pickup is a route we know well rather than one we're learning on the fly.",
      "Most non-airport bookings here are plantation tourism — Oak Alley, Laura Plantation and other River Road estates — along with weddings at historic venues and corporate visits tied to the sugar and petrochemical employers along the river.",
    ],
    highlights: [
      "Flat-rate MSY transfers, about 50 miles via River Road or I-10",
      "Oak Alley, Laura Plantation and River Road tour transportation",
      "Wedding transportation for historic Vacherie-area venues",
      "Corporate accounts for River Road sugar and petrochemical employers",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "Oak Alley and River Road plantation visits",
        paragraphs: [
          "Vacherie is the heart of our River Road plantation-tour territory. We run guests from New Orleans hotels out to Oak Alley for the morning, work in a second stop at Laura Plantation or Houmas House, and bring everyone back in the same chauffeured vehicle rather than a tour bus itinerary that dictates the pace.",
          "Weekday and weekend demand both run high in spring and fall when the oaks and gardens are at their best, so a plantation-day booking is worth placing a week or two ahead of your visit.",
        ],
      },
      {
        h2: "The drive between Vacherie and MSY",
        paragraphs: [
          "Most trips run along River Road to Highway 3127 and onto I-10, the same corridor our chauffeurs already drive to Lutcher, Gramercy and the rest of the River Parishes, so timing a Vacherie pickup holds no surprises for dispatch.",
          "Flight tracking means a delayed inbound flight doesn't leave a chauffeur stranded at the curb, and a delayed drive out doesn't leave your flight waiting on a stranded car — we adjust the pickup to the real schedule.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A single Vacherie airport transfer is usually available with a day or two of notice; a plantation-day tour or a River Road wedding weekend is best booked one to two weeks out so your preferred vehicle is confirmed rather than whatever is left. Every booking includes real-time flight tracking and 45 minutes of complimentary wait time on domestic arrivals.",
          "Sedan and SUV transfers cancel free of charge up to 3 hours before pickup; Sprinter van, limousine and wedding bookings follow the 12-hour window. Call (877) 609-1919 to book a Vacherie pickup, drop-off or full plantation day.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Vacherie from MSY airport?", a: "About 50 miles, usually 55 to 65 minutes via River Road or I-10, the same corridor we drive daily to Lutcher and Gramercy." },
      { q: "Do you run tours to Oak Alley Plantation?", a: "Yes. We regularly drive guests from New Orleans hotels to Oak Alley, Laura Plantation and other River Road estates, with the chauffeur waiting through the visit." },
      { q: "Can you handle a wedding at a River Road venue near Vacherie?", a: "Yes, including a full wedding day with getting-ready, ceremony, photos and reception stops." },
      { q: "Is the airport rate flat?", a: "Yes, confirmed before you book by vehicle class, with no surge pricing regardless of traffic." },
      { q: "Do you offer corporate accounts for Vacherie-area businesses?", a: "Yes. River Road sugar mills and petrochemical employers book recurring travel through a corporate account with consolidated billing." },
    ],
    related: [
      { label: "Lutcher & Gramercy Limo Service", to: "/lutcher-gramercy-la-limo-service" },
      { label: "Donaldsonville Limo Service", to: "/donaldsonville-la-limo-service" },
      { label: "River Road Plantation Tour Transportation", to: "/river-road-plantation-tour-transportation" },
      { label: "Oak Alley and River Road Plantation Tours Guide", to: "/blog/oak-alley-river-road-plantation-tour-transportation" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Vacherie, LA", "St. James Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "plaquemine-la-limo-service",
    type: "city",
    name: "Plaquemine",
    badge: "Louisiana Limo Service",
    h1: "Plaquemine, LA Limo Service",
    metaTitle: "Plaquemine LA Limo Service | Car Service Plaquemine",
    metaDescription: "Chauffeured limo & car service in Plaquemine, LA. Iberville Parish courthouse, Baton Rouge-area corporate travel, MSY transfers. (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 75 mi · 80–95 minutes" },
      { label: "Coverage", value: "Downtown, Iberville Parish Courthouse, Mississippi River" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Plaquemine is the seat of Iberville Parish, sitting on the Mississippi River just south of Baton Rouge, and MSY Limo Service covers parish government business, local industry and MSY airport transfers here with the same flat-rate, licensed-chauffeur standard we run across every parish we serve.",
      "The drive to MSY runs about 75 miles and 80 to 95 minutes, typically via LA-1 and I-10 through Baton Rouge, the same corridor our chauffeurs already drive for Baton Rouge and Port Allen bookings.",
      "Parish courthouse business at the Iberville Parish Courthouse, industrial employers along the river, and weddings and family events round out most of our non-airport Plaquemine bookings.",
    ],
    highlights: [
      "Flat-rate MSY transfers, about 75 miles via LA-1 and I-10",
      "Iberville Parish Courthouse and parish government bookings",
      "Corporate accounts for river-industry employers near Plaquemine",
      "Wedding and event transportation for Plaquemine-area venues",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "Plaquemine and the Iberville Parish Courthouse",
        paragraphs: [
          "Attorneys, parish staff and visitors doing business at the Iberville Parish Courthouse book us for reliable, on-time transportation rather than hunting for parking downtown, and we treat a courthouse pickup with the same punctuality standard as an airport run.",
          "The historic Plaquemine Lock, now a state historic site on the river, also brings in occasional event and tour bookings we're happy to run as a flat-rate charter.",
        ],
      },
      {
        h2: "The drive between Plaquemine and MSY",
        paragraphs: [
          "Most trips run LA-1 to I-10 through Baton Rouge, the same route our chauffeurs already drive for Port Allen and Baton Rouge pickups, so there's nothing improvised about the timing or the traffic pattern through the capital area.",
          "Flight tracking means your pickup adjusts automatically to your actual arrival, not the printed schedule, and the complimentary wait clock doesn't start until the aircraft is on the ground.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A single Plaquemine airport transfer is typically available with a day or two of notice; a wedding weekend or a multi-vehicle corporate booking is best placed one to two weeks out so the right mix of sedans and vans is confirmed ahead of time. Every booking includes real-time flight tracking and 45 minutes of complimentary domestic wait time.",
          "Sedan and SUV transfers cancel free of charge up to 3 hours before pickup; Sprinter van and wedding bookings follow the 12-hour window. Call (877) 609-1919 to book a Plaquemine pickup or drop-off.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Plaquemine from MSY airport?", a: "About 75 miles, usually 80 to 95 minutes via LA-1 and I-10 through Baton Rouge." },
      { q: "Do you serve the Iberville Parish Courthouse?", a: "Yes, with the same punctuality standard we hold for airport pickups." },
      { q: "Can you handle a wedding near Plaquemine?", a: "Yes, including a full wedding-day itinerary with a chauffeur who stays with the wedding party." },
      { q: "Is the airport rate flat?", a: "Yes, confirmed before you book by vehicle class, with no surge pricing regardless of traffic." },
      { q: "Do you offer corporate accounts for Plaquemine-area businesses?", a: "Yes. River-industry employers near Plaquemine book recurring travel through a corporate account with consolidated billing." },
    ],
    related: [
      { label: "Port Allen Limo Service", to: "/port-allen-la-limo-service" },
      { label: "Baton Rouge Limo Service", to: "/baton-rouge-limo-service" },
      { label: "White Castle Limo Service", to: "/white-castle-la-limo-service" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Plaquemine, LA", "Iberville Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "white-castle-la-limo-service",
    type: "city",
    name: "White Castle",
    badge: "Louisiana Limo Service",
    h1: "White Castle, LA Limo Service",
    metaTitle: "White Castle LA Limo Service | Car Service Near Nottoway",
    metaDescription: "Chauffeured limo & car service in White Castle, LA. Nottoway Plantation events, weddings, MSY airport transfers. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 85 mi · 90–105 minutes" },
      { label: "Coverage", value: "Nottoway Plantation, River Road, Iberville Parish" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "White Castle is home to Nottoway Plantation, the largest remaining antebellum mansion on the Mississippi River and a popular wedding and event venue, and MSY Limo Service runs this River Road stretch on committed reservations rather than hoping a rideshare driver accepts an 85-mile fare.",
      "The drive from MSY is about 85 miles and 90 to 105 minutes along River Road or LA-1 and I-10, a corridor our chauffeurs already know well from Plaquemine and Port Allen bookings.",
      "Nottoway weddings are our single most common White Castle booking, followed by corporate and family travel tied to the surrounding River Road sugar industry.",
    ],
    highlights: [
      "Committed reservations for the 85-mile MSY run",
      "Nottoway Plantation wedding and event transportation",
      "Flat rate or hourly charter for a full River Road event day",
      "Sprinter vans for wedding parties and guest shuttles",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "Weddings and events at Nottoway Plantation",
        paragraphs: [
          "Nottoway's size and grounds mean most wedding bookings here need more than one vehicle — a limousine or luxury sedan for the couple, and a Sprinter van shuttling guests between the hotel block and the venue. We plan that split in advance so nobody is left waiting at either end.",
          "Because White Castle sits well outside the metro area, we recommend booking a River Road wedding at Nottoway several weeks ahead, particularly for a Saturday in the spring or fall wedding season.",
        ],
      },
      {
        h2: "The drive between White Castle and MSY",
        paragraphs: [
          "The run typically follows River Road or LA-1 to I-10, the same route our chauffeurs already drive for Plaquemine and Port Allen, so the 85-mile trip holds no surprises for dispatch or for the chauffeur assigned to it.",
          "Because this is a reservation-based trip rather than an on-demand rideshare request, both your outbound pickup and your return are confirmed before you ever leave for the airport.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A single White Castle airport transfer should be booked a few days ahead given the distance; a Nottoway wedding or multi-vehicle event is best reserved three to four weeks out so the full fleet mix is guaranteed. Flight tracking and 45 minutes of complimentary domestic wait time are included on every airport run.",
          "Sedan and SUV fares cancel free up to 3 hours before pickup; Sprinter van and wedding bookings follow the 12-hour window. Call (877) 609-1919 to plan a Nottoway wedding day or an MSY transfer.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is White Castle from MSY airport?", a: "About 85 miles, usually 90 to 105 minutes via River Road or LA-1 and I-10." },
      { q: "Do you serve weddings at Nottoway Plantation?", a: "Yes, regularly, often with a limousine for the couple and a Sprinter van shuttling the wedding party and guests." },
      { q: "How far ahead should I book a Nottoway wedding?", a: "Three to four weeks is a safe window to guarantee the full vehicle mix for a Saturday wedding." },
      { q: "Is the airport rate flat?", a: "Yes, confirmed before you book by vehicle class." },
      { q: "Can you handle a multi-vehicle guest shuttle for a River Road event?", a: "Yes. We coordinate Sprinter vans and sedans together so every guest arrives and departs on the same schedule." },
    ],
    related: [
      { label: "Plaquemine Limo Service", to: "/plaquemine-la-limo-service" },
      { label: "Port Allen Limo Service", to: "/port-allen-la-limo-service" },
      { label: "Top 10 Wedding Venues Near New Orleans", to: "/top-10-wedding-venues-near-new-orleans" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Sprinter Van Rental With Driver", to: "/sprinter-van-rental-with-driver-new-orleans" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["White Castle, LA", "Iberville Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "crowley-la-limo-service",
    type: "city",
    name: "Crowley",
    badge: "Louisiana Limo Service",
    h1: "Crowley, LA Limo Service",
    metaTitle: "Crowley LA Limo Service | Rice Capital Car Service",
    metaDescription: "Chauffeured limo & car service in Crowley, LA, the Rice Capital of America. Weddings, corporate travel, MSY airport transfers. (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 135 mi · 2 hr 05 min" },
      { label: "Coverage", value: "Downtown Crowley, Acadia Parish" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Crowley is the seat of Acadia Parish and known as the Rice Capital of America, home to the International Rice Festival each October, and MSY Limo Service reaches it the same way we reach every Acadiana community on a reserved booking rather than an on-demand request.",
      "The drive from MSY is about 135 miles and roughly two hours via I-10 through Lafayette, a corridor our chauffeurs already drive daily to Lafayette and Opelousas.",
      "Rice Festival weekends bring a predictable spike in local bookings, alongside weddings, family events and corporate travel tied to Crowley's agricultural and oil-service businesses.",
    ],
    highlights: [
      "Committed reservations for the roughly two-hour MSY run",
      "International Rice Festival weekend transportation",
      "Wedding and family-event transportation in Crowley and Acadia Parish",
      "Corporate accounts for agricultural and oil-service employers",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "The International Rice Festival and local events",
        paragraphs: [
          "The Rice Festival each October fills Crowley's downtown and brings in visitors from across Acadiana, and we book festival-weekend transportation well ahead so a group isn't left arranging a ride after every vehicle in town is already booked.",
          "Outside festival season, Crowley weddings, graduations and family celebrations are routine bookings, usually as a flat-rate round trip or a few hours of as-directed charter.",
        ],
      },
      {
        h2: "The drive between Crowley and MSY",
        paragraphs: [
          "The route runs I-10 through Lafayette, the same corridor our chauffeurs already cover for Lafayette and Opelousas bookings, so a Crowley pickup is a known trip rather than a new one.",
          "Because the distance is substantial, we plan the pickup time around your flight and typical I-10 traffic through Lafayette and Baton Rouge rather than a single fixed drive estimate.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "Given the roughly 135-mile distance, we recommend booking a Crowley airport transfer several days ahead, and a wedding or Rice Festival weekend two to three weeks out to guarantee the vehicle you want. Every booking includes real-time flight tracking and 45 minutes of complimentary domestic wait time.",
          "Sedan and SUV transfers cancel free up to 3 hours before pickup; Sprinter van and wedding bookings follow the 12-hour window. Call (877) 609-1919 to book a Crowley pickup or drop-off.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Crowley from MSY airport?", a: "About 135 miles, roughly two hours via I-10 through Lafayette." },
      { q: "Do you run extra vehicles during the International Rice Festival?", a: "Yes. Festival weekends fill fast, so we recommend booking two to three weeks ahead." },
      { q: "Is the rate flat for a Crowley airport transfer?", a: "Yes, confirmed before you book by vehicle class, regardless of the drive time." },
      { q: "Can you handle a Crowley wedding?", a: "Yes, as a flat-rate round trip or hourly as-directed charter for the full day." },
      { q: "Do you serve Acadia Parish businesses with corporate accounts?", a: "Yes, including agricultural and oil-service employers with recurring travel needs." },
    ],
    related: [
      { label: "Lafayette, LA Limo Service", to: "/lafayette-la-limo-service" },
      { label: "Opelousas, LA Limo Service", to: "/opelousas-la-limo-service" },
      { label: "Abbeville, LA Limo Service", to: "/abbeville-la-limo-service" },
      { label: "MSY to Lafayette", to: "/msy-to-lafayette" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Crowley, LA", "Acadia Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "eunice-la-limo-service",
    type: "city",
    name: "Eunice",
    badge: "Louisiana Limo Service",
    h1: "Eunice, LA Limo Service",
    metaTitle: "Eunice LA Limo Service | Cajun Music Capital Car Service",
    metaDescription: "Chauffeured limo & car service in Eunice, LA, the Cajun Music Capital. Weddings, Liberty Theater events, MSY airport transfers. (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 150 mi · 2 hr 15 min" },
      { label: "Coverage", value: "Downtown Eunice, Liberty Theater, St. Landry Parish" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Eunice calls itself the Cajun Music Capital of Louisiana, home to the historic Liberty Theater and its Saturday-night Cajun radio broadcast, and MSY Limo Service covers it on the same reserved, flat-rate basis we use for every Acadiana community on our map.",
      "The drive from MSY is about 150 miles and roughly two hours fifteen minutes via I-10 and US-190 through Lafayette and Opelousas, a corridor our chauffeurs already drive regularly.",
      "Beyond airport transfers, we run weddings, family celebrations and the occasional corporate booking tied to Eunice's agricultural and energy-sector employers.",
    ],
    highlights: [
      "Committed reservations for the roughly two-hour-plus MSY run",
      "Liberty Theater event and Saturday-night broadcast transportation",
      "Wedding and family-event transportation in Eunice and St. Landry Parish",
      "Corporate accounts for local agricultural and energy employers",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "Liberty Theater and local Eunice events",
        paragraphs: [
          "The Liberty Theater's Saturday-night Cajun radio broadcast and other downtown Eunice events draw visitors from across Acadiana, and a reserved car removes the hassle of finding downtown parking for an evening out.",
          "Weddings, graduations and family gatherings round out most of our other Eunice bookings, usually as a flat-rate round trip from the airport or a few hours of as-directed local charter.",
        ],
      },
      {
        h2: "The drive between Eunice and MSY",
        paragraphs: [
          "Most trips run I-10 to US-190 through Lafayette and Opelousas, a route our chauffeurs already drive for both of those cities, so a Eunice pickup is a known route rather than a new one.",
          "Given the distance, we plan the pickup time around your flight and typical traffic through Lafayette rather than a single fixed estimate, and flight tracking keeps the schedule accurate either way.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "We recommend booking a Eunice airport transfer several days ahead given the roughly 150-mile distance, and a wedding or Liberty Theater event weekend two to three weeks out. Every booking includes real-time flight tracking and 45 minutes of complimentary domestic wait time.",
          "Sedan and SUV transfers cancel free up to 3 hours before pickup; Sprinter van and wedding bookings follow the 12-hour window. Call (877) 609-1919 to book a Eunice pickup or drop-off.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Eunice from MSY airport?", a: "About 150 miles, roughly two hours fifteen minutes via I-10 and US-190 through Lafayette and Opelousas." },
      { q: "Do you serve Liberty Theater events?", a: "Yes, including the Saturday-night Cajun radio broadcast and other downtown Eunice events." },
      { q: "Is the airport rate flat?", a: "Yes, confirmed before you book by vehicle class." },
      { q: "Can you handle a Eunice wedding?", a: "Yes, as a flat-rate round trip or hourly charter for the full day." },
      { q: "How far ahead should I book?", a: "A few days for a single transfer; two to three weeks for a wedding or event weekend to guarantee your vehicle." },
    ],
    related: [
      { label: "Opelousas, LA Limo Service", to: "/opelousas-la-limo-service" },
      { label: "Lafayette, LA Limo Service", to: "/lafayette-la-limo-service" },
      { label: "Crowley, LA Limo Service", to: "/crowley-la-limo-service" },
      { label: "MSY to Opelousas", to: "/msy-to-opelousas" },
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Eunice, LA", "St. Landry Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "abbeville-la-limo-service",
    type: "city",
    name: "Abbeville",
    badge: "Louisiana Limo Service",
    h1: "Abbeville, LA Limo Service",
    metaTitle: "Abbeville LA Limo Service | Vermilion Parish Car Service",
    metaDescription: "Chauffeured limo & car service in Abbeville, LA. Vermilion Parish courthouse, weddings, oil & gas corporate travel, MSY transfers. (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 145 mi · 2 hr 10 min" },
      { label: "Coverage", value: "Downtown Abbeville, Vermilion Parish Courthouse" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Abbeville is the seat of Vermilion Parish, a Cajun-heritage town built around its historic downtown squares, and MSY Limo Service reaches it on the same flat-rate, reserved basis we use for every Acadiana community we serve.",
      "The drive from MSY is about 145 miles and roughly two hours ten minutes via I-10 and US-167 through Lafayette, a corridor our chauffeurs already drive for Lafayette and nearby towns.",
      "Parish courthouse business, weddings at historic downtown venues, and corporate travel tied to the area's oil and gas and agricultural employers make up most of our Abbeville bookings beyond airport runs.",
    ],
    highlights: [
      "Committed reservations for the roughly two-hour-plus MSY run",
      "Vermilion Parish Courthouse and parish government bookings",
      "Wedding transportation for historic downtown Abbeville venues",
      "Corporate accounts for oil, gas and agricultural employers",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "Vermilion Parish Courthouse and downtown Abbeville",
        paragraphs: [
          "Attorneys and parish staff doing business at the Vermilion Parish Courthouse book us for dependable, on-time transportation, and Abbeville's historic downtown squares regularly host weddings and community events we run as flat-rate charters.",
          "The town's Cajun-heritage festivals bring periodic spikes in local demand, and we recommend booking those weekends a little further ahead than a routine weekday trip.",
        ],
      },
      {
        h2: "The drive between Abbeville and MSY",
        paragraphs: [
          "Most trips run I-10 to US-167 through Lafayette, a route our chauffeurs already drive regularly, so an Abbeville pickup holds no surprises for dispatch or for the chauffeur assigned to it.",
          "Given the distance, we plan the pickup time around your flight and typical I-10 traffic through Lafayette rather than a single fixed drive estimate.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "We recommend booking an Abbeville airport transfer a few days ahead given the roughly 145-mile distance, and a wedding or festival weekend two to three weeks out. Every booking includes real-time flight tracking and 45 minutes of complimentary domestic wait time.",
          "Sedan and SUV transfers cancel free up to 3 hours before pickup; Sprinter van and wedding bookings follow the 12-hour window. Call (877) 609-1919 to book an Abbeville pickup or drop-off.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Abbeville from MSY airport?", a: "About 145 miles, roughly two hours ten minutes via I-10 and US-167 through Lafayette." },
      { q: "Do you serve the Vermilion Parish Courthouse?", a: "Yes, with the same punctuality standard we hold for airport pickups." },
      { q: "Is the airport rate flat?", a: "Yes, confirmed before you book by vehicle class." },
      { q: "Can you handle a wedding in downtown Abbeville?", a: "Yes, including a full wedding-day itinerary with a chauffeur who stays with the wedding party." },
      { q: "Do you offer corporate accounts for Abbeville-area businesses?", a: "Yes, including oil, gas and agricultural employers with recurring travel needs." },
    ],
    related: [
      { label: "Lafayette, LA Limo Service", to: "/lafayette-la-limo-service" },
      { label: "New Iberia, LA Limo Service", to: "/new-iberia-la-limo-service" },
      { label: "Eunice, LA Limo Service", to: "/eunice-la-limo-service" },
      { label: "MSY to Lafayette", to: "/msy-to-lafayette" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Abbeville, LA", "Vermilion Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "jeanerette-la-limo-service",
    type: "city",
    name: "Jeanerette",
    badge: "Louisiana Limo Service",
    h1: "Jeanerette, LA Limo Service",
    metaTitle: "Jeanerette LA Limo Service | Sugar City Car Service",
    metaDescription: "Chauffeured limo & car service in Jeanerette, LA, the Sugar City. Weddings, corporate travel, MSY airport transfers. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 130 mi · 2 hr" },
      { label: "Coverage", value: "Downtown Jeanerette, Bayou Teche, Iberia Parish" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Jeanerette sits on Bayou Teche in Iberia Parish and is known as the Sugar City for its historic sugar mills, and MSY Limo Service reaches it the same way we reach New Iberia next door: a reserved, flat-rate booking rather than an on-demand rideshare request for a trip this length.",
      "The drive from MSY is about 130 miles and roughly two hours via I-10 through Lafayette and US-90, a corridor our chauffeurs already cover for New Iberia and Morgan City bookings.",
      "Sugar-industry corporate travel, weddings along Bayou Teche, and family events round out most of our non-airport Jeanerette business.",
    ],
    highlights: [
      "Committed reservations for the roughly two-hour MSY run",
      "Corporate accounts for sugar-industry employers near Jeanerette",
      "Wedding and family-event transportation along Bayou Teche",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Flat rate confirmed before you book, no surge pricing",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "Jeanerette's sugar industry and Bayou Teche events",
        paragraphs: [
          "Jeanerette's historic sugar mills bring a steady stream of visiting vendors and corporate travelers through the area, and we run that traffic on reserved, flat-rate bookings rather than leaving it to chance.",
          "Bayou Teche is also a popular setting for weddings and family celebrations, and we plan those as a full day's hourly charter so the same chauffeur handles every leg.",
        ],
      },
      {
        h2: "The drive between Jeanerette and MSY",
        paragraphs: [
          "Most trips run I-10 through Lafayette and then US-90 toward New Iberia and Jeanerette, the same corridor our chauffeurs already drive for New Iberia bookings, so the roughly 130-mile run is a known trip.",
          "Flight tracking keeps the pickup accurate to your actual arrival time rather than the printed schedule, which matters more the farther the drive runs.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "We recommend booking a Jeanerette airport transfer a few days ahead given the roughly 130-mile distance, and a wedding or corporate group booking one to two weeks out. Every booking includes real-time flight tracking and 45 minutes of complimentary domestic wait time.",
          "Sedan and SUV transfers cancel free up to 3 hours before pickup; Sprinter van and wedding bookings follow the 12-hour window. Call (877) 609-1919 to book a Jeanerette pickup or drop-off.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Jeanerette from MSY airport?", a: "About 130 miles, roughly two hours via I-10 through Lafayette and US-90." },
      { q: "Do you serve sugar-industry corporate travel near Jeanerette?", a: "Yes, with recurring corporate accounts available for consolidated billing." },
      { q: "Is the airport rate flat?", a: "Yes, confirmed before you book by vehicle class." },
      { q: "Can you handle a Bayou Teche wedding near Jeanerette?", a: "Yes, typically as a full-day hourly charter so one chauffeur handles every leg." },
      { q: "How far ahead should I book?", a: "A few days for a single transfer; one to two weeks for a wedding or corporate group." },
    ],
    related: [
      { label: "New Iberia, LA Limo Service", to: "/new-iberia-la-limo-service" },
      { label: "Franklin, LA Limo Service", to: "/franklin-la-limo-service" },
      { label: "Lafayette, LA Limo Service", to: "/lafayette-la-limo-service" },
      { label: "MSY to New Iberia", to: "/msy-to-new-iberia" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Jeanerette, LA", "Iberia Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "sulphur-la-limo-service",
    type: "city",
    name: "Sulphur",
    badge: "Louisiana Limo Service",
    h1: "Sulphur, LA Limo Service",
    metaTitle: "Sulphur LA Limo Service | Car Service Near Lake Charles",
    metaDescription: "Chauffeured limo & car service in Sulphur, LA. Petrochemical corporate travel, weddings, MSY & Lake Charles airport transfers. (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 150 mi · 2 hr 15 min" },
      { label: "Coverage", value: "Downtown Sulphur, Westlake, Calcasieu Parish" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Sulphur sits just west of Lake Charles in Calcasieu Parish, a hub for the region's petrochemical and industrial employers, and MSY Limo Service covers it with the same flat-rate, reserved standard we run for Lake Charles next door.",
      "The drive from MSY is about 150 miles and roughly two hours fifteen minutes via I-10, while Lake Charles Regional Airport sits much closer for travelers flying through it instead — we run both routes on request.",
      "Corporate travel for petrochemical and industrial employers is our most common non-airport Sulphur booking, alongside weddings and family events.",
    ],
    highlights: [
      "Flat-rate transfers to either MSY or Lake Charles Regional Airport",
      "Corporate accounts for petrochemical and industrial employers",
      "Wedding and family-event transportation in Sulphur and Westlake",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Committed reservations, no on-demand rideshare uncertainty",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "Petrochemical and industrial corporate travel",
        paragraphs: [
          "Sulphur and neighboring Westlake host a concentration of petrochemical plants, and visiting executives, contractors and vendors regularly need reliable transportation between the airport, hotels and plant gates. We run that travel as flat-rate or hourly bookings with a dedicated account manager for companies that need it regularly.",
          "A Sprinter van is a common choice for shuttling a visiting crew or delegation between a hotel and a plant site without multiple separate vehicles.",
        ],
      },
      {
        h2: "MSY or Lake Charles — which airport makes sense",
        paragraphs: [
          "Travelers connecting through a larger hub often fly into MSY and make the roughly 150-mile, two-hour-plus drive west on I-10; others flying more direct routes use Lake Charles Regional Airport, a much shorter drive from Sulphur. We run both as flat-rate transfers and can help you decide which makes more sense for your itinerary.",
          "Either way, flight tracking and complimentary wait time are included, so a delayed flight doesn't turn into a missed pickup.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A Lake Charles Regional Airport transfer can usually be booked with a day or two of notice; an MSY transfer, given the distance, is best booked a few days ahead. A corporate group or wedding booking should be placed one to two weeks out to guarantee the full vehicle mix.",
          "Sedan and SUV transfers cancel free up to 3 hours before pickup; Sprinter van and wedding bookings follow the 12-hour window. Call (877) 609-1919 to arrange a Sulphur pickup from either airport.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Sulphur from MSY airport?", a: "About 150 miles, roughly two hours fifteen minutes via I-10. Lake Charles Regional Airport is a much shorter drive if your flight routes through there instead." },
      { q: "Do you serve petrochemical and industrial corporate travel in Sulphur?", a: "Yes, including hotel-to-plant-gate shuttles and visiting-delegation transportation." },
      { q: "Is the rate flat regardless of which airport I use?", a: "Yes, both MSY and Lake Charles Regional transfers are quoted as a flat rate confirmed at booking." },
      { q: "Can you handle a wedding in Sulphur or Westlake?", a: "Yes, as a flat-rate round trip or hourly charter for the full day." },
      { q: "Do you offer corporate accounts for Sulphur-area employers?", a: "Yes, with consolidated billing for companies that book regularly." },
    ],
    related: [
      { label: "Lake Charles, LA Limo Service", to: "/lake-charles-la-limo-service" },
      { label: "MSY to Lake Charles Airport", to: "/msy-to-lake-charles-airport" },
      { label: "Lafayette, LA Limo Service", to: "/lafayette-la-limo-service" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "New Orleans Oil, Gas & Energy Corporate Transportation", to: "/louisiana-oil-gas-energy-corporate-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Sulphur, LA", "Calcasieu Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "franklin-la-limo-service",
    type: "city",
    name: "Franklin",
    badge: "Louisiana Limo Service",
    h1: "Franklin, LA Limo Service",
    metaTitle: "Franklin LA Limo Service | St. Mary Parish Car Service",
    metaDescription: "Chauffeured limo & car service in Franklin, LA. St. Mary Parish courthouse, weddings, MSY airport transfers. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 115 mi · 1 hr 50 min" },
      { label: "Coverage", value: "Downtown Franklin, St. Mary Parish Courthouse" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Franklin is the seat of St. Mary Parish, a historic Bayou Teche town known for its antebellum homes, and MSY Limo Service reaches it the same way we reach Morgan City and Patterson next door: a reserved, flat-rate booking rather than a hoped-for rideshare match.",
      "The drive from MSY runs about 115 miles and roughly one hour fifty minutes via US-90, the same corridor our chauffeurs already drive to Morgan City and Houma.",
      "Parish courthouse business, weddings at the town's historic homes, and corporate travel tied to the area's offshore-service and agricultural economy make up most of our non-airport Franklin bookings.",
    ],
    highlights: [
      "Flat-rate MSY transfers, about 115 miles via US-90",
      "St. Mary Parish Courthouse and parish government bookings",
      "Wedding transportation for Franklin's historic antebellum homes",
      "Corporate accounts for offshore-service and agricultural employers",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "St. Mary Parish Courthouse and historic Franklin",
        paragraphs: [
          "Attorneys, parish staff and visitors doing business at the St. Mary Parish Courthouse book us for dependable transportation, and Franklin's antebellum homes along Main Street are a popular backdrop for weddings and photo sessions we run as flat-rate charters.",
          "Bayou Teche runs right through town, and tour or event bookings along the bayou are a regular, if smaller, part of our Franklin business.",
        ],
      },
      {
        h2: "The drive between Franklin and MSY",
        paragraphs: [
          "The route runs US-90 the same way our chauffeurs already drive to Morgan City and Houma, so a Franklin pickup is a familiar trip rather than a new one.",
          "Flight tracking keeps the pickup time accurate to your real arrival, which matters more the farther the drive runs — the complimentary wait clock doesn't start until the aircraft is on the ground.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "We recommend booking a Franklin airport transfer a few days ahead given the roughly 115-mile distance, and a wedding or corporate group booking one to two weeks out. Every booking includes real-time flight tracking and 45 minutes of complimentary domestic wait time.",
          "Sedan and SUV transfers cancel free up to 3 hours before pickup; Sprinter van and wedding bookings follow the 12-hour window. Call (877) 609-1919 to book a Franklin pickup or drop-off.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Franklin from MSY airport?", a: "About 115 miles, roughly one hour fifty minutes via US-90." },
      { q: "Do you serve the St. Mary Parish Courthouse?", a: "Yes, with the same punctuality standard we hold for airport pickups." },
      { q: "Is the airport rate flat?", a: "Yes, confirmed before you book by vehicle class." },
      { q: "Can you handle a wedding at one of Franklin's historic homes?", a: "Yes, including a full wedding-day itinerary with a chauffeur who stays with the wedding party." },
      { q: "Do you offer corporate accounts for Franklin-area businesses?", a: "Yes, including offshore-service and agricultural employers with recurring travel needs." },
    ],
    related: [
      { label: "Morgan City Limo Service", to: "/morgan-city-la-limo-service" },
      { label: "Patterson, LA Limo Service", to: "/patterson-la-limo-service" },
      { label: "Houma Limo Service", to: "/houma-limo-service" },
      { label: "MSY to Morgan City", to: "/msy-to-morgan-city" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Franklin, LA", "St. Mary Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },
  {
    slug: "patterson-la-limo-service",
    type: "city",
    name: "Patterson",
    badge: "Louisiana Limo Service",
    h1: "Patterson, LA Limo Service",
    metaTitle: "Patterson LA Limo Service | Car Service Patterson",
    metaDescription: "Chauffeured limo & car service in Patterson, LA. Wedell-Williams Aviation Museum, offshore corporate travel, MSY transfers. (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 105 mi · 1 hr 40 min" },
      { label: "Coverage", value: "Downtown Patterson, Wedell-Williams Museum, Atchafalaya Basin" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Patterson sits on the edge of the Atchafalaya Basin near Morgan City, home to the Wedell-Williams Aviation Museum and a share of the region's offshore-service economy, and MSY Limo Service covers it the same way we cover Morgan City next door: a reserved, flat-rate booking rather than an on-demand rideshare request.",
      "The drive from MSY runs about 105 miles and roughly one hour forty minutes via US-90, a corridor our chauffeurs already drive daily to Morgan City and Houma.",
      "Offshore-service corporate travel, visits to the Wedell-Williams museum, and weddings and family events make up most of our non-airport Patterson bookings.",
    ],
    highlights: [
      "Flat-rate MSY transfers, about 105 miles via US-90",
      "Wedell-Williams Aviation Museum visitor transportation",
      "Corporate accounts for offshore-service employers near Patterson",
      "Wedding and family-event transportation",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "Wedell-Williams Aviation Museum and local Patterson stops",
        paragraphs: [
          "The Wedell-Williams Aviation and Cypress Sawmill Museum draws history and aviation enthusiasts, and we run flat-rate round trips from New Orleans or a stop as part of a broader Atchafalaya Basin day out.",
          "Offshore-service companies based near Morgan City and Patterson book us for visiting crew and executive travel, usually as a corporate account with consolidated billing.",
        ],
      },
      {
        h2: "The drive between Patterson and MSY",
        paragraphs: [
          "The route runs US-90 the same way our chauffeurs already drive to Morgan City and Franklin, so a Patterson pickup is a familiar trip for dispatch.",
          "Flight tracking keeps the pickup accurate to your real arrival time, and the complimentary wait clock doesn't start until the aircraft is actually on the ground.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A single Patterson airport transfer is usually available with a day or two of notice; a wedding or corporate group booking is best placed one to two weeks ahead to guarantee the vehicle mix you need. Every booking includes real-time flight tracking and 45 minutes of complimentary domestic wait time.",
          "Sedan and SUV transfers cancel free up to 3 hours before pickup; Sprinter van and wedding bookings follow the 12-hour window. Call (877) 609-1919 to book a Patterson pickup or drop-off.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Patterson from MSY airport?", a: "About 105 miles, roughly one hour forty minutes via US-90." },
      { q: "Do you run trips to the Wedell-Williams Aviation Museum?", a: "Yes, as a flat-rate round trip or as part of a broader Atchafalaya Basin day out." },
      { q: "Is the airport rate flat?", a: "Yes, confirmed before you book by vehicle class." },
      { q: "Do you serve offshore-service companies near Patterson?", a: "Yes, with corporate accounts available for recurring crew and executive travel." },
      { q: "Can you handle a Patterson-area wedding?", a: "Yes, as a flat-rate round trip or hourly charter for the full day." },
    ],
    related: [
      { label: "Morgan City Limo Service", to: "/morgan-city-la-limo-service" },
      { label: "Franklin, LA Limo Service", to: "/franklin-la-limo-service" },
      { label: "Houma Limo Service", to: "/houma-limo-service" },
      { label: "MSY to Morgan City", to: "/msy-to-morgan-city" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Patterson, LA", "St. Mary Parish", "Louisiana"], serviceType: "Chauffeured car and limo service" },
  },

  // ───────────────────────── New Orleans neighborhood pages ─────────────────────────
  {
    slug: "st-roch-new-orleans-limo-service",
    type: "city",
    name: "St. Roch",
    badge: "New Orleans Neighborhood Limo Service",
    h1: "St. Roch Limo Service",
    metaTitle: "St. Roch New Orleans Limo Service | Car Service",
    metaDescription: "St. Roch, New Orleans limo & car service. St. Roch Market, Bayou Road, MSY airport transfers, weddings & nights out. (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 16 mi · 25–35 minutes" },
      { label: "Coverage", value: "St. Roch Market, Bayou Road, St. Claude Ave" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "St. Roch has become one of New Orleans' most-talked-about neighborhoods over the past decade, anchored by the restored St. Roch Market food hall and a strip of restaurants and bars along St. Claude Avenue, and MSY Limo Service runs chauffeured sedans, SUVs and Sprinter vans to doors throughout the neighborhood.",
      "From MSY, St. Roch is about 16 miles and 25 to 35 minutes via I-10, close enough that we run it as a routine airport route rather than treating it as an afterthought next to the Marigny and Bywater.",
      "Dinner reservations at the market, nights out along St. Claude, and visits to St. Roch Cemetery and its chapel are the bookings we see most often here, alongside airport transfers for residents and visitors staying nearby.",
    ],
    highlights: [
      "Flat-rate MSY transfers, about 16 miles via I-10",
      "St. Roch Market and St. Claude Avenue dinner and nightlife drop-offs",
      "Door-to-door service on St. Roch's narrow residential streets",
      "Chauffeurs who know the quickest route to the French Quarter or Marigny from here",
      "Child car seats available on request",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up in St. Roch",
        paragraphs: [
          "We cover the full neighborhood between St. Claude Avenue, North Claiborne and the Industrial Canal, including the blocks around St. Roch Market, Bayou Road and the cemetery. Shotgun-house addresses and narrow one-way streets are routine for our chauffeurs, who size the vehicle to the street rather than guessing.",
          "Give us a house number or a restaurant door and the chauffeur will be there a few minutes early, with a sedan or SUV sized correctly for the block.",
        ],
      },
      {
        h2: "St. Roch to MSY and back",
        paragraphs: [
          "Most airport runs from St. Roch follow Elysian Fields Avenue or St. Claude to I-10 West, a route our chauffeurs drive daily between the Marigny, Bywater and the terminal. We back-time the pickup from your flight and your airline's check-in guidance.",
          "On the return, we track your flight rather than the schedule, so an early or late landing adjusts the pickup automatically and the complimentary wait clock starts only once the plane is on the ground.",
        ],
      },
      {
        h2: "Dinner, nightlife and nearby neighborhoods",
        paragraphs: [
          "St. Roch Market's vendors and the restaurants along St. Claude are a short, frequent hop for us, and a reserved car means skipping the search for parking on a busy Friday night. We also run guests between here and the French Quarter, Marigny and Bywater without the wait of a rideshare during peak hours.",
          "For longer evenings with more than one stop, hourly as-directed charter keeps the same chauffeur with you from the market to a second bar and back home.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is St. Roch from MSY airport?", a: "About 16 miles, usually 25 to 35 minutes via I-10." },
      { q: "Do you serve St. Roch Market?", a: "Yes, regularly, for dinner reservations and group outings." },
      { q: "Can you handle St. Roch's narrow residential streets?", a: "Yes. Our chauffeurs size the vehicle to the street and know the neighborhood's layout well." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans and special-event bookings need 12 hours." },
      { q: "Do you run trips between St. Roch and the French Quarter or Marigny?", a: "Yes, frequently, both for dinner and nightlife and for airport connections." },
    ],
    related: [
      { label: "Marigny & Bywater Limo Service", to: "/marigny-bywater-limo-service" },
      { label: "Faubourg St. John Limo Service", to: "/faubourg-st-john-limo-service" },
      { label: "Gentilly Limo Service", to: "/gentilly-limo-service" },
      { label: "French Quarter Limo Service", to: "/french-quarter-limo-service" },
      { label: "Frenchmen Street at Night", to: "/blog/frenchmen-street-live-music-night-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["St. Roch, New Orleans", "New Orleans, LA"], serviceType: "Limousine and car service" },
  },
  {
    slug: "freret-street-new-orleans-limo-service",
    type: "city",
    name: "Freret Street",
    badge: "New Orleans Neighborhood Limo Service",
    h1: "Freret Street Limo Service",
    metaTitle: "Freret Street New Orleans Limo Service | Car Service",
    metaDescription: "Freret Street, New Orleans limo & car service. Restaurant row, Tulane & Loyola area, MSY airport transfers. Call (877) 609-1919.",
    stats: [
      { label: "MSY Airport", value: "≈ 15 mi · 25–35 minutes" },
      { label: "Coverage", value: "Freret Street restaurant row, Tulane & Loyola area" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Freret Street runs through Uptown New Orleans as one of the city's best restaurant rows, just blocks from Tulane and Loyola, and MSY Limo Service sends chauffeured vehicles to doors along the strip and the surrounding residential blocks every day.",
      "From MSY, Freret Street is about 15 miles and 25 to 35 minutes depending on traffic on I-10 and South Claiborne Avenue, a route our chauffeurs run constantly for Uptown and university-area bookings.",
      "Dinner reservations along the Freret corridor, university family-weekend visits, and airport transfers for residents and visiting academics make up most of our bookings in this part of Uptown.",
    ],
    highlights: [
      "Flat-rate MSY transfers, about 15 miles via I-10 and South Claiborne",
      "Freret Street restaurant-row dinner and group drop-offs",
      "Tulane and Loyola family-weekend and move-in transportation",
      "Door-to-door service on Freret's residential side streets",
      "Child car seats available on request",
      "Licensed, background-checked chauffeurs and commercially insured vehicles",
    ],
    sections: [
      {
        h2: "Where we pick up near Freret Street",
        paragraphs: [
          "We cover the Freret corridor between Napoleon and Jefferson Avenues, along with the residential streets on either side and the blocks closest to the Tulane and Loyola campuses. Game-day and move-in traffic around the universities is routine for our chauffeurs, who plan around it rather than around it.",
          "Give us a house number or a restaurant door and the chauffeur will be there a few minutes early, whether it's a quiet weeknight or a busy Saturday on the strip.",
        ],
      },
      {
        h2: "Freret Street to MSY and back",
        paragraphs: [
          "Most airport runs follow South Claiborne to I-10, a route our chauffeurs drive daily for Uptown, Carrollton and Garden District bookings alike. We back-time the pickup from your flight and your airline's check-in guidance rather than guessing.",
          "On the return, we track the flight, not the printed schedule, so an early or delayed landing adjusts the pickup automatically.",
        ],
      },
      {
        h2: "Dinner, university visits and nearby neighborhoods",
        paragraphs: [
          "The Freret Street restaurant row is one of our most frequent dinner-reservation drop-offs, and families visiting Tulane or Loyola for a parents' weekend or move-in day book us to avoid campus-area parking entirely.",
          "We also run guests between here and the Garden District, Uptown and Carrollton without the wait a rideshare can carry during a busy weekend.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Freret Street from MSY airport?", a: "About 15 miles, usually 25 to 35 minutes via I-10 and South Claiborne Avenue." },
      { q: "Do you serve Tulane and Loyola family weekends?", a: "Yes, including move-in day, parents' weekend and graduation, when campus-area parking is hardest to find." },
      { q: "Can you handle Freret Street's restaurant-row traffic on a busy night?", a: "Yes, our chauffeurs know the corridor well and plan the pickup time accordingly." },
      { q: "What is the cancellation policy?", a: "Sedan and SUV reservations can be cancelled free of charge up to 3 hours before pickup. Sprinter vans and special-event bookings need 12 hours." },
      { q: "Do you run trips between Freret Street and the Garden District?", a: "Yes, frequently, for dinner, nightlife and university-area visits." },
    ],
    related: [
      { label: "Uptown New Orleans Limo Service", to: "/uptown-new-orleans-limo-service" },
      { label: "Carrollton & Riverbend Limo Service", to: "/carrollton-riverbend-limo-service" },
      { label: "Garden District Limo Service", to: "/garden-district-limo-service" },
      { label: "Tulane University Transportation", to: "/tulane-university-transportation" },
      { label: "Loyola University Transportation", to: "/loyola-university-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Freret Street, New Orleans", "Uptown New Orleans", "New Orleans, LA"], serviceType: "Limousine and car service" },
  },

  // ───────────────────────── New MSY-to-neighborhood routes ─────────────────────────
  {
    slug: "msy-to-algiers",
    type: "service",
    name: "MSY to Algiers",
    badge: "Airport Transfer",
    h1: "MSY Airport to Algiers Car Service",
    metaTitle: "MSY Airport to Algiers Car Service | MSY Limo",
    metaDescription: "Private car service from MSY airport to Algiers, across the river via the Crescent City Connection. Flat rates, flight tracking. (877) 609-1919.",
    stats: [
      { label: "Distance", value: "≈ 17 mi · 25–35 minutes" },
      { label: "Coverage", value: "Algiers Point, Behrman, Federal City" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Algiers sits across the Mississippi River from downtown New Orleans, reached from MSY by the Crescent City Connection bridge rather than a ferry, and your chauffeur treats the river crossing as a routine part of the route rather than a reason to add a surcharge.",
      "The drive from Louis Armstrong International is about 17 miles and 25 to 35 minutes via I-10 and the Crescent City Connection, landing you in Algiers Point, Behrman or Federal City depending on your address.",
      "Algiers Point's bed-and-breakfasts, the Federal City business and naval-support area, and residents commuting back from a flight all book this route regularly.",
    ],
    highlights: [
      "Flat-rate pricing confirmed before you ride, including the bridge crossing",
      "Chauffeurs who know Algiers Point's historic streets and the Federal City complex",
      "Real-time flight tracking on every MSY pickup",
      "45 minutes of complimentary wait time on domestic arrivals",
      "SUVs and Sprinter vans for groups and extra luggage",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "Crossing the river from MSY",
        paragraphs: [
          "Rideshare drivers sometimes hesitate to cross the Crescent City Connection into Algiers, especially late at night, which can mean a longer wait or a cancelled request. Our chauffeurs cross it on every Algiers booking as a matter of course, with the bridge toll and timing already built into your flat rate.",
          "We also know which Algiers Point streets near the ferry landing can be tight for a full-size SUV, and size the vehicle accordingly when we know your exact address in advance.",
        ],
      },
      {
        h2: "Booking the ride",
        paragraphs: [
          "Your flat rate is confirmed before you fly and covers the full 17-mile run including the bridge crossing, with your chauffeur tracking your flight and adjusting for any delay automatically.",
          "For a return trip to the French Quarter or a cruise departure after an Algiers stay, we can plan the full round trip as one reservation rather than two separate bookings.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A single Algiers transfer is routinely available with same-day or next-day booking. Flight tracking and 45 minutes of complimentary domestic wait time are included on every airport run, no extra charge.",
          "Sedan and SUV fares cancel free up to 3 hours before pickup; Sprinter van and event bookings follow the 12-hour window. Call (877) 609-1919 and we'll confirm the fastest way across the river for your flight.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Algiers from MSY airport?", a: "About 17 miles, usually 25 to 35 minutes via I-10 and the Crescent City Connection." },
      { q: "Is there an extra charge for crossing the river?", a: "No. The bridge crossing is built into your flat rate, confirmed before you book." },
      { q: "Do you serve Algiers Point's historic bed-and-breakfasts?", a: "Yes, regularly, along with the Federal City business and naval-support complex." },
      { q: "Is the rate flat for this route?", a: "Yes, confirmed before you book, with real-time flight tracking included." },
      { q: "Can you plan a round trip including a cruise departure?", a: "Yes. Tell us your full itinerary and we'll quote the whole trip as one reservation." },
    ],
    related: [
      { label: "Algiers Limo Service", to: "/algiers-limo-service" },
      { label: "Algiers Point Ferry-Dependent Neighborhoods Guide", to: "/algiers-point-ferry-dependent-neighborhoods-car-service-guide" },
      { label: "New Orleans Cruise Port Car Service", to: "/new-orleans-cruise-port-car-service" },
      { label: "MSY to New Orleans Downtown", to: "/msy-to-new-orleans-downtown" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Algiers, New Orleans", "New Orleans, LA"], serviceType: "Airport car service" },
  },
  {
    slug: "msy-to-mid-city",
    type: "service",
    name: "MSY to Mid-City",
    badge: "Airport Transfer",
    h1: "MSY Airport to Mid-City Car Service",
    metaTitle: "MSY Airport to Mid-City Car Service | MSY Limo",
    metaDescription: "Private car service from MSY airport to Mid-City New Orleans — City Park, Jazz Fest Fair Grounds & Canal Street hotels. (877) 609-1919.",
    stats: [
      { label: "Distance", value: "≈ 13 mi · 20–30 minutes" },
      { label: "Coverage", value: "City Park, Fair Grounds, Canal Street corridor" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Mid-City is one of our shortest MSY runs and one of our busiest during Jazz Fest week, sitting between City Park, the Fair Grounds Race Course and the Canal Street streetcar corridor, and your chauffeur plans around whichever of those is driving the day's traffic.",
      "The drive from Louis Armstrong International is about 13 miles and 20 to 30 minutes via I-10 and Canal Street or City Park Avenue, depending on your exact destination.",
      "City Park and NOMA visitors, Jazz Fest attendees staying nearby, and residents along the Canal Street corridor are our most frequent Mid-City bookings.",
    ],
    highlights: [
      "Flat-rate pricing confirmed before you ride",
      "Chauffeurs who plan around Jazz Fest and Fair Grounds event traffic",
      "Real-time flight tracking on every MSY pickup",
      "45 minutes of complimentary wait time on domestic arrivals",
      "Sprinter vans for Jazz Fest groups and festival gear",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "City Park, the Fair Grounds and festival traffic",
        paragraphs: [
          "During Jazz Fest, the blocks around the Fair Grounds see some of the heaviest traffic and street closures in the city, and a chauffeur who drives Mid-City daily plans the pickup and drop-off around the specific closures in effect that day rather than guessing at a generic route.",
          "Outside festival season, City Park and NOMA visits are a steady, lower-key booking, usually as a flat-rate round trip from a hotel or home.",
        ],
      },
      {
        h2: "Booking the ride",
        paragraphs: [
          "Your flat rate is confirmed before you fly and covers the full 13-mile run, with your chauffeur tracking your flight and adjusting for any delay automatically.",
          "For a Jazz Fest weekend with multiple days of pickups and drop-offs, we can set up a standing arrangement so you're not rebooking from scratch each morning.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A routine Mid-City transfer is usually available with same-day or next-day booking; Jazz Fest week should be booked two to three weeks ahead given how much demand concentrates in this part of the city. Flight tracking and 45 minutes of complimentary domestic wait time are included on every airport run.",
          "Sedan and SUV fares cancel free up to 3 hours before pickup; Sprinter van and festival bookings follow the 12-hour window. Call (877) 609-1919 to book your Mid-City transfer.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Mid-City from MSY airport?", a: "About 13 miles, usually 20 to 30 minutes via I-10 and Canal Street or City Park Avenue." },
      { q: "Do you handle Jazz Fest week pickups in Mid-City?", a: "Yes, and we recommend booking two to three weeks ahead since demand in this part of the city spikes sharply during the festival." },
      { q: "Can you take me to City Park or NOMA?", a: "Yes, as a flat-rate round trip from the airport, your hotel or home." },
      { q: "Is the rate flat for this route?", a: "Yes, confirmed before you book, with real-time flight tracking included." },
      { q: "Can you set up multiple pickups for a festival weekend?", a: "Yes. Tell us your schedule and we'll arrange a standing booking for the whole weekend." },
    ],
    related: [
      { label: "Mid-City New Orleans Limo Service", to: "/mid-city-new-orleans-limo-service" },
      { label: "City Park & NOMA Transportation", to: "/city-park-nola-transportation" },
      { label: "Jazz Fest & Fair Grounds Transportation", to: "/jazz-fest-fair-grounds-transportation" },
      { label: "Limo Service Near Jazz Fest Fair Grounds", to: "/limo-service-near-jazz-fest-fair-grounds" },
      { label: "Beating Jazz Fest Traffic Guide", to: "/blog/jazz-fest-fair-grounds-traffic-strategy" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Mid-City, New Orleans", "New Orleans, LA"], serviceType: "Airport car service" },
  },
  {
    slug: "msy-to-treme",
    type: "service",
    name: "MSY to Tremé",
    badge: "Airport Transfer",
    h1: "MSY Airport to Tremé Car Service",
    metaTitle: "MSY Airport to Tremé Car Service | MSY Limo",
    metaDescription: "Private car service from MSY airport to Tremé, America's oldest Black neighborhood — jazz history, Armstrong Park, flat rates. (877) 609-1919.",
    stats: [
      { label: "Distance", value: "≈ 15 mi · 25–35 minutes" },
      { label: "Coverage", value: "Armstrong Park, Basin St, Claiborne Ave" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Tremé is widely recognized as America's oldest Black neighborhood and a birthplace of jazz, bordering the French Quarter along Basin Street and Armstrong Park, and MSY Limo Service drops guests and residents at doors throughout the neighborhood with a chauffeur who knows its history and its narrow streets equally well.",
      "The drive from Louis Armstrong International is about 15 miles and 25 to 35 minutes via I-10 and North Claiborne Avenue, just on the far side of the Quarter.",
      "Visitors heading to Armstrong Park, Congo Square or a Backstreet Cultural Museum visit, and residents booking a reliable airport ride, make up most of our Tremé bookings.",
    ],
    highlights: [
      "Flat-rate pricing confirmed before you ride",
      "Chauffeurs who know Tremé's historic streets and jazz landmarks",
      "Real-time flight tracking on every MSY pickup",
      "45 minutes of complimentary wait time on domestic arrivals",
      "Sedans and SUVs sized correctly for narrow residential blocks",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "Armstrong Park and Tremé's jazz history",
        paragraphs: [
          "Visitors making a point of seeing Congo Square, Armstrong Park or the Backstreet Cultural Museum often pair a Tremé stop with a French Quarter visit, since the two neighborhoods sit right next to each other — we run that combined trip as one reservation.",
          "Second lines and jazz funerals occasionally route through Tremé's streets, and our chauffeurs plan drop-off points around any parade or procession in progress rather than getting caught in it.",
        ],
      },
      {
        h2: "Booking the ride",
        paragraphs: [
          "Your flat rate is confirmed before you fly and covers the full 15-mile run, with your chauffeur tracking your flight and adjusting for any delay automatically.",
          "For a day that combines Tremé, the French Quarter and a later dinner elsewhere, hourly as-directed charter usually works out better than three separate point-to-point trips.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A single Tremé transfer is routinely available with same-day or next-day booking. Flight tracking and 45 minutes of complimentary domestic wait time are included on every airport run, no extra charge.",
          "Sedan and SUV fares cancel free up to 3 hours before pickup; Sprinter van and event bookings follow the 12-hour window. Call (877) 609-1919 to book your Tremé transfer.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Tremé from MSY airport?", a: "About 15 miles, usually 25 to 35 minutes via I-10 and North Claiborne Avenue." },
      { q: "Can you combine a Tremé and French Quarter visit in one trip?", a: "Yes. The two neighborhoods sit right next to each other, and we quote the combined trip as one reservation." },
      { q: "Do you plan around second lines or jazz funerals?", a: "Yes, our chauffeurs watch for any procession in progress and plan the drop-off point around it." },
      { q: "Is the rate flat for this route?", a: "Yes, confirmed before you book, with real-time flight tracking included." },
      { q: "Can a stretch limousine reach Tremé's residential streets?", a: "Many can, but on narrower blocks we may recommend a sedan or SUV instead — tell us your exact address when you book." },
    ],
    related: [
      { label: "French Quarter Limo Service", to: "/french-quarter-limo-service" },
      { label: "MSY to French Quarter", to: "/msy-to-french-quarter" },
      { label: "Saenger Theatre Transportation", to: "/saenger-theatre-transportation" },
      { label: "What Is a Second Line Parade?", to: "/blog/what-is-a-second-line-parade-wedding-tradition-explained" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Tremé, New Orleans", "New Orleans, LA"], serviceType: "Airport car service" },
  },
  {
    slug: "msy-to-carrollton",
    type: "service",
    name: "MSY to Carrollton",
    badge: "Airport Transfer",
    h1: "MSY Airport to Carrollton Car Service",
    metaTitle: "MSY Airport to Carrollton Car Service | MSY Limo",
    metaDescription: "Private car service from MSY airport to Carrollton & the Riverbend — streetcar line, Tulane & Loyola area. Flat rates. (877) 609-1919.",
    stats: [
      { label: "Distance", value: "≈ 14 mi · 20–30 minutes" },
      { label: "Coverage", value: "Carrollton Ave, Riverbend, Oak St" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Carrollton and the Riverbend sit at the far end of the St. Charles Avenue streetcar line, where the avenue curves with the Mississippi River and Oak Street's restaurants and shops take over, and MSY Limo Service runs this corridor as a routine, direct route from the airport.",
      "The drive from Louis Armstrong International is about 14 miles and 20 to 30 minutes via I-10 and South Carrollton Avenue, close enough that we treat it as a quick, flat-rate run rather than a special trip.",
      "Tulane and Loyola family visits, Oak Street dinner reservations, and residents near the streetcar turnaround are our most common Carrollton bookings.",
    ],
    highlights: [
      "Flat-rate pricing confirmed before you ride",
      "Chauffeurs who know the Riverbend's curving streets and the streetcar turnaround",
      "Real-time flight tracking on every MSY pickup",
      "45 minutes of complimentary wait time on domestic arrivals",
      "Convenient to both Tulane/Loyola and Oak Street",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "Carrollton, the Riverbend and university visits",
        paragraphs: [
          "Families visiting Tulane or Loyola often stay near Carrollton for easy streetcar access to campus, and we run move-in, parents'-weekend and graduation transfers from MSY as a standard flat-rate booking.",
          "Oak Street's restaurant and shopping strip is a short hop from the Riverbend, and a reserved car means skipping the search for parking on a weekend evening.",
        ],
      },
      {
        h2: "Booking the ride",
        paragraphs: [
          "Your flat rate is confirmed before you fly and covers the full 14-mile run, with your chauffeur tracking your flight and adjusting for any delay automatically.",
          "For a weekend that combines an airport pickup with university events and an Oak Street dinner, hourly as-directed charter keeps the same chauffeur with you the whole time.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A single Carrollton transfer is routinely available with same-day or next-day booking; a Tulane or Loyola family weekend is worth booking a week or two out given the surge in local demand those dates bring. Flight tracking and 45 minutes of complimentary domestic wait time are included on every airport run.",
          "Sedan and SUV fares cancel free up to 3 hours before pickup; Sprinter van and event bookings follow the 12-hour window. Call (877) 609-1919 to book your Carrollton transfer.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "How far is Carrollton from MSY airport?", a: "About 14 miles, usually 20 to 30 minutes via I-10 and South Carrollton Avenue." },
      { q: "Do you serve Tulane and Loyola family weekends in this area?", a: "Yes, including move-in day, parents' weekend and graduation." },
      { q: "Can you take me to Oak Street for dinner?", a: "Yes, as a flat-rate round trip from the airport, a hotel or home." },
      { q: "Is the rate flat for this route?", a: "Yes, confirmed before you book, with real-time flight tracking included." },
      { q: "Can you plan a full weekend with multiple pickups?", a: "Yes. Tell us your schedule and we'll arrange it as one coordinated booking." },
    ],
    related: [
      { label: "Carrollton & Riverbend Limo Service", to: "/carrollton-riverbend-limo-service" },
      { label: "Freret Street Limo Service", to: "/freret-street-new-orleans-limo-service" },
      { label: "Tulane University Transportation", to: "/tulane-university-transportation" },
      { label: "Loyola University Transportation", to: "/loyola-university-transportation" },
      { label: "Uptown New Orleans Limo Service", to: "/uptown-new-orleans-limo-service" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Carrollton, New Orleans", "New Orleans, LA"], serviceType: "Airport car service" },
  },

  // ───────────────────────── New occasion & industry verticals ─────────────────────────
  {
    slug: "new-orleans-wheelchair-accessible-transportation",
    type: "service",
    name: "Wheelchair-Accessible Transportation",
    badge: "Accessible Transportation",
    h1: "New Orleans Wheelchair-Accessible Transportation",
    metaTitle: "New Orleans Wheelchair-Accessible Car Service | MSY Limo",
    metaDescription: "Wheelchair-accessible chauffeured transportation in New Orleans. Airport transfers, medical appointments & events. Flat rates. (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "MSY airport, medical campuses, Greater New Orleans" },
      { label: "Booking", value: "Flat rate or hourly, advance notice requested" },
      { label: "Fleet", value: "Accessible SUVs & vans available" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "Families and visitors traveling with a wheelchair user shouldn't have to gamble on whether a rideshare driver can actually accommodate them, and MSY Limo Service plans accessible bookings in advance so the right vehicle and extra time are built into the reservation from the start.",
      "We coordinate wheelchair-accessible transportation for MSY airport arrivals and departures, non-emergency medical appointments at the city's hospital campuses, and weddings or events where a family member needs more than a standard sedan can offer.",
      "Advance notice matters more here than on a standard booking, since accessible vehicles are a smaller share of our fleet — we ask for as much lead time as your plans allow so we can confirm the right vehicle rather than scrambling at the last minute.",
    ],
    highlights: [
      "Accessible vehicle options coordinated in advance for your specific needs",
      "MSY airport arrivals and departures with meet-and-greet available",
      "Non-emergency medical appointment transportation to major campuses",
      "Extra complimentary time built into pickups for loading and unloading",
      "Chauffeurs trained to assist respectfully and patiently",
      "Licensed, insured and available 24/7",
    ],
    sections: [
      {
        h2: "Airport transfers for wheelchair users",
        paragraphs: [
          "An MSY pickup for a wheelchair user includes extra built-in time for the walk from the gate, baggage claim and loading, rather than the standard wait window used for an able-bodied passenger. Tell us your specific needs — manual or power chair, whether you transfer into a seat or ride in the chair, any extra equipment — when you book, so the chauffeur and vehicle are matched correctly.",
          "Meet-and-greet service, where your chauffeur waits inside at baggage claim with a sign, is a popular add-on for this kind of booking since it removes the uncertainty of a curbside meeting point.",
        ],
      },
      {
        h2: "Medical appointments and ongoing care",
        paragraphs: [
          "Families coordinating recurring appointments at Ochsner, Tulane Medical Center, LCMC Health or other area hospital campuses can set up a standing arrangement so the same chauffeur, who already knows the patient's needs, handles each trip rather than starting over every time.",
          "We ask for the appointment time and expected length of the visit so the return pickup is planned realistically rather than rushed.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "Because accessible vehicles are a smaller part of our fleet, we ask for as much advance notice as possible — ideally a few days for a routine appointment and one to two weeks for an airport transfer or event, so the right vehicle is confirmed and not a late scramble.",
          "The flat or hourly rate, confirmed before you book, includes the extra loading time built into the reservation. Call (877) 609-1919 and describe your specific needs so we can match the right vehicle and chauffeur.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Do you have wheelchair-accessible vehicles?", a: "Yes, coordinated in advance based on your specific needs — tell us your equipment and transfer preference when you book." },
      { q: "How much advance notice do you need?", a: "As much as possible. A few days for a routine appointment and one to two weeks for an airport transfer or event is the safest window." },
      { q: "Can you handle MSY airport pickups for a wheelchair user?", a: "Yes, with extra built-in time for the walk from the gate and baggage claim, and meet-and-greet service available." },
      { q: "Do you coordinate recurring medical appointment transportation?", a: "Yes. We can set up a standing arrangement with the same chauffeur for ongoing care at local hospital campuses." },
      { q: "Is the rate different for accessible transportation?", a: "The rate reflects the vehicle and trip, confirmed before you book, the same flat-rate approach we use for every reservation." },
    ],
    related: [
      { label: "Senior and Accessibility-Focused Car Service Guide", to: "/blog/senior-accessibility-focused-car-service-new-orleans" },
      { label: "Airport Transportation", to: "/services/airport-transportation" },
      { label: "MSY Airport Meet and Greet", to: "/msy-airport-meet-and-greet" },
      { label: "Our Fleet", to: "/fleet" },
      { label: "Contact Us", to: "/contact" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans, LA", "Greater New Orleans", "Louisiana"], serviceType: "Wheelchair-accessible car service" },
  },
  {
    slug: "new-orleans-vow-renewal-limo-service",
    type: "service",
    name: "Vow Renewal Limo Service",
    badge: "Vow Renewal Transportation",
    h1: "New Orleans Vow Renewal Limo Service",
    metaTitle: "New Orleans Vow Renewal Limo Service | MSY Limo",
    metaDescription: "Chauffeured limo service for vow renewals and anniversary celebrations in New Orleans. Flat rates, champagne toast available. (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "French Quarter, Garden District, City Park & venues" },
      { label: "Booking", value: "Flat rate or hourly as-directed" },
      { label: "Fleet", value: "Stretch limousines, SUVs & sedans" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "A vow renewal is a smaller event than a first wedding, but it deserves the same arrival: a stretch limousine or luxury sedan at the door, a chauffeur who treats the day as a real occasion, and a schedule built around your ceremony and dinner rather than a generic itinerary.",
      "Most vow renewal bookings we run are a half-day or full-day hourly charter — pickup from a hotel or home, a short ceremony at a courthouse, chapel or garden venue, and on to a dinner reservation — all with the same chauffeur and vehicle for the whole day.",
      "Milestone anniversaries, including couples renewing vows during a return visit to New Orleans where they originally married, are among our most common bookings in this category.",
    ],
    highlights: [
      "Hourly, as-directed charter built around your ceremony and dinner plans",
      "Stretch limousines, SUVs and luxury sedans available",
      "Complimentary champagne toast available on request",
      "Chauffeur stays with you for photos at French Quarter or Garden District landmarks",
      "Flat rate or hourly pricing confirmed before you book",
      "Licensed & Insured Carrier",
    ],
    sections: [
      {
        h2: "Planning a vow renewal day",
        paragraphs: [
          "Most vow renewal itineraries run three to six hours: pickup, a short ceremony, a stop for photos somewhere meaningful to the couple — Jackson Square, a Garden District street, or the spot where they first married — and a drop at a restaurant for dinner. We plan the hours around your actual schedule rather than a fixed template.",
          "Couples returning to New Orleans specifically to renew vows where they married often want to revisit the original venue or neighborhood, and we build the photo stops around that request.",
        ],
      },
      {
        h2: "Vehicle choice and add-ons",
        paragraphs: [
          "A stretch limousine suits a renewal with a small guest group riding along; a luxury sedan or SUV works well for a couple traveling alone. A complimentary champagne toast is a common add-on, and we can also arrange a specific arrival song or minor decoration if you mention it when booking.",
          "For a larger family gathering around the renewal, a Sprinter van keeps everyone together for the ceremony and dinner legs.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A vow renewal day is best booked two to three weeks ahead, particularly for a weekend date, so your preferred vehicle is guaranteed rather than whatever remains. The flat or hourly rate, confirmed before you book, includes the chauffeur staying with you for the full itinerary.",
          "Cancellations on stretch limousine and multi-hour bookings follow the 12-hour window. Call (877) 609-1919 to start planning your vow renewal day.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Do you offer transportation for vow renewals?", a: "Yes, typically as a half-day or full-day hourly charter covering the ceremony, photos and dinner." },
      { q: "Can you take us back to where we originally married?", a: "Yes. Tell us the venue or neighborhood and we'll build the photo stops around it." },
      { q: "Is a champagne toast included?", a: "A complimentary champagne toast is available on request — mention it when you book." },
      { q: "How far ahead should we book a vow renewal day?", a: "Two to three weeks is a safe window, especially for a weekend date." },
      { q: "Can a larger family group ride together?", a: "Yes. A Sprinter van keeps a larger group together for the ceremony and dinner." },
    ],
    related: [
      { label: "Vow Renewal and Milestone Anniversary Chauffeur Guide", to: "/blog/vow-renewal-milestone-anniversary-chauffeur-new-orleans" },
      { label: "New Orleans Anniversary Limo Service", to: "/new-orleans-anniversary-limo-service" },
      { label: "Wedding Limo Service", to: "/services/wedding-limo" },
      { label: "Top 10 Wedding Venues Near New Orleans", to: "/top-10-wedding-venues-near-new-orleans" },
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans, LA", "Greater New Orleans", "Louisiana"], serviceType: "Wedding and event limousine service" },
  },
  {
    slug: "new-orleans-corporate-roadshow-transportation",
    type: "service",
    name: "Corporate Roadshow Transportation",
    badge: "Corporate Roadshow",
    h1: "New Orleans Corporate Roadshow Transportation",
    metaTitle: "New Orleans Corporate Roadshow Car Service | MSY Limo",
    metaDescription: "Multi-stop corporate roadshow transportation in New Orleans and Louisiana. One dedicated chauffeur, consolidated billing. (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "New Orleans, Metairie, Baton Rouge & beyond" },
      { label: "Booking", value: "Hourly as-directed, multi-day available" },
      { label: "Fleet", value: "Executive sedans & Sprinter vans" },
      { label: "Dispatch", value: "24 / 7" },
    ],
    intro: [
      "A roadshow — investor meetings, client visits, or a multi-stop sales trip across several offices in one day — runs better with one dedicated chauffeur who already knows the schedule than with a different rideshare for every leg, and that's exactly what we build around a New Orleans or Louisiana corporate roadshow.",
      "We plan the day around your actual meeting schedule, including wait time between stops, rather than quoting a single point-to-point fare per leg, and the same vehicle and chauffeur stay with your team from the airport through the last meeting.",
      "Investment firms, consultants and companies touring multiple Louisiana offices in a single trip — New Orleans, Metairie, Baton Rouge and beyond — are our most frequent roadshow bookings.",
    ],
    highlights: [
      "One dedicated chauffeur and vehicle for the entire roadshow day",
      "Hourly, as-directed charter built around your real meeting schedule",
      "Multi-day and multi-city Louisiana itineraries coordinated in advance",
      "Wi-Fi-equipped executive sedans and Sprinter vans for larger teams",
      "Consolidated monthly billing available for recurring roadshow travel",
      "NDA-friendly, discreet chauffeurs",
    ],
    sections: [
      {
        h2: "Planning a multi-stop roadshow day",
        paragraphs: [
          "We ask for your meeting schedule up front — addresses, expected meeting length, and any flexibility in timing — so the day is planned with realistic buffers rather than optimistic back-to-back scheduling that falls apart the first time a meeting runs long.",
          "Between meetings, your chauffeur waits with the vehicle rather than circling, so your team steps out and leaves immediately rather than waiting for a car to be summoned.",
        ],
      },
      {
        h2: "Multi-city Louisiana itineraries",
        paragraphs: [
          "A roadshow that spans New Orleans, Metairie and Baton Rouge in the same day or over several days is a routine booking for us, and we coordinate the same chauffeur across the whole trip when the schedule allows, rather than switching drivers at each city line.",
          "For larger teams touring together, a Sprinter van keeps everyone on the same schedule instead of splitting into separate vehicles that arrive at different times.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A single-day roadshow is workable with a few days' notice; a multi-day or multi-city itinerary is best planned one to two weeks ahead so the right vehicle and chauffeur are reserved for the whole trip. Rates are quoted hourly with the full schedule in mind, confirmed before you book.",
          "Consolidated monthly billing is available for companies running recurring roadshow or client-visit travel. Call (877) 609-1919 to plan your next Louisiana roadshow.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Can you handle a multi-stop corporate roadshow in one day?", a: "Yes, with one dedicated chauffeur and vehicle built around your real meeting schedule, including wait time between stops." },
      { q: "Do you cover New Orleans, Metairie and Baton Rouge in one trip?", a: "Yes, routinely, often with the same chauffeur across the whole itinerary." },
      { q: "Is the pricing hourly or per trip?", a: "Hourly, as-directed charter, since a roadshow usually involves multiple stops and wait time rather than one single trip." },
      { q: "Can larger visiting teams ride together?", a: "Yes. A Sprinter van keeps a larger team on the same schedule instead of splitting into separate cars." },
      { q: "Do you offer consolidated billing for recurring roadshow travel?", a: "Yes, for companies that book this kind of travel regularly." },
    ],
    related: [
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Baton Rouge Corporate Car Service", to: "/baton-rouge-corporate-car-service" },
      { label: "Metairie Corporate Car Service", to: "/metairie-corporate-car-service" },
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "Corporate Car Service vs. Rideshare Guide", to: "/corporate-car-service-vs-rideshare" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans, LA", "Metairie, LA", "Baton Rouge, LA", "Louisiana"], serviceType: "Corporate car service" },
  },
  {
    slug: "new-orleans-film-production-transportation",
    type: "service",
    name: "Film & TV Production Transportation",
    badge: "Hollywood South Transportation",
    h1: "New Orleans Film & TV Production Transportation",
    metaTitle: "New Orleans Film Production Car Service | MSY Limo",
    metaDescription: "Chauffeured transportation for film & TV production in New Orleans — cast, crew and executive travel for Hollywood South shoots. (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "Production offices, soundstages, on-location sets" },
      { label: "Booking", value: "Hourly, daily & standing production accounts" },
      { label: "Fleet", value: "Executive sedans, SUVs & crew Sprinter vans" },
      { label: "Dispatch", value: "24 / 7, including overnight shoots" },
    ],
    intro: [
      "New Orleans has earned the nickname Hollywood South for the steady volume of film and television production that shoots here, and productions need transportation that works around call sheets and location changes rather than a fixed office schedule — which is exactly how we book film and TV production travel.",
      "We run cast and executive pickups from MSY, crew transportation between production offices, soundstages and on-location sets, and overnight availability for shoots that run past a normal workday, all coordinated through one production account.",
      "Discretion matters as much as punctuality for this kind of booking, and our chauffeurs are comfortable with NDAs, unmarked pickup points and the last-minute schedule changes that are routine on a working set.",
    ],
    highlights: [
      "Cast and executive airport transfers coordinated around call sheets, not fixed times",
      "Crew transportation between production offices, soundstages and sets",
      "Overnight and early-call availability for shoots that run past a normal day",
      "NDA-friendly, discreet chauffeurs comfortable with unmarked pickups",
      "Standing production accounts with consolidated billing",
      "Executive sedans, SUVs and Sprinter vans for larger crew moves",
    ],
    sections: [
      {
        h2: "Cast, executive and crew travel on a working set",
        paragraphs: [
          "Call times change, locations shift, and a production day rarely runs on the schedule printed that morning — we build flexibility into every production booking rather than treating it like a fixed appointment, and dispatch stays reachable throughout the shoot day for last-minute adjustments.",
          "Cast and visiting executives typically book an executive sedan or SUV with a chauffeur who understands discretion is part of the job; crew moves between a production office and a location are often handled with a Sprinter van so a whole department travels together.",
        ],
      },
      {
        h2: "Setting up a standing production account",
        paragraphs: [
          "Productions filming in New Orleans for weeks or months set up a standing account with consolidated billing rather than booking each ride individually, which simplifies both scheduling and the production's accounting at wrap.",
          "We coordinate directly with a production coordinator or transportation captain once an account is set up, rather than requiring cast or crew to book their own rides.",
        ],
      },
      {
        h2: "Booking lead time and what's included",
        paragraphs: [
          "A single executive or cast pickup can usually be arranged with a day or two of notice; setting up a standing production account for an ongoing shoot is worth doing before principal photography begins so transportation is ready on day one.",
          "Overnight and early-call availability is included as part of a standing account — there's no separate late-night surcharge. Call (877) 609-1919 to set up transportation for your New Orleans production.",
        ],
      },
    ],
    vehicles: vehicles(),
    faqs: [
      { q: "Do you provide transportation for film and TV productions?", a: "Yes, including cast and executive airport transfers, crew moves between offices and sets, and standing production accounts." },
      { q: "Can you work around a changing call sheet?", a: "Yes. We build flexibility into production bookings rather than treating call times as fixed, and dispatch stays reachable throughout the shoot day." },
      { q: "Are your chauffeurs comfortable with NDAs and discreet pickups?", a: "Yes. Discretion is part of how we handle every production booking." },
      { q: "Do you offer overnight availability for late shoots?", a: "Yes, with no separate late-night surcharge for a standing production account." },
      { q: "How do we set up a production account?", a: "Call (877) 609-1919 before principal photography begins and we'll set up consolidated billing with your production coordinator." },
    ],
    related: [
      { label: "Hollywood South Film Production Transportation Guide", to: "/hollywood-south-film-production-transportation" },
      { label: "Corporate Transportation", to: "/services/corporate-transportation" },
      { label: "Corporate Roadshow Transportation", to: "/new-orleans-corporate-roadshow-transportation" },
      { label: "MSY Airport Black Car Service", to: "/msy-airport-black-car-service" },
      { label: "Hourly As-Directed Charter", to: "/services/hourly-charter" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["New Orleans, LA", "Louisiana"], serviceType: "Corporate and production car service" },
  },
];
