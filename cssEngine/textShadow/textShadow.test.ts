import { textShadow } from './index'

const theme = {
  queries: {
    xs: '360px',
    sm: '460px',
    md: '768px',
    lg: '1016px',
    xl: '1280px'
  }
}

describe('textShadow styled function', () => {
  test('textShadow', () => {
    expect(
      textShadow({
        textShadow: '2px 2px #FF0000',
        theme
      })
    ).toBe(
      'text-shadow:2px 2px #FF0000;'
    )
  })

  test('textShadow responsive (mobile/desktop)', () => {
    expect(
      textShadow({
        textShadow: ['2px 2px #FF0000', '4px 4px #FFFFFF'],
        theme
      })
    ).toBe(
      'text-shadow:2px 2px #FF0000;@media(min-width:460px){text-shadow:2px 2px #FF0000;}@media(min-width:1016px){text-shadow:4px 4px #FFFFFF;}'
    )
  })
  test('textShadow responsive (mobile/tablet/desktop) ', () => {
    expect(
      textShadow({
        textShadow: ['2px 2px #FF0000', '4px 4px #FFFFFF', '6px 6px #FF0000'],
        theme
      })
    ).toBe(
      'text-shadow:2px 2px #FF0000;@media(min-width:460px){text-shadow:2px 2px #FF0000;}@media(min-width:768px){text-shadow:4px 4px #FFFFFF;}@media(min-width:1016px){text-shadow:6px 6px #FF0000;}'
    )
  })
})