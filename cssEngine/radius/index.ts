import { RadiusProps } from '@xprog/prensa-css-engine/props'
import isArray from 'lodash/isArray'

import { createResponsiveStyle } from '../responsiveEngine'
import { generateBorderRadius } from './parsers'

export function radius({ $radius, theme }: RadiusProps) {

  const styles = []

  if (isArray($radius)) {
    styles.push(
      createResponsiveStyle(
        $radius,
        pos => generateBorderRadius($radius[pos], theme),
        theme
      )
    )
  } else {
    styles.push(
      generateBorderRadius(
        $radius,
        theme
      )
    )
  }

  return styles.join('')
}