type AlignValues = 'column' | 'column-reverse' | 'row' | 'row-reverse'
type AlignXValues = 'left' | 'center' | 'right' | 'evenly' | 'between'
type AlignYValues = 'top' | 'middle' | 'bottom' | 'evenly' | 'between'

export type AlignTypes = AlignValues | Array<AlignValues>
export type AlignXTypes = AlignXValues | Array<AlignXValues>
export type AlignYTypes = AlignYValues | Array<AlignYValues>