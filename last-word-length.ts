function lengthOfLastWord(s: string): number {
    return s
        .split(/(\s+)/)
        .map((e) => e.trim())
        .filter((e) => e)
        .at(-1)?.length as number;
}

console.log(lengthOfLastWord("luffy is still joyboy"));
