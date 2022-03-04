import { divide } from "../functions/divide";

test("Expect 6 divide 3 equals 2", () => {
  let a = 6;
  let b = 3;
  let result = 2;
  expect(divide(a, b)).toBe(result)
})