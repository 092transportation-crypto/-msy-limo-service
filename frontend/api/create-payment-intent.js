// Vercel serverless function: creates a Stripe PaymentIntent for an instant
// quote. The fare is recomputed SERVER-SIDE from miles + vehicle + pickup
// time (bracket rate -> 10% discount -> 20% short-notice surcharge -> 3%
// card fee), so the client can never tamper with the charged amount.
//
// All five limo sites share the same STRIPE_SECRET_KEY /
// NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, so every payment lands in one Stripe
// dashboard; the `site` metadata says which storefront it came from.

const { computeQuote, isShortNotice } = require('./_pricing.js');

const SITE_NAME = 'msylimoservice.com';

const clip = (v, max) => String(v ?? '').trim().slice(0, max);

module.exports = async (req, res) => {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const pk =
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ||
    process.env.STRIPE_PUBLISHABLE_KEY;

  // GET: hand the client the publishable key so the card field can mount.
  if (req.method === 'GET') {
    if (!secretKey || !pk) {
      return res.status(503).json({ success: false, message: 'Payments not configured' });
    }
    return res.status(200).json({ success: true, publishableKey: pk });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const publishableKey = pk;
  if (!secretKey || !publishableKey) {
    return res.status(503).json({
      success: false,
      message: 'Online payment isn\'t available yet — submit the form below and we\'ll follow up with your quote.',
    });
  }

  const body = typeof req.body === 'object' && req.body !== null ? req.body : {};
  const miles = Number(body.miles);
  const vehicle = clip(body.vehicle, 40);
  const pickupDate = clip(body.pickupDate, 20);
  const pickupTime = clip(body.pickupTime, 20);
  const pickup = clip(body.pickup, 300);
  const dropoff = clip(body.dropoff, 300);

  if (!Number.isFinite(miles) || miles <= 0 || !vehicle) {
    return res.status(400).json({ success: false, message: 'Missing trip details.' });
  }
  if (!pickupDate || !pickupTime) {
    return res.status(400).json({ success: false, message: 'Pickup date and time are required.' });
  }

  const shortNotice = isShortNotice(pickupDate, pickupTime);
  const quote = computeQuote(miles, vehicle, shortNotice);
  if (!quote || quote.overLimit) {
    return res.status(400).json({
      success: false,
      message: quote && quote.overLimit
        ? 'Trips over 150 miles need a custom quote.'
        : 'That vehicle has no instant pricing.',
    });
  }

  try {
    // eslint-disable-next-line global-require
    const stripe = require('stripe')(secretKey);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(quote.total * 100),
      currency: 'usd',
      payment_method_types: ['card'],
      description: `${SITE_NAME} — ${vehicle} — ${quote.miles} mi — ${pickupDate} ${pickupTime}`,
      metadata: {
        site: SITE_NAME,
        vehicle,
        miles: String(quote.miles),
        pickup: pickup.slice(0, 480),
        dropoff: dropoff.slice(0, 480),
        pickup_date: pickupDate,
        pickup_time: pickupTime,
        base_fare: String(quote.baseFare),
        discount: String(quote.discount),
        surcharge: String(quote.surcharge),
        card_fee: String(quote.cardFee),
      },
    });
    return res.status(200).json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      publishableKey,
      quote,
    });
  } catch (err) {
    console.error('create-payment-intent failed:', err.message);
    return res.status(502).json({
      success: false,
      message: 'Could not start the payment. Please try again or submit the form below.',
    });
  }
};
