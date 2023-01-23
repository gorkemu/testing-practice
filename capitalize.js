export function capitalize(string) {
    if (typeof (string) !== "string") {
        throw new Error("it's not a string");
    }
    return string[0].toUpperCase() + string.substring(1)
};