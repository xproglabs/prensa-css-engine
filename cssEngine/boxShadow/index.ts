import { BoxShadowProps } from '@xprog/prensa-css-engine/props'
import isArray from 'lodash/isArray'

import { createResponsiveStyle } from '../responsiveEngine'
import { generateBoxShadow } from './parsers'

/**
 * Prensa Styled System | boxShadow
 * @param props Expect a string matching box-shadow css requirements
 * boxShadow: string;
 * @returns a string with CSS syntax
 */
export function boxShadow(props: BoxShadowProps) {

  if (!props) return ''

  const { boxShadow, theme } = props
  const styles = []

  if (isArray(boxShadow)) {
    styles.push(
      createResponsiveStyle(
        boxShadow,
        pos => generateBoxShadow(boxShadow[pos]),
        theme
      )
    )
  } else {
    styles.push(
      generateBoxShadow(boxShadow)
    )
  }

  return styles.join('').replace(/\s+/g, '')
}