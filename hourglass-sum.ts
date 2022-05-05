function hourglassSum(arr: number[][]): number {
    let rows = arr.length - 2;
    let cols = arr[0].length - 2;

    let max = Number.MIN_VALUE;

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const sum =
                arr[i][i] +
                arr[i][j + 1] +
                arr[i][j + 2] +
                arr[i + 1][j + 1] +
                arr[i + 2][j] +
                arr[i + 2][j + 1] +
                arr[i + 2][j + 2];
            if (sum > max) max = sum;
        }
    }

    return max;
}

const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(arr));
