function plusOne(digits: number[]): number[] {
    const last = digits.at(-1);

    let res = null;

    if (last === 9) {
        res = digits.map((e, i) => {
            if (i === digits.length - 2) return e + 1;
            else if (i === digits.length - 1) return 0;
            return e;
        });
    } else {
        res = digits.map((e, i) => {
            return i === digits.length - 1 ? e + 1 : e;
        });
    }

    if (res[1] === 9) {
        res = [1, ...res.slice(1, res.length - 1), 0];
    }

    return res;
}

console.log(plusOne([9, 2, 9]));
