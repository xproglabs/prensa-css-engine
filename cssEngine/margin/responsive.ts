import get from 'lodash/get'
import isArray from 'lodash/isArray'

import newMediaQuerie from '../responsiveEngine/mediaquerie'
import { generateMT, generateMR, generateMB, generateML, generateMX, generateMY, generateM } from './parsers'

export function marginResponsive(mt, mr, mb, ml, mx, my, m, theme) {

  const factor = get(theme, 'factors.margin', 1)
  const queries = get(theme, 'queries', {})
  const styles = []
  const smallMobileStyles = []
  const mobileStyles = []
  const tabletStyles = []
  const desktopStyles = []
  const largeDesktopStyles = []

  if (isArray(mt) && mt.length === 2) {
    styles.push( generateMT(mt[0], factor) )
    mobileStyles.push( generateMT(mt[0], factor) )
    desktopStyles.push( generateMT(mt[1], factor) )
  }
  if (isArray(mt) && mt.length === 3) {
    styles.push( generateMT(mt[0], factor) )
    mobileStyles.push( generateMT(mt[0], factor) )
    tabletStyles.push( generateMT(mt[1], factor) )
    desktopStyles.push( generateMT(mt[2], factor) )
  }
  if (isArray(mt) && mt.length === 4) {
    styles.push( generateMT(mt[0], factor) )
    smallMobileStyles.push( generateMT(mt[0], factor) )
    mobileStyles.push( generateMT(mt[1], factor) )
    tabletStyles.push( generateMT(mt[2], factor) )
    desktopStyles.push( generateMT(mt[3], factor) )
  }
  if (isArray(mt) && mt.length === 5) {
    styles.push( generateMT(mt[0], factor) )
    smallMobileStyles.push( generateMT(mt[0], factor) )
    mobileStyles.push( generateMT(mt[1], factor) )
    tabletStyles.push( generateMT(mt[2], factor) )
    desktopStyles.push( generateMT(mt[3], factor) )
    largeDesktopStyles.push( generateMT(mt[4], factor) )
  }

  if (isArray(mr) && mr.length === 2) {
    styles.push( generateMR(mr[0], factor) )
    mobileStyles.push( generateMR(mr[0], factor) )
    desktopStyles.push( generateMR(mr[1], factor) )
  }
  if (isArray(mr) && mr.length === 3) {
    styles.push( generateMR(mr[0], factor) )
    mobileStyles.push( generateMR(mr[0], factor) )
    tabletStyles.push( generateMR(mr[1], factor) )
    desktopStyles.push( generateMR(mr[2], factor) )
  }
  if (isArray(mr) && mr.length === 4) {
    styles.push( generateMR(mr[0], factor) )
    smallMobileStyles.push( generateMR(mr[0], factor) )
    mobileStyles.push( generateMR(mr[1], factor) )
    tabletStyles.push( generateMR(mr[2], factor) )
    desktopStyles.push( generateMR(mr[3], factor) )
  }
  if (isArray(mr) && mr.length === 5) {
    styles.push( generateMR(mr[0], factor) )
    smallMobileStyles.push( generateMR(mr[0], factor) )
    mobileStyles.push( generateMR(mr[1], factor) )
    tabletStyles.push( generateMR(mr[2], factor) )
    desktopStyles.push( generateMR(mr[3], factor) )
    largeDesktopStyles.push( generateMR(mr[4], factor) )
  }

  if (isArray(mb) && mb.length === 2) {
    styles.push( generateMB(mb[0], factor) )
    mobileStyles.push( generateMB(mb[0], factor) )
    desktopStyles.push( generateMB(mb[1], factor) )
  }
  if (isArray(mb) && mb.length === 3) {
    styles.push( generateMB(mb[0], factor) )
    mobileStyles.push( generateMB(mb[0], factor) )
    tabletStyles.push( generateMB(mb[1], factor) )
    desktopStyles.push( generateMB(mb[2], factor) )
  }
  if (isArray(mb) && mb.length === 4) {
    styles.push( generateMB(mb[0], factor) )
    smallMobileStyles.push( generateMB(mb[0], factor) )
    mobileStyles.push( generateMB(mb[1], factor) )
    tabletStyles.push( generateMB(mb[2], factor) )
    desktopStyles.push( generateMB(mb[3], factor) )
  }
  if (isArray(mb) && mb.length === 5) {
    styles.push( generateMB(mb[0], factor) )
    smallMobileStyles.push( generateMB(mb[0], factor) )
    mobileStyles.push( generateMB(mb[1], factor) )
    tabletStyles.push( generateMB(mb[2], factor) )
    desktopStyles.push( generateMB(mb[3], factor) )
    largeDesktopStyles.push( generateMB(mb[4], factor) )
  }

  if (isArray(ml) && ml.length === 2) {
    styles.push( generateML(ml[0], factor) )
    mobileStyles.push( generateML(ml[0], factor) )
    desktopStyles.push( generateML(ml[1], factor) )
  }
  if (isArray(ml) && ml.length === 3) {
    styles.push( generateML(ml[0], factor) )
    mobileStyles.push( generateML(ml[0], factor) )
    tabletStyles.push( generateML(ml[1], factor) )
    desktopStyles.push( generateML(ml[2], factor) )
  }
  if (isArray(ml) && ml.length === 4) {
    styles.push( generateML(ml[0], factor) )
    smallMobileStyles.push( generateML(ml[0], factor) )
    mobileStyles.push( generateML(ml[1], factor) )
    tabletStyles.push( generateML(ml[2], factor) )
    desktopStyles.push( generateML(ml[3], factor) )
  }
  if (isArray(ml) && ml.length === 5) {
    styles.push( generateML(ml[0], factor) )
    smallMobileStyles.push( generateML(ml[0], factor) )
    mobileStyles.push( generateML(ml[1], factor) )
    tabletStyles.push( generateML(ml[2], factor) )
    desktopStyles.push( generateML(ml[3], factor) )
    largeDesktopStyles.push( generateML(ml[4], factor) )
  }

  if (isArray(mx) && mx.length === 2) {
    styles.push( generateMX(mx[0], factor) )
    mobileStyles.push( generateMX(mx[0], factor) )
    desktopStyles.push( generateMX(mx[1], factor) )
  }
  if (isArray(mx) && mx.length === 3) {
    styles.push( generateMX(mx[0], factor) )
    mobileStyles.push( generateMX(mx[0], factor) )
    tabletStyles.push( generateMX(mx[1], factor) )
    desktopStyles.push( generateMX(mx[2], factor) )
  }
  if (isArray(mx) && mx.length === 4) {
    styles.push( generateMX(mx[0], factor) )
    smallMobileStyles.push( generateMX(mx[0], factor) )
    mobileStyles.push( generateMX(mx[1], factor) )
    tabletStyles.push( generateMX(mx[2], factor) )
    desktopStyles.push( generateMX(mx[3], factor) )
  }
  if (isArray(mx) && mx.length === 5) {
    styles.push( generateMX(mx[0], factor) )
    smallMobileStyles.push( generateMX(mx[0], factor) )
    mobileStyles.push( generateMX(mx[1], factor) )
    tabletStyles.push( generateMX(mx[2], factor) )
    desktopStyles.push( generateMX(mx[3], factor) )
    largeDesktopStyles.push( generateMX(mx[4], factor) )
  }

  if (isArray(my) && my.length === 2) {
    styles.push( generateMY(my[0], factor) )
    mobileStyles.push( generateMY(my[0], factor) )
    desktopStyles.push( generateMY(my[1], factor) )
  }
  if (isArray(my) && my.length === 3) {
    styles.push( generateMY(my[0], factor) )
    mobileStyles.push( generateMY(my[0], factor) )
    tabletStyles.push( generateMY(my[1], factor) )
    desktopStyles.push( generateMY(my[2], factor) )
  }
  if (isArray(my) && my.length === 4) {
    styles.push( generateMY(my[0], factor) )
    smallMobileStyles.push( generateMY(my[0], factor) )
    mobileStyles.push( generateMY(my[1], factor) )
    tabletStyles.push( generateMY(my[2], factor) )
    desktopStyles.push( generateMY(my[3], factor) )
  }
  if (isArray(my) && my.length === 5) {
    styles.push( generateMY(my[0], factor) )
    smallMobileStyles.push( generateMY(my[0], factor) )
    mobileStyles.push( generateMY(my[1], factor) )
    tabletStyles.push( generateMY(my[2], factor) )
    desktopStyles.push( generateMY(my[3], factor) )
    largeDesktopStyles.push( generateMY(my[4], factor) )
  }

  if (isArray(m) && m.length === 2) {
    styles.push( generateM(m[0], factor) )
    mobileStyles.push( generateM(m[0], factor) )
    desktopStyles.push( generateM(m[1], factor) )
  }
  if (isArray(m) && m.length === 3) {
    styles.push( generateM(m[0], factor) )
    mobileStyles.push( generateM(m[0], factor) )
    tabletStyles.push( generateM(m[1], factor) )
    desktopStyles.push( generateM(m[2], factor) )
  }
  if (isArray(m) && m.length === 4) {
    styles.push( generateM(m[0], factor) )
    smallMobileStyles.push( generateM(m[0], factor) )
    mobileStyles.push( generateM(m[1], factor) )
    tabletStyles.push( generateM(m[2], factor) )
    desktopStyles.push( generateM(m[3], factor) )
  }
  if (isArray(m) && m.length === 5) {
    styles.push( generateM(m[0], factor) )
    smallMobileStyles.push( generateM(m[0], factor) )
    mobileStyles.push( generateM(m[1], factor) )
    tabletStyles.push( generateM(m[2], factor) )
    desktopStyles.push( generateM(m[3], factor) )
    largeDesktopStyles.push( generateM(m[4], factor) )
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