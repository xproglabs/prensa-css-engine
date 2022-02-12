import { HeightTypes, ThemeTypes } from '@xprog/css-engine/types'

export interface HeightProps {
  $height: HeightTypes | Array<HeightTypes>;
  theme?: ThemeTypes;
}