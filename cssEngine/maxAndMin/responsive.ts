import get from 'lodash/get'
import isArray from 'lodash/isArray'

import newMediaQuerie from '../responsiveEngine/mediaquerie'
import { generateMaxHeight, generateMaxWidth, generateMinHeight, generateMinWidth } from './parsers'

export function maxAndMinResponsive(maxHeight, maxWidth, minHeight, minWidth, theme) {

  const queries = get(theme, 'queries', {})
  const styles = []
  const smallMobileStyles = []
  const mobileStyles = []
  const tabletStyles = []
  const desktopStyles = []
  const largeDesktopStyles = []

  if (isArray(maxHeight) && maxHeight.length === 2) {
    styles.push(generateMaxHeight(maxHeight[0]))
    mobileStyles.push(generateMaxHeight(maxHeight[0]))
    desktopStyles.push(generateMaxHeight(maxHeight[1]))
  }
  if (isArray(maxHeight) && maxHeight.length === 3) {
    styles.push(generateMaxHeight(maxHeight[0]))
    mobileStyles.push(generateMaxHeight(maxHeight[0]))
    tabletStyles.push(generateMaxHeight(maxHeight[1]))
    desktopStyles.push(generateMaxHeight(maxHeight[2]))
  }
  if (isArray(maxHeight) && maxHeight.length === 4) {
    styles.push(generateMaxHeight(maxHeight[0]))
    smallMobileStyles.push(generateMaxHeight(maxHeight[0]))
    mobileStyles.push(generateMaxHeight(maxHeight[1]))
    tabletStyles.push(generateMaxHeight(maxHeight[2]))
    desktopStyles.push(generateMaxHeight(maxHeight[3]))
  }
  if (isArray(maxHeight) && maxHeight.length === 5) {
    styles.push(generateMaxHeight(maxHeight[0]))
    smallMobileStyles.push(generateMaxHeight(maxHeight[0]))
    mobileStyles.push(generateMaxHeight(maxHeight[1]))
    tabletStyles.push(generateMaxHeight(maxHeight[2]))
    desktopStyles.push(generateMaxHeight(maxHeight[3]))
    largeDesktopStyles.push(generateMaxHeight(maxHeight[4]))
  }

  if (isArray(maxWidth) && maxWidth.length === 2) {
    styles.push(generateMaxWidth(maxWidth[0]))
    mobileStyles.push(generateMaxWidth(maxWidth[0]))
    desktopStyles.push(generateMaxWidth(maxWidth[1]))
  }
  if (isArray(maxWidth) && maxWidth.length === 3) {
    styles.push(generateMaxWidth(maxWidth[0]))
    mobileStyles.push(generateMaxWidth(maxWidth[0]))
    tabletStyles.push(generateMaxWidth(maxWidth[1]))
    desktopStyles.push(generateMaxWidth(maxWidth[2]))
  }
  if (isArray(maxWidth) && maxWidth.length === 4) {
    styles.push(generateMaxWidth(maxWidth[0]))
    smallMobileStyles.push(generateMaxWidth(maxWidth[0]))
    mobileStyles.push(generateMaxWidth(maxWidth[1]))
    tabletStyles.push(generateMaxWidth(maxWidth[2]))
    desktopStyles.push(generateMaxWidth(maxWidth[3]))
  }
  if (isArray(maxWidth) && maxWidth.length === 5) {
    styles.push(generateMaxWidth(maxWidth[0]))
    smallMobileStyles.push(generateMaxWidth(maxWidth[0]))
    mobileStyles.push(generateMaxWidth(maxWidth[1]))
    tabletStyles.push(generateMaxWidth(maxWidth[2]))
    desktopStyles.push(generateMaxWidth(maxWidth[3]))
    largeDesktopStyles.push(generateMaxWidth(maxWidth[4]))
  }

  if (isArray(minHeight) && minHeight.length === 2) {
    styles.push(generateMinHeight(minHeight[0]))
    mobileStyles.push(generateMinHeight(minHeight[0]))
    desktopStyles.push(generateMinHeight(minHeight[1]))
  }
  if (isArray(minHeight) && minHeight.length === 3) {
    styles.push(generateMinHeight(minHeight[0]))
    mobileStyles.push(generateMinHeight(minHeight[0]))
    tabletStyles.push(generateMinHeight(minHeight[1]))
    desktopStyles.push(generateMinHeight(minHeight[2]))
  }
  if (isArray(minHeight) && minHeight.length === 4) {
    styles.push(generateMinHeight(minHeight[0]))
    smallMobileStyles.push(generateMinHeight(minHeight[0]))
    mobileStyles.push(generateMinHeight(minHeight[1]))
    tabletStyles.push(generateMinHeight(minHeight[2]))
    desktopStyles.push(generateMinHeight(minHeight[3]))
  }
  if (isArray(minHeight) && minHeight.length === 5) {
    styles.push(generateMinHeight(minHeight[0]))
    smallMobileStyles.push(generateMinHeight(minHeight[0]))
    mobileStyles.push(generateMinHeight(minHeight[1]))
    tabletStyles.push(generateMinHeight(minHeight[2]))
    desktopStyles.push(generateMinHeight(minHeight[3]))
    largeDesktopStyles.push(generateMinHeight(minHeight[4]))
  }

  if (isArray(minWidth) && minWidth.length === 2) {
    styles.push(generateMinWidth(minWidth[0]))
    mobileStyles.push(generateMinWidth(minWidth[0]))
    desktopStyles.push(generateMinWidth(minWidth[1]))
  }
  if (isArray(minWidth) && minWidth.length === 3) {
    styles.push(generateMinWidth(minWidth[0]))
    mobileStyles.push(generateMinWidth(minWidth[0]))
    tabletStyles.push(generateMinWidth(minWidth[1]))
    desktopStyles.push(generateMinWidth(minWidth[2]))
  }
  if (isArray(minWidth) && minWidth.length === 4) {
    styles.push(generateMinWidth(minWidth[0]))
    smallMobileStyles.push(generateMinWidth(minWidth[0]))
    mobileStyles.push(generateMinWidth(minWidth[1]))
    tabletStyles.push(generateMinWidth(minWidth[2]))
    desktopStyles.push(generateMinWidth(minWidth[3]))
  }
  if (isArray(minWidth) && minWidth.length === 5) {
    styles.push(generateMinWidth(minWidth[0]))
    smallMobileStyles.push(generateMinWidth(minWidth[0]))
    mobileStyles.push(generateMinWidth(minWidth[1]))
    tabletStyles.push(generateMinWidth(minWidth[2]))
    desktopStyles.push(generateMinWidth(minWidth[3]))
    largeDesktopStyles.push(generateMinWidth(minWidth[4]))
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