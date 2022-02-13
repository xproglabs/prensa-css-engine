import get from 'lodash/get'
import isArray from 'lodash/isArray'

import newMediaQuerie from '../responsiveEngine/mediaquerie'
import { generateBorderRadius } from './parsers'

export function radiusResponsive(radius, theme) {

  const queries = get(theme, 'queries', {})

  const styles = []
  const mobileStyles = []
  const tabletStyles = []
  const desktopStyles = []

  if (isArray(radius) && radius.length === 2) {
    mobileStyles.push( generateBorderRadius(radius[0], theme) )
    desktopStyles.push( generateBorderRadius(radius[1], theme) )
  }
  if (isArray(radius) && radius.length === 3) {
    mobileStyles.push( generateBorderRadius(radius[0], theme) )
    tabletStyles.push( generateBorderRadius(radius[1], theme) )
    desktopStyles.push( generateBorderRadius(radius[2], theme) )
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