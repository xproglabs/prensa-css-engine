import { textDecoration } from './index'

const theme = {
  queries: {
    xs: '360px',
    sm: '460px',
    md: '768px',
    lg: '1016px',
    xl: '1280px'
  }
}

describe('textDecoration styled function', () => {
  test('textDecoration', () => {
    expect(
      textDecoration({
        textDecoration: 'overline',
        theme
      })
    ).toBe(
      'text-decoration:overline;'
    )
  })

  test('textDecoration responsive (mobile/desktop)', () => {
    expect(
      textDecoration({
        textDecoration: ['underline', 'overline'],
        theme
      })
    ).toBe(
      'text-decoration:underline;@media(min-width:460px){text-decoration:underline;}@media(min-width:1016px){text-decoration:overline;}'
    )
  })
  test('textDecoration responsive (mobile/tablet/desktop) ', () => {
    expect(
      textDecoration({
        textDecoration: ['underline', 'overline', 'underline'],
        theme
      })
    ).toBe(
      'text-decoration:underline;@media(min-width:460px){text-decoration:underline;}@media(min-width:768px){text-decoration:overline;}@media(min-width:1016px){text-decoration:underline;}'
    )
  })
})