import get from 'lodash/get'
import isArray from 'lodash/isArray'

import newMediaQuerie from '../responsiveEngine/mediaquerie'
import { generatePT, generatePR, generatePB, generatePL, generatePX, generatePY, generateP } from './parsers'

export function paddingResponsive(pt, pr, pb, pl, px, py, p, theme) {

  const factor = get(theme, 'factors.padding', 1)
  const queries = get(theme, 'queries', {})
  const styles = []
  const smallMobileStyles = []
  const mobileStyles = []
  const tabletStyles = []
  const desktopStyles = []
  const largeDesktopStyles = []

  if (isArray(pt) && pt.length === 2) {
    styles.push( generatePT(pt[0], factor) )
    mobileStyles.push( generatePT(pt[0], factor) )
    desktopStyles.push( generatePT(pt[1], factor) )
  }
  if (isArray(pt) && pt.length === 3) {
    styles.push( generatePT(pt[0], factor) )
    mobileStyles.push( generatePT(pt[0], factor) )
    tabletStyles.push( generatePT(pt[1], factor) )
    desktopStyles.push( generatePT(pt[2], factor) )
  }
  if (isArray(pt) && pt.length === 4) {
    styles.push( generatePT(pt[0], factor) )
    smallMobileStyles.push( generatePT(pt[0], factor) )
    mobileStyles.push( generatePT(pt[1], factor) )
    tabletStyles.push( generatePT(pt[2], factor) )
    desktopStyles.push( generatePT(pt[3], factor) )
  }
  if (isArray(pt) && pt.length === 5) {
    styles.push( generatePT(pt[0], factor) )
    smallMobileStyles.push( generatePT(pt[0], factor) )
    mobileStyles.push( generatePT(pt[1], factor) )
    tabletStyles.push( generatePT(pt[2], factor) )
    desktopStyles.push( generatePT(pt[3], factor) )
    largeDesktopStyles.push( generatePT(pt[4], factor) )
  }

  if (isArray(pr) && pr.length === 2) {
    styles.push( generatePR(pr[0], factor) )
    mobileStyles.push( generatePR(pr[0], factor) )
    desktopStyles.push( generatePR(pr[1], factor) )
  }
  if (isArray(pr) && pr.length === 3) {
    styles.push( generatePR(pr[0], factor) )
    mobileStyles.push( generatePR(pr[0], factor) )
    tabletStyles.push( generatePR(pr[1], factor) )
    desktopStyles.push( generatePR(pr[2], factor) )
  }
  if (isArray(pr) && pr.length === 4) {
    styles.push( generatePR(pr[0], factor) )
    smallMobileStyles.push( generatePR(pr[0], factor) )
    mobileStyles.push( generatePR(pr[1], factor) )
    tabletStyles.push( generatePR(pr[2], factor) )
    desktopStyles.push( generatePR(pr[3], factor) )
  }
  if (isArray(pr) && pr.length === 5) {
    styles.push( generatePR(pr[0], factor) )
    smallMobileStyles.push( generatePR(pr[0], factor) )
    mobileStyles.push( generatePR(pr[1], factor) )
    tabletStyles.push( generatePR(pr[2], factor) )
    desktopStyles.push( generatePR(pr[3], factor) )
    largeDesktopStyles.push( generatePR(pr[4], factor) )
  }

  if (isArray(pb) && pb.length === 2) {
    styles.push( generatePB(pb[0], factor) )
    mobileStyles.push( generatePB(pb[0], factor) )
    desktopStyles.push( generatePB(pb[1], factor) )
  }
  if (isArray(pb) && pb.length === 3) {
    styles.push( generatePB(pb[0], factor) )
    mobileStyles.push( generatePB(pb[0], factor) )
    tabletStyles.push( generatePB(pb[1], factor) )
    desktopStyles.push( generatePB(pb[2], factor) )
  }
  if (isArray(pb) && pb.length === 4) {
    styles.push( generatePT(pb[0], factor) )
    smallMobileStyles.push( generatePT(pb[0], factor) )
    mobileStyles.push( generatePT(pb[1], factor) )
    tabletStyles.push( generatePT(pb[2], factor) )
    desktopStyles.push( generatePT(pb[3], factor) )
  }
  if (isArray(pb) && pb.length === 5) {
    styles.push( generatePT(pb[0], factor) )
    smallMobileStyles.push( generatePT(pb[0], factor) )
    mobileStyles.push( generatePT(pb[1], factor) )
    tabletStyles.push( generatePT(pb[2], factor) )
    desktopStyles.push( generatePT(pb[3], factor) )
    largeDesktopStyles.push( generatePT(pb[4], factor) )
  }

  if (isArray(pl) && pl.length === 2) {
    styles.push( generatePL(pl[0], factor) )
    mobileStyles.push( generatePL(pl[0], factor) )
    desktopStyles.push( generatePL(pl[1], factor) )
  }
  if (isArray(pl) && pl.length === 3) {
    styles.push( generatePL(pl[0], factor) )
    mobileStyles.push( generatePL(pl[0], factor) )
    tabletStyles.push( generatePL(pl[1], factor) )
    desktopStyles.push( generatePL(pl[2], factor) )
  }
  if (isArray(pl) && pl.length === 4) {
    styles.push( generatePL(pl[0], factor) )
    smallMobileStyles.push( generatePL(pl[0], factor) )
    mobileStyles.push( generatePL(pl[1], factor) )
    tabletStyles.push( generatePL(pl[2], factor) )
    desktopStyles.push( generatePL(pl[3], factor) )
  }
  if (isArray(pl) && pl.length === 5) {
    styles.push( generatePL(pl[0], factor) )
    smallMobileStyles.push( generatePL(pl[0], factor) )
    mobileStyles.push( generatePL(pl[1], factor) )
    tabletStyles.push( generatePL(pl[2], factor) )
    desktopStyles.push( generatePL(pl[3], factor) )
    largeDesktopStyles.push( generatePL(pl[4], factor) )
  }

  if (isArray(px) && px.length === 2) {
    styles.push( generatePX(px[0], factor) )
    mobileStyles.push( generatePX(px[0], factor) )
    desktopStyles.push( generatePX(px[1], factor) )
  }
  if (isArray(px) && px.length === 3) {
    styles.push( generatePX(px[0], factor) )
    mobileStyles.push( generatePX(px[0], factor) )
    tabletStyles.push( generatePX(px[1], factor) )
    desktopStyles.push( generatePX(px[2], factor) )
  }
  if (isArray(px) && px.length === 4) {
    styles.push( generatePX(px[0], factor) )
    smallMobileStyles.push( generatePX(px[0], factor) )
    mobileStyles.push( generatePX(px[1], factor) )
    tabletStyles.push( generatePX(px[2], factor) )
    desktopStyles.push( generatePX(px[3], factor) )
  }
  if (isArray(px) && px.length === 5) {
    styles.push( generatePX(px[0], factor) )
    smallMobileStyles.push( generatePX(px[0], factor) )
    mobileStyles.push( generatePX(px[1], factor) )
    tabletStyles.push( generatePX(px[2], factor) )
    desktopStyles.push( generatePX(px[3], factor) )
    largeDesktopStyles.push( generatePX(px[4], factor) )
  }

  if (isArray(py) && py.length === 2) {
    styles.push( generatePY(py[0], factor) )
    mobileStyles.push( generatePY(py[0], factor) )
    desktopStyles.push( generatePY(py[1], factor) )
  }
  if (isArray(py) && py.length === 3) {
    styles.push( generatePY(py[0], factor) )
    mobileStyles.push( generatePY(py[0], factor) )
    tabletStyles.push( generatePY(py[1], factor) )
    desktopStyles.push( generatePY(py[2], factor) )
  }
  if (isArray(py) && py.length === 4) {
    styles.push( generatePY(py[0], factor) )
    smallMobileStyles.push( generatePY(py[0], factor) )
    mobileStyles.push( generatePY(py[1], factor) )
    tabletStyles.push( generatePY(py[2], factor) )
    desktopStyles.push( generatePY(py[3], factor) )
  }
  if (isArray(py) && py.length === 5) {
    styles.push( generatePY(py[0], factor) )
    smallMobileStyles.push( generatePY(py[0], factor) )
    mobileStyles.push( generatePY(py[1], factor) )
    tabletStyles.push( generatePY(py[2], factor) )
    desktopStyles.push( generatePY(py[3], factor) )
    largeDesktopStyles.push( generatePY(py[4], factor) )
  }

  if (isArray(p) && p.length === 2) {
    styles.push( generateP(p[0], factor) )
    mobileStyles.push( generateP(p[0], factor) )
    desktopStyles.push( generateP(p[1], factor) )
  }
  if (isArray(p) && p.length === 3) {
    styles.push( generateP(p[0], factor) )
    mobileStyles.push( generateP(p[0], factor) )
    tabletStyles.push( generateP(p[1], factor) )
    desktopStyles.push( generateP(p[2], factor) )
  }
  if (isArray(p) && p.length === 4) {
    styles.push( generateP(p[0], factor) )
    smallMobileStyles.push( generateP(p[0], factor) )
    mobileStyles.push( generateP(p[1], factor) )
    tabletStyles.push( generateP(p[2], factor) )
    desktopStyles.push( generateP(p[3], factor) )
  }
  if (isArray(p) && p.length === 5) {
    styles.push( generateP(p[0], factor) )
    smallMobileStyles.push( generateP(p[0], factor) )
    mobileStyles.push( generateP(p[1], factor) )
    tabletStyles.push( generateP(p[2], factor) )
    desktopStyles.push( generateP(p[3], factor) )
    largeDesktopStyles.push( generateP(p[4], factor) )
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