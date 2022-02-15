import { BoxShadowProps } from '@xprog/prensa-css-engine/props'

import { generateBoxShadow } from './parsers'
import { boxShadowResponsive } from './responsive'

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

  styles.push(
    typeof boxShadow === 'string' ? generateBoxShadow(boxShadow) : '',
  )

  styles.push(
    boxShadowResponsive(
      boxShadow,
      theme
    )
  )

  return styles.join('').replace(/\s+/g, '')
}