// Content for the concert & event venue landing pages.
// Each entry drives one page at /<slug> via VenueLandingPage.
import { ensureFiveFaqs } from "@/lib/faqExtras";

export const venues = [
  {
    slug: "concert-transportation",
    shortName: "Concert & Event",
    badge: "CONCERTS & EVENTS",
    h1: "New Orleans Concert & Event Transportation",
    metaTitle: "New Orleans Concert & Event Transportation | MSY Limo",
    metaDescription:
      "Private limo & black car service to New Orleans concerts and events — Smoothie King Center, Superdome, House of Blues & more. Call (877) 609-1919.",
    stats: ["All major New Orleans venues", "Available 24/7", "Sedans · SUVs · Sprinter Vans"],
    intro: [
      "New Orleans is one of the great live-music cities of the world, and getting to the show should feel as good as the show itself. Our private concert and event transportation covers every major venue in the city — the Smoothie King Center, Caesars Superdome, Champions Square, House of Blues, the Saenger Theatre, and Tipitina's — with a professional chauffeur, a flat rate confirmed before you ride, and a vehicle waiting when the encore ends.",
      "Anyone who has driven downtown on an event night knows the routine: garages fill by early evening, surge pricing spikes the moment doors open, and the post-show rideshare scramble can leave you standing on Poydras Street for an hour. A reserved chauffeur removes all of it. We drop you as close to the entrance as the venue and NOPD allow, then stage nearby so your vehicle is rolling toward the pickup point as you walk out.",
      "We carry couples to Broadway touring shows at the Saenger, groups of friends to arena tours at the Smoothie King Center, tailgaters to Champions Square, and out-of-town fans straight from an MSY arrival to their hotel and on to the venue. Choose a luxury sedan for two, a Cadillac Escalade for up to six, or a Mercedes Sprinter van that keeps a group of up to thirteen together from the first pickup to the last drop-off.",
    ],
    highlights: [
      "Flat-rate pricing — no surge on event nights",
      "Chauffeurs who know every venue's drop-off and staging zones",
      "Post-show pickup coordinated by text with your chauffeur",
      "Group-friendly Escalades and Sprinter vans up to 13 passengers",
      "Hourly charters for pre-show dinner and after-parties",
      "Licensed & Insured Carrier",
    ],
    venuesTitle: "New Orleans Venues We Serve Every Week",
    venues: [
      {
        name: "Smoothie King Center",
        blurb:
          "Arena tours, Pelicans games, and family shows on Dave Dixon Drive. We handle the Girod Street traffic pattern so you don't have to.",
        link: "/smoothie-king-center-transportation",
      },
      {
        name: "Caesars Superdome",
        blurb:
          "Saints games, the Sugar Bowl, Essence Fest, and stadium concerts for 70,000+. Curbside drop-off beats the garage crawl every time.",
        link: "/caesars-superdome-transportation",
      },
      {
        name: "Champions Square",
        blurb:
          "The open-air plaza beside the Superdome hosts outdoor concerts and game-day festivities — we stage on the LaSalle Street side for quick exits.",
      },
      {
        name: "House of Blues New Orleans",
        blurb:
          "Intimate shows and Gospel Brunch on Decatur Street in the French Quarter, where a chauffeur who knows the one-ways is worth everything.",
        link: "/house-of-blues-new-orleans-transportation",
      },
      {
        name: "Saenger Theatre",
        blurb:
          "Broadway tours and comedy headliners at the restored 1927 landmark on Canal Street. Arrive dressed up and unbothered by parking.",
      },
      {
        name: "Tipitina's",
        blurb:
          "The legendary Uptown room at Napoleon and Tchoupitoulas. Street parking is scarce — a waiting black car is the local move.",
      },
    ],
    whyTitle: "Why Book a Chauffeur for Your Night Out?",
    whyParagraphs: [
      "Event-night pricing is where rideshare hurts the most. When 15,000 people leave the Smoothie King Center at the same moment, surge multipliers hit their peak and pickup pins scatter across the CBD. Your flat rate with us is locked at booking — a Saturday-night arena show costs exactly what we quoted on Tuesday.",
      "There's also the matter of the night itself. A chauffeured vehicle means everyone in your party can enjoy the pre-show cocktails and the champagne toast without a designated driver. Your chauffeur handles the venue traffic loops, the police detours, and the staging lots, and you step out at the door — then step back in when it's over.",
      "As a Licensed & Insured Carrier with background-checked, professionally trained chauffeurs, we run event transportation year-round: regular-season Saints Sundays, jazz brunch matinees, festival weekends, and every arena tour that comes through the city. Book a one-way transfer, a round trip with post-show pickup, or an hourly charter that keeps the vehicle with you from dinner through the after-party.",
    ],
    faqs: [
      {
        q: "How much does concert transportation in New Orleans cost?",
        a: "We quote a flat rate at booking based on your pickup location, venue, and vehicle — luxury sedan, SUV, or Sprinter van. The price never surges, even on sold-out event nights. Call (877) 609-1919 for an instant quote.",
      },
      {
        q: "Will my chauffeur pick me up after the show?",
        a: "Yes. Book a round trip and your chauffeur stages near the venue before the show ends. You'll have their direct number — text when you're heading out and the vehicle meets you at the agreed pickup point, usually within minutes.",
      },
      {
        q: "Can you take a group to a concert?",
        a: "Absolutely. Our Cadillac Escalades seat up to 6 and Mercedes Sprinter vans up to 13, so the whole group rides together. For larger parties we coordinate multiple vehicles on the same schedule.",
      },
      {
        q: "Do you offer hourly service for event nights?",
        a: "Yes. An hourly charter keeps the chauffeur and vehicle dedicated to you all evening — dinner in the Warehouse District, the show, and a nightcap on Frenchmen Street, all without booking separate rides.",
      },
      {
        q: "Can you pick us up at MSY airport and take us straight to an event?",
        a: "Yes. We track your flight into Louis Armstrong International, meet you curbside or at baggage claim, and can stop at your hotel before continuing to the venue. It's a popular option for fans flying in for Saints games and festival weekends.",
      },
    ],
  },
  {
    slug: "smoothie-king-center-transportation",
    shortName: "Smoothie King Center",
    badge: "CONCERTS & EVENTS",
    h1: "Smoothie King Center Limo & Car Service",
    metaTitle: "Smoothie King Center Limo & Car Service | MSY Limo",
    metaDescription:
      "Private limo & black car service to Smoothie King Center concerts and Pelicans games. Flat rates, post-show pickup, groups up to 13. (877) 609-1919.",
    stats: ["1501 Dave Dixon Drive", "Doors-side drop-off", "Post-show pickup included"],
    intro: [
      "The Smoothie King Center is New Orleans' arena for the big nights — headline concert tours, Pelicans basketball, and marquee family shows, all in the heart of the CBD next to the Superdome. Our private car and limo service gets you to Dave Dixon Drive without the garage lines, and back out of downtown without the post-show rideshare chaos.",
      "Arena events funnel thousands of vehicles into a few blocks between Poydras Street and Girod Street, and the surrounding garages routinely sell out before doors. Your chauffeur navigates the event-night traffic pattern, drops you as close to your entrance as NOPD staging allows, and positions for your pickup before the final song ends.",
      "Whether it's date night at a sold-out tour, a corporate suite for a Pelicans game, or a birthday group arriving in a Sprinter van, you ride in a detailed, late-model vehicle with a professional chauffeur — and your fare is a flat rate locked in at booking, no matter what the surge algorithms are doing outside the arena.",
    ],
    highlights: [
      "Flat rates that don't surge when the arena lets out",
      "Chauffeurs who know the Dave Dixon Drive event pattern",
      "Coordinated post-show pickup via your chauffeur's direct number",
      "Escalades and Sprinter vans for concert groups up to 13",
      "Hotel, restaurant, and MSY airport pickups available",
      "Licensed & Insured Carrier",
    ],
    venuesTitle: "How Event Night Works With a Chauffeur",
    venues: [
      {
        name: "Pre-Show Pickup",
        blurb:
          "We collect you at home, your hotel, or dinner — timed so you're through the doors before the opener, not stuck on Poydras at showtime.",
      },
      {
        name: "Drop-Off at the Arena",
        blurb:
          "Your chauffeur works the event traffic loop and drops you at the closest access point NOPD allows on Dave Dixon Drive or Girod Street.",
      },
      {
        name: "During the Show",
        blurb:
          "The vehicle stages nearby. No garage ticket, no level-4 parking hike, no crawling out of a structure at 11 p.m.",
      },
      {
        name: "Post-Show Pickup",
        blurb:
          "Text your chauffeur as the encore starts and walk to the agreed pickup point — the vehicle is usually rolling before you reach the sidewalk.",
      },
      {
        name: "Pelicans Game Nights",
        blurb:
          "Regular-season and playoff basketball with the same flat rate — popular with season-ticket holders and corporate suite hosts.",
      },
      {
        name: "Combined With Champions Square",
        blurb:
          "Attending an outdoor show next door? Same service, same staging knowledge — the plaza shares the Superdome footprint.",
      },
    ],
    whyTitle: "Skip the Arena Parking Entirely",
    whyParagraphs: [
      "Arena parking is the worst part of every Smoothie King Center event: garages charge premium event rates, fill early, and empty onto gridlocked one-way streets all at once. A reserved chauffeur turns that entire experience into two short walks — one to the door, one back to the car.",
      "For groups, the math gets even better. A Sprinter van carrying twelve friends costs less per person than a pair of surge-priced rideshares, keeps everyone together, and turns the ride itself into part of the night. As a Licensed & Insured Carrier, we're also the option companies trust for client entertainment and suite nights.",
    ],
    faqs: [
      {
        q: "Where do you drop off at the Smoothie King Center?",
        a: "As close to your entrance as event-night traffic control allows — typically on Dave Dixon Drive or the Girod Street side. Your chauffeur follows NOPD staging directions on the night and picks the best available point.",
      },
      {
        q: "How does pickup work after a concert?",
        a: "You'll have your chauffeur's direct number. Text as the show wraps up, walk to the pre-agreed pickup point, and the vehicle meets you there — no pins, no surge, no waiting in a rideshare lot.",
      },
      {
        q: "How much is a car service to a Smoothie King Center concert?",
        a: "Rates are flat and quoted at booking based on your pickup location and vehicle. A round trip with post-show pickup is the most popular option. Call (877) 609-1919 for an exact quote.",
      },
      {
        q: "Can you handle a group of 10 or more?",
        a: "Yes — our Mercedes Sprinter vans seat up to 13 passengers, and we can run multiple vehicles for larger parties so everyone arrives together.",
      },
      {
        q: "Do you also serve Pelicans games?",
        a: "Every home game. Many clients book a standing reservation for season tickets — same chauffeur, same pickup routine, all season long.",
      },
    ],
  },
  {
    slug: "caesars-superdome-transportation",
    shortName: "Caesars Superdome",
    badge: "SAINTS & STADIUM EVENTS",
    h1: "Caesars Superdome Game Day & Event Transportation",
    metaTitle: "Caesars Superdome Transportation | Saints Game Day Limo",
    metaDescription:
      "Black car & limo service to Caesars Superdome for Saints games, Sugar Bowl, Essence Fest & stadium concerts. Flat rates, group vans. (877) 609-1919.",
    stats: ["1500 Sugar Bowl Drive", "Saints & stadium events", "Groups up to 13 per van"],
    intro: [
      "On a Saints Sunday, more than 70,000 fans converge on the Caesars Superdome — and every one of them is fighting for the same garages, the same exits, and the same surge-priced rides home. Our private game day and event transportation delivers you to the Dome with a flat rate, a professional chauffeur, and a guaranteed ride out when the final whistle blows.",
      "The Superdome calendar goes far beyond football: the Sugar Bowl, the Bayou Classic, Essence Festival of Culture, monster truck shows, and the biggest stadium concert tours that come through the Gulf South. Whatever the event, the traffic challenge is the same — a compact CBD footprint absorbing stadium-sized crowds. Our chauffeurs work these events all year and know which approach, which drop point, and which exit route actually works at each hour of the day.",
      "We run everything from a sedan for two season-ticket holders to a fleet of Sprinter vans for a corporate tailgate at Champions Square. Start at home, a Metairie office, a French Quarter hotel, or straight off a flight at MSY — your chauffeur handles the rest.",
    ],
    highlights: [
      "Flat rates on Saints Sundays — no game-day surge",
      "Drop-off as close as NOPD event staging allows",
      "Post-game pickup coordinated by text, no rideshare scrum",
      "Sprinter vans keep tailgate groups of up to 13 together",
      "Champions Square and pre-game restaurant stops included on request",
      "Licensed & Insured Carrier",
    ],
    venuesTitle: "Superdome Events We Cover",
    venues: [
      {
        name: "Saints Home Games",
        blurb:
          "Every regular-season and playoff Sunday. Standing season reservations available — same chauffeur, same routine, all 8+ home games.",
      },
      {
        name: "Sugar Bowl & College Football",
        blurb:
          "New Year's bowl crowds are the heaviest of the year. We stage early and route around the Quarter congestion.",
      },
      {
        name: "Essence Festival of Culture",
        blurb:
          "Multi-night Dome events over the July 4th weekend — hourly charters are the popular choice for festival groups.",
      },
      {
        name: "Stadium Concerts",
        blurb:
          "When the biggest tours play the Dome, garages sell out days ahead. A chauffeured drop-off is the only stress-free arrival.",
      },
      {
        name: "Champions Square",
        blurb:
          "Pre-game concerts and outdoor shows on the plaza — we stage on the LaSalle Street side for the fastest walk in.",
      },
      {
        name: "Bayou Classic",
        blurb:
          "Thanksgiving weekend's Grambling–Southern showdown, with group vans running all weekend for alumni parties.",
      },
    ],
    whyTitle: "The Smart Way to Do Game Day",
    whyParagraphs: [
      "Superdome garages charge premium event pricing and open onto streets that turn into parking lots the moment the game ends — it routinely takes 45 minutes just to exit a structure. With a chauffeur, you skip the entire cycle: door-side drop-off on the way in, a short walk to a staged vehicle on the way out, and a cold ride home while everyone else is still honking on Poydras.",
      "Tailgating? Your chauffeur can deliver the group to Champions Square hours early, stow the gear, and return for pickup after the game — nobody in your party has to stay sober-ish to drive the van home. For corporate hosts, a black car for clients is standard practice; we invoice cleanly and run multiple vehicles on synchronized schedules.",
      "We also connect the Dome to Louis Armstrong International. Flying in for the game? We track your flight, meet you at baggage claim, and get you to your hotel or straight to the stadium district. For the full Saints experience, see our dedicated Saints game day service.",
    ],
    faqs: [
      {
        q: "Where do you drop off at the Caesars Superdome?",
        a: "As close to your gate as game-day traffic control permits — typically along Sugar Bowl Drive, Poydras Street, or the LaSalle Street side near Champions Square. Your chauffeur adjusts to NOPD staging on the day.",
      },
      {
        q: "How do we get picked up after a Saints game?",
        a: "Your chauffeur stages nearby in the fourth quarter. Text when you're leaving your seats, walk to the agreed pickup point, and the vehicle meets you — no surge pricing, no 200-person rideshare queue.",
      },
      {
        q: "How much is game day transportation to the Superdome?",
        a: "Flat rates depend on pickup location and vehicle — sedan, Escalade, or Sprinter van. Round trips with post-game pickup are the most popular booking. Call (877) 609-1919 for a quote.",
      },
      {
        q: "Can you transport a tailgate group?",
        a: "Yes. Sprinter vans seat up to 13 with room for coolers and gear, and we can run multiple vans on the same schedule for bigger crews.",
      },
      {
        q: "Do you serve Essence Fest and Sugar Bowl weekends?",
        a: "Every major Dome event, all year. For multi-event weekends like Essence, many clients book an hourly charter so the vehicle stays with them between venues.",
      },
    ],
  },
  {
    slug: "house-of-blues-new-orleans-transportation",
    shortName: "House of Blues",
    badge: "CONCERTS & EVENTS",
    h1: "House of Blues New Orleans Car Service",
    metaTitle: "House of Blues New Orleans Car Service | MSY Limo",
    metaDescription:
      "Private car & limo service to House of Blues New Orleans on Decatur Street. French Quarter drop-offs done right, post-show pickup. (877) 609-1919.",
    stats: ["225 Decatur Street", "French Quarter drop-off", "Gospel Brunch & night shows"],
    intro: [
      "House of Blues New Orleans sits at 225 Decatur Street on the edge of the French Quarter — an intimate room where you can catch a touring act one night and the famous Gospel Brunch the next morning. It's also one of the trickiest venues in the city to drive to: one-way streets, pedestrian crowds, and a Quarter grid that closes without warning. Our chauffeurs handle Decatur Street every week and deliver you to the door, not two blocks away.",
      "Parking near the Quarter is expensive when it exists at all, and rideshare drivers routinely refuse to enter the grid on busy nights, dropping passengers on Canal Street to walk the rest. A reserved chauffeur changes the equation: you're dropped at the venue entrance on Decatur, and after the show your vehicle meets you at a pre-agreed point — no pin-dropping in a crowd of tourists.",
      "We carry date nights to sold-out club shows, birthday groups to the Foundation Room, and Sunday visitors to Gospel Brunch before an afternoon flight out of MSY. Pair the show with dinner in the Quarter or drinks on Frenchmen Street and book the evening as an hourly charter, with the chauffeur and vehicle staying at your disposal all night.",
    ],
    highlights: [
      "Door-front drop-off on Decatur Street whenever the city allows",
      "Chauffeurs who know Quarter closures and one-ways cold",
      "Post-show pickup at a fixed point — no rideshare pin chaos",
      "Hourly charters for dinner + show + Frenchmen Street nights",
      "Gospel Brunch runs with direct MSY airport connections",
      "Licensed & Insured Carrier",
    ],
    venuesTitle: "Nights We Handle at House of Blues",
    venues: [
      {
        name: "Touring Concerts",
        blurb:
          "National acts in a 1,000-capacity room — doors-time drop-off on Decatur so you're inside before the opener.",
      },
      {
        name: "Gospel Brunch",
        blurb:
          "The Sunday institution. We time pickups so you make your seating, and we can run you straight to MSY afterward.",
      },
      {
        name: "Foundation Room Events",
        blurb:
          "Private-club evenings deserve a black car arrival. Your chauffeur waits while you enjoy the room.",
      },
      {
        name: "Dinner + Show Evenings",
        blurb:
          "Start at Antoine's or GW Fins, ride three minutes to the venue, and keep the vehicle on standby with an hourly charter.",
      },
      {
        name: "Bachelor & Bachelorette Groups",
        blurb:
          "Sprinter vans keep the whole party together from the hotel to the show to Bourbon Street and back.",
      },
      {
        name: "MSY Airport Connections",
        blurb:
          "Flying in for a show? We track your flight, drop your bags at the hotel, and continue to Decatur Street.",
      },
    ],
    whyTitle: "Why a Chauffeur Beats Driving to the Quarter",
    whyParagraphs: [
      "The French Quarter was laid out three centuries before the automobile, and it shows. Garages near Decatur charge steep event rates and fill early; street parking is functionally nonexistent; and after the show you'd face a long walk back through late-night crowds. A chauffeured car removes every one of those problems for a flat rate you lock in at booking.",
      "Our chauffeurs work the Quarter daily. They know which blocks are barricaded for second lines and festivals, where NOPD allows passenger loading on Decatur, and how to time a pickup so you're not standing on the curb. As a Licensed & Insured Carrier with professionally trained chauffeurs, we're the ride locals book for the nights that matter.",
    ],
    faqs: [
      {
        q: "Where do you drop off at House of Blues New Orleans?",
        a: "Directly in front of 225 Decatur Street whenever loading is permitted. If the block is closed for an event, your chauffeur drops you at the nearest open corner — always a shorter walk than any garage.",
      },
      {
        q: "How does pickup work after the show?",
        a: "You and your chauffeur agree on a pickup point before the show and stay in touch by text. When you walk out, the vehicle is either waiting or minutes away — no surge pricing, no hunting for a pin in a crowd.",
      },
      {
        q: "Can you take us to Gospel Brunch and then the airport?",
        a: "Yes — it's one of our most popular Sunday runs. We pick you up for brunch, hold your luggage in the vehicle, and continue straight to MSY afterward, timed to your flight.",
      },
      {
        q: "How much is a car service to House of Blues?",
        a: "Flat rates depend on your pickup location and vehicle choice. A round trip with post-show pickup is the most common booking for Quarter shows. Call (877) 609-1919 for an instant quote.",
      },
      {
        q: "Can you handle a group night out?",
        a: "Yes. Escalades seat up to 6 and Sprinter vans up to 13 — ideal for birthday parties and bachelorette groups doing dinner, the show, and a Frenchmen Street nightcap on one hourly charter.",
      },
    ],
  },
  {
    slug: "tulane-university-transportation",
    shortName: "Tulane University",
    badge: "UNIVERSITY TRANSPORTATION",
    h1: "Tulane University Car Service & Transportation",
    metaTitle: "Tulane University Car Service | Uptown Car Service",
    metaDescription:
      "Private car service for Tulane University — move-in, parents weekend, Yulman Stadium game days & graduation. Flat rates. Call (877) 609-1919.",
    stats: ["6823 St. Charles Avenue", "Uptown New Orleans", "Move-in to graduation coverage"],
    intro: [
      "Tulane University sits on St. Charles Avenue in the heart of Uptown New Orleans, a campus that fills with parents, incoming students, and alumni several times a year in ways that overwhelm the streetcar line and the campus's limited visitor parking. Our private car service covers the full academic calendar — move-in day, parents weekend, Yulman Stadium football Saturdays, and graduation — with a flat rate and a chauffeur who knows exactly which campus gate to use.",
      "MSY is roughly 20 to 25 minutes from campus in normal traffic, but move-in weekend and graduation both bring citywide congestion that stretches that drive significantly. We track your flight and plan the pickup around the day's specific traffic pattern rather than a generic estimate, so a loaded SUV full of dorm essentials doesn't sit in gridlock on Claiborne Avenue.",
      "Families flying in from out of state are our most frequent Tulane booking: an airport pickup straight to the dorm on move-in day, a parents-weekend hotel-to-campus shuttle, or a graduation weekend that needs to coordinate multiple arriving flights and a ceremony start time that won't wait.",
    ],
    highlights: [
      "Flat-rate pricing for airport-to-campus and hotel-to-campus transfers",
      "Chauffeurs who know Tulane's gates, loading zones, and move-in traffic patterns",
      "SUVs and Sprinter vans sized for dorm move-in loads",
      "Yulman Stadium game-day drop-off and post-game pickup",
      "Graduation weekend scheduling for multiple arriving family members",
      "Licensed & Insured Carrier",
    ],
    venuesTitle: "Tulane Occasions We Cover",
    venues: [
      {
        name: "Move-In Day",
        blurb: "Airport-to-dorm transfers sized for a car full of boxes, with a chauffeur who knows which residence hall gate to use.",
      },
      {
        name: "Parents Weekend",
        blurb: "Hotel-to-campus shuttles timed around campus events, so families aren't hunting for visitor parking.",
      },
      {
        name: "Yulman Stadium Game Days",
        blurb: "Green Wave football drop-off and post-game pickup without the on-campus parking scramble.",
      },
      {
        name: "Graduation Weekend",
        blurb: "Coordinated pickups for multiple family flights landing the same weekend, timed to the ceremony schedule.",
      },
      {
        name: "Loyola University (Next Door)",
        blurb: "Families visiting both campuses — Tulane and neighboring Loyola — in the same trip, covered on one booking.",
        link: "/loyola-university-transportation",
      },
      {
        name: "Audubon Park & St. Charles Avenue",
        blurb: "A scenic streetcar-line drop-off for visitors who want a walk through the park before or after campus.",
      },
    ],
    whyTitle: "Why Families Book a Chauffeur for Campus Weekends",
    whyParagraphs: [
      "Move-in day and graduation weekend both flood Uptown's narrow residential streets with cars, and campus visitor parking disappears within the first hour. A chauffeur who already knows which loading zone to use and when campus security opens which gate saves real time compared to circling St. Charles Avenue in a rental car.",
      "For graduation and parents weekends with family flying in from multiple cities, coordinating several pickups against one ceremony time is exactly the kind of logistics a dispatcher handles well — and as a Licensed & Insured Carrier, we run multiple vehicles on a synchronized schedule when a family needs it.",
    ],
    faqs: [
      {
        q: "How far is Tulane University from MSY airport?",
        a: "About 20 to 25 minutes in normal traffic via I-10 and Carrollton Avenue or Claiborne Avenue. Move-in and graduation weekends run longer due to citywide congestion, which we plan for in advance.",
      },
      {
        q: "Can you handle a car full of move-in boxes and furniture?",
        a: "Yes. Our Cadillac Escalade SUVs and Mercedes Sprinter vans are the popular choice for move-in day loads, with room for luggage, boxes, and dorm furniture.",
      },
      {
        q: "Do you serve Yulman Stadium on football game days?",
        a: "Yes, with drop-off near the stadium and a coordinated post-game pickup point agreed with your chauffeur by text.",
      },
      {
        q: "Can you coordinate pickups for multiple family members flying in for graduation?",
        a: "Yes. Tell us each flight when you book and we'll run synchronized pickups so everyone reaches the ceremony on time.",
      },
      {
        q: "How much does a car service to Tulane from MSY cost?",
        a: "A flat rate by vehicle class, confirmed before you book, with no surge pricing even on move-in or graduation weekends. Call (877) 609-1919 for an exact quote.",
      },
    ],
  },
  {
    slug: "loyola-university-transportation",
    shortName: "Loyola University",
    badge: "UNIVERSITY TRANSPORTATION",
    h1: "Loyola University New Orleans Car Service",
    metaTitle: "Loyola University New Orleans Car Service | MSY Limo",
    metaDescription:
      "Private car service for Loyola University New Orleans — move-in, family weekend & graduation on St. Charles Avenue. Call (877) 609-1919.",
    stats: ["6363 St. Charles Avenue", "Uptown New Orleans", "Move-in to graduation coverage"],
    intro: [
      "Loyola University New Orleans sits directly beside Tulane on St. Charles Avenue, a Jesuit university whose move-in days, family weekends, and Holy Cross-field graduation ceremonies bring the same wave of visiting families to the same stretch of Uptown. Our chauffeurs cover Loyola on the same flat-rate, flight-tracked standard as every other address we serve.",
      "Because Loyola and Tulane share a campus border, families with students at both schools — or visiting one while touring the other — regularly book us for a single trip that covers both stops. The drive from MSY runs 20 to 25 minutes in normal traffic via I-10 and Carrollton or Claiborne Avenue, longer during move-in and graduation congestion.",
      "We serve the Danna Center and main quad for event drop-offs, the historic Marquette Hall entrance on St. Charles Avenue, and the residential halls that fill with boxes and furniture on move-in weekend.",
    ],
    highlights: [
      "Flat-rate airport-to-campus and hotel-to-campus transfers",
      "Chauffeurs familiar with Loyola's St. Charles Avenue entrances and loading zones",
      "SUVs and Sprinter vans for move-in day loads",
      "Family weekend hotel shuttles timed to campus event schedules",
      "Graduation weekend coordination for multiple arriving flights",
      "Licensed & Insured Carrier",
    ],
    venuesTitle: "Loyola Occasions We Cover",
    venues: [
      {
        name: "Move-In Day",
        blurb: "Airport-to-residence-hall transfers with room for boxes, furniture, and everything a dorm room needs.",
      },
      {
        name: "Family Weekend",
        blurb: "Hotel-to-campus shuttles so visiting families aren't fighting for scarce St. Charles Avenue parking.",
      },
      {
        name: "Graduation at the Humanities Quad",
        blurb: "Coordinated arrivals for family flying in from multiple cities, timed to the ceremony start.",
      },
      {
        name: "Tulane University (Next Door)",
        blurb: "One booking covers both campuses for families with students or tours at each school.",
        link: "/tulane-university-transportation",
      },
      {
        name: "Audubon Park & St. Charles Streetcar Line",
        blurb: "A scenic stop along the historic streetcar route for visitors exploring Uptown.",
      },
      {
        name: "Downtown New Orleans",
        blurb: "A direct ride for family dinners or an evening out after a campus visit.",
      },
    ],
    whyTitle: "Why Book Ahead for Uptown Campus Weekends",
    whyParagraphs: [
      "St. Charles Avenue's visitor parking vanishes fast on move-in and graduation days, and the historic streetcar line, while charming, isn't built for hauling move-in boxes. A reserved chauffeur who knows exactly which Loyola entrance to use saves real time over circling the block in an unfamiliar rental car.",
      "As a Licensed & Insured Carrier, we run coordinated, multi-flight pickups for graduation and family weekends routinely, and we're just as comfortable with a single move-in trip as we are running several vehicles for a large extended family.",
    ],
    faqs: [
      {
        q: "How far is Loyola University from MSY airport?",
        a: "About 20 to 25 minutes in normal traffic, longer during move-in or graduation weekend congestion, which we plan the pickup time around.",
      },
      {
        q: "Can you cover both Loyola and Tulane in one trip?",
        a: "Yes — since the campuses border each other on St. Charles Avenue, many families book a single vehicle to visit both in one outing.",
      },
      {
        q: "Do you handle move-in day loads of boxes and furniture?",
        a: "Yes. Our Cadillac Escalade SUVs and Mercedes Sprinter vans are popular move-in day choices for exactly that reason.",
      },
      {
        q: "Can you coordinate multiple family flights for graduation?",
        a: "Yes. Tell us each flight when you book and we'll schedule synchronized pickups so the whole family reaches the ceremony together.",
      },
      {
        q: "What does a car service to Loyola from MSY cost?",
        a: "A flat rate by vehicle class, confirmed before you book, with no surge pricing on move-in or graduation weekends. Call (877) 609-1919 for an exact quote.",
      },
    ],
  },
  {
    slug: "city-park-nola-transportation",
    shortName: "City Park",
    badge: "PARKS & MUSEUMS",
    h1: "City Park & NOMA Car Service",
    metaTitle: "City Park & NOMA Car Service New Orleans | MSY Limo",
    metaDescription:
      "Private car service to New Orleans City Park, NOMA & the Besthoff Sculpture Garden. Weddings, events & family outings. Call (877) 609-1919.",
    stats: ["1 Palm Drive", "Mid-City New Orleans", "1,300-acre park"],
    intro: [
      "New Orleans City Park is larger than Central Park and holds the New Orleans Museum of Art, the free Sydney and Walda Besthoff Sculpture Garden, Morning Call coffee stand, Big Lake, and the live oaks of the Dueling Oaks grove — a genuinely full day of things to do spread across 1,300 acres that are not easy to navigate without a vehicle. Our chauffeurs handle the drop-offs, waits, and pickups across the park's sprawling layout so your day isn't spent walking between distant lots.",
      "City Park also hosts weddings and private events in its historic Pavilion of the Two Sisters and the NOMA sculpture garden, drawing couples who want the grounds' live oaks and lagoons as a backdrop. We regularly handle wedding party transportation, guest shuttles, and guest pickups timed to a ceremony and reception schedule split across different corners of the park.",
      "The park sits in Mid-City, about 15 to 20 minutes from MSY and a similarly short ride from the French Quarter, making it an easy half-day addition to almost any New Orleans itinerary, whether that's a museum morning, a family picnic, or a holiday visit during Celebration in the Oaks.",
    ],
    highlights: [
      "Door-to-door drop-off across City Park's 1,300-acre layout",
      "Wedding and event transportation to the Pavilion of the Two Sisters",
      "NOMA and Besthoff Sculpture Garden visits timed to your schedule",
      "Seasonal Celebration in the Oaks light-tour transportation",
      "SUVs and Sprinter vans for family outings and group tours",
      "Licensed & Insured Carrier",
    ],
    venuesTitle: "City Park Highlights We Serve",
    venues: [
      {
        name: "New Orleans Museum of Art (NOMA)",
        blurb: "The city's premier art museum, with door-front drop-off instead of a long walk from park overflow lots.",
      },
      {
        name: "Besthoff Sculpture Garden",
        blurb: "The free outdoor sculpture garden beside NOMA, a popular stop paired with a museum visit.",
      },
      {
        name: "Pavilion of the Two Sisters",
        blurb: "A historic event venue inside the park, with wedding and reception transportation coordinated around your timeline.",
      },
      {
        name: "Big Lake & the Dueling Oaks",
        blurb: "Scenic park grounds for photography and family outings, a short walk from convenient drop points.",
      },
      {
        name: "Morning Call & City Putt",
        blurb: "The historic coffee stand and mini-golf course, popular family-day stops within the park.",
      },
      {
        name: "Celebration in the Oaks",
        blurb: "Seasonal holiday light displays each winter, with timed pickup after the evening drive-through or walking tour.",
      },
    ],
    whyTitle: "Why a Chauffeur Makes Sense for City Park",
    whyParagraphs: [
      "City Park's attractions are spread across a property larger than many small towns, and its parking lots fill quickly on weekends, festival days, and throughout the Celebration in the Oaks season. A chauffeur who drops you at the entrance closest to your actual destination — rather than wherever a lot happens to have space — saves real walking time, especially with kids or an evening event outfit.",
      "For weddings at the Pavilion of the Two Sisters, coordinating a wedding party, guest shuttle, and photography stops around the park's lagoons is exactly the kind of multi-stop logistics a dedicated chauffeur handles well. As a Licensed & Insured Carrier, we run everything from a single museum drop-off to a full wedding-day schedule on the same flat-rate basis.",
    ],
    faqs: [
      {
        q: "How far is City Park from MSY airport?",
        a: "About 15 to 20 minutes in normal traffic, making it an easy stop on an arrival or departure day.",
      },
      {
        q: "Can you handle wedding transportation to the Pavilion of the Two Sisters?",
        a: "Yes. We coordinate wedding party transportation, guest shuttles, and photography-stop timing throughout the park on a flat-rate or hourly basis.",
      },
      {
        q: "Do you provide transportation for Celebration in the Oaks?",
        a: "Yes, every holiday season, with pickup timed to your drive-through or walking visit and no parking hassle in the park's busiest month.",
      },
      {
        q: "Can you drop us at NOMA and the sculpture garden separately?",
        a: "Yes. Since both sit close together but the park is large, we can plan drop-off and pickup points that minimize walking for your specific visit.",
      },
      {
        q: "What does transportation to City Park cost?",
        a: "A flat rate by vehicle class and pickup address, confirmed before you book, or hourly service if your visit includes multiple park stops. Call (877) 609-1919 for a quote.",
      },
    ],
  },
  {
    slug: "national-wwii-museum-transportation",
    shortName: "National WWII Museum",
    badge: "MUSEUMS & LANDMARKS",
    h1: "National WWII Museum Car Service",
    metaTitle: "National WWII Museum Car Service | New Orleans Limo",
    metaDescription:
      "Private car service to the National WWII Museum in New Orleans. Hotel pickups, group tours & MSY airport transfers. Call (877) 609-1919.",
    stats: ["945 Magazine Street", "Warehouse District", "Full-day visit typical"],
    intro: [
      "The National WWII Museum anchors the Warehouse District on Magazine Street and ranks among the most-visited museums in the country, drawing visitors who often spend a full day moving between its multiple pavilions, the Boeing Center, and the BB's Stage Door Canteen dinner show. Our chauffeurs handle the drop-off, the wait, and the pickup so a packed museum day doesn't end with a tired walk to a distant parking garage.",
      "The museum sits a short ride from both the French Quarter and most downtown hotels, and visitors frequently pair it with lunch or dinner in the Warehouse District's restaurant row before or after their visit. From MSY, the drive is roughly 20 to 25 minutes, making it an easy first or last stop on an arrival or departure day for history-minded travelers.",
      "We regularly carry veterans' groups, school trips, and family multi-generational visits, along with cruise passengers adding a museum morning before an afternoon Port of New Orleans departure just blocks away.",
    ],
    highlights: [
      "Door-front drop-off on Magazine Street, no distant parking garage walk",
      "Timed pickup coordinated with museum closing or dinner-show schedules",
      "Convenient pairing with Port of New Orleans cruise departures nearby",
      "Group and multi-generational family vehicles up to 13 passengers",
      "Flight tracking for MSY arrivals heading straight to the museum",
      "Licensed & Insured Carrier",
    ],
    venuesTitle: "National WWII Museum Visits We Support",
    venues: [
      {
        name: "Main Campus & Boeing Center",
        blurb: "The museum's core pavilions and the Road to Berlin and Road to Tokyo exhibits, a full-day visit for most guests.",
      },
      {
        name: "BB's Stage Door Canteen",
        blurb: "The museum's dinner-and-show experience, with pickup timed to the evening performance schedule.",
      },
      {
        name: "Warehouse District Dining",
        blurb: "Restaurant row just outside the museum doors, an easy add-on before or after your visit.",
      },
      {
        name: "Port of New Orleans Cruise Terminal",
        blurb: "A short ride away, popular for cruise passengers fitting in a museum morning before boarding.",
      },
      {
        name: "Veterans & School Group Tours",
        blurb: "Coordinated multi-vehicle transportation for larger groups visiting together.",
      },
      {
        name: "French Quarter Hotels",
        blurb: "Direct hotel-to-museum pickups, a few minutes from most Quarter accommodations.",
      },
    ],
    whyTitle: "Why Book a Chauffeur for a Museum Day",
    whyParagraphs: [
      "The National WWII Museum is large enough that a full visit genuinely takes most of a day, and the surrounding Warehouse District parking garages fill fast on weekends and during conventions downtown. A chauffeured drop-off at the door, with a pickup timed to closing time or your dinner-show reservation, removes the only real friction point in an otherwise excellent day.",
      "For veterans' groups and multi-generational families, coordinating one or more vehicles on a synchronized schedule is exactly the kind of planning a dedicated chauffeur service handles well. As a Licensed & Insured Carrier, we quote one flat rate for the visit, whether that's a simple round trip or an hourly booking that adds lunch and a second stop.",
    ],
    faqs: [
      {
        q: "How far is the National WWII Museum from MSY airport?",
        a: "About 20 to 25 minutes in normal traffic, making it an easy stop on an arrival or departure day for history-minded travelers.",
      },
      {
        q: "Can you time a pickup around the BB's Stage Door Canteen show?",
        a: "Yes. Tell us your show time when you book and we'll schedule pickup after the performance ends.",
      },
      {
        q: "Do you handle veterans' groups or school tours?",
        a: "Yes. We coordinate single or multi-vehicle transportation for groups, sized to the party and timed to the tour schedule.",
      },
      {
        q: "Can you combine the museum with a cruise departure?",
        a: "Yes — it's a popular pairing. We can plan a museum morning followed by a drop-off at the Port of New Orleans cruise terminal nearby.",
      },
      {
        q: "What does transportation to the museum cost?",
        a: "A flat rate by vehicle class and pickup address, confirmed before you book, or hourly service for a day that includes other stops. Call (877) 609-1919 for a quote.",
      },
    ],
  },
];

// Every page carries five FAQs (visible block + FAQPage schema).
venues.forEach((p) => {
  p.faqs = ensureFiveFaqs(p.faqs, { slug: p.slug });
});

export const getVenueBySlug = (slug) => venues.find((v) => v.slug === slug);
export const VENUE_SLUGS = venues.map((v) => v.slug);
