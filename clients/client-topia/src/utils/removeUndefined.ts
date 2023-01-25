/**
 * Parses object, removes keys with undefined value, and returns clean object.
 */
export const removeUndefined = (obj: { [key: string]: any }) => {
    Object.keys(obj).filter(k => obj[k] === undefined).forEach(k => delete obj[k])
    return obj
}
