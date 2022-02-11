import { HeightTypes, ThemeTypes } from 'types'

export interface HeightProps {
  $height: HeightTypes | Array<HeightTypes>;
  theme?: ThemeTypes;
}