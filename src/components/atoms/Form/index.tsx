import { FormProps } from './types'

const Form = ({ children, onPressSubmit, ...props }: FormProps) => 
  <form 
    onSubmit={e => {
      e.preventDefault()
      onPressSubmit()
    }} 
    {...props}
  >
    {children}
  </form>

export default Form