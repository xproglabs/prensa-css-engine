import { TextAlignProps } from '@xprog/prensa-css-engine/props'
import isArray from 'lodash/isArray'

import { createResponsiveStyle } from '../responsiveEngine'
import { generateTextAlign } from './parsers'

/**
 * Prensa Styled System | textAlign
 * @param props Expect an object matching TextAlignProps interface
 * @returns a string with CSS syntax
 */
export function textAlign({ textAlign, theme }: TextAlignProps) {

  const css = []

  if (isArray(textAlign)) {
    css.push(
      createResponsiveStyle(
        textAlign,
        pos => generateTextAlign(textAlign[pos]),
        theme
      )
    )
  } else {
    css.push(
      generateTextAlign(textAlign)
    )
  }

  return css.join('')
}