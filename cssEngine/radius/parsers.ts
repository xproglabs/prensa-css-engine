import get from 'lodash/get'

export function generateBorderRadius(value, theme) {
  return `border-radius:${get(theme, `radius.${value}`, '')};`
}