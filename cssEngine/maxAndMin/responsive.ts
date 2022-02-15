import get from 'lodash/get'
import isArray from 'lodash/isArray'

import newMediaQuerie from '../responsiveEngine/mediaquerie'
import { generateMaxHeight, generateMaxWidth, generateMinHeight, generateMinWidth } from './parsers'

export function maxAndMinResponsive(maxHeight, maxWidth, minHeight, minWidth, theme) {

  const queries = get(theme, 'queries', {})
  const styles = []
  const mobileStyles = []
  const tabletStyles = []
  const desktopStyles = []

  if (isArray(maxHeight) && maxHeight.length === 2) {
    mobileStyles.push(generateMaxHeight(maxHeight[0]))
    desktopStyles.push(generateMaxHeight(maxHeight[1]))
  }
  if (isArray(maxHeight) && maxHeight.length === 3) {
    mobileStyles.push(generateMaxHeight(maxHeight[0]))
    tabletStyles.push(generateMaxHeight(maxHeight[1]))
    desktopStyles.push(generateMaxHeight(maxHeight[2]))
  }

  if (isArray(maxWidth) && maxWidth.length === 2) {
    mobileStyles.push(generateMaxWidth(maxWidth[0]))
    desktopStyles.push(generateMaxWidth(maxWidth[1]))
  }
  if (isArray(maxWidth) && maxWidth.length === 3) {
    mobileStyles.push(generateMaxWidth(maxWidth[0]))
    tabletStyles.push(generateMaxWidth(maxWidth[1]))
    desktopStyles.push(generateMaxWidth(maxWidth[2]))
  }

  if (isArray(minHeight) && minHeight.length === 2) {
    mobileStyles.push(generateMinHeight(minHeight[0]))
    desktopStyles.push(generateMinHeight(minHeight[1]))
  }
  if (isArray(minHeight) && minHeight.length === 3) {
    mobileStyles.push(generateMinHeight(minHeight[0]))
    tabletStyles.push(generateMinHeight(minHeight[1]))
    desktopStyles.push(generateMinHeight(minHeight[2]))
  }

  if (isArray(minWidth) && minWidth.length === 2) {
    mobileStyles.push(generateMinWidth(minWidth[0]))
    desktopStyles.push(generateMinWidth(minWidth[1]))
  }
  if (isArray(minWidth) && minWidth.length === 3) {
    mobileStyles.push(generateMinWidth(minWidth[0]))
    tabletStyles.push(generateMinWidth(minWidth[1]))
    desktopStyles.push(generateMinWidth(minWidth[2]))
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