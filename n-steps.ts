const nSteps = (n: number): number => {
    if (n <= 2) return n;
    else return nSteps(n - 1) + nSteps(n - 2);
};

console.log(nSteps(122));
