import { TextDecorationProps } from '@xprog/prensa-css-engine/props'
import isArray from 'lodash/isArray'

import { createResponsiveStyle } from '../responsiveEngine'
import { generateTextDecoration } from './parsers'

/**
 * Prensa Styled System | textDecoration
 * @param props Expect an object matching TextDecorationProps interface
 * @returns a string with CSS syntax
 */
export function textDecoration({ $textDecoration, theme }: TextDecorationProps) {

  const css = []

  if (isArray($textDecoration)) {
    css.push(
      createResponsiveStyle(
        $textDecoration,
        pos => generateTextDecoration($textDecoration[pos]),
        theme
      )
    )
  } else {
    css.push(
      generateTextDecoration($textDecoration)
    )
  }

  return css.join('')
}