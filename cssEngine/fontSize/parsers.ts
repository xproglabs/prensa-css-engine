export function generateFontSize(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `font-size:${value};`
  if (typeof value === 'number') return `font-size:${value * factor}px;`
}