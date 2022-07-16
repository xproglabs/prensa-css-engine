/**
 * Prensa | margin
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const m = (value: string | number) => ({ margin: value })
/**
 * Prensa | marginTop
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const mt = (value: string | number) => ({ marginTop: value })
/**
 * Prensa | marginRight
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const mr = (value: string | number) => ({ marginRight: value })
/**
 * Prensa | marginBottom
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const mb = (value: string | number) => ({ marginBottom: value })
/**
 * Prensa | marginLeft
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const ml = (value: string | number) => ({ marginLeft: value })
/**
 * Prensa | marginX - marginLeft + marginRight
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const mx = (value: string | number) => ({ marginLeft: value, marginRight: value })
/**
 * Prensa | marginY - marginTop + marginBottom
 * @param value string | number
 * @returns CSS-in-JS property | Object with CSS-in-JS properties
 */
export const my = (value: string | number) => ({ marginTop: value, marginBottom: value })