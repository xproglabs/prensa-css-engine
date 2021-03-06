import { MarginProps } from '@xprog/prensa-css-engine/props'
import get from 'lodash/get'

import { generateMT, generateMR, generateMB, generateML, generateMX, generateMY, generateM } from './parsers'
import { marginResponsive } from './responsive'

/**
 * Prensa Styled System | margin
 * @param props Expect an Object containing props from component that is invoking this function
 * mt: string | number | Array<string|number>;
 * mr: string | number | Array<string|number>;
 * mb: string | number | Array<string|number>;
 * ml: string | number | Array<string|number>;
 * @returns a string with CSS syntax
 */
export function margin(props: MarginProps) {

  if (!props) return ''

  const { mt, mr, mb, ml, mx, my, m, theme }: MarginProps = props
  const factor = get(theme, 'factors.margin', 1)
  const styles = []

  if (mt !== undefined) styles.push( generateMT(mt, factor) )
  if (mr !== undefined) styles.push( generateMR(mr, factor) )
  if (mb !== undefined) styles.push( generateMB(mb, factor) )
  if (ml !== undefined) styles.push( generateML(ml, factor) )
  if (mx !== undefined) styles.push( generateMX(mx, factor) )
  if (my !== undefined) styles.push( generateMY(my, factor) )
  if (m !== undefined) styles.push( generateM(m, factor) )

  styles.push(
    marginResponsive(
      mt,
      mr,
      mb,
      ml,
      mx,
      my,
      m,
      theme
    )
  )

  return styles.join('').replace(/\s+/g, '')
}