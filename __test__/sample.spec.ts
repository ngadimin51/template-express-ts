import { sum } from "../src/sample";

describe("This is a simple test", () => {
  test("Check the sum function", () => {
    const actual = sum(2, 7);
    // debugger
    expect(actual).toEqual(`a + b is 9`);
  });
});
