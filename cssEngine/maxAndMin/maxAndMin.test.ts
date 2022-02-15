import { maxAndMin } from './index'

describe('maxAndMin styled function', () => {

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
      maxAndMin({})
    ).toBe(
      ''
    )
  })

  test('maxHeight', () => {
    expect(
      maxAndMin({
        maxHeight: '500px',
        theme
      })
    ).toBe(
      'max-height:500px;'
    )
  })

  test('maxHeight responsive', () => {
    expect(
      maxAndMin({
        maxHeight: ['250px', '500px'],
        theme
      })
    ).toBe(
      'max-height:250px;@media(min-width:1016px){max-height:500px;}'
    )
  })

  test('maxHeight maxWidth', () => {
    expect(
      maxAndMin({
        maxHeight: ['250px', '500px'],
        maxWidth: ['150px', '500px', '100vw'],
        theme
      })
    ).toBe(
      'max-height:250px;max-width:150px;@media(min-width:768px){max-width:500px;}@media(min-width:1016px){max-height:500px;max-width:100vw;}'
    )
  })

})