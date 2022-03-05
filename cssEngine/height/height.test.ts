import { height } from './index'

describe('height styled function', () => {

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
      height({})
    ).toBe(
      ''
    )
  })

  test('height', () => {
    expect(
      height({
        $height: '100px',
        theme
      })
    ).toBe(
      'height:100px;'
    )
  })

  test('height responsive', () => {
    expect(
      height({
        $height: ['100px', '200px', '300px', '400px'],
        theme
      })
    ).toBe(
      'height:100px;@media(min-width:360px){height:100px;}@media(min-width:460px){height:200px;}@media(min-width:768px){height:300px;}@media(min-width:1016px){height:400px;}'
    )
  })
})