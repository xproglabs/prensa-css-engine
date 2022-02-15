import { CustomCSSProps } from '@xprog/prensa-css-engine/props'

export function customCSS({ custom }: CustomCSSProps) {
  if (!custom) return ''
  return custom.replace(/\s+/g, '')
}