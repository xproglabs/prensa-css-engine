import { opacity } from './index'

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

describe('opacity styled function', () => {
  test('opacity', () => {
    expect(
      opacity({})
    ).toBe(
      ''
    )
  })

  test('opacity', () => {
    expect(
      opacity({
        $opacity: '60%',
        theme
      })
    ).toBe(
      'opacity:60%;'
    )
  })

  test('opacity responsive', () => {
    expect(
      opacity({
        $opacity: ['60%', '70%', '80%'],
        theme
      })
    ).toBe(
      'opacity:60%;@media(min-width:460px){opacity:60%;}@media(min-width:768px){opacity:70%;}@media(min-width:1016px){opacity:80%;}'
    )
  })
})