import { FontSizeProps } from '@xprog/prensa-css-engine/props'
import isArray from 'lodash/isArray'

import { createResponsiveStyle } from '../responsiveEngine'
import { generateFontSize } from './parsers'

/**
 * Prensa Styled System | fontSize
 * @param props Expect an object matching FontSizeProps interface
 * @returns a string with CSS syntax
 */
export function fontSize({ $fontSize, theme }: FontSizeProps) {

  const css = []
  const factor = theme.factors.fontSize

  if (isArray($fontSize)) {
    css.push(
      createResponsiveStyle(
        $fontSize,
        pos => generateFontSize($fontSize[pos], factor),
        theme
      )
    )
  } else {
    css.push(
      generateFontSize($fontSize, factor)
    )
  }

  return css.join('')
}