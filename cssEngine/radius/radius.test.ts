import { radius } from './index'

const theme = {
  radius: {
    unset: '0px',
    alternative: '5px',
    default: '3px',
    rounded: '99px',
    circle: '50%'
  },
  queries: {
    xs: '360px',
    sm: '460px',
    md: '768px',
    lg: '1016px',
    xl: '1280px'
  }
}

describe('radius styled function', () => {
  test('radius', () => {
    expect(
      radius({
        $radius: 'unset',
        theme
      })
    ).toBe(
      'border-radius:0px;'
    )
  })

  test('radius responsive model 3', () => {
    expect(
      radius({
        $radius: ['alternative', 'circle'],
        theme
      })
    ).toBe(
      'border-radius:5px;@media(min-width:460px){border-radius:5px;}@media(min-width:1016px){border-radius:50%;}'
    )
  })

  test('radius responsive model 3', () => {
    expect(
      radius({
        $radius: ['alternative', 'circle', 'unset'],
        theme
      })
    ).toBe(
      'border-radius:5px;@media(min-width:460px){border-radius:5px;}@media(min-width:768px){border-radius:50%;}@media(min-width:1016px){border-radius:0px;}'
    )
  })
})