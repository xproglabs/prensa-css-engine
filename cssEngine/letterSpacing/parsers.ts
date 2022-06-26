export function generateLetterSpacing(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `letter-spacing:${value};`
  if (typeof value === 'number') return `letter-spacing:${value * factor}px;`
}