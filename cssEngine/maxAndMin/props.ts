import { MaxAndMinTypes, ThemeTypes } from '@xprog/prensa-css-engine/types'

export interface MaxAndMinProps {
  maxWidth?: MaxAndMinTypes;
  maxHeight?: MaxAndMinTypes;
  minWidth?: MaxAndMinTypes;
  minHeight?: MaxAndMinTypes;
  theme?: ThemeTypes;
}