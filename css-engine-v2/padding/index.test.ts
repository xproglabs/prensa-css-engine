import { p, pb, pl, pr, pt, px, py } from './index'

describe('css-engine-v2 | padding suite', () => {
  test('padding', () => expect( p('16px') ).toStrictEqual({ padding: '16px' }))
  test('paddingBottom', () => expect( pb('16px') ).toStrictEqual({ paddingBottom: '16px' }))
  test('paddingLeft', () => expect( pl('16px') ).toStrictEqual({ paddingLeft: '16px' }))
  test('paddingRight', () => expect( pr('16px') ).toStrictEqual({ paddingRight: '16px' }))
  test('paddingTop', () => expect( pt('16px') ).toStrictEqual({ paddingTop: '16px' }))
  test('paddingX', () => expect( px('16px') ).toStrictEqual({ paddingLeft: '16px', paddingRight: '16px' }))
  test('paddingY', () => expect( py('16px') ).toStrictEqual({ paddingTop: '16px', paddingBottom: '16px' }))
})