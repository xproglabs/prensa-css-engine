import { fontFamily } from './index'

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

describe('fontFamily styled function', () => {
  test('fontFamily', () => {
    expect(
      fontFamily({
        $fontFamily: 'primary',
        theme
      })
    ).toBe(
      'font-family:Roboto;'
    )
  })

  test('fontFamily responsive (mobile/desktop)', () => {
    expect(
      fontFamily({
        $fontFamily: ['primary', 'secondary'],
        theme
      })
    ).toBe(
      'font-family:Roboto;@media(min-width:460px){font-family:Roboto;}@media(min-width:1016px){font-family:Nunito Sans;}'
    )
  })
  test('fontFamily responsive (mobile/tablet/desktop) ', () => {
    expect(
      fontFamily({
        $fontFamily: ['primary', 'secondary', 'primary'],
        theme
      })
    ).toBe(
      'font-family:Roboto;@media(min-width:460px){font-family:Roboto;}@media(min-width:768px){font-family:Nunito Sans;}@media(min-width:1016px){font-family:Roboto;}'
    )
  })
})