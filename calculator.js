export const calculator = {
    add: function (a, b) {
        if (typeof (a) !== "number" || typeof (b) !== "number") {
            throw new Error("It's not a number");
        }
        return a + b;
    },
    subtract: function (a, b) {
        if (typeof (a) !== "number" || typeof (b) !== "number") {
            throw new Error("It's not a number");
        }
        return a - b;
    },
    divide: function (a, b) {
        if (typeof (a) !== "number" || typeof (b) !== "number") {
            throw new Error("It's not a number");
        }
        if (b === 0) {
            throw new Error("can't divide to 0");
        }
        return a / b;
        
    },
    multiply: function (a, b) {
        if (typeof (a) !== "number" || typeof (b) !== "number") {
            throw new Error("It's not a number");
        }
        return a * b;
    }
}