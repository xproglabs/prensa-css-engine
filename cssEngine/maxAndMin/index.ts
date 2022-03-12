import { MaxAndMinProps } from '@xprog/prensa-css-engine/props'

import { generateMaxHeight, generateMaxWidth, generateMinHeight, generateMinWidth } from './parsers'
import { maxAndMinResponsive } from './responsive'

/**
 * Prensa Styled System | maxAndMin
 * @param props Expect an Object matching interface MaxAndMinProps
 * maxHeight: string;
 * maxWidth: string;
 * minHeight: string;
 * minWidth: string;
 * @returns a string with CSS syntax
 */
export function maxAndMin(props: MaxAndMinProps) {

  if (!props) return ''

  const { maxHeight, maxWidth, minHeight, minWidth, theme } = props
  const styles = []

  styles.push(
    typeof maxHeight === 'string' ? generateMaxHeight(maxHeight) : '',
    typeof maxWidth === 'string' ? generateMaxWidth(maxWidth) : '',
    typeof minHeight === 'string' ? generateMinHeight(minHeight) : '',
    typeof minWidth === 'string' ? generateMinWidth(minWidth) : '',
  )

  styles.push(
    maxAndMinResponsive(
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      theme
    )
  )

  return styles.join('')
}