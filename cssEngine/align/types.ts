type AlignTypes = 'row' | 'column'
type AlignXTypes = 'left' | 'center' | 'right' | 'evenly' | 'between'
type AlignYTypes = 'top' | 'middle' | 'bottom' | 'evenly' | 'between'
type ResponsiveAlignTypes = Array<AlignTypes>
type ResponsiveAlignXTypes = Array<AlignXTypes>
type ResponsiveAlignYTypes = Array<AlignYTypes>

export type AlignProps = AlignTypes | ResponsiveAlignTypes
export type AlignXProps = AlignXTypes | ResponsiveAlignXTypes
export type AlignYProps = AlignYTypes | ResponsiveAlignYTypes

export type AlignStyledFunctionParam0 = {
  align?: AlignProps;
  alignx?: AlignXProps;
  aligny?: AlignYProps;
  theme?: any;
}