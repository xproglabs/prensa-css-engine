import { FontStyleProps } from '@xprog/prensa-css-engine/props'
import isArray from 'lodash/isArray'

import { createResponsiveStyle } from '../responsiveEngine'
import { generateFontStyle } from './parsers'

/**
 * Prensa Styled System | fontStyle
 * @param props Expect an object matching FontStyleProps interface
 * @returns a string with CSS syntax
 */
export function fontStyle({ fontStyle, theme }: FontStyleProps) {

  const css = []

  if (isArray(fontStyle)) {
    css.push(
      createResponsiveStyle(
        fontStyle,
        pos => generateFontStyle(fontStyle[pos]),
        theme
      )
    )
  } else {
    css.push(
      generateFontStyle(fontStyle)
    )
  }

  return css.join('')
}