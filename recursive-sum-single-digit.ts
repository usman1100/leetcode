const recursiveSum = (n: number): number => {
    if (n < 10) return n;
    let temp = n;
    let res = 0;
    while (temp > 0) {
        res += temp % 10;

        temp = Math.trunc(temp / 10);
    }

    return recursiveSum(res);
};

const digitalRoot = (n: number): number =>
    n < 10 ? n : digitalRoot((n % 10) + digitalRoot(Math.trunc(n / 10)));

// def digital_root(n):
//     if n<10 :
//          return n
//     return digital_root( n%10 + digital_root( n//10 ) )

const n = 2342;

console.log(recursiveSum(n));
console.log(digitalRoot(n));
