// Tops a page's FAQ list up to five questions from a pool of policy answers
// that are true for every trip (waiting time, cancellation, car seats, flight
// delays, payment). The pool is rotated by slug so neighbouring pages don't all
// get the same extra question, and a topic is skipped when the page already
// answers it. Policy numbers mirror the Terms page — change them together.
const POOL = [
  {
    topic: /wait/i,
    q: (n) => `How much waiting time is included${n ? ` on ${n} trips` : ''}?`,
    a: 'Airport pickups include 45 minutes of complimentary waiting time on domestic arrivals and 60 minutes on international arrivals, timed from actual touchdown. All other pickups include 15 minutes.',
  },
  {
    topic: /cancel/i,
    q: () => 'What is the cancellation policy?',
    a: 'Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings cancel free of charge up to 12 hours before pickup.',
  },
  {
    topic: /car seat|child|kids/i,
    q: () => 'Can you provide child car seats?',
    a: 'Yes. Infant, convertible and booster seats are available on request — tell us the child\'s age when you book and the seat is installed before the vehicle arrives.',
  },
  {
    topic: /delay|late|flight track/i,
    q: () => 'What happens if my flight is delayed?',
    a: 'Every airport pickup is flight-tracked, so your chauffeur is dispatched against the actual arrival time rather than the schedule. You never need to call from the tarmac.',
  },
  {
    topic: /pay|charge|card|price|cost|rate/i,
    q: () => 'When is my card charged?',
    a: 'Your flat rate is confirmed before you book, and your card is charged only after the reservation and the rate are confirmed with you — never at the time of the online request.',
  },
];

const hash = (s) => [...String(s || '')].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

// keys: [questionKey, answerKey] used by the page's FAQ objects.
export const ensureFiveFaqs = (faqs, { slug = '', name = '', keys = ['q', 'a'] } = {}) => {
  const [qk, ak] = keys;
  const out = [...(faqs || [])];
  const start = hash(slug) % POOL.length;
  for (let i = 0; i < POOL.length && out.length < 5; i++) {
    const item = POOL[(start + i) % POOL.length];
    if (out.some((f) => item.topic.test(f[qk]))) continue;
    out.push({ [qk]: item.q(name), [ak]: item.a });
  }
  return out;
};
