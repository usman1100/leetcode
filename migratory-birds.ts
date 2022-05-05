function migratoryBirds(arr: number[]): number {
    let map: any = {};

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) map[arr[i]]++;
        else map[arr[i]] = 1;
    }

    let max = 0;
    for (const bird in map) {
        console.log(bird);

        if (map[bird] > max) max = Number(bird);
    }

    return max;
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
