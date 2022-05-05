function sockMerchant(n: number, ar: number[]): number {
    let map: any = {};

    for (let i = 0; i < n; i++) {
        if (map[ar[i]]) map[ar[i]]++;
        else map[ar[i]] = 1;
    }

    let pairs = 0;

    for (const counter in map) {
        if (map[counter] >= 2) {
            let x = map[counter];
            while (x >= 2) {
                pairs++;
                x /= 2;
            }
        }
    }
    console.log(map);

    return pairs;
}

const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(arr.length, arr));
