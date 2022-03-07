import get from 'lodash/get'

export function findColorValue(value, theme) {
  return get(theme, `colors.${value}`, '')
}

export function generateBackgroundColor(value, theme) {
  return `background-color:${findColorValue(value, theme)}`
}

export function generateColor(value, theme) {
  return `color:${findColorValue(value, theme)}`
}