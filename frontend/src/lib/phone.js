// Phone-number input helpers shared by the booking, inquiry and contact forms.

// Characters allowed while typing: digits plus common phone formatting
// (leading "+", parentheses, dashes, dots, spaces). Letters and everything
// else are dropped so the field never accepts text.
export const sanitizePhone = (value) =>
  String(value ?? "").replace(/[^0-9+()\-.\s]/g, "").replace(/\s{2,}/g, " ").replace(/^\s+/, "");

// Count of actual digits, ignoring formatting characters.
export const phoneDigits = (value) => String(value ?? "").replace(/\D/g, "");

// A usable phone number has 10–15 digits (US local through full E.164).
export const isValidPhone = (value) => {
  const digits = phoneDigits(value);
  return digits.length >= 10 && digits.length <= 15;
};
