/**
 * Returns a random whole number within range of (original number - scatterBy) to (original number + scatterBy)
 */
export const scatterVisitors = (original: number, scatterBy: number) =>
    Math.floor((2 * Math.random() - 1) * scatterBy + original)
