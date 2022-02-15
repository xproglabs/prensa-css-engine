export function generateBoxShadow(value) {
  if (!value) return ''
  return `box-shadow: ${value};`
}