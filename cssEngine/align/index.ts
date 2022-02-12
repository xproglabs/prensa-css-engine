import { AlignProps } from 'props'

import { parseAlign, parseAlignX, parseAlignY } from './parsers'
import { alignResponsive } from './responsive'

/**
 * Prensa Styled System | align flex
 * @param props Expect an Object containing props from component that is invoking this function
 * align: 'row' | 'column'
 * alignx: 'left' | 'center' | 'right' | 'evenly' | 'between'
 * aligny: 'top' | 'middle' | 'bottom' | 'evenly' | 'between'
 * @returns a string with CSS syntax
 */
export function align(props: AlignProps) {

  if (!props) return ''

  const { align, alignx, aligny, theme } = props
  const styles = []

  styles.push('display: flex;')

  styles.push(
    typeof align === 'string' ? parseAlign(align) : '',
    typeof alignx === 'string' ? parseAlignX(align, alignx) : '',
    typeof aligny === 'string' ? parseAlignY(align, aligny) : ''
  )

  styles.push(
    alignResponsive(
      align,
      alignx,
      aligny,
      theme
    )
  )

  return styles.join('')
}