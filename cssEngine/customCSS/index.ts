import { CustomCSSProps } from '@xprog/prensa-css-engine/props'

export function customCSS({ custom }: CustomCSSProps) {
  return custom.replace(/\s+/g, '')
}