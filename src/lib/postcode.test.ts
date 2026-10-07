import { isValidUkPostcode } from "./postcode";

test("accepts a valid postcode in capitals", () => {
  expect(isValidUkPostcode("NE61 1AA")).toBe(true);
});

test("accepts a lowercase postcode with extra spaces", () => {
  expect(isValidUkPostcode(" se61 8ad ")).toBe(true);
});

test("rejects random text", () => {
  expect(isValidUkPostcode("Hello")).toBe(false);
});

test("rejects a string of only spaces", () => {
  expect(isValidUkPostcode(" ")).toBe(false);
});
