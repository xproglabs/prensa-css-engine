import { AlignProps } from '@xprog/prensa-css-engine/props'
import isArray from 'lodash/isArray'

import { createResponsiveStyle } from '../responsiveEngine'
import { parseAlign, parseAlignX, parseAlignY } from './parsers'

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

  styles.push(
    'display: flex;'
  )

  function alignHelper(value) {
    if (typeof value === 'string') {
      return value
    } else {
      return value[0]
    }
  }

  if (typeof align === 'string') {
    styles.push(
      parseAlign(align)
    )
  }
  if (typeof alignx === 'string') {
    styles.push(
      parseAlignX(
        alignHelper(align),
        alignx
      )
    )
  }
  if (typeof aligny === 'string') {
    styles.push(
      parseAlignY(
        alignHelper(align),
        aligny
      )
    )
  }

  function alignResponsiveHelper(pos) {
    if (align[pos]) {
      return `${parseAlign(align[pos])}${parseAlignX(align[pos], alignx[pos])}${parseAlignY(align[pos], aligny[pos])}`
    }
  }

  if (isArray(align)) {
    styles.push(
      createResponsiveStyle(
        align,
        pos => alignResponsiveHelper(pos),
        theme
      )
    )
  } 

  return styles.join('').replace(/\s+/g, '')
}