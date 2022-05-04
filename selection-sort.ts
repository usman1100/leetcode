const selectionSort = (arr: number[]): number[] => {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];

        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
};

const n = 5;
const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 10) + 1);

console.log(arr);
console.log(selectionSort(arr));
