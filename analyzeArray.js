export function analyzeArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("It's not an array");
    }
    const sum = arr.reduce((a, b) => a + b, 0);
    const avg = (sum / arr.length) || 0;
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const length = arr.length;
    return {
        average: avg,
        min: min,
        max: max,
        length: length
    }
}