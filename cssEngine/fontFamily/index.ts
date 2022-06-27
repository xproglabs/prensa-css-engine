import { FontFamilyProps } from '@xprog/prensa-css-engine/props'
import isArray from 'lodash/isArray'

import { createResponsiveStyle } from '../responsiveEngine'
import { generateFontFamily } from './parsers'

/**
 * Prensa Styled System | fontFamily
 * @param props Expect an object matching FontFamilyProps interface
 * @returns a string with CSS syntax
 */
export function fontFamily({ $fontFamily, theme }: FontFamilyProps) {

  const css = []
  const fonts = theme.fonts

  if (isArray($fontFamily)) {
    css.push(
      createResponsiveStyle(
        $fontFamily,
        pos => generateFontFamily($fontFamily[pos], fonts),
        theme
      )
    )
  } else {
    css.push(
      generateFontFamily($fontFamily, fonts)
    )
  }

  return css.join('')
}