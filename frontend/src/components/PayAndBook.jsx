import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { money } from '@/lib/pricing';
import { CreditCard, Loader2, Lock, CheckCircle2 } from 'lucide-react';

// "Pay & Book Now" — charges the exact server-verified instant-quote total
// through the shared Stripe account, then files the booking through the
// site's existing quote-request backend so the notification email fires
// with a PAID tag.

const SITE_NAME = 'msylimoservice.com';

const CARD_STYLE = {
  style: {
    base: {
      color: '#ffffff',
      fontSize: '15px',
      fontFamily: 'inherit',
      '::placeholder': { color: 'rgba(255,255,255,0.4)' },
    },
    invalid: { color: '#f87171' },
  },
};

const fieldCls =
  'block w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/40 transition-colors duration-300 focus:border-[#f59e0b] focus:outline-none focus:ring-1 focus:ring-[#f59e0b]/60';

function quoteLines(quote) {
  const lines = [
    `Flat rate (${quote.vehicle}, ${quote.miles} mi): $${quote.baseFare.toFixed(2)}`,
    `Instant booking discount (10%): -$${quote.discount.toFixed(2)}`,
  ];
  if (quote.surcharge > 0) {
    lines.push(`Short-notice surcharge (20%): +$${quote.surcharge.toFixed(2)}`);
  }
  lines.push(`Card processing fee (3%): $${quote.cardFee.toFixed(2)}`);
  lines.push(`TOTAL CHARGED: $${quote.total.toFixed(2)}`);
  return lines.join('\n');
}

function CardForm({ clientSecret, quote, meta, onPaid }) {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState('');

  const pay = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError('Name, email and phone are required.');
      return;
    }
    setPaying(true);
    setError('');
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: { name: name.trim(), email: email.trim(), phone: phone.trim() },
      },
    });
    if (result.error) {
      setError(result.error.message || 'Payment failed. Try another card.');
      setPaying(false);
      return;
    }

    // Payment succeeded — file the booking through the existing backend so
    // the notification email fires, tagged PAID with the amount charged.
    const details = [
      '✅ PAID ONLINE via Stripe',
      `Amount charged: $${quote.total.toFixed(2)}`,
      `Site: ${SITE_NAME}`,
      `PaymentIntent: ${result.paymentIntent.id}`,
      '',
      quoteLines(quote),
    ].join('\n');
    const payload = {
      name: name.trim(),
      full_name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      preferred_contact: 'Phone',
      contact_method: 'Phone',
      service_type: 'Point-to-Point — PAID ONLINE',
      serviceType: 'Point-to-Point — PAID ONLINE',
      vehicle_type: meta.vehicle,
      pickup_location: meta.pickup,
      dropoff_location: meta.dropoff,
      pickupLocation: meta.pickup,
      dropoffLocation: meta.dropoff,
      date: meta.pickupDate,
      time: meta.pickupTime,
      pickup_date: meta.pickupDate,
      pickup_time: meta.pickupTime,
      passengers: '1',
      message: details,
      notes: details,
      additional_details: details,
      source: `${SITE_NAME} — PAID`,
    };
    try {
      await fetch('/api/quote-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      // Payment already captured — dispatch still sees it in Stripe.
    }
    onPaid(result.paymentIntent.id);
  };

  return (
    <form onSubmit={pay} className="mt-4 space-y-3" data-testid="pay-form">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          className={fieldCls}
          placeholder="Full name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-testid="pay-name"
        />
        <input
          className={fieldCls}
          type="tel"
          placeholder="Phone"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          data-testid="pay-phone"
        />
        <input
          className={`${fieldCls} sm:col-span-2`}
          type="email"
          placeholder="Email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          data-testid="pay-email"
        />
      </div>
      <div className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3.5">
        <CardElement options={CARD_STYLE} />
      </div>
      {error && <p className="text-sm text-red-400" data-testid="pay-error">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || paying}
        data-testid="pay-submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#f59e0b] py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-black transition-transform duration-200 hover:scale-[1.015] active:scale-[0.99] disabled:opacity-60"
      >
        {paying ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Processing…
          </>
        ) : (
          <>
            <Lock className="h-4 w-4" /> Pay {money(quote.total)} &amp; Book
          </>
        )}
      </button>
      <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-white/40">
        <Lock className="h-3 w-3" /> Secure payment by Stripe — charged exactly {money(quote.total)}.
      </p>
    </form>
  );
}

export default function PayAndBook({ quote, meta }) {
  // idle | starting | ready | paid
  const [state, setState] = useState('idle');
  const [session, setSession] = useState(null);
  const [stripePromise, setStripePromise] = useState(null);
  const [error, setError] = useState('');
  const [paymentId, setPaymentId] = useState('');

  const hasDateTime = Boolean(meta.pickupDate && meta.pickupTime);

  const start = async () => {
    setState('starting');
    setError('');
    try {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          miles: meta.miles,
          vehicle: meta.vehicle,
          pickup: meta.pickup,
          dropoff: meta.dropoff,
          pickupDate: meta.pickupDate,
          pickupTime: meta.pickupTime,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Could not start payment.');
      }
      setSession(data);
      setStripePromise(loadStripe(data.publishableKey));
      setState('ready');
    } catch (err) {
      setError(err.message || 'Could not start payment.');
      setState('idle');
    }
  };

  if (state === 'paid') {
    return (
      <div
        className="mt-4 rounded-xl border border-emerald-500/40 bg-emerald-500/[0.08] p-5 text-center"
        data-testid="pay-success"
      >
        <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-emerald-400" />
        <p className="font-bold text-white">Payment received — you&apos;re booked!</p>
        <p className="mt-1 text-sm text-white/60">
          A reservation specialist will confirm your ride shortly. Reference:{' '}
          <span className="break-all text-white/80">{paymentId}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4" data-testid="pay-and-book">
      {state !== 'ready' && (
        <>
          <button
            type="button"
            onClick={start}
            disabled={state === 'starting' || !hasDateTime}
            data-testid="pay-book-btn"
            className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#f59e0b] bg-transparent py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#f59e0b] transition-colors duration-300 hover:bg-[#f59e0b] hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
          >
            {state === 'starting' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Starting secure checkout…
              </>
            ) : (
              <>
                <CreditCard className="h-4 w-4" /> Pay &amp; Book Now — {money(quote.total)}
              </>
            )}
          </button>
          {!hasDateTime && (
            <p className="mt-2 text-center text-[11px] text-white/40">
              Select your pickup date &amp; time above to pay online.
            </p>
          )}
          {error && (
            <p className="mt-2 text-center text-sm text-red-400" data-testid="pay-start-error">
              {error}
            </p>
          )}
        </>
      )}
      {state === 'ready' && session && stripePromise && (
        <Elements stripe={stripePromise}>
          <CardForm
            clientSecret={session.clientSecret}
            quote={session.quote}
            meta={meta}
            onPaid={(id) => {
              setPaymentId(id);
              setState('paid');
            }}
          />
        </Elements>
      )}
    </div>
  );
}
