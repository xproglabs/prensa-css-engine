import { lineHeight } from './index'

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
    lineHeight: 8
  },
  queries: {
    xs: '360px',
    sm: '460px',
    md: '768px',
    lg: '1016px',
    xl: '1280px'
  }
}

describe('lineHeight styled function', () => {
  test('lineHeight-string', () => {
    expect(
      lineHeight({
        lineHeight: '100%',
        theme
      })
    ).toBe(
      'line-height:100%;'
    )
  })

  test('lineHeight-number', () => {
    expect(
      lineHeight({
        lineHeight: 1,
        theme
      })
    ).toBe(
      'line-height:8px;'
    )
  })

  test('lineHeight responsive string (mobile/desktop)', () => {
    expect(
      lineHeight({
        lineHeight: ['24px', '110%'],
        theme
      })
    ).toBe(
      'line-height:24px;@media(min-width:460px){line-height:24px;}@media(min-width:1016px){line-height:110%;}'
    )
  })
  test('lineHeight responsive string (mobile/tablet/desktop) ', () => {
    expect(
      lineHeight({
        lineHeight: ['16px', '110%', '120%'],
        theme
      })
    ).toBe(
      'line-height:16px;@media(min-width:460px){line-height:16px;}@media(min-width:768px){line-height:110%;}@media(min-width:1016px){line-height:120%;}'
    )
  })

  test('lineHeight responsive number (mobile/desktop)', () => {
    expect(
      lineHeight({
        lineHeight: [2, 3],
        theme
      })
    ).toBe(
      'line-height:16px;@media(min-width:460px){line-height:16px;}@media(min-width:1016px){line-height:24px;}'
    )
  })
  test('lineHeight responsive number (mobile/tablet/desktop) ', () => {
    expect(
      lineHeight({
        lineHeight: [2, 3, 4],
        theme
      })
    ).toBe(
      'line-height:16px;@media(min-width:460px){line-height:16px;}@media(min-width:768px){line-height:24px;}@media(min-width:1016px){line-height:32px;}'
    )
  })
})