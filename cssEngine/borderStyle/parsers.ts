export function generateBST(value) {
  if (!value) return ''
  return `border-top-style: ${value};`
}
export function generateBSR(value) {
  if (!value) return ''
  return `border-right-style: ${value};`
}
export function generateBSB(value) {
  if (!value) return ''
  return `border-bottom-style: ${value};`
}
export function generateBSL(value) {
  if (!value) return ''
  return `border-left-style: ${value};`
}
export function generateBSX(value) {
  if (!value) return ''
  return `
    border-left-style: ${value};
    border-right-style: ${value};
  `
}
export function generateBSY(value) {
  if (!value) return ''
  return `
    border-top-style: ${value};
    border-bottom-style: ${value};
  `
}
export function generateBS(value) {
  if (!value) return ''
  return `
    border-top-style: ${value};
    border-right-style: ${value};
    border-bottom-style: ${value};
    border-left-style: ${value};
  `
}
export function generateBorderStyle(value) {
  return `border-style: ${value};`
}