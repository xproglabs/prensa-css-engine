import { textTransform } from './index'

const theme = {
  queries: {
    xs: '360px',
    sm: '460px',
    md: '768px',
    lg: '1016px',
    xl: '1280px'
  }
}

describe('textTransform styled function', () => {
  test('textTransform', () => {
    expect(
      textTransform({
        textTransform: 'uppercase',
        theme
      })
    ).toBe(
      'text-transform:uppercase;'
    )
  })

  test('textTransform responsive (mobile/desktop)', () => {
    expect(
      textTransform({
        textTransform: ['lowercase', 'uppercase'],
        theme
      })
    ).toBe(
      'text-transform:lowercase;@media(min-width:460px){text-transform:lowercase;}@media(min-width:1016px){text-transform:uppercase;}'
    )
  })
  test('textTransform responsive (mobile/tablet/desktop) ', () => {
    expect(
      textTransform({
        textTransform: ['lowercase', 'uppercase', 'lowercase'],
        theme
      })
    ).toBe(
      'text-transform:lowercase;@media(min-width:460px){text-transform:lowercase;}@media(min-width:768px){text-transform:uppercase;}@media(min-width:1016px){text-transform:lowercase;}'
    )
  })
})