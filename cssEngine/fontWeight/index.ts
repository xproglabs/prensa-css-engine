import { FontWeightProps } from '@xprog/prensa-css-engine/props'
import isArray from 'lodash/isArray'

import { createResponsiveStyle } from '../responsiveEngine'
import { generateFontWeight } from './parsers'

/**
 * Prensa Styled System | fontWeight
 * @param props Expect an object matching FontWeightProps interface
 * @returns a string with CSS syntax
 */
export function fontWeight({ fontWeight, theme }: FontWeightProps) {

  const css = []

  if (isArray(fontWeight)) {
    css.push(
      createResponsiveStyle(
        fontWeight,
        pos => generateFontWeight(fontWeight[pos]),
        theme
      )
    )
  } else {
    css.push(
      generateFontWeight(fontWeight)
    )
  }

  return css.join('')
}