import styles from './styles.module.css'
import { ButtonIconProps } from './types'

const ButtonIcon = ({ 
  icon, 
  backgroundColor = 'rgb(138, 43, 226)',
  size = 40,
  borderRadius = 5,
  onPress,
}: ButtonIconProps) => 
  <button 
    className={styles.button} 
    onClick={onPress}
    style={{
      backgroundColor: backgroundColor,
      minHeight: size,
      minWidth: size,
      borderRadius: borderRadius
    }}
  >
    {icon}
  </button>
  
export default ButtonIcon