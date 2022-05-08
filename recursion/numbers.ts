const printNumbers = (limit: number) => {
    if (limit > 0) {
        printNumbers(limit - 1);
        console.log(limit);
    }
};

const nSum = (limit: number, sum = 0): number => {
    if (limit === 0) return sum;
    return nSum(limit - 1, sum + limit);
};

const nDigitSum = (limit: number, sum = 0): number => {
    if (limit <= 0) return sum;

    const newLimit = Math.floor(limit / 10);
    const digit = Math.floor(limit % 10);

    return nDigitSum(newLimit, sum + digit);
};

const countDigits = (num: number, digits = 0): number => {
    if (num <= 0) return digits;

    return countDigits(Math.floor(num / 10), digits + 1);
};

console.log(countDigits(2));
