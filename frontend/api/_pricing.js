// Server-side copy of the instant-quote pricing (CommonJS, shared by the
// payment endpoint). MUST stay in sync with src/lib/pricing.js.
// Underscore prefix: Vercel does not deploy this file as its own function.

const CARD_FEE_RATE = 0.03;
const MAX_MILES = 150;
const AUTO_DISCOUNT_RATE = 0.1;
const SHORT_NOTICE_HOURS = 4;
const SHORT_NOTICE_RATE = 0.2;

// 29 brackets per vehicle: [0–9.9, 10–14.9, 15–19.9, …, 145–150.0]
const PRICING = {
  'Business Sedan': [
    105, 115, 125, 140, 155, 170, 180, 200, 210, 220,
    230, 245, 250, 260, 275, 285, 300, 315, 330, 345,
    360, 375, 390, 405, 425, 440, 455, 470, 490,
  ],
  'Mid-Size SUV': [
    110, 125, 130, 150, 160, 185, 200, 215, 225, 230,
    245, 255, 265, 275, 285, 300, 325, 335, 350, 360,
    375, 390, 405, 420, 450, 465, 480, 490, 510,
  ],
  'Luxury SUV': [
    125, 140, 145, 160, 175, 205, 220, 240, 255, 265,
    280, 290, 300, 320, 345, 365, 385, 405, 420, 445,
    465, 485, 510, 530, 550, 570, 600, 625, 655,
  ],
  'Premium SUV': [
    140, 150, 160, 170, 190, 220, 240, 260, 275, 285,
    305, 315, 330, 350, 370, 395, 425, 430, 450, 470,
    490, 510, 535, 555, 580, 605, 630, 660, 700,
  ],
  'First Class': [
    150, 175, 200, 225, 230, 275, 300, 325, 350, 375,
    400, 425, 450, 475, 500, 525, 550, 575, 600, 625,
    650, 675, 700, 725, 750, 775, 800, 825, 850,
  ],
  'Sprinter Van': [
    250, 285, 320, 355, 390, 425, 460, 495, 530, 565,
    600, 635, 670, 705, 740, 775, 810, 845, 880, 915,
    950, 985, 1020, 1055, 1090, 1125, 1160, 1195, 1230,
  ],
  'Sprinter Executive': [
    300, 340, 380, 420, 480, 500, 540, 580, 620, 660,
    700, 740, 780, 820, 860, 900, 940, 980, 1020, 1060,
    1100, 1140, 1180, 1220, 1260, 1300, 1340, 1380, 1420,
  ],
};

const round2 = (n) => Math.round(n * 100) / 100;

function bracketIndex(miles) {
  if (miles > MAX_MILES) return -1;
  if (miles < 10) return 0;
  return Math.min(28, Math.floor(miles / 5) - 1);
}

/**
 * True when the requested pickup is within SHORT_NOTICE_HOURS of now,
 * evaluated in the business timezone (America/New_York) so the check
 * doesn't depend on the server's clock zone.
 */
function isShortNotice(dateStr, timeStr, timeZone = 'America/New_York') {
  if (!dateStr || !timeStr) return false;
  const dm = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(dateStr));
  const tm = /^(\d{1,2}):(\d{2})/.exec(String(timeStr));
  if (!dm || !tm) return false;
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hour12: false,
  }).formatToParts(new Date());
  const get = (type) => Number(parts.find((p) => p.type === type).value);
  // Compare pickup and "now" as naive local timestamps in the same zone.
  const nowLocal = Date.UTC(get('year'), get('month') - 1, get('day'), get('hour') % 24, get('minute'));
  const pickupLocal = Date.UTC(+dm[1], +dm[2] - 1, +dm[3], +tm[1], +tm[2]);
  return pickupLocal - nowLocal < SHORT_NOTICE_HOURS * 60 * 60 * 1000;
}

/**
 * Same math as the storefront calculator:
 * bracket flat rate -> -10% discount -> +20% short-notice surcharge
 * (when within 4 hours) -> +3% card fee -> total.
 */
function computeQuote(miles, vehicle, shortNotice = false) {
  const brackets = PRICING[vehicle];
  if (!brackets || !Number.isFinite(miles) || miles <= 0) return null;
  if (miles > MAX_MILES) return { overLimit: true, miles: round2(miles) };
  const baseFare = brackets[bracketIndex(miles)];
  const discount = round2(baseFare * AUTO_DISCOUNT_RATE);
  const discounted = round2(baseFare - discount);
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

module.exports = {
  PRICING,
  MAX_MILES,
  CARD_FEE_RATE,
  AUTO_DISCOUNT_RATE,
  SHORT_NOTICE_HOURS,
  SHORT_NOTICE_RATE,
  computeQuote,
  isShortNotice,
};
