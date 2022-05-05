function num_of_digits(num: number): number {
    if (num < 10 && num > 0) return 1;
    if (num === 0) return 1;
    if (num < 0) num = num * -1;

    let count = 0;
    while (Math.floor(num) !== 0) {
        num /= 10;
        count++;
    }
    return count;
}

console.log(num_of_digits(121));
