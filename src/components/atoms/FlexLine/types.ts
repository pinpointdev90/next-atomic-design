export interface FlexLineProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[]
  flexWrap?: 'wrap' | 'nowrap'
  gap?: number
}