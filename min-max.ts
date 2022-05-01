const minMaxSum = (arr: number[]): void => {
    let min = null;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;

        const sp = arr.filter((_, index: number) => index !== i);

        sum = sp.reduce((total, num) => total + num);

        if (!min || sum < min) min = sum;

        if (sum > max) max = sum;
    }

    console.log(`${min} ${max}`);
};

minMaxSum([1, 2, 3]);
