function breakingRecords(scores: number[]): number[] {
    let min = scores[0],
        max = scores[0];

    let min_count = 0,
        max_count = 0;
    scores.forEach((e) => {
        if (e < min) {
            min = e;
            min_count++;
        }

        if (e > max) {
            max = e;
            max_count++;
        }
    });

    return [max_count, min_count];
}

const arr = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
console.log(breakingRecords(arr));
