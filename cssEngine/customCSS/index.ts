import { CustomCSSProps } from '@xprog/prensa-css-engine/props'
import isArray from 'lodash/isArray'

import { createResponsiveStyle } from '../responsiveEngine'

export function customCSS({ custom, theme }: CustomCSSProps) {
  if (!custom) return ''

  const css = []

  if (isArray(custom)) {
    css.push(
      createResponsiveStyle(
        custom,
        pos => custom[pos],
        theme
      )
    )
  } else {
    css.push(
      custom
    )
  }

  return css.join('').replace(/\s+/g, '')
}