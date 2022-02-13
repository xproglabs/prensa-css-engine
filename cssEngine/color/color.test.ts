import { color } from './index'

const theme = {
  colors: {
    black: '#000000',
    neutral1: '#151515',
    white: '#FFFFFF'
  },
  queries: {
    xs: '360px',
    sm: '460px',
    md: '768px',
    lg: '1016px',
    xl: '1280px'
  }
}

describe('color styled function', () => {
  test('color', () => {
    expect(
      color({
        $color: 'black',
        theme
      })
    ).toBe(
      'color:#000000;'
    )
  })

  test('bgColor', () => {
    expect(
      color({
        $bgColor: 'black',
        theme
      })
    ).toBe(
      'background-color:#000000;'
    )
  })

  test('bgColor responsive (mobile/desktop)', () => {
    expect(
      color({
        $bgColor: ['black', 'white'],
        theme
      })
    ).toBe(
      'background-color:#000000;@media(min-width:1016px){background-color:#FFFFFF;}'
    )
  })
  test('bgColor responsive (mobile/tablet/desktop) ', () => {
    expect(
      color({
        $bgColor: ['black', 'white', 'neutral1'],
        theme
      })
    ).toBe(
      'background-color:#000000;@media(min-width:768px){background-color:#FFFFFF;}@media(min-width:1016px){background-color:#151515;}'
    )
  })
})