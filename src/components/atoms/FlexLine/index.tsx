import styles from './styles.module.css'
import { FlexLineProps } from './types'

const FlexLine = ({
  children,
  gap = 10,
  flexWrap = 'nowrap',
  ...props
}: FlexLineProps) => 
  <div 
    className={styles.container} 
    style={{
      gap: gap,
      flexWrap: flexWrap
    }}
    {...props}
  >
    {children}
  </div>

export default FlexLine