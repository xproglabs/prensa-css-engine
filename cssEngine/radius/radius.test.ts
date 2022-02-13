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

  test('radius responsive', () => {
    expect(
      radius({
        $radius: 'alternative',
        theme
      })
    ).toBe(
      'border-radius:5px;'
    )
  })
})