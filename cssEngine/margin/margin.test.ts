import { margin } from './index'

const theme = {
  colors: {
    black: '#000000',
    neutral1: '#151515',
    white: '#FFFFFF'
  },
  factors: {
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

describe('margin styled function', () => {
  test('empty', () => {
    expect(
      margin({})
    ).toBe(
      ''
    )
  })

  test('margin', () => {
    expect(
      margin({
        mx: '100px',
        theme
      })
    ).toBe(
      'margin-left:100px;margin-right:100px;'
    )
  })
  test('margin responsive model 3', () => {
    expect(
      margin({
        m: [1, 2, 3],
        theme
      })
    ).toBe(
      'margin-top:8px;margin-right:8px;margin-bottom:8px;margin-left:8px;@media(min-width:460px){margin-top:8px;margin-right:8px;margin-bottom:8px;margin-left:8px;}@media(min-width:768px){margin-top:16px;margin-right:16px;margin-bottom:16px;margin-left:16px;}@media(min-width:1016px){margin-top:24px;margin-right:24px;margin-bottom:24px;margin-left:24px;}'
    )
  })
  test('margin-top + margin-left responsive model 4', () => {
    expect(
      margin({
        mt: [1, 2, 3, 4],
        ml: [1, 2, 3, 4],
        theme
      })
    ).toBe(
      'margin-top:8px;margin-left:8px;@media(min-width:360px){margin-top:8px;margin-left:8px;}@media(min-width:460px){margin-top:16px;margin-left:16px;}@media(min-width:768px){margin-top:24px;margin-left:24px;}@media(min-width:1016px){margin-top:32px;margin-left:32px;}'
    )
  })
})