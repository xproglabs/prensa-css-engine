import { letterSpacing } from './index'

const theme = {
  colors: {
    black: '#000000',
    neutral1: '#151515',
    white: '#FFFFFF'
  },
  fonts: {
    primary: 'Roboto',
    secondary: 'Nunito Sans'
  },
  factors: {
    fontSize: 8,
    lineHeight: 8,
    letterSpacing: 2
  },
  queries: {
    xs: '360px',
    sm: '460px',
    md: '768px',
    lg: '1016px',
    xl: '1280px'
  }
}

describe('letterSpacing styled function', () => {
  test('letterSpacing-string', () => {
    expect(
      letterSpacing({
        letterSpacing: '100%',
        theme
      })
    ).toBe(
      'letter-spacing:100%;'
    )
  })

  test('letterSpacing-number', () => {
    expect(
      letterSpacing({
        letterSpacing: 1,
        theme
      })
    ).toBe(
      'letter-spacing:2px;'
    )
  })

  test('letterSpacing responsive string (mobile/desktop)', () => {
    expect(
      letterSpacing({
        letterSpacing: ['1px', '100%'],
        theme
      })
    ).toBe(
      'letter-spacing:1px;@media(min-width:460px){letter-spacing:1px;}@media(min-width:1016px){letter-spacing:100%;}'
    )
  })
  test('letterSpacing responsive string (mobile/tablet/desktop) ', () => {
    expect(
      letterSpacing({
        letterSpacing: ['1px', '110%', '120%'],
        theme
      })
    ).toBe(
      'letter-spacing:1px;@media(min-width:460px){letter-spacing:1px;}@media(min-width:768px){letter-spacing:110%;}@media(min-width:1016px){letter-spacing:120%;}'
    )
  })

  test('letterSpacing responsive number (mobile/desktop)', () => {
    expect(
      letterSpacing({
        letterSpacing: [2, 3],
        theme
      })
    ).toBe(
      'letter-spacing:4px;@media(min-width:460px){letter-spacing:4px;}@media(min-width:1016px){letter-spacing:6px;}'
    )
  })
  test('letterSpacing responsive number (mobile/tablet/desktop) ', () => {
    expect(
      letterSpacing({
        letterSpacing: [2, 3, 4],
        theme
      })
    ).toBe(
      'letter-spacing:4px;@media(min-width:460px){letter-spacing:4px;}@media(min-width:768px){letter-spacing:6px;}@media(min-width:1016px){letter-spacing:8px;}'
    )
  })
})