type MarginTypes = string | number
type ResponsiveMarginTypes = Array<MarginTypes>

export type MarginProps = MarginTypes | ResponsiveMarginTypes

export type MarginStyledFunctionParam0 = {
  mt?: MarginProps;
  mr?: MarginProps;
  mb?: MarginProps;
  ml?: MarginProps;
  mx?: MarginProps;
  my?: MarginProps;
  m?: MarginProps;
  theme?: any;
}