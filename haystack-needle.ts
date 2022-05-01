function strStr(haystack: string, needle: string): number {
    if (haystack.length < needle.length) return -1;

    if (needle.length === 0) return 0;

    const needleSize = needle.length;

    for (let i = 0; i < haystack.length; i++) {
        if (needle === haystack.slice(i, i + needleSize)) return i;
    }

    return -1;
}

console.log(strStr("hello", "ll"));
// h e l l o
// l l l
