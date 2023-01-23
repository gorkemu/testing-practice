import { capitalize } from "./capitalize";

test("capitalize", () => {
    expect(capitalize("gorkem")).toBe("Gorkem");
});

test("capitalize", () => {
    expect(capitalize("/index.html")).toBe("/index.html");
});

test("is string", () => {
    expect(() => { capitalize(69) }).toThrow();
})
