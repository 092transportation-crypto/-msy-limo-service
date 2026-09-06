import { sanitizePhone, isValidPhone } from "./phone";

test("sanitizePhone strips letters and other text", () => {
  expect(sanitizePhone("abc")).toBe("");
  expect(sanitizePhone("(877) 609-1919")).toBe("(877) 609-1919");
  expect(sanitizePhone("+1 877.609.1919 ext")).toBe("+1 877.609.1919 ");
  expect(sanitizePhone("John Smith")).toBe("");
});

test("isValidPhone requires 10–15 digits", () => {
  expect(isValidPhone("877-609-1919")).toBe(true);
  expect(isValidPhone("+1 (877) 609-1919")).toBe(true);
  expect(isValidPhone("12345")).toBe(false);
  expect(isValidPhone("")).toBe(false);
});
