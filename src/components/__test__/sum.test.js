import { sum } from "../sum";

test("should calculate the sum of two numbers a and b", () => {
  const result = sum(4, 3);

  //Assertion
  expect(result).toBe(7);
});
