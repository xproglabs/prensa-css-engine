import { align } from './index'

const expectedRowLeftTop = {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start'
}

const expectedRowLeftMiddle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start'
}

const expectedRowLeftBottom = {
  alignItems: 'flex-end',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start'
}

const expectedRowBetweenMiddle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
}

describe('css-engine-v2 | align suite', () => {
  test('align row + left + top', () => expect( align(['row', 'left', 'top']) ).toStrictEqual(expectedRowLeftTop))
  test('align row + left + middle', () => expect( align(['row', 'left', 'middle']) ).toStrictEqual(expectedRowLeftMiddle))
  test('align row + left + bottom', () => expect( align(['row', 'left', 'bottom']) ).toStrictEqual(expectedRowLeftBottom))
  test('align row + between + middle', () => expect( align(['row', 'between', 'middle']) ).toStrictEqual(expectedRowBetweenMiddle))
})