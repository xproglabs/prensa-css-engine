import { align } from './index'

describe('align styled function (align | alignx | aligny)', () => {

  test('column between bottom', () => {
    expect(
      align({
        align: 'column',
        alignx: 'between',
        aligny: 'bottom'
      })
    ).toBe(
      'display:flex;flex-direction:column;justify-content:space-between;justify-content:flex-end;'
    )
  })

  test('row left top', () => {
    expect(
      align({
        align: 'row',
        alignx: 'left',
        aligny: 'top'
      })
    ).toBe(
      'display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;'
    )
  })

})