import get from 'lodash/get'

export function findColorValue(value, theme) {
  return get(theme, `colors.${value}`, '')
}