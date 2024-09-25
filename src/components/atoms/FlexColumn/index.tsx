import styles from './styles.module.css'
import { FlexColumnProps } from './types'

const FlexColumn = ({
  children,
  gap = 10,
  ...props
}: FlexColumnProps) => 
  <div 
    className={styles.container} 
    style={{
      gap: gap
    }}
    {...props}
  >
    {children}
  </div>

export default FlexColumn