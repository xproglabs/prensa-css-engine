import { align } from './index'

const expectedColumnLeftTop = { alignItems: 'flex-start', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }
const expectedColumnLeftMiddle = { alignItems: 'flex-start', display: 'flex', flexDirection: 'column', justifyContent: 'center' }
const expectedColumnLeftBottom = { alignItems: 'flex-start', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }
const expectedColumnLeftBetween = { alignItems: 'flex-start', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }
const expectedColumnLeftEvenly = { alignItems: 'flex-start', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }
const expectedColumnCenterTop = { alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }
const expectedColumnCenterMiddle = { alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }
const expectedColumnCenterBottom = { alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }
const expectedColumnCenterBetween = { alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }
const expectedColumnCenterEvenly = { alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }
const expectedColumnRightTop = { alignItems: 'flex-end', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }
const expectedColumnRightMiddle = { alignItems: 'flex-end', display: 'flex', flexDirection: 'column', justifyContent: 'center' }
const expectedColumnRightBottom = { alignItems: 'flex-end', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }
const expectedColumnRightBetween = { alignItems: 'flex-end', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }
const expectedColumnRightEvenly = { alignItems: 'flex-end', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }

describe('css-engine-v2 | align column suite', () => {
  test('Column + LeftTop', () => expect( align(['column', 'left', 'top']) ).toStrictEqual(expectedColumnLeftTop))
  test('Column + LeftMiddle', () => expect( align(['column', 'left', 'middle']) ).toStrictEqual(expectedColumnLeftMiddle))
  test('Column + LeftBottom', () => expect( align(['column', 'left', 'bottom']) ).toStrictEqual(expectedColumnLeftBottom))
  test('Column + LeftBetween', () => expect( align(['column', 'left', 'between']) ).toStrictEqual(expectedColumnLeftBetween))
  test('Column + LeftEvenly', () => expect( align(['column', 'left', 'evenly']) ).toStrictEqual(expectedColumnLeftEvenly))
  test('Column + CenterTop', () => expect( align(['column', 'center', 'top']) ).toStrictEqual(expectedColumnCenterTop))
  test('Column + CenterMiddle', () => expect( align(['column', 'center', 'middle']) ).toStrictEqual(expectedColumnCenterMiddle))
  test('Column + CenterBottom', () => expect( align(['column', 'center', 'bottom']) ).toStrictEqual(expectedColumnCenterBottom))
  test('Column + CenterBetween', () => expect( align(['column', 'center', 'between']) ).toStrictEqual(expectedColumnCenterBetween))
  test('Column + CenterEvenly', () => expect( align(['column', 'center', 'evenly']) ).toStrictEqual(expectedColumnCenterEvenly))
  test('Column + RightTop', () => expect( align(['column', 'right', 'top']) ).toStrictEqual(expectedColumnRightTop))
  test('Column + RightMiddle', () => expect( align(['column', 'right', 'middle']) ).toStrictEqual(expectedColumnRightMiddle))
  test('Column + RightBottom', () => expect( align(['column', 'right', 'bottom']) ).toStrictEqual(expectedColumnRightBottom))
  test('Column + RightBetween', () => expect( align(['column', 'right', 'between']) ).toStrictEqual(expectedColumnRightBetween))
  test('Column + RightEvenly', () => expect( align(['column', 'right', 'evenly']) ).toStrictEqual(expectedColumnRightEvenly))
})