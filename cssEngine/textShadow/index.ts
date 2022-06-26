import { TextShadowProps } from '@xprog/prensa-css-engine/props'
import isArray from 'lodash/isArray'

import { createResponsiveStyle } from '../responsiveEngine'
import { generateTextTransform } from './parsers'

/**
 * Prensa Styled System | textShadow
 * @param props Expect an object matching TextShadowProps interface
 * @returns a string with CSS syntax
 */
export function textShadow({ textShadow, theme }: TextShadowProps) {

  const css = []

  if (isArray(textShadow)) {
    css.push(
      createResponsiveStyle(
        textShadow,
        pos => generateTextTransform(textShadow[pos]),
        theme
      )
    )
  } else {
    css.push(
      generateTextTransform(textShadow)
    )
  }

  return css.join('')
}