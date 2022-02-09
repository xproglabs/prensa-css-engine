export default function generateNewMediaQuerie(css, querie) {
  if (!css || css === '') return ''
  return `@media(min-width:${querie}){${css}}`
}