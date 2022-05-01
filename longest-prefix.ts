const longestCommonPrefix = (arr: string[]) => {
    arr.sort((i, j) => i.length - j.length);

    let pre = "";
    const comp = arr[0];
    for (let i = 0; i < comp.length; i++) {
        let done = false;
        for (let j = 1; j < arr.length; j++) {
            if (arr[j][i] !== comp[i]) done = true;
        }
        if (done) break;
        pre += comp[i];
    }

    return pre;
};

const items = ["cir", "car", "floight"];
console.log(longestCommonPrefix(items));
