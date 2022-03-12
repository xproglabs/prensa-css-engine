import { PaddingProps } from '@xprog/prensa-css-engine/props'
import get from 'lodash/get'

import { generatePT, generatePR, generatePB, generatePL, generatePX, generatePY, generateP } from './parsers'
import { paddingResponsive } from './responsive'

/**
 * Prensa Styled System | padding
 * @param props Expect an Object containing props from component that is invoking this function
 * pt: string | number | Array<string|number>;
 * pr: string | number | Array<string|number>;
 * pb: string | number | Array<string|number>;
 * pl: string | number | Array<string|number>;
 * @returns a string with CSS syntax
 */
export function padding(props: PaddingProps) {

  if (!props) return ''

  const { pt, pr, pb, pl, px, py, p, theme }: PaddingProps = props
  const factor = get(theme, 'factors.padding', 1)
  const styles = []

  if (pt !== undefined) styles.push( generatePT(pt, factor) )
  if (pr !== undefined) styles.push( generatePR(pr, factor) )
  if (pb !== undefined) styles.push( generatePB(pb, factor) )
  if (pl !== undefined) styles.push( generatePL(pl, factor) )
  if (px !== undefined) styles.push( generatePX(px, factor) )
  if (py !== undefined) styles.push( generatePY(py, factor) )
  if (p !== undefined) styles.push( generateP(p, factor) )

  styles.push(
    paddingResponsive(
      pt,
      pr,
      pb,
      pl,
      px,
      py,
      p,
      theme
    )
  )

  return styles.join('').replace(/\s+/g, '')
}