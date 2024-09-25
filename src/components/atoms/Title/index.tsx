import { TitleProps } from './types'

const Title = ({ title, ...props }: TitleProps) => 
  <h1 {...props}>{title}</h1>

export default Title