export default function two_crystal_balls(breaks: boolean[]): number {
    // boolean of weather the crystal ball will break or not
    const step_size = Math.sqrt(breaks.length);
    // Binary search over this step size
    let i = step_size;
    for (; i < breaks.length; i += step_size) {
        if (breaks[i]) {
            break;
        }
    }
    // Linear search over the amount that broke
    i -= step_size;
    for (let j = 0; j < step_size && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}

