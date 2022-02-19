import get from 'lodash/get'
import isArray from 'lodash/isArray'

import newMediaQuerie from '../responsiveEngine/mediaquerie'
import { parseAlign, parseAlignX, parseAlignY } from './parsers'

export function alignResponsive(align, alignx, aligny, theme) {  

  const queries = get(theme, 'queries', {})
  const styles = []
  const sm = []
  const md = []
  const lg = []
  const xl = []

  if (isArray(align)) {
    if (align.length === 2) {
      sm.push(parseAlign(align[0]))
      lg.push(parseAlign(align[1]))
    }
    if (align.length === 3) {
      sm.push(parseAlign(align[0]))
      md.push(parseAlign(align[1]))
      lg.push(parseAlign(align[2]))
    }
    if (align.length === 4) {
      sm.push(parseAlign(align[0]))
      md.push(parseAlign(align[1]))
      lg.push(parseAlign(align[2]))
      xl.push(parseAlign(align[3]))
    }
    
    if (alignx.length === 2) {
      sm.push(parseAlignX(align[0], alignx[0]))
      lg.push(parseAlignX(align[1], alignx[1]))
    }
    if (alignx.length === 3) {
      sm.push(parseAlignX(align[0], alignx[0]))
      md.push(parseAlignX(align[1], alignx[1]))
      lg.push(parseAlignX(align[2], alignx[2]))
    }
    if (alignx.length === 4) {
      sm.push(parseAlignX(align[0], alignx[0]))
      md.push(parseAlignX(align[1], alignx[1]))
      lg.push(parseAlignX(align[2], alignx[2]))
      xl.push(parseAlignX(align[3], alignx[3]))
    }

    if (aligny.length === 2) {
      sm.push(parseAlignY(align[0], aligny[0]))
      lg.push(parseAlignY(align[1], aligny[1]))
    }
    if (aligny.length === 3) {
      sm.push(parseAlignY(align[0], aligny[0]))
      md.push(parseAlignY(align[1], aligny[1]))
      lg.push(parseAlignY(align[2], aligny[2]))
    }
    if (aligny.length === 4) {
      sm.push(parseAlignY(align[0], aligny[0]))
      md.push(parseAlignY(align[1], aligny[1]))
      lg.push(parseAlignY(align[2], aligny[2]))
      xl.push(parseAlignY(align[3], aligny[3]))
    }
  }

  styles.push(
    sm.join('')
  )
  styles.push(
    newMediaQuerie(
      md.join(''),
      queries.md
    )
  )
  styles.push(
    newMediaQuerie(
      lg.join(''),
      queries.lg
    )
  )
  styles.push(
    newMediaQuerie(
      xl.join(''),
      queries.xl
    )
  )

  return styles.join('')
}