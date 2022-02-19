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

describe('align responsive suite', () => {

  test('row-mobile column-desktop', () => {
    expect(
      align({
        align: ['row', 'column'],
        alignx: ['left', 'left'],
        aligny: ['top', 'top'],
        theme
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;@media(min-width:1016px){flex-direction:column;align-items:flex-start;justify-content:flex-start;}'
    )
  })

  test('row-mobile column-tablet row-desktop', () => {
    expect(
      align({
        align: ['row', 'column', 'row'],
        alignx: ['left', 'center', 'right'],
        aligny: ['top', 'middle', 'bottom'],
        theme
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;@media(min-width:768px){flex-direction:column;align-items:center;justify-content:center;}@media(min-width:1016px){flex-direction:row;justify-content:flex-end;align-items:flex-end;}'
    )
  })

  test('row-mobile column-tablet row-desktop column-desktop-large', () => {
    expect(
      align({
        align: ['row', 'column', 'row', 'column'],
        alignx: ['left', 'center', 'center', 'left'],
        aligny: ['top', 'middle', 'bottom', 'top'],
        theme
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;@media(min-width:768px){flex-direction:column;align-items:center;justify-content:center;}@media(min-width:1016px){flex-direction:row;justify-content:center;align-items:flex-end;}@media(min-width:1280px){flex-direction:column;align-items:flex-start;justify-content:flex-start;}'
    )
  })
})