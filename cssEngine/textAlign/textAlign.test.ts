import { textAlign } from './index'

const theme = {
  queries: {
    xs: '360px',
    sm: '460px',
    md: '768px',
    lg: '1016px',
    xl: '1280px'
  }
}

describe('textAlign styled function', () => {
  test('textAlign', () => {
    expect(
      textAlign({
        textAlign: 'center',
        theme
      })
    ).toBe(
      'text-align:center;'
    )
  })

  test('textAlign responsive (mobile/desktop)', () => {
    expect(
      textAlign({
        textAlign: ['left', 'center'],
        theme
      })
    ).toBe(
      'text-align:left;@media(min-width:460px){text-align:left;}@media(min-width:1016px){text-align:center;}'
    )
  })
  test('textAlign responsive (mobile/tablet/desktop) ', () => {
    expect(
      textAlign({
        textAlign: ['left', 'center', 'right'],
        theme
      })
    ).toBe(
      'text-align:left;@media(min-width:460px){text-align:left;}@media(min-width:768px){text-align:center;}@media(min-width:1016px){text-align:right;}'
    )
  })
})