import { padding } from './index'

const theme = {
  colors: {
    black: '#000000',
    neutral1: '#151515',
    white: '#FFFFFF'
  },
  factors: {
    padding: 8
  },
  queries: {
    xs: '360px',
    sm: '460px',
    md: '768px',
    lg: '1016px',
    xl: '1280px'
  }
}

describe('padding styled function', () => {
  test('empty', () => {
    expect(
      padding({})
    ).toBe(
      ''
    )
  })

  test('padding', () => {
    expect(
      padding({
        px: '100px',
        theme
      })
    ).toBe(
      'padding-left:100px;padding-right:100px;'
    )
  })
  test('padding responsive model 3', () => {
    expect(
      padding({
        p: [1, 2, 3],
        theme
      })
    ).toBe(
      'padding-top:8px;padding-right:8px;padding-bottom:8px;padding-left:8px;@media(min-width:460px){padding-top:8px;padding-right:8px;padding-bottom:8px;padding-left:8px;}@media(min-width:768px){padding-top:16px;padding-right:16px;padding-bottom:16px;padding-left:16px;}@media(min-width:1016px){padding-top:24px;padding-right:24px;padding-bottom:24px;padding-left:24px;}'
    )
  })
  test('padding-top + padding-left responsive model 4', () => {
    expect(
      padding({
        pt: [1, 2, 3, 4],
        pl: [1, 2, 3, 4],
        theme
      })
    ).toBe(
      'padding-top:8px;padding-left:8px;@media(min-width:360px){padding-top:8px;padding-left:8px;}@media(min-width:460px){padding-top:16px;padding-left:16px;}@media(min-width:768px){padding-top:24px;padding-left:24px;}@media(min-width:1016px){padding-top:32px;padding-left:32px;}'
    )
  })
})