const rSum = (n: number): number => {
    if (n <= 1) return n;
    else return n + rSum(n - 1);
};

console.log(rSum(123));
