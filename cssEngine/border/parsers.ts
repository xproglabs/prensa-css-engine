import { findColorValue } from '../color/parsers'

export function generateBT(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `border-top-width: ${value};`
  if (typeof value === 'number') return `border-top-width: ${value * factor}px;`
}
export function generateBR(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `border-right-width: ${value};`
  if (typeof value === 'number') return `border-right-width: ${value * factor}px;`
}
export function generateBB(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `border-bottom-width: ${value};`
  if (typeof value === 'number') return `border-bottom-width: ${value * factor}px;`
}
export function generateBL(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `border-left-width: ${value};`
  if (typeof value === 'number') return `border-left-width: ${value * factor}px;`
}
export function generateBX(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `
    border-left-width: ${value};
    border-right-width: ${value};
  `
  if (typeof value === 'number') return `
    border-left-width: ${value * factor}px;
    border-right-width: ${value * factor}px;
  `
}
export function generateBY(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `
    border-top-width: ${value};
    border-bottom-width: ${value};
  `
  if (typeof value === 'number') return `
    border-top-width: ${value * factor}px;
    border-bottom-width: ${value * factor}px;
  `
}
export function generateB(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `
    border-top-width: ${value};
    border-right-width: ${value};
    border-bottom-width: ${value};
    border-left-width: ${value};
  `
  if (typeof value === 'number') return `
    border-top-width: ${value * factor}px;
    border-right-width: ${value * factor}px;
    border-bottom-width: ${value * factor}px;
    border-left-width: ${value * factor}px;
  `
}
export function generateBorderColor(value, theme) {
  return `border-color: ${findColorValue(value, theme)};`
}
export function generateBorderStyle(value) {
  return `border-style: ${value};`
}