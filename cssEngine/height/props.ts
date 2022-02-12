import { HeightTypes, ThemeTypes } from '@xprog/prensa-css-engine/types'

export interface HeightProps {
  $height: HeightTypes | Array<HeightTypes>;
  theme?: ThemeTypes;
}