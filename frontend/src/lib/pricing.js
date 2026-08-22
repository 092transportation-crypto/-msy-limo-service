// Point-to-point instant-quote pricing — mileage-bracket rate table.
// Bracket 0 covers 0–9.9 miles; every bracket after is 5 miles wide
// (10–14.9, 15–19.9, … 145–150.0). Trips over 150 miles get a custom quote.

export const CARD_FEE_RATE = 0.03;
export const MAX_MILES = 150;

// Automatic discount applied to every instant quote, before the card fee.
export const AUTO_DISCOUNT_RATE = 0.1;

// Bookings within this many hours of pickup carry a short-notice surcharge,
// applied after the discount and before the card fee.
export const SHORT_NOTICE_HOURS = 4;
export const SHORT_NOTICE_RATE = 0.2;

/** True when the requested pickup is within 4 hours of right now. */
export function isShortNotice(dateStr, timeStr, now = new Date()) {
  if (!dateStr || !timeStr) return false;
  const dm = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);
  const tm = /^(\d{1,2}):(\d{2})/.exec(timeStr);
  if (!dm || !tm) return false;
  const pickup = new Date(+dm[1], +dm[2] - 1, +dm[3], +tm[1], +tm[2]);
  return pickup.getTime() - now.getTime() < SHORT_NOTICE_HOURS * 60 * 60 * 1000;
}

// 29 brackets per vehicle: [0–9.9, 10–14.9, 15–19.9, …, 145–150.0]
export const PRICING = {
  'Business Sedan': {
    model: 'Mercedes E-Class',
    brackets: [
      105, 115, 125, 140, 155, 170, 180, 200, 210, 220,
      230, 245, 250, 260, 275, 285, 300, 315, 330, 345,
      360, 375, 390, 405, 425, 440, 455, 470, 490,
    ],
  },
  'Mid-Size SUV': {
    model: 'Lincoln Nautilus',
    brackets: [
      110, 125, 130, 150, 160, 185, 200, 215, 225, 230,
      245, 255, 265, 275, 285, 300, 325, 335, 350, 360,
      375, 390, 405, 420, 450, 465, 480, 490, 510,
    ],
  },
  'Luxury SUV': {
    model: 'Chevrolet Suburban',
    brackets: [
      125, 140, 145, 160, 175, 205, 220, 240, 255, 265,
      280, 290, 300, 320, 345, 365, 385, 405, 420, 445,
      465, 485, 510, 530, 550, 570, 600, 625, 655,
    ],
  },
  'Premium SUV': {
    model: 'Cadillac Escalade',
    brackets: [
      140, 150, 160, 170, 190, 220, 240, 260, 275, 285,
      305, 315, 330, 350, 370, 395, 425, 430, 450, 470,
      490, 510, 535, 555, 580, 605, 630, 660, 700,
    ],
  },
  'First Class': {
    model: 'BMW 7 Series / Mercedes S-Class',
    brackets: [
      150, 175, 200, 225, 230, 275, 300, 325, 350, 375,
      400, 425, 450, 475, 500, 525, 550, 575, 600, 625,
      650, 675, 700, 725, 750, 775, 800, 825, 850,
    ],
  },
  'Sprinter Van': {
    model: 'Mercedes Sprinter',
    brackets: [
      250, 285, 320, 355, 390, 425, 460, 495, 530, 565,
      600, 635, 670, 705, 740, 775, 810, 845, 880, 915,
      950, 985, 1020, 1055, 1090, 1125, 1160, 1195, 1230,
    ],
  },
  'Sprinter Executive': {
    model: 'Mercedes Sprinter',
    brackets: [
      300, 340, 380, 420, 480, 500, 540, 580, 620, 660,
      700, 740, 780, 820, 860, 900, 940, 980, 1020, 1060,
      1100, 1140, 1180, 1220, 1260, 1300, 1340, 1380, 1420,
    ],
  },
};

const round2 = (n) => Math.round(n * 100) / 100;

export const money = (n) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

/** Bracket index for a mileage, or -1 when past the 150-mile table. */
export function bracketIndex(miles) {
  if (miles > MAX_MILES) return -1;
  if (miles < 10) return 0;
  return Math.min(28, Math.floor(miles / 5) - 1);
}

/**
 * Point-to-point fare from the bracket table.
 * Returns null for unknown vehicles / unusable mileage, and
 * { overLimit: true } for trips beyond 150 miles.
 */
export function computeQuote(miles, vehicle, shortNotice = false) {
  const rates = PRICING[vehicle];
  if (!rates || !Number.isFinite(miles) || miles <= 0) return null;
  if (miles > MAX_MILES) return { overLimit: true, miles: round2(miles) };
  const baseFare = rates.brackets[bracketIndex(miles)];
  // Every instant quote gets the automatic discount; the card fee is
  // charged on the discounted fare.
  const discount = round2(baseFare * AUTO_DISCOUNT_RATE);
  const discounted = round2(baseFare - discount);
  // Short-notice surcharge applies after the discount, before the card fee.
  const surcharge = shortNotice ? round2(discounted * SHORT_NOTICE_RATE) : 0;
  const subtotal = round2(discounted + surcharge);
  const cardFee = round2(subtotal * CARD_FEE_RATE);
  return {
    miles: round2(miles),
    vehicle,
    baseFare,
    discount,
    surcharge,
    cardFee,
    total: round2(subtotal + cardFee),
  };
}
