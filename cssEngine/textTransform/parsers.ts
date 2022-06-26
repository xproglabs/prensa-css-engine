export function generateTextTransform(value) {
  if (!value) return ''
  return `text-transform:${value};`
}