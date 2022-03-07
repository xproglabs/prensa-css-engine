import { ColorProps } from '@xprog/prensa-css-engine/props'
import get from 'lodash/get'
import isArray from 'lodash/isArray'

import { createResponsiveStyle } from '../responsiveEngine'
import { generateBackgroundColor, generateColor } from './parsers'

/**
 * Prensa Styled System | color
 * @param props Expect an object matching ColorProps interface
 * @returns a string with CSS syntax
 */
export function color({ $color, $bgColor, theme }: ColorProps) {

  const css = []
  const selectedColor = get(theme, `colors.${$color}`, '')
  const selectedBgColor = get(theme, `colors.${$bgColor}`, '')

  if (isArray($color)) {
    css.push(
      createResponsiveStyle(
        $color,
        pos => generateColor($color[pos], theme),
        theme
      )
    )
  } else {
    if (typeof $color === 'string') {
      if (selectedColor !== '') {
        css.push(`color:${selectedColor};`)
      }
    }
  }
  if (isArray($bgColor)) {
    css.push(
      createResponsiveStyle(
        $bgColor,
        pos => generateBackgroundColor($bgColor[pos], theme),
        theme
      )
    )
  } else {
    if (typeof $bgColor === 'string') {
      if (selectedBgColor !== '') {
        css.push(`background-color:${selectedBgColor};`)
      }
    }
  }

  return css.join('')
}