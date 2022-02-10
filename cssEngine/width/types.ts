type WidthTypes = string | number
type ResponsiveWidthTypes = WidthTypes | Array<string | number>

export type WidthProps = WidthTypes | ResponsiveWidthTypes

export type WidthStyledFunctionParam0 = {
  $width?: WidthProps;
  theme?: any;
}