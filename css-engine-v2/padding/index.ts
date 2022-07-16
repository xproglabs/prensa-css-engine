/**
 * Prensa | padding
 * @param value string | number
 * @returns CSS-in-JS property
 */
export const p = (value: string | number) => ({ padding: value })
/**
 * Prensa | paddingTop
 * @param value string | number
 * @returns CSS-in-JS property
 */
export const pt = (value: string | number) => ({ paddingTop: value })
/**
 * Prensa | paddingRight
 * @param value string | number
 * @returns CSS-in-JS property
 */
export const pr = (value: string | number) => ({ paddingRight: value })
/**
 * Prensa | paddingBottom
 * @param value string | number
 * @returns CSS-in-JS property
 */
export const pb = (value: string | number) => ({ paddingBottom: value })
/**
 * Prensa | paddingLeft
 * @param value string | number
 * @returns CSS-in-JS property
 */
export const pl = (value: string | number) => ({ paddingLeft: value })
/**
 * Prensa | paddingX - paddingLeft + paddingRight
 * @param value string | number
 * @returns CSS-in-JS property
 */
export const px = (value: string | number) => ({ paddingLeft: value, paddingRight: value })
/**
 * Prensa | paddingY - paddingTop + paddingBottom
 * @param value string | number
 * @returns CSS-in-JS property
 */
export const py = (value: string | number) => ({ paddingTop: value, paddingBottom: value })