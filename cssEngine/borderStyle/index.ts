import { BorderStyleProps } from '@xprog/prensa-css-engine/props'

import {
  generateBST,
  generateBSR,
  generateBSB,
  generateBSL,
  generateBSX,
  generateBSY,
  generateBS,
  generateBorderStyle
} from './parsers'
import { borderResponsive } from './responsive'

/**
 * Prensa Styled System | borderStyle style
 * @param props Expect an Object containing props from component that is invoking this function
 * bs: string | Array<string>;
 * bst: string | Array<string>;
 * bsr: string | Array<string>;
 * bsb: string | Array<string>;
 * bsl: string | Array<string>;
 * bsx: string | Array<string>;
 * bsy: string | Array<string>;
 * borderStyle: string | Array<string>;
 * @returns a string with CSS syntax
 */
export function borderStyle(props: BorderStyleProps) {

  const {
    bst,
    bsr,
    bsb,
    bsl,
    bsx,
    bsy,
    bs,
    borderStyle,
    theme
  } = props

  const styles = []

  if (typeof bst === 'string') styles.push(generateBST(bst))
  if (typeof bsr === 'string') styles.push(generateBSR(bsr))
  if (typeof bsb === 'string') styles.push(generateBSB(bsb))
  if (typeof bsl === 'string') styles.push(generateBSL(bsl))
  if (typeof bsx === 'string') styles.push(generateBSX(bsx))
  if (typeof bsy === 'string') styles.push(generateBSY(bsy))
  if (typeof bs === 'string') styles.push(generateBSY(bsy))
  if (typeof bs === 'string') styles.push(generateBS(bs))
  if (typeof borderStyle === 'string') styles.push(generateBorderStyle(borderStyle))

  styles.push(
    borderResponsive(
      bst,
      bsr,
      bsb,
      bsl,
      bsx,
      bsy,
      bs,
      borderStyle,
      theme
    )
  )

  return styles.join('').replace(/\s+/g, '')
}