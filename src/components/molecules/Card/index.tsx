import styles from './styles.module.css'
import { CardProps } from './types'
import { Description, FlexColumn } from '@/components/atoms'

const Card = ({ 
  onPressCard,
  ...descriptionProps
}: CardProps) => {

  return ( 
    <FlexColumn 
      className={styles.container} 
      gap={0}
      onClick={onPressCard}
    >
      <Description {...descriptionProps} />
    </FlexColumn>
  )
}

export default Card