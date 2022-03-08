import get from 'lodash/get'

import newMediaQuerie from './mediaquerie'

export function createResponsiveStyle(value, parser, theme) {

  const queries = get(theme, 'queries', {})
  const responsiveModel = value.length
  const styles = []
  const xs = []
  const sm = []
  const md = []
  const lg = []
  const xl = []

  styles.push(
    parser(0)
  )

  if (responsiveModel === 1) {
    xs.push(
      parser(0)
    )
  }
  if (responsiveModel === 2) {
    sm.push(
      parser(0)
    )
    lg.push(
      parser(1)
    )
  }
  if (responsiveModel === 3) {
    sm.push(
      parser(0)
    )
    md.push(
      parser(1)
    )
    lg.push(
      parser(2)
    )
  }
  if (responsiveModel === 4) {
    xs.push(
      parser(0)
    )
    sm.push(
      parser(1)
    )
    md.push(
      parser(2)
    )
    lg.push(
      parser(3)
    )
  }
  if (responsiveModel === 5) {
    xs.push(
      parser(0)
    )
    sm.push(
      parser(1)
    )
    md.push(
      parser(2)
    )
    lg.push(
      parser(3)
    )
    xl.push(
      parser(4)
    )
  }

  styles.push(
    newMediaQuerie(
      xs.join(''),
      queries.xs
    )
  )

  styles.push(
    newMediaQuerie(
      sm.join(''),
      queries.sm
    )
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