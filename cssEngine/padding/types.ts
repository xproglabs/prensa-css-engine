type PaddingTypes = string | number
type ResponsivePaddingTypes = PaddingTypes | Array<PaddingTypes>

export type PaddingProps = PaddingTypes | ResponsivePaddingTypes

export type PaddingStyledFunctionParam0 = {
  pt?: PaddingProps;
  pr?: PaddingProps;
  pb?: PaddingProps;
  pl?: PaddingProps;
  px?: PaddingProps;
  py?: PaddingProps;
  p?: PaddingProps;
  theme?: any;
}