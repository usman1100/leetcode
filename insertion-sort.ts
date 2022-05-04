const insertionSort = (arr: number[]): number[] => {
    let j;
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        for (j = i; arr[j] > temp; j--) {
            arr[j + 1] = arr[j];
        }
        // TODO
    }

    return [];
};

const arr = [2, 4, 1, 5, 7, 1, 5, 2, 9, 4, 6, 1, 2, 7];
console.log(insertionSort(arr));
