import get from 'lodash/get'
import isArray from 'lodash/isArray'

import newMediaQuerie from '../responsiveEngine/mediaquerie'
import { generateBT, generateBR, generateBB, generateBL, generateBX, generateBY, generateB } from './parsers'

export function borderResponsive(bt, br, bb, bl, bx, by, b, theme) {

  const factor = get(theme, 'factors.margin', 1)
  const queries = get(theme, 'queries', {})

  const styles = []
  const smallMobileStyles = []
  const mobileStyles = []
  const tabletStyles = []
  const desktopStyles = []
  const largeDesktopStyles = []

  if (isArray(bt) && bt.length === 2) {
    styles.push( generateBT(bt[0], factor) )
    mobileStyles.push( generateBT(bt[0], factor) )
    desktopStyles.push( generateBT(bt[1], factor) )
  }
  if (isArray(bt) && bt.length === 3) {
    styles.push( generateBT(bt[0], factor) )
    mobileStyles.push( generateBT(bt[0], factor) )
    tabletStyles.push( generateBT(bt[1], factor) )
    desktopStyles.push( generateBT(bt[2], factor) )
  }
  if (isArray(bt) && bt.length === 4) {
    styles.push(  generateBT(bt[0], factor) )
    smallMobileStyles.push( generateBT(bt[0], factor) )
    mobileStyles.push( generateBT(bt[1], factor) )
    tabletStyles.push( generateBT(bt[2], factor) )
    desktopStyles.push( generateBT(bt[3], factor) )
  }
  if (isArray(bt) && bt.length === 5) {
    styles.push(  generateBT(bt[0], factor) )
    smallMobileStyles.push( generateBT(bt[0], factor) )
    mobileStyles.push( generateBT(bt[1], factor) )
    tabletStyles.push( generateBT(bt[2], factor) )
    desktopStyles.push( generateBT(bt[3], factor) )
    largeDesktopStyles.push( generateBT(bt[4], factor) )
  }

  if (isArray(br) && br.length === 2) {
    styles.push( generateBR(br[0], factor) )
    mobileStyles.push( generateBR(br[0], factor) )
    desktopStyles.push( generateBR(br[1], factor) )
  }
  if (isArray(br) && br.length === 3) {
    styles.push( generateBR(br[0], factor) )
    mobileStyles.push( generateBR(br[0], factor) )
    tabletStyles.push( generateBR(br[1], factor) )
    desktopStyles.push( generateBR(br[2], factor) )
  }
  if (isArray(br) && br.length === 4) {
    styles.push(  generateBR(br[0], factor) )
    smallMobileStyles.push( generateBR(br[0], factor) )
    mobileStyles.push( generateBR(br[1], factor) )
    tabletStyles.push( generateBR(br[2], factor) )
    desktopStyles.push( generateBR(br[3], factor) )
  }
  if (isArray(br) && br.length === 5) {
    styles.push(  generateBR(br[0], factor) )
    smallMobileStyles.push( generateBR(br[0], factor) )
    mobileStyles.push( generateBR(br[1], factor) )
    tabletStyles.push( generateBR(br[2], factor) )
    desktopStyles.push( generateBR(br[3], factor) )
    largeDesktopStyles.push( generateBR(br[4], factor) )
  }

  if (isArray(bb) && bb.length === 2) {
    styles.push( generateBB(bb[0], factor) )
    mobileStyles.push( generateBB(bb[0], factor) )
    desktopStyles.push( generateBB(bb[1], factor) )
  }
  if (isArray(bb) && bb.length === 3) {
    styles.push( generateBB(bb[0], factor) )
    mobileStyles.push( generateBB(bb[0], factor) )
    tabletStyles.push( generateBB(bb[1], factor) )
    desktopStyles.push( generateBB(bb[2], factor) )
  }
  if (isArray(bb) && bb.length === 4) {
    styles.push(  generateBB(bb[0], factor) )
    smallMobileStyles.push( generateBB(bb[0], factor) )
    mobileStyles.push( generateBB(bb[1], factor) )
    tabletStyles.push( generateBB(bb[2], factor) )
    desktopStyles.push( generateBB(bb[3], factor) )
  }
  if (isArray(bb) && bb.length === 5) {
    styles.push(  generateBB(bb[0], factor) )
    smallMobileStyles.push( generateBB(bb[0], factor) )
    mobileStyles.push( generateBB(bb[1], factor) )
    tabletStyles.push( generateBB(bb[2], factor) )
    desktopStyles.push( generateBB(bb[3], factor) )
    largeDesktopStyles.push( generateBB(bb[4], factor) )
  }

  if (isArray(bl) && bl.length === 2) {
    styles.push( generateBL(bl[0], factor) )
    mobileStyles.push( generateBL(bl[0], factor) )
    desktopStyles.push( generateBL(bl[1], factor) )
  }
  if (isArray(bl) && bl.length === 3) {
    styles.push( generateBL(bl[0], factor) )
    mobileStyles.push( generateBL(bl[0], factor) )
    tabletStyles.push( generateBL(bl[1], factor) )
    desktopStyles.push( generateBL(bl[2], factor) )
  }
  if (isArray(bl) && bl.length === 4) {
    styles.push(  generateBL(bl[0], factor) )
    smallMobileStyles.push( generateBL(bl[0], factor) )
    mobileStyles.push( generateBL(bl[1], factor) )
    tabletStyles.push( generateBL(bl[2], factor) )
    desktopStyles.push( generateBL(bl[3], factor) )
  }
  if (isArray(bl) && bl.length === 5) {
    styles.push(  generateBL(bl[0], factor) )
    smallMobileStyles.push( generateBL(bl[0], factor) )
    mobileStyles.push( generateBL(bl[1], factor) )
    tabletStyles.push( generateBL(bl[2], factor) )
    desktopStyles.push( generateBL(bl[3], factor) )
    largeDesktopStyles.push( generateBL(bl[4], factor) )
  }

  if (isArray(bx) && bx.length === 2) {
    styles.push( generateBX(bx[0], factor) )
    mobileStyles.push( generateBX(bx[0], factor) )
    desktopStyles.push( generateBX(bx[1], factor) )
  }
  if (isArray(bx) && bx.length === 3) {
    styles.push( generateBX(bx[0], factor) )
    mobileStyles.push( generateBX(bx[0], factor) )
    tabletStyles.push( generateBX(bx[1], factor) )
    desktopStyles.push( generateBX(bx[2], factor) )
  }
  if (isArray(bx) && bx.length === 4) {
    styles.push(  generateBX(bx[0], factor) )
    smallMobileStyles.push( generateBX(bx[0], factor) )
    mobileStyles.push( generateBX(bx[1], factor) )
    tabletStyles.push( generateBX(bx[2], factor) )
    desktopStyles.push( generateBX(bx[3], factor) )
  }
  if (isArray(bx) && bx.length === 5) {
    styles.push(  generateBX(bx[0], factor) )
    smallMobileStyles.push( generateBX(bx[0], factor) )
    mobileStyles.push( generateBX(bx[1], factor) )
    tabletStyles.push( generateBX(bx[2], factor) )
    desktopStyles.push( generateBX(bx[3], factor) )
    largeDesktopStyles.push( generateBX(bx[4], factor) )
  }

  if (isArray(by) && by.length === 2) {
    styles.push( generateBY(by[0], factor) )
    mobileStyles.push( generateBY(by[0], factor) )
    desktopStyles.push( generateBY(by[1], factor) )
  }
  if (isArray(by) && by.length === 3) {
    styles.push( generateBY(by[0], factor) )
    mobileStyles.push( generateBY(by[0], factor) )
    tabletStyles.push( generateBY(by[1], factor) )
    desktopStyles.push( generateBY(by[2], factor) )
  }
  if (isArray(by) && by.length === 4) {
    styles.push(  generateBY(by[0], factor) )
    smallMobileStyles.push( generateBY(by[0], factor) )
    mobileStyles.push( generateBY(by[1], factor) )
    tabletStyles.push( generateBY(by[2], factor) )
    desktopStyles.push( generateBY(by[3], factor) )
  }
  if (isArray(by) && by.length === 5) {
    styles.push(  generateBY(by[0], factor) )
    smallMobileStyles.push( generateBY(by[0], factor) )
    mobileStyles.push( generateBY(by[1], factor) )
    tabletStyles.push( generateBY(by[2], factor) )
    desktopStyles.push( generateBY(by[3], factor) )
    largeDesktopStyles.push( generateBY(by[4], factor) )
  }

  if (isArray(b) && b.length === 2) {
    styles.push( generateB(b[0], factor) )
    mobileStyles.push( generateB(b[0], factor) )
    desktopStyles.push( generateB(b[1], factor) )
  }
  if (isArray(b) && b.length === 3) {
    styles.push( generateB(b[0], factor) )
    mobileStyles.push( generateB(b[0], factor) )
    tabletStyles.push( generateB(b[1], factor) )
    desktopStyles.push( generateB(b[2], factor) )
  }
  if (isArray(b) && b.length === 4) {
    styles.push(  generateB(b[0], factor) )
    smallMobileStyles.push( generateB(b[0], factor) )
    mobileStyles.push( generateB(b[1], factor) )
    tabletStyles.push( generateB(b[2], factor) )
    desktopStyles.push( generateB(b[3], factor) )
  }
  if (isArray(b) && b.length === 5) {
    styles.push(  generateB(b[0], factor) )
    smallMobileStyles.push( generateB(b[0], factor) )
    mobileStyles.push( generateB(b[1], factor) )
    tabletStyles.push( generateB(b[2], factor) )
    desktopStyles.push( generateB(b[3], factor) )
    largeDesktopStyles.push( generateB(b[4], factor) )
  }

  styles.push(
    newMediaQuerie(
      smallMobileStyles.join(''),
      queries.xs
    )
  )

  styles.push(
    newMediaQuerie(
      mobileStyles.join(''),
      queries.sm
    )
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

  styles.push(
    newMediaQuerie(
      largeDesktopStyles.join(''),
      queries.xl
    )
  )

  return styles.join('')
}