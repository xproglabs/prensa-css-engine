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

  const color0 = get(color, '0', '')
  const color1 = get(color, '1', '')
  const color2 = get(color, '2', '')

  const bgColor0 = get(bgColor, '0', '')
  const bgColor1 = get(bgColor, '1', '')
  const bgColor2 = get(bgColor, '2', '')

  if (isArray(color) && color.length === 2) {
    mobileStyles.push(`color:${findColorValue(color0, theme)};`)
    desktopStyles.push(`color:${findColorValue(color1, theme)};`)
  }
  if (isArray(color) && color.length === 3) {
    mobileStyles.push(`color:${findColorValue(color0, theme)};`)
    tabletStyles.push(`color:${findColorValue(color1, theme)};`)
    desktopStyles.push(`color:${findColorValue(color2, theme)};`)
  }

  if (isArray(bgColor) && bgColor.length === 2) {
    mobileStyles.push(`background-color:${findColorValue(bgColor0, theme)};`)
    desktopStyles.push(`background-color:${findColorValue(bgColor1, theme)};`)
  }
  if (isArray(bgColor) && bgColor.length === 3) {
    mobileStyles.push(`background-color:${findColorValue(bgColor0, theme)};`)
    tabletStyles.push(`background-color:${findColorValue(bgColor1, theme)};`)
    desktopStyles.push(`background-color:${findColorValue(bgColor2, theme)};`)
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