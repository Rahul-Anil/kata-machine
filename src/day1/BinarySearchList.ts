export default function bs_list(haystack: number[], needle: number): boolean {
    let l: number = 0
    let h: number = haystack.length

    while (l < h) {
        const mid = Math.floor((l + (h - l) / 2));
        if (haystack[mid] === needle) {
            return true;
        } else if (haystack[mid] > needle) {
            h = mid;
        } else {
            l = mid + 1;
        }
    }
    return false;
}