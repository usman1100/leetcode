function countTrue(arr: boolean[]): number {
    return arr.filter((e) => e).length;
}

console.log(countTrue([false, false, false, false, false]));
