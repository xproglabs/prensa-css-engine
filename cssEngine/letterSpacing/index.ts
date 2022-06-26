import { LetterSpacingProps } from '@xprog/prensa-css-engine/props'
import isArray from 'lodash/isArray'

import { createResponsiveStyle } from '../responsiveEngine'
import { generateLetterSpacing } from './parsers'

/**
 * Prensa Styled System | letterSpacing
 * @param props Expect an object matching LetterSpacingProps interface
 * @returns a string with CSS syntax
 */
export function letterSpacing({ letterSpacing, theme }: LetterSpacingProps) {

  const css = []
  const factor = theme.factors.letterSpacing

  if (isArray(letterSpacing)) {
    css.push(
      createResponsiveStyle(
        letterSpacing,
        pos => generateLetterSpacing(letterSpacing[pos], factor),
        theme
      )
    )
  } else {
    css.push(
      generateLetterSpacing(letterSpacing, factor)
    )
  }

  return css.join('')
}