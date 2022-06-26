export function generateLineHeight(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `line-height:${value};`
  if (typeof value === 'number') return `line-height:${value * factor}px;`
}