import { calculator } from "./calculator";

test("add", () => {
    expect(calculator.add(2, 5)).toBe(7);
});

test("subtract", () => {
    expect(calculator.subtract(2, 5)).toBe(-3);
});

test("divide", () => {
    expect(calculator.divide(4, 2)).toBe(2);
});

test("divide", () => {
    expect(() => { calculator.divide(3, 0) }).toThrow();
});

test("divide", () => {
    expect(() => { calculator.divide(3, 0) }).toThrow("can't divide to 0");
});

test("multiply", () => {
    expect(calculator.multiply(2, 5)).toBe(10);
})

test("not number", () => {
    expect(() => { calculator.add("six", 5) }).toThrow("It's not a number")
})

test("not number", () => {
    expect(() => { calculator.subtract("six", 5) }).toThrow("It's not a number")
})

test("not number", () => {
    expect(() => { calculator.divide("six", 5) }).toThrow("It's not a number")
})

test("not number", () => {
    expect(() => { calculator.multiply("six", 5) }).toThrow("It's not a number")
})