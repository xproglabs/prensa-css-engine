import { align } from './index'

const theme = {
  queries: {
    xs: '360px',
    sm: '460px',
    md: '768px',
    lg: '1016px',
    xl: '1280px'
  }
}

describe('align responsive model 2 suite', () => {

  test('responsive model 2 using strings in alignx and alingy', () => {
    expect(
      align({
        align: ['row', 'column'],
        alignx: 'left',
        aligny: 'top',
        theme
      })
    ).toBe(
      'display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:row;@media(min-width:460px){flex-direction:row;}@media(min-width:1016px){flex-direction:column;}'
    )
  })

  test('responsive model 2 using row and column', () => {
    expect(
      align({
        align: ['row', 'column'],
        alignx: ['left', 'left'],
        aligny: ['top', 'top'],
        theme
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;@media(min-width:460px){flex-direction:row;justify-content:flex-start;align-items:flex-start;}@media(min-width:1016px){flex-direction:column;align-items:flex-start;justify-content:flex-start;}'
    )
  })

  test('responsive model 2 using row and column with different alignx', () => {
    expect(
      align({
        align: ['row', 'column'],
        alignx: ['left', 'center'],
        aligny: ['top', 'top'],
        theme
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;@media(min-width:460px){flex-direction:row;justify-content:flex-start;align-items:flex-start;}@media(min-width:1016px){flex-direction:column;align-items:center;justify-content:flex-start;}'
    )
  })

  test('responsive model 2 applying a extra item in alignx', () => {
    expect(
      align({
        align: ['row', 'column'],
        alignx: ['left', 'center', 'between'],
        aligny: ['top', 'top'],
        theme
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;@media(min-width:460px){flex-direction:row;justify-content:flex-start;align-items:flex-start;}@media(min-width:1016px){flex-direction:column;align-items:center;justify-content:flex-start;}'
    )
  })

  test('responsive model 3', () => {
    expect(
      align({
        align: ['row', 'column', 'row'],
        alignx: ['left', 'center', 'between'],
        aligny: ['top', 'top'],
        theme
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;@media(min-width:460px){flex-direction:row;justify-content:flex-start;align-items:flex-start;}@media(min-width:768px){flex-direction:column;align-items:center;justify-content:flex-start;}@media(min-width:1016px){flex-direction:row;justify-content:space-between;}'
    )
  })
})