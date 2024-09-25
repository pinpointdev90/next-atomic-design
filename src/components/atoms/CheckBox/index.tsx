import { CheckBoxProps } from './types'

const CheckBox = ({ 
  checked, 
  ...props 
}: CheckBoxProps) => {
  return (
    <input 
      type="checkbox"
      checked={checked}
      style={{ zIndex: 2 }}
      {...props}
    />
  )
}

export default CheckBox