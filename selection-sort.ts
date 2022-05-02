const selectionSort = (arr: number[]): number[] => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) minIndex = j;
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
};

const n = 10;
// create an array of n random numbers between 1 and 1000
const arr = Array.from(
    { length: n },
    () => Math.floor(Math.random() * 1000) + 1
);

console.log(arr);

console.log(selectionSort(arr));
