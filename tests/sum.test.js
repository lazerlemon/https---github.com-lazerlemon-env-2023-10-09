import sum from "./sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("wrong test", () => {
  sum(1, 2);
  expect(sum(1, 2)).toBe(3);
});
