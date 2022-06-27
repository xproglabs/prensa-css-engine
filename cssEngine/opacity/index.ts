import { OpacityProps } from '@xprog/prensa-css-engine/props'
import isArray from 'lodash/isArray'

import { createResponsiveStyle } from '../responsiveEngine'
import { generateOpacity } from './parsers'

/**
 * Prensa Styled System | opacity
 * @param props Expect an object matching OpacityProps interface
 * @returns a string with CSS syntax
 */
export function opacity({ $opacity, theme }: OpacityProps) {

  const styles = []

  if (isArray($opacity)) {
    styles.push(
      createResponsiveStyle(
        $opacity,
        pos => generateOpacity($opacity[pos]),
        theme
      )
    )
  } else {
    styles.push(
      generateOpacity($opacity)
    )
  }

  return styles.join('')
}