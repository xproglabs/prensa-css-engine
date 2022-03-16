import get from 'lodash/get'
import isArray from 'lodash/isArray'

import newMediaQuerie from '../responsiveEngine/mediaquerie'
import { generateBST, generateBSR, generateBSB, generateBSL, generateBSX, generateBSY, generateBS, generateBorderStyle } from './parsers'

export function borderResponsive(bst, bsr, bsb, bsl, bsx, bsy, bs, borderStyle, theme) {

  const queries = get(theme, 'queries', {})

  const styles = []
  const smallMobileStyles = []
  const mobileStyles = []
  const tabletStyles = []
  const desktopStyles = []
  const largeDesktopStyles = []

  if (isArray(bst) && bst.length === 2) {
    styles.push( generateBST(bst[0]) )
    mobileStyles.push( generateBST(bst[0]) )
    desktopStyles.push( generateBST(bst[1]) )
  }
  if (isArray(bst) && bst.length === 3) {
    styles.push( generateBST(bst[0]) )
    mobileStyles.push( generateBST(bst[0]) )
    tabletStyles.push( generateBST(bst[1]) )
    desktopStyles.push( generateBST(bst[2]) )
  }
  if (isArray(bst) && bst.length === 4) {
    styles.push( generateBST(bst[0]) )
    smallMobileStyles.push( generateBST(bst[0]) )
    mobileStyles.push( generateBST(bst[1]) )
    tabletStyles.push( generateBST(bst[2]) )
    desktopStyles.push( generateBST(bst[3]) )
  }
  if (isArray(bst) && bst.length === 5) {
    styles.push(  generateBST(bst[0]) )
    smallMobileStyles.push( generateBST(bst[0]) )
    mobileStyles.push( generateBST(bst[1]) )
    tabletStyles.push( generateBST(bst[2]) )
    desktopStyles.push( generateBST(bst[3]) )
    largeDesktopStyles.push( generateBST(bst[4]) )
  }

  if (isArray(bsr) && bsr.length === 2) {
    styles.push( generateBSR(bsr[0]) )
    mobileStyles.push( generateBSR(bsr[0]) )
    desktopStyles.push( generateBSR(bsr[1]) )
  }
  if (isArray(bsr) && bsr.length === 3) {
    styles.push( generateBSR(bsr[0]) )
    mobileStyles.push( generateBSR(bsr[0]) )
    tabletStyles.push( generateBSR(bsr[1]) )
    desktopStyles.push( generateBSR(bsr[2]) )
  }
  if (isArray(bsr) && bsr.length === 4) {
    styles.push(  generateBSR(bsr[0]) )
    smallMobileStyles.push( generateBSR(bsr[0]) )
    mobileStyles.push( generateBSR(bsr[1]) )
    tabletStyles.push( generateBSR(bsr[2]) )
    desktopStyles.push( generateBSR(bsr[3]) )
  }
  if (isArray(bsr) && bsr.length === 5) {
    styles.push(  generateBSR(bsr[0]) )
    smallMobileStyles.push( generateBSR(bsr[0]) )
    mobileStyles.push( generateBSR(bsr[1]) )
    tabletStyles.push( generateBSR(bsr[2]) )
    desktopStyles.push( generateBSR(bsr[3]) )
    largeDesktopStyles.push( generateBSR(bsr[4]) )
  }

  if (isArray(bsb) && bsb.length === 2) {
    styles.push( generateBSB(bsb[0]) )
    mobileStyles.push( generateBSB(bsb[0]) )
    desktopStyles.push( generateBSB(bsb[1]) )
  }
  if (isArray(bsb) && bsb.length === 3) {
    styles.push( generateBSB(bsb[0]) )
    mobileStyles.push( generateBSB(bsb[0]) )
    tabletStyles.push( generateBSB(bsb[1]) )
    desktopStyles.push( generateBSB(bsb[2]) )
  }
  if (isArray(bsb) && bsb.length === 4) {
    styles.push(  generateBSB(bsb[0]) )
    smallMobileStyles.push( generateBSB(bsb[0]) )
    mobileStyles.push( generateBSB(bsb[1]) )
    tabletStyles.push( generateBSB(bsb[2]) )
    desktopStyles.push( generateBSB(bsb[3]) )
  }
  if (isArray(bsb) && bsb.length === 5) {
    styles.push(  generateBSB(bsb[0]) )
    smallMobileStyles.push( generateBSB(bsb[0]) )
    mobileStyles.push( generateBSB(bsb[1]) )
    tabletStyles.push( generateBSB(bsb[2]) )
    desktopStyles.push( generateBSB(bsb[3]) )
    largeDesktopStyles.push( generateBSB(bsb[4]) )
  }

  if (isArray(bsl) && bsl.length === 2) {
    styles.push( generateBSL(bsl[0]) )
    mobileStyles.push( generateBSL(bsl[0]) )
    desktopStyles.push( generateBSL(bsl[1]) )
  }
  if (isArray(bsl) && bsl.length === 3) {
    styles.push( generateBSL(bsl[0]) )
    mobileStyles.push( generateBSL(bsl[0]) )
    tabletStyles.push( generateBSL(bsl[1]) )
    desktopStyles.push( generateBSL(bsl[2]) )
  }
  if (isArray(bsl) && bsl.length === 4) {
    styles.push(  generateBSL(bsl[0]) )
    smallMobileStyles.push( generateBSL(bsl[0]) )
    mobileStyles.push( generateBSL(bsl[1]) )
    tabletStyles.push( generateBSL(bsl[2]) )
    desktopStyles.push( generateBSL(bsl[3]) )
  }
  if (isArray(bsl) && bsl.length === 5) {
    styles.push( generateBSL(bsl[0]) )
    smallMobileStyles.push( generateBSL(bsl[0]) )
    mobileStyles.push( generateBSL(bsl[1]) )
    tabletStyles.push( generateBSL(bsl[2]) )
    desktopStyles.push( generateBSL(bsl[3]) )
    largeDesktopStyles.push( generateBSL(bsl[4]) )
  }

  if (isArray(bsx) && bsx.length === 2) {
    styles.push( generateBSX(bsx[0]) )
    mobileStyles.push( generateBSX(bsx[0]) )
    desktopStyles.push( generateBSX(bsx[1]) )
  }
  if (isArray(bsx) && bsx.length === 3) {
    styles.push( generateBSX(bsx[0]) )
    mobileStyles.push( generateBSX(bsx[0]) )
    tabletStyles.push( generateBSX(bsx[1]) )
    desktopStyles.push( generateBSX(bsx[2]) )
  }
  if (isArray(bsx) && bsx.length === 4) {
    styles.push( generateBSX(bsx[0]) )
    smallMobileStyles.push( generateBSX(bsx[0]) )
    mobileStyles.push( generateBSX(bsx[1]) )
    tabletStyles.push( generateBSX(bsx[2]) )
    desktopStyles.push( generateBSX(bsx[3]) )
  }
  if (isArray(bsx) && bsx.length === 5) {
    styles.push( generateBSX(bsx[0]) )
    smallMobileStyles.push( generateBSX(bsx[0]) )
    mobileStyles.push( generateBSX(bsx[1]) )
    tabletStyles.push( generateBSX(bsx[2]) )
    desktopStyles.push( generateBSX(bsx[3]) )
    largeDesktopStyles.push( generateBSX(bsx[4]) )
  }

  if (isArray(bsy) && bsy.length === 2) {
    styles.push( generateBSY(bsy[0]) )
    mobileStyles.push( generateBSY(bsy[0]) )
    desktopStyles.push( generateBSY(bsy[1]) )
  }
  if (isArray(bsy) && bsy.length === 3) {
    styles.push( generateBSY(bsy[0]) )
    mobileStyles.push( generateBSY(bsy[0]) )
    tabletStyles.push( generateBSY(bsy[1]) )
    desktopStyles.push( generateBSY(bsy[2]) )
  }
  if (isArray(bsy) && bsy.length === 4) {
    styles.push( generateBSY(bsy[0]) )
    smallMobileStyles.push( generateBSY(bsy[0]) )
    mobileStyles.push( generateBSY(bsy[1]) )
    tabletStyles.push( generateBSY(bsy[2]) )
    desktopStyles.push( generateBSY(bsy[3]) )
  }
  if (isArray(bsy) && bsy.length === 5) {
    styles.push( generateBSY(bsy[0]) )
    smallMobileStyles.push( generateBSY(bsy[0]) )
    mobileStyles.push( generateBSY(bsy[1]) )
    tabletStyles.push( generateBSY(bsy[2]) )
    desktopStyles.push( generateBSY(bsy[3]) )
    largeDesktopStyles.push( generateBSY(bsy[4]) )
  }

  if (isArray(bs) && bs.length === 2) {
    styles.push( generateBS(bs[0]) )
    mobileStyles.push( generateBS(bs[0]) )
    desktopStyles.push( generateBS(bs[1]) )
  }
  if (isArray(bs) && bs.length === 3) {
    styles.push( generateBS(bs[0]) )
    mobileStyles.push( generateBS(bs[0]) )
    tabletStyles.push( generateBS(bs[1]) )
    desktopStyles.push( generateBS(bs[2]) )
  }
  if (isArray(bs) && bs.length === 4) {
    styles.push( generateBS(bs[0]) )
    smallMobileStyles.push( generateBS(bs[0]) )
    mobileStyles.push( generateBS(bs[1]) )
    tabletStyles.push( generateBS(bs[2]) )
    desktopStyles.push( generateBS(bs[3]) )
  }
  if (isArray(bs) && bs.length === 5) {
    styles.push( generateBS(bs[0]) )
    smallMobileStyles.push( generateBS(bs[0]) )
    mobileStyles.push( generateBS(bs[1]) )
    tabletStyles.push( generateBS(bs[2]) )
    desktopStyles.push( generateBS(bs[3]) )
    largeDesktopStyles.push( generateBS(bs[4]) )
  }

  if (isArray(borderStyle) && borderStyle.length === 2) {
    styles.push( generateBorderStyle(borderStyle[0]) )
    mobileStyles.push( generateBorderStyle(borderStyle[0]) )
    desktopStyles.push( generateBorderStyle(borderStyle[1]) )
  }
  if (isArray(borderStyle) && borderStyle.length === 3) {
    styles.push( generateBorderStyle(borderStyle[0]) )
    mobileStyles.push( generateBorderStyle(borderStyle[0]) )
    tabletStyles.push( generateBorderStyle(borderStyle[1]) )
    desktopStyles.push( generateBorderStyle(borderStyle[2]) )
  }
  if (isArray(borderStyle) && borderStyle.length === 4) {
    styles.push( generateBorderStyle(borderStyle[0]) )
    smallMobileStyles.push( generateBorderStyle(borderStyle[0]) )
    mobileStyles.push( generateBorderStyle(borderStyle[1]) )
    tabletStyles.push( generateBorderStyle(borderStyle[2]) )
    desktopStyles.push( generateBorderStyle(borderStyle[3]) )
  }
  if (isArray(borderStyle) && borderStyle.length === 5) {
    styles.push( generateBorderStyle(borderStyle[0]) )
    smallMobileStyles.push( generateBorderStyle(borderStyle[0]) )
    mobileStyles.push( generateBorderStyle(borderStyle[1]) )
    tabletStyles.push( generateBorderStyle(borderStyle[2]) )
    desktopStyles.push( generateBorderStyle(borderStyle[3]) )
    largeDesktopStyles.push( generateBorderStyle(borderStyle[4]) )
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