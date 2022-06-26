import { LineHeightProps } from '@xprog/prensa-css-engine/props'
import isArray from 'lodash/isArray'

import { createResponsiveStyle } from '../responsiveEngine'
import { generateLineHeight } from './parsers'

/**
 * Prensa Styled System | lineHeight
 * @param props Expect an object matching LineHeightProps interface
 * @returns a string with CSS syntax
 */
export function lineHeight({ lineHeight, theme }: LineHeightProps) {

  const css = []
  const factor = theme.factors.lineHeight

  if (isArray(lineHeight)) {
    css.push(
      createResponsiveStyle(
        lineHeight,
        pos => generateLineHeight(lineHeight[pos], factor),
        theme
      )
    )
  } else {
    css.push(
      generateLineHeight(lineHeight, factor)
    )
  }

  return css.join('')
}