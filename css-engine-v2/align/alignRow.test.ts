import { align } from './index'

const expectedRowLeftTop = { alignItems: 'flex-start', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }
const expectedRowLeftMiddle = { alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }
const expectedRowLeftBottom = { alignItems: 'flex-end', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }
const expectedRowLeftBetween = { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }
const expectedRowLeftEvenly = { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }
const expectedRowCenterTop = { alignItems: 'flex-start', display: 'flex', flexDirection: 'row', justifyContent: 'center' }
const expectedRowCenterMiddle = { alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center' }
const expectedRowCenterBottom = { alignItems: 'flex-end', display: 'flex', flexDirection: 'row', justifyContent: 'center' }
const expectedRowCenterBetween = { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }
const expectedRowCenterEvenly = { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }
const expectedRowRightTop = { alignItems: 'flex-start', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }
const expectedRowRightMiddle = { alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }
const expectedRowRightBottom = { alignItems: 'flex-end', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }
const expectedRowRightBetween = { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }
const expectedRowRightEvenly = { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }

describe('css-engine-v2 | align row suite', () => {
  test('Row + LeftTop', () => expect( align(['row', 'left', 'top']) ).toStrictEqual(expectedRowLeftTop))
  test('Row + LeftMiddle', () => expect( align(['row', 'left', 'middle']) ).toStrictEqual(expectedRowLeftMiddle))
  test('Row + LeftBottom', () => expect( align(['row', 'left', 'bottom']) ).toStrictEqual(expectedRowLeftBottom))
  test('Row + LeftBetween', () => expect( align(['row', 'left', 'between']) ).toStrictEqual(expectedRowLeftBetween))
  test('Row + LeftEvenly', () => expect( align(['row', 'left', 'evenly']) ).toStrictEqual(expectedRowLeftEvenly))
  test('Row + CenterTop', () => expect( align(['row', 'center', 'top']) ).toStrictEqual(expectedRowCenterTop))
  test('Row + CenterMiddle', () => expect( align(['row', 'center', 'middle']) ).toStrictEqual(expectedRowCenterMiddle))
  test('Row + CenterBottom', () => expect( align(['row', 'center', 'bottom']) ).toStrictEqual(expectedRowCenterBottom))
  test('Row + CenterBetween', () => expect( align(['row', 'center', 'between']) ).toStrictEqual(expectedRowCenterBetween))
  test('Row + CenterEvenly', () => expect( align(['row', 'center', 'evenly']) ).toStrictEqual(expectedRowCenterEvenly))
  test('Row + RightTop', () => expect( align(['row', 'right', 'top']) ).toStrictEqual(expectedRowRightTop))
  test('Row + RightMiddle', () => expect( align(['row', 'right', 'middle']) ).toStrictEqual(expectedRowRightMiddle))
  test('Row + RightBottom', () => expect( align(['row', 'right', 'bottom']) ).toStrictEqual(expectedRowRightBottom))
  test('Row + RightBetween', () => expect( align(['row', 'right', 'between']) ).toStrictEqual(expectedRowRightBetween))
  test('Row + RightEvenly', () => expect( align(['row', 'right', 'evenly']) ).toStrictEqual(expectedRowRightEvenly))
})