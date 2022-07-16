import { m, mb, ml, mr, mt, mx, my } from './index'

describe('css-engine-v2 | margin suite', () => {
  test('margin', () => expect( m('16px') ).toStrictEqual({ margin: '16px' }))
  test('marginBottom', () => expect( mb('16px') ).toStrictEqual({ marginBottom: '16px' }))
  test('marginLeft', () => expect( ml('16px') ).toStrictEqual({ marginLeft: '16px' }))
  test('marginRight', () => expect( mr('16px') ).toStrictEqual({ marginRight: '16px' }))
  test('marginTop', () => expect( mt('16px') ).toStrictEqual({ marginTop: '16px' }))
  test('marginX', () => expect( mx('16px') ).toStrictEqual({ marginLeft: '16px', marginRight: '16px' }))
  test('marginY', () => expect( my('16px') ).toStrictEqual({ marginTop: '16px', marginBottom: '16px' }))
})