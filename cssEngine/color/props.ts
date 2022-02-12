import { ThemeTypes } from '@xprog/prensa-css-engine/types'

import { ColorTypes } from './types'

export interface ColorProps {
  $color?: ColorTypes;
  $bgColor?: ColorTypes;
  theme?: ThemeTypes;
}