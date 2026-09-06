/**
 * Regression test: the booking form renders as a plain quote-request form —
 * no instant-quote panel and no Pay & Book — and submits through
 * /api/quote-requests.
 */
import { render, screen, fireEvent } from "@testing-library/react";
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

test("renders the quote-request form without calculator or payment UI", () => {
  render(<InquiryForm />);
  expect(screen.getByTestId("inquiry-form")).toBeTruthy();
  expect(screen.getByTestId("inquiry-submit").textContent).toContain("Request Booking");
  expect(screen.queryByTestId("inquiry-quote-panel")).toBeNull();
  expect(screen.queryByText(/Pay & Book/i)).toBeNull();
  expect(screen.queryByText(/instant quote/i)).toBeNull();
});

test("has separate First Name / Last Name fields and a clearly labeled Phone Number field", () => {
  render(<InquiryForm />);
  const first = screen.getByTestId("inquiry-first-name");
  const last = screen.getByTestId("inquiry-last-name");
  const phone = screen.getByTestId("inquiry-phone");
  expect(screen.getByLabelText(/^First Name/)).toBe(first);
  expect(screen.getByLabelText(/^Last Name/)).toBe(last);
  expect(screen.getByLabelText(/^Phone Number/)).toBe(phone);
  expect(phone.getAttribute("placeholder")).toBe("Phone Number");
  expect(phone.getAttribute("type")).toBe("tel");
  const inputs = [...screen.getByTestId("inquiry-form").querySelectorAll("input")];
  expect(inputs.indexOf(first)).toBe(0);
  expect(inputs.indexOf(last)).toBe(1);
  expect(inputs.indexOf(phone)).toBe(2);
});

test("phone field drops letters and keeps digits", () => {
  render(<InquiryForm />);
  const phone = screen.getByTestId("inquiry-phone");
  fireEvent.change(phone, { target: { value: "John Doe 4a1b0c 555-12x34" } });
  expect(phone.value).toBe("410 555-1234");
});
