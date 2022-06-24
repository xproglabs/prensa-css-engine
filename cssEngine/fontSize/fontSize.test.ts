import { fontSize } from './index'

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
    fontSize: 8
  },
  queries: {
    xs: '360px',
    sm: '460px',
    md: '768px',
    lg: '1016px',
    xl: '1280px'
  }
}

describe('fontSize styled function', () => {
  test('fontSize-string', () => {
    expect(
      fontSize({
        fontSize: '16px',
        theme
      })
    ).toBe(
      'font-size:16px;'
    )
  })

  test('fontSize-number', () => {
    expect(
      fontSize({
        fontSize: 2,
        theme
      })
    ).toBe(
      'font-size:16px;'
    )
  })

  test('fontSize responsive string (mobile/desktop)', () => {
    expect(
      fontSize({
        fontSize: ['16px', '24px'],
        theme
      })
    ).toBe(
      'font-size:16px;@media(min-width:460px){font-size:16px;}@media(min-width:1016px){font-size:24px;}'
    )
  })
  test('fontSize responsive string (mobile/tablet/desktop) ', () => {
    expect(
      fontSize({
        fontSize: ['16px', '24px', '32px'],
        theme
      })
    ).toBe(
      'font-size:16px;@media(min-width:460px){font-size:16px;}@media(min-width:768px){font-size:24px;}@media(min-width:1016px){font-size:32px;}'
    )
  })

  test('fontSize responsive number (mobile/desktop)', () => {
    expect(
      fontSize({
        fontSize: [2, 3],
        theme
      })
    ).toBe(
      'font-size:16px;@media(min-width:460px){font-size:16px;}@media(min-width:1016px){font-size:24px;}'
    )
  })
  test('fontSize responsive number (mobile/tablet/desktop) ', () => {
    expect(
      fontSize({
        fontSize: [2, 3, 4],
        theme
      })
    ).toBe(
      'font-size:16px;@media(min-width:460px){font-size:16px;}@media(min-width:768px){font-size:24px;}@media(min-width:1016px){font-size:32px;}'
    )
  })
})