import get from 'lodash/get'
import isArray from 'lodash/isArray'

import newMediaQuerie from '../responsiveEngine/mediaquerie'
import { findColorValue } from './parsers'

export function colorResponsive(color, bgColor, theme) {

  const queries = get(theme, 'queries', {})

  const styles = []
  const mobileStyles = []
  const tabletStyles = []
  const desktopStyles = []

  if (isArray(color) && color.length === 2) {
    mobileStyles.push(findColorValue(color[0], theme))
    desktopStyles.push(findColorValue(color[1], theme))
  }
  if (isArray(color) && color.length === 3) {
    mobileStyles.push(findColorValue(color[0], theme))
    tabletStyles.push(findColorValue(color[1], theme))
    desktopStyles.push(findColorValue(color[2], theme))
  }

  if (isArray(bgColor) && bgColor.length === 2) {
    mobileStyles.push(findColorValue(color[0], theme))
    desktopStyles.push(findColorValue(color[1], theme))
  }
  if (isArray(bgColor) && bgColor.length === 3) {
    mobileStyles.push(findColorValue(bgColor[0], theme))
    tabletStyles.push(findColorValue(bgColor[1], theme))
    desktopStyles.push(findColorValue(bgColor[2], theme))
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