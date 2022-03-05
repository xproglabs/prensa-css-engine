export function generateHeight(value, factor) {
  if (typeof value === 'string') {
    return `height:${value};`
  }
  if (typeof value === 'number') {
    return `height:${value * factor};`
  }
}