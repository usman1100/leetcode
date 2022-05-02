function generateMatrix(n: number): number[][] {
    const items = new Array(n).fill("").map((_, i) => i + 1);
    return [items];
    // TODO
}

console.log(generateMatrix(3));
