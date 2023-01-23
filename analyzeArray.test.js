import { analyzeArray } from "./analyzeArray";

test("analyze", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
});

test("is array", () => {
    expect(() => { analyzeArray(1,2,3,4,5) }).toThrow();
});

test("does contain only number", () => {
    expect(() => { analyzeArray([1, 2, '3', 4, 5]) }).toThrow();
})