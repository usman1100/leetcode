function maxSubArray(nums: number[]): number {
    let max = Number.MIN_VALUE;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        console.log(sum);

        max = Math.max(sum, max);
        console.log(max);

        if (sum <= 0) sum = 0;
        console.log(sum);
    }

    return max;
}

console.log(maxSubArray([-2, 3, 4, -2, -9]));
console.log(maxSubArray([1]));
