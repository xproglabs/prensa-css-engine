import { width } from './index'

describe('width styled function', () => {

  const theme = {
    factors: {
      dimensions: 8,
      margin: 8
    },
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
      width({})
    ).toBe(
      ''
    )
  })

  test('width', () => {
    expect(
      width({
        $width: '100px',
        theme
      })
    ).toBe(
      'width:100px;'
    )
  })

  test('width responsive', () => {
    expect(
      width({
        $width: ['100px', '200px', '300px', '400px'],
        theme
      })
    ).toBe(
      'width:100px;@media(min-width:360px){width:100px;}@media(min-width:460px){width:200px;}@media(min-width:768px){width:300px;}@media(min-width:1016px){width:400px;}'
    )
  })
})