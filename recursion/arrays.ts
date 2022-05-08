const maxItem = (arr: number[], index = 0, max = Number.MIN_VALUE): number => {
    if (index === arr.length) return max;

    return maxItem(arr, index + 1, max <= arr[index] ? arr[index] : max);
};

const arr = [1, 2, 3, 4, 5];
console.log(maxItem(arr));
