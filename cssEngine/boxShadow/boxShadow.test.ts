import { boxShadow } from './index'

describe('boxShadow styled function', () => {

  const theme = {
    queries: {
      xs: '360px',
      sm: '460px',
      md: '768px',
      lg: '1016px',
      xl: '1280px'
    }
  }

  test('empty', () => {
    expect(
      boxShadow({})
    ).toBe(
      ''
    )
  })

  test('boxShadow', () => {
    expect(
      boxShadow({
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)',
        theme
      })
    ).toBe(
      'box-shadow:5px5px10pxrgba(0,0,0,0.1);'
    )
  })

  test('boxShadow responsive', () => {
    expect(
      boxShadow({
        boxShadow: ['2.5px 2.5px 5px rgba(0, 0, 0, 0.1)', '5px 5px 10px rgba(0, 0, 0, 0.1)'],
        theme
      })
    ).toBe(
      'box-shadow:2.5px2.5px5pxrgba(0,0,0,0.1);@media(min-width:460px){box-shadow:2.5px2.5px5pxrgba(0,0,0,0.1);}@media(min-width:1016px){box-shadow:5px5px10pxrgba(0,0,0,0.1);}'
    )
  })
})