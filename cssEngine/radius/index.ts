import { RadiusProps } from '@xprog/prensa-css-engine/props'

import { generateBorderRadius } from './parsers'
import { radiusResponsive } from './responsive'

export function radius({ $radius, theme }: RadiusProps) {

  const styles = []

  if ($radius) {
    styles.push(
      generateBorderRadius(
        $radius,
        theme
      )
    )
  }

  styles.push(
    radiusResponsive(
      $radius,
      theme
    )
  )

  return styles.join('')
}