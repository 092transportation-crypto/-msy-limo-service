/**
 * Regression test for the blank /booking page: the unified form must render
 * even when Stripe isn't configured (the GET publishable-key probe 503s).
 * The original bug called useStripe() outside an <Elements> provider, which
 * threw during render and blanked the whole lazy-loaded route.
 */
import { render, screen, waitFor } from "@testing-library/react";
import InquiryForm from "./InquiryForm";

// jsdom is missing a few browser APIs framer-motion touches.
beforeAll(() => {
  window.IntersectionObserver =
    window.IntersectionObserver ||
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  window.matchMedia =
    window.matchMedia ||
    (() => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }));
  Element.prototype.scrollIntoView = Element.prototype.scrollIntoView || (() => {});
});

beforeEach(() => {
  // Production state today: payments not configured -> 503 on the key probe.
  global.fetch = jest.fn((url) => {
    if (String(url).includes("create-payment-intent")) {
      return Promise.resolve({
        ok: false,
        status: 503,
        json: () => Promise.resolve({ success: false, message: "Payments not configured" }),
      });
    }
    return Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ success: true }),
    });
  });
});

test("renders the unified form when payments are not configured", async () => {
  render(<InquiryForm />);

  // The wrapper renders null until the key probe resolves — wait for the form.
  await waitFor(() => expect(screen.getByTestId("inquiry-form")).toBeTruthy());

  // Field order essentials all present
  expect(screen.getByTestId("inquiry-vehicle-business-sedan")).toBeTruthy();
  expect(screen.getByTestId("inquiry-pickup")).toBeTruthy();
  expect(screen.getByTestId("inquiry-dropoff")).toBeTruthy();
  expect(screen.getByTestId("inquiry-quote-panel")).toBeTruthy();
  expect(screen.getByTestId("inquiry-service-airport-transfer")).toBeTruthy();
  expect(screen.getByTestId("inquiry-name")).toBeTruthy();
  expect(screen.getByTestId("inquiry-sms-consent")).toBeTruthy();

  // Custom-quote flow button (no instant price yet, payments off)
  expect(screen.getByTestId("inquiry-submit").textContent).toContain("Request Booking");

  // Trust line
  expect(
    screen.getByText(/We respond within 15 minutes\. We never share your info\./)
  ).toBeTruthy();
});
