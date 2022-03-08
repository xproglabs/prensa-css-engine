import { border } from './index'

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

describe('border styled function', () => {
  test('empty', () => {
    expect(
      border({})
    ).toBe(
      ''
    )
  })

  test('bt', () => {
    expect(
      border({
        bt: '2px',
        borderColor: 'black',
        borderStyle: 'dotted',
        theme
      })
    ).toBe(
      'border-top-width:2px;border-color:#000000;border-style:dotted;'
    )
  })

  test('b', () => {
    expect(
      border({
        b: '2px',
        borderColor: 'black',
        borderStyle: 'dotted',
        theme
      })
    ).toBe(
      'border-top-width:2px;border-right-width:2px;border-bottom-width:2px;border-left-width:2px;border-color:#000000;border-style:dotted;'
    )
  })

  test('bt responsive', () => {
    expect(
      border({
        bt: ['1px', '2px'],
        borderColor: 'black',
        borderStyle: 'dotted',
        theme
      })
    ).toBe(
      'border-color:#000000;border-style:dotted;border-top-width:1px;@media(min-width:460px){border-top-width:1px;}@media(min-width:1016px){border-top-width:2px;}'
    )
  })
  test('b responsive', () => {
    expect(
      border({
        b: ['1px', '2px'],
        borderColor: 'black',
        borderStyle: 'dotted',
        theme
      })
    ).toBe(
      'border-color:#000000;border-style:dotted;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;@media(min-width:460px){border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;}@media(min-width:1016px){border-top-width:2px;border-right-width:2px;border-bottom-width:2px;border-left-width:2px;}'
    )
  })
  test('b responsive model 3', () => {
    expect(
      border({
        b: ['1px', '2px', '3px'],
        borderColor: 'black',
        borderStyle: 'dotted',
        theme
      })
    ).toBe(
      'border-color:#000000;border-style:dotted;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;@media(min-width:460px){border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;}@media(min-width:768px){border-top-width:2px;border-right-width:2px;border-bottom-width:2px;border-left-width:2px;}@media(min-width:1016px){border-top-width:3px;border-right-width:3px;border-bottom-width:3px;border-left-width:3px;}'
    )
  })
})