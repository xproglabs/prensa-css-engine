import { align } from './index'

describe('align row suite', () => {

  // row left
  test('row left top', () => {
    expect(
      align({
        align: 'row',
        alignx: 'left',
        aligny: 'top'
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;'
    )
  })
  test('row left middle', () => {
    expect(
      align({
        align: 'row',
        alignx: 'left',
        aligny: 'middle'
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:flex-start;align-items:center;'
    )
  })
  test('row left bottom', () => {
    expect(
      align({
        align: 'row',
        alignx: 'left',
        aligny: 'bottom'
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-end;'
    )
  })
  
  // row center
  test('row center top', () => {
    expect(
      align({
        align: 'row',
        alignx: 'center',
        aligny: 'top'
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:center;align-items:flex-start;'
    )
  })
  test('row center middle', () => {
    expect(
      align({
        align: 'row',
        alignx: 'center',
        aligny: 'middle'
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:center;align-items:center;'
    )
  })
  test('row center bottom', () => {
    expect(
      align({
        align: 'row',
        alignx: 'center',
        aligny: 'bottom'
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:center;align-items:flex-end;'
    )
  })

  //row right
  test('row right top', () => {
    expect(
      align({
        align: 'row',
        alignx: 'right',
        aligny: 'top'
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:flex-end;align-items:flex-start;'
    )
  })
  test('row right middle', () => {
    expect(
      align({
        align: 'row',
        alignx: 'right',
        aligny: 'middle'
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:flex-end;align-items:center;'
    )
  })
  test('row right bottom', () => {
    expect(
      align({
        align: 'row',
        alignx: 'right',
        aligny: 'bottom'
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:flex-end;align-items:flex-end;'
    )
  })

  //row between
  test('row between top', () => {
    expect(
      align({
        align: 'row',
        alignx: 'between',
        aligny: 'top'
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;'
    )
  })
  test('row between middle', () => {
    expect(
      align({
        align: 'row',
        alignx: 'between',
        aligny: 'middle'
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:space-between;align-items:center;'
    )
  })
  test('row between bottom', () => {
    expect(
      align({
        align: 'row',
        alignx: 'between',
        aligny: 'bottom'
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end;'
    )
  })

  //row evenly
  test('row evenly top', () => {
    expect(
      align({
        align: 'row',
        alignx: 'evenly',
        aligny: 'top'
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:space-evenly;align-items:flex-start;'
    )
  })
  test('row between middle', () => {
    expect(
      align({
        align: 'row',
        alignx: 'evenly',
        aligny: 'middle'
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;'
    )
  })
  test('row between bottom', () => {
    expect(
      align({
        align: 'row',
        alignx: 'evenly',
        aligny: 'bottom'
      })
    ).toBe(
      'display:flex;flex-direction:row;justify-content:space-evenly;align-items:flex-end;'
    )
  })

})