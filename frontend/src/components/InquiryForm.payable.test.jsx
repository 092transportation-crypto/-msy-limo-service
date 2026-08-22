/**
 * Regression: with Stripe keys configured (publishable-key probe succeeds)
 * and a priced route entered, the submit button becomes "Pay & Book Now"
 * for the exact bracket total. Proves the vehicle -> distance -> price ->
 * payable chain end to end.
 */
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import InquiryForm from "./InquiryForm";

beforeAll(() => {
  window.IntersectionObserver = window.IntersectionObserver || class { observe(){} unobserve(){} disconnect(){} };
  window.matchMedia = window.matchMedia || (() => ({ matches:false, addListener(){}, removeListener(){}, addEventListener(){}, removeEventListener(){} }));
  Element.prototype.scrollIntoView = Element.prototype.scrollIntoView || (() => {});
});

test("shows Pay & Book Now for the exact total when payments are configured", async () => {
  global.fetch = jest.fn((url, opts) => {
    if (String(url).includes("create-payment-intent") && (!opts || !opts.method || opts.method === "GET")) {
      return Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve({ success: true, publishableKey: "pk_test_TRACE" }) });
    }
    if (String(url).includes("/api/distance")) {
      return Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve({ success: true, miles: 23, source: "osrm" }) });
    }
    return Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve({ success: true }) });
  });

  render(<InquiryForm />);
  await waitFor(() => expect(screen.getByTestId("inquiry-form")).toBeTruthy());

  fireEvent.click(screen.getByTestId("inquiry-vehicle-midsize-suv"));

  fireEvent.change(screen.getByTestId("inquiry-pickup"), { target: { value: "Union Station, Washington, DC" } });
  fireEvent.change(screen.getByTestId("inquiry-dropoff"), { target: { value: "Bethesda, MD" } });

  // real 800ms debounce -> allow time for distance + quote render
  await waitFor(() => expect(screen.getByTestId("inquiry-quote-total")).toBeTruthy(), {
    timeout: 4000,
  });
  const total = screen.getByTestId("inquiry-quote-total").textContent;
  // 23mi Mid-Size SUV: $150 - $15 discount = $135 + $4.05 fee = $139.05
  expect(total).toContain("139.05");

  const btn = screen.getByTestId("inquiry-submit").textContent;
  expect(btn).toContain("Pay & Book Now");
});
