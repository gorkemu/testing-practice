export function reverseString(string) {
    if (typeof (string) !== "string") {
        throw new Error("it's not a string");
    }
    let result = "";
    string = string.toLowerCase();
    for (let i = string.length -1 ; i > -1; i--) {
        result += string[i];
    }
    return result;
}