export function parseAlignX(align, alignx) {

  const styles = []
  let alignItems = ''
  let justifyContent = ''

  if (align === 'column' || align === 'column-reverse') {
    if (alignx === 'left') alignItems = 'flex-start'
    if (alignx === 'center') alignItems = 'center'
    if (alignx === 'right') alignItems = 'flex-end'
    if (alignx === 'evenly') justifyContent = 'space-evenly'
    if (alignx === 'between') justifyContent = 'space-between'
  }

  if (align === 'row' || align === 'row-reverse') {
    if (alignx === 'left') justifyContent = 'flex-start'
    if (alignx === 'center') justifyContent = 'center'
    if (alignx === 'right') justifyContent = 'flex-end'
    if (alignx === 'evenly') justifyContent = 'space-evenly'
    if (alignx === 'between') justifyContent = 'space-between'
  }

  alignItems !== '' && styles.push(`align-items: ${alignItems};`)
  justifyContent !== '' && styles.push(`justify-content: ${justifyContent};`)

  return styles.join('')
}

export function parseAlignY(align, aligny) {

  const styles = []
  let alignItems = ''
  let justifyContent = ''

  if (align === 'column' || align === 'column-reverse') {
    if (aligny === 'top') justifyContent = 'flex-start'
    if (aligny === 'middle') justifyContent = 'center'
    if (aligny === 'bottom') justifyContent = 'flex-end'
    if (aligny === 'evenly') justifyContent = 'space-evenly'
    if (aligny === 'between') justifyContent = 'space-between'
  }

  if (align === 'row' || align === 'row-reverse') {
    if (aligny === 'top') alignItems = 'flex-start'
    if (aligny === 'middle') alignItems = 'center'
    if (aligny === 'bottom') alignItems = 'flex-end'
    if (aligny === 'evenly') justifyContent = 'space-evenly'
    if (aligny === 'between') justifyContent = 'space-between'
  }

  alignItems !== '' && styles.push(`align-items: ${alignItems};`)
  justifyContent !== '' && styles.push(`justify-content: ${justifyContent};`)

  return styles.join('')
}

export function parseAlign(align) {
  const styles = []
  let flexDirection = ''

  if (align === 'row') {
    flexDirection = 'row'
  }
  if (align === 'row-reverse') {
    flexDirection = 'row-reverse'
  }
  if (align === 'column') {
    flexDirection = 'column'
  }
  if (align === 'column-reverse') {
    flexDirection = 'column-reverse'
  }

  flexDirection !== '' && styles.push(`flex-direction: ${flexDirection};`)

  return styles.join('')
}