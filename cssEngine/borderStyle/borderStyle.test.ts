import { borderStyle } from './index'

const theme = {
  colors: {
    black: '#000000',
    neutral1: '#151515',
    white: '#FFFFFF'
  },
  factors: {
    border: 8,
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

describe('borderStyle styled function', () => {
  test('empty', () => {
    expect(
      borderStyle({})
    ).toBe(
      ''
    )
  })
  
  test('bs', () => {
    expect(
      borderStyle({
        bs: 'solid',
        theme
      })
    ).toBe(
      'border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;'
    )
  })

  test('borderStyle', () => {
    expect(
      borderStyle({
        borderStyle: 'solid',
        theme
      })
    ).toBe(
      'border-style:solid;'
    )
  })

  test('bs responsive model 2', () => {
    expect(
      borderStyle({
        bs: ['solid', 'dashed'],
        theme
      })
    ).toBe(
      'border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;@media(min-width:460px){border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;}@media(min-width:1016px){border-top-style:dashed;border-right-style:dashed;border-bottom-style:dashed;border-left-style:dashed;}'
    )
  })
})