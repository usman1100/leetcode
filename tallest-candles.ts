function birthdayCakeCandles(candles: number[]): number {
    const largest = candles.reduce((total, curr) => {
        return curr > total ? curr : total;
    }, 0);

    const times = candles.reduce((total, curr) => {
        if (curr === largest) {
            return total + 1;
        }

        return total;
    }, 0);

    return times;
}

console.log(birthdayCakeCandles([23, 5, 12, 33, 5, 5, 33, 5]));
