import { HeightProps } from '@xprog/prensa-css-engine/props'
import get from 'lodash/get'
import isArray from 'lodash/isArray'

import { createResponsiveStyle } from '../responsiveEngine'
import { generateHeight } from './parsers'

/**
 * Prensa Styled System | height
 * @param props Expect an Object containing props from component that is invoking this function
 * $height: string | number | Array<string | number>;
 * @returns a string with CSS syntax
 */
export function height(props: HeightProps) {

  if (!props) return ''

  const { $height, theme }: HeightProps = props
  const factor = get(theme, 'factors.dimensions', 1)
  const styles = []

  if (isArray($height)) {
    styles.push(
      createResponsiveStyle(
        $height,
        value => generateHeight(value, factor),
        theme
      )
    )
  } else {
    styles.push(
      generateHeight($height, factor)
    )
  }

  return styles.join('')
}