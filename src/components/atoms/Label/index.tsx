import { LabelProps } from './types'

const Label = ({ labelText, ...props }: LabelProps) => 
  <label {...props}>{labelText}</label> 

export default Label