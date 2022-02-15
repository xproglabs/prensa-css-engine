import get from 'lodash/get'
import isArray from 'lodash/isArray'

import newMediaQuerie from '../responsiveEngine/mediaquerie'
import { generateBoxShadow } from './parsers'

export function boxShadowResponsive(boxShadow, theme) {

  const queries = get(theme, 'queries', {})
  const styles = []
  const mobileStyles = []
  const tabletStyles = []
  const desktopStyles = []

  if (isArray(boxShadow) && boxShadow.length === 2) {
    mobileStyles.push(generateBoxShadow(boxShadow[0]))
    desktopStyles.push(generateBoxShadow(boxShadow[1]))
  }
  if (isArray(boxShadow) && boxShadow.length === 3) {
    mobileStyles.push(generateBoxShadow(boxShadow[0]))
    tabletStyles.push(generateBoxShadow(boxShadow[1]))
    desktopStyles.push(generateBoxShadow(boxShadow[2]))
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