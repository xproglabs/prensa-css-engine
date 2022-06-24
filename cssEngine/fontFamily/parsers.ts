import get from 'lodash/get'

export function generateFontFamily(value, options) {
  const selectedValue = get(options, value, '')
  if (selectedValue === '') return ''
  return `font-family:${selectedValue};`
}