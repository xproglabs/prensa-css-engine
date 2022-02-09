import get from 'lodash/get'
import isArray from 'lodash/isArray'

import newMediaQuerie from '../responsiveEngine/mediaquerie'
import { generateWidth } from './parsers'

export function widthResponsive(width, theme) {
  
  const factor = get(theme, 'factors.dimensions', 1)
  const queries = get(theme, 'queries', {})
  const styles = []
  const mobileStyles = []
  const tabletStyles = []
  const desktopStyles = []

  if (isArray(width) && width.length === 2) {
    mobileStyles.push( generateWidth(width[0], factor) )
    desktopStyles.push( generateWidth(width[1], factor) )
  }
  if (isArray(width) && width.length === 3) {
    mobileStyles.push( generateWidth(width[0], factor) )
    tabletStyles.push( generateWidth(width[1], factor) )
    desktopStyles.push( generateWidth(width[2], factor) )
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