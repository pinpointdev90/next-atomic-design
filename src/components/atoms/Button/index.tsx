import { ButtonPops } from './types'

const Button = ({title, ...props}: ButtonPops) => 
  <button {...props}>{title}</button>

export default Button