import get from 'lodash/get'
import isArray from 'lodash/isArray'

import newMediaQuerie from '../responsiveEngine/mediaquerie'
import { generateBT, generateBR, generateBB, generateBL, generateBX, generateBY, generateB } from './parsers'

export function borderResponsive(bt, br, bb, bl, bx, by, b, theme) {

  const factor = get(theme, 'factors.margin', 1)
  const queries = get(theme, 'queries', {})

  const styles = []
  const mobileStyles = []
  const tabletStyles = []
  const desktopStyles = []

  if (isArray(bt) && bt.length === 2) {
    mobileStyles.push( generateBT(bt[0], factor) )
    desktopStyles.push( generateBT(bt[1], factor) )
  }
  if (isArray(bt) && bt.length === 3) {
    mobileStyles.push( generateBT(bt[0], factor) )
    tabletStyles.push( generateBT(bt[1], factor) )
    desktopStyles.push( generateBT(bt[2], factor) )
  }

  if (isArray(br) && br.length === 2) {
    mobileStyles.push( generateBR(br[0], factor) )
    desktopStyles.push( generateBR(br[1], factor) )
  }
  if (isArray(br) && br.length === 3) {
    mobileStyles.push( generateBR(br[0], factor) )
    tabletStyles.push( generateBR(br[1], factor) )
    desktopStyles.push( generateBR(br[2], factor) )
  }

  if (isArray(bb) && bb.length === 2) {
    mobileStyles.push( generateBB(bb[0], factor) )
    desktopStyles.push( generateBB(bb[1], factor) )
  }
  if (isArray(bb) && bb.length === 3) {
    mobileStyles.push( generateBB(bb[0], factor) )
    tabletStyles.push( generateBB(bb[1], factor) )
    desktopStyles.push( generateBB(bb[2], factor) )
  }

  if (isArray(bl) && bl.length === 2) {
    mobileStyles.push( generateBL(bl[0], factor) )
    desktopStyles.push( generateBL(bl[1], factor) )
  }
  if (isArray(bl) && bl.length === 3) {
    mobileStyles.push( generateBL(bl[0], factor) )
    tabletStyles.push( generateBL(bl[1], factor) )
    desktopStyles.push( generateBL(bl[2], factor) )
  }

  if (isArray(bx) && bx.length === 2) {
    mobileStyles.push( generateBX(bx[0], factor) )
    desktopStyles.push( generateBX(bx[1], factor) )
  }
  if (isArray(bx) && bx.length === 3) {
    mobileStyles.push( generateBX(bx[0], factor) )
    tabletStyles.push( generateBX(bx[1], factor) )
    desktopStyles.push( generateBX(bx[2], factor) )
  }

  if (isArray(by) && by.length === 2) {
    mobileStyles.push( generateBY(by[0], factor) )
    desktopStyles.push( generateBY(by[1], factor) )
  }
  if (isArray(by) && by.length === 3) {
    mobileStyles.push( generateBY(by[0], factor) )
    tabletStyles.push( generateBY(by[1], factor) )
    desktopStyles.push( generateBY(by[2], factor) )
  }

  if (isArray(b) && b.length === 2) {
    mobileStyles.push( generateB(b[0], factor) )
    desktopStyles.push( generateB(b[1], factor) )
  }
  if (isArray(b) && b.length === 3) {
    mobileStyles.push( generateB(b[0], factor) )
    tabletStyles.push( generateB(b[1], factor) )
    desktopStyles.push( generateB(b[2], factor) )
  }

  styles.push(
    mobileStyles.join('')
  )

  styles.push(
    newMediaQuerie(
      tabletStyles.join(''),
      queries.md
    )
  )

  styles.push(
    newMediaQuerie(
      desktopStyles.join(''),
      queries.lg
    )
  )

  return styles.join('')
}