import { fontWeight } from './index'

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

describe('fontWeight styled function', () => {
  test('fontWeight', () => {
    expect(
      fontWeight({
        fontWeight: 400,
        theme
      })
    ).toBe(
      'font-weight:400;'
    )
  })

  test('fontWeight responsive (mobile/desktop)', () => {
    expect(
      fontWeight({
        fontWeight: [400, 700],
        theme
      })
    ).toBe(
      'font-weight:400;@media(min-width:460px){font-weight:400;}@media(min-width:1016px){font-weight:700;}'
    )
  })
  test('fontWeight responsive (mobile/tablet/desktop) ', () => {
    expect(
      fontWeight({
        fontWeight: [400, 600, 700],
        theme
      })
    ).toBe(
      'font-weight:400;@media(min-width:460px){font-weight:400;}@media(min-width:768px){font-weight:600;}@media(min-width:1016px){font-weight:700;}'
    )
  })
})