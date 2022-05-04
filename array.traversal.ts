const arr = [1, 2, 3, 4, 5, 6];

const traverse = (arr: number[], size: number): any => {
    if (size < 0) return 0;
    console.log(arr[size]);

    return traverse(arr, size - 1);
};

traverse(arr, arr.length - 1);
