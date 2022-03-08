import { WidthProps } from '@xprog/prensa-css-engine/props'
import get from 'lodash/get'
import isArray from 'lodash/isArray'

import { createResponsiveStyle } from '../responsiveEngine'
import { generateWidth } from './parsers'

/**
 * Prensa Styled System | width
 * @param props Expect an Object containing props from component that is invoking this function
 * $width: string | number | Array<string|number>;
 * @returns a string with CSS syntax
 */
export function width(props: WidthProps) {

  if (!props) return ''

  const { $width, theme }: WidthProps = props
  const factor = get(theme, 'factors.dimensions', 1)
  const styles = []

  if (isArray($width)) {
    styles.push(
      createResponsiveStyle(
        $width,
        pos => generateWidth($width[pos], factor),
        theme
      )
    )
  } else {
    styles.push(
      generateWidth($width, factor)
    )
  }

  return styles.join('')
}