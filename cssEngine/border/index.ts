import { BorderProps } from '@xprog/prensa-css-engine/props'
import get from 'lodash/get'

import {
  generateB,
  generateBT,
  generateBR,
  generateBB,
  generateBL,
  generateBX,
  generateBY,
  generateBorderColor,
  generateBorderStyle
} from './parsers'
import { borderResponsive } from './responsive'

/**
 * Prensa Styled System | border
 * @param props Expect an Object containing props from component that is invoking this function
 * $b: string | number | Array<string|number>;
 * $bt: string | number | Array<string|number>;
 * $br: string | number | Array<string|number>;
 * $bb: string | number | Array<string|number>;
 * $bl: string | number | Array<string|number>;
 * $bx: string | number | Array<string|number>;
 * $by: string | number | Array<string|number>;
 * $borderColor: string;
 * $borderStyle: string;
 * @returns a string with CSS syntax
 */
export function border(props: BorderProps) {

  const {
    $b = '',
    $bt = '',
    $br = '',
    $bb = '',
    $bl = '',
    $bx = '',
    $by = '',
    $borderColor = 'black',
    $borderStyle = 'solid',
    theme
  } = props

  const styles = []
  const factor = get(theme, 'factors.margin', 1)

  if ($bt) styles.push(generateBT($bt, factor))
  if ($br) styles.push(generateBR($br, factor))
  if ($bb) styles.push(generateBB($bb, factor))
  if ($bl) styles.push(generateBL($bl, factor))
  if ($bx) styles.push(generateBX($bx, factor))
  if ($by) styles.push(generateBY($by, factor))
  if ($b) styles.push(generateB($b, factor))
  if ($borderColor) styles.push(generateBorderColor($borderColor, theme))
  if ($borderStyle) styles.push(generateBorderStyle($borderStyle))

  styles.push(
    borderResponsive(
      $bt,
      $br,
      $bb,
      $bl,
      $bx,
      $by,
      $b,
      theme
    )
  )

  return styles.join('').replace(/\s+/g, '')
}