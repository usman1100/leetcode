function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    let x = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i > j && (ar[i] + ar[j]) % k === 0) x++;
        }
    }

    return x;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
