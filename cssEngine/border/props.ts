import { BorderTypes, ColorTypes, ThemeTypes } from '@xprog/prensa-css-engine/types'

export interface BorderProps {
  $bt?: BorderTypes;
  $br?: BorderTypes;
  $bb?: BorderTypes;
  $bl?: BorderTypes;
  $bx?: BorderTypes;
  $by?: BorderTypes;
  $b?: BorderTypes;
  $borderColor?: ColorTypes;
  $borderStyle?: string;
  theme?: ThemeTypes;
}