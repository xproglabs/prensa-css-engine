import { customCSS } from './index'

const theme = {
  queries: {
    xs: '360px',
    sm: '460px',
    md: '768px',
    lg: '1016px',
    xl: '1280px'
  }
}

describe('customCSS test suite', () => {
  test('empty', () => {
    expect(
      customCSS({})
    ).toBe(
      ''
    )
  })

  test('custom css applied', () => {
    expect(
      customCSS({
        custom: 'background-color:red;',
        theme
      })
    ).toBe(
      'background-color:red;'
    )
  })

  test('responsive custom css applied', () => {
    expect(
      customCSS({
        custom: ['background-color:blue;', 'background-color:red;'],
        theme
      })
    ).toBe(
      'background-color:blue;@media(min-width:460px){background-color:blue;}@media(min-width:1016px){background-color:red;}'
    )
  })
})