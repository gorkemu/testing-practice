import { reverseString } from "./reverseString";

test("reverseString", () => {
    expect(reverseString("gorkem")).toBe("mekrog");
})

test("is string", () => {
    expect(() => { reverseString(["gorkem"]) }).toThrow();
})

test("is lowercase", () => {
    expect(reverseString("Gorkem")).toBe("mekrog");
})