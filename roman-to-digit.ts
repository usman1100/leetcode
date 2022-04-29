function romanToInt(s: string): number {
    const converter = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let digit = 0;
    for (let i = 0; i < s.length; i++) {
        let times = 1;
        let j = i + 1;
        if (j < s.length) {
            while (s[j] === s[i]) {
                times++;
            }
        }

        digit += Number(converter[s[i]]) * times;
    }

    return digit;
}

console.log(romanToInt("III"));
