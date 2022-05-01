function repeatedSubstringPattern(s: string): boolean {
    let i = 1;
    while (i * 2 <= s.length) {
        let t = s.length / i;
        let copy = "";
        for (let j = 0; j < t; j++) copy += s.slice(0, i);

        if (copy === s) return true;
        i += 1;
    }
    return false;
}

// COPIED
