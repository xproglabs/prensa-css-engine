import { TextTransformProps } from '@xprog/prensa-css-engine/props'
import isArray from 'lodash/isArray'

import { createResponsiveStyle } from '../responsiveEngine'
import { generateTextTransform } from './parsers'

/**
 * Prensa Styled System | textTransform
 * @param props Expect an object matching TextTransformProps interface
 * @returns a string with CSS syntax
 */
export function textTransform({ textTransform, theme }: TextTransformProps) {

  const css = []

  if (isArray(textTransform)) {
    css.push(
      createResponsiveStyle(
        textTransform,
        pos => generateTextTransform(textTransform[pos]),
        theme
      )
    )
  } else {
    css.push(
      generateTextTransform(textTransform)
    )
  }

  return css.join('')
}