import { ColorProps } from '@xprog/prensa-css-engine/props'
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
      css.push(
        generateColor($color, theme)
      )
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
      css.push(
        generateBackgroundColor($bgColor, theme)
      )
    }
  }

  return css.join('')
}