import { fontStyle } from './index'

const theme = {
  queries: {
    xs: '360px',
    sm: '460px',
    md: '768px',
    lg: '1016px',
    xl: '1280px'
  }
}

describe('fontStyle styled function', () => {
  test('fontStyle', () => {
    expect(
      fontStyle({
        $fontStyle: 'italic',
        theme
      })
    ).toBe(
      'font-style:italic;'
    )
  })

  test('fontStyle responsive (mobile/desktop)', () => {
    expect(
      fontStyle({
        $fontStyle: ['oblique', 'italic'],
        theme
      })
    ).toBe(
      'font-style:oblique;@media(min-width:460px){font-style:oblique;}@media(min-width:1016px){font-style:italic;}'
    )
  })
  test('fontStyle responsive (mobile/tablet/desktop) ', () => {
    expect(
      fontStyle({
        $fontStyle: ['oblique', 'italic', 'normal'],
        theme
      })
    ).toBe(
      'font-style:oblique;@media(min-width:460px){font-style:oblique;}@media(min-width:768px){font-style:italic;}@media(min-width:1016px){font-style:normal;}'
    )
  })
})