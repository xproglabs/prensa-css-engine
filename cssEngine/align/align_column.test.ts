import { align } from './index'

describe('align column suite', () => {

  // column left
  test('column left top', () => {
    expect(
      align({
        align: 'column',
        alignx: 'left',
        aligny: 'top'
      })
    ).toBe(
      'display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;'
    )
  })
  test('column left middle', () => {
    expect(
      align({
        align: 'column',
        alignx: 'left',
        aligny: 'middle'
      })
    ).toBe(
      'display:flex;flex-direction:column;align-items:flex-start;justify-content:center;'
    )
  })
  test('column left bottom', () => {
    expect(
      align({
        align: 'column',
        alignx: 'left',
        aligny: 'bottom'
      })
    ).toBe(
      'display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end;'
    )
  })

  // column center
  test('column center top', () => {
    expect(
      align({
        align: 'column',
        alignx: 'center',
        aligny: 'top'
      })
    ).toBe(
      'display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'
    )
  })
  test('column center middle', () => {
    expect(
      align({
        align: 'column',
        alignx: 'center',
        aligny: 'middle'
      })
    ).toBe(
      'display:flex;flex-direction:column;align-items:center;justify-content:center;'
    )
  })
  test('column center bottom', () => {
    expect(
      align({
        align: 'column',
        alignx: 'center',
        aligny: 'bottom'
      })
    ).toBe(
      'display:flex;flex-direction:column;align-items:center;justify-content:flex-end;'
    )
  })

  // column right 
  test('column right top', () => {
    expect(
      align({
        align: 'column',
        alignx: 'right',
        aligny: 'top'
      })
    ).toBe(
      'display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-start;'
    )
  })
  test('column right middle', () => {
    expect(
      align({
        align: 'column',
        alignx: 'right',
        aligny: 'middle'
      })
    ).toBe(
      'display:flex;flex-direction:column;align-items:flex-end;justify-content:center;'
    )
  })
  test('column right bottom', () => {
    expect(
      align({
        align: 'column',
        alignx: 'right',
        aligny: 'bottom'
      })
    ).toBe(
      'display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;'
    )
  })

})