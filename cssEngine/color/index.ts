import { ColorProps } from '@xprog/prensa-css-engine/props'
import get from 'lodash/get'

import { colorResponsive } from './responsive'

/**
 * Prensa Styled System | color
 * @param props Expect an object matching ColorProps interface
 * @returns a string with CSS syntax
 */
export function color({ $color, $bgColor, theme }: ColorProps) {

  const css = []
  const selectedColor = get(theme, `colors.${$color}`, '')
  const selectedBgColor = get(theme, `colors.${$bgColor}`, '')

  if (typeof $color === 'string') {
    if (selectedColor !== '') {
      css.push(`color:${selectedColor};`)
    }
  }

  if (typeof $bgColor === 'string') {
    if (selectedBgColor !== '') {
      css.push(`background-color:${selectedBgColor};`)
    }
  }

  css.push(
    colorResponsive(
      $color,
      $bgColor,
      theme
    )
  )

  return css.join('')
}