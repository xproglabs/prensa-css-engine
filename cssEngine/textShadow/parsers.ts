export function generateTextTransform(value) {
  if (!value) return ''
  return `text-shadow:${value};`
}