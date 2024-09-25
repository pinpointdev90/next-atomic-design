import style from './styles.module.css'
import { DescriptionProps } from './types'

const Description = ({ description, textDecoration, ...props }: DescriptionProps) => 
  <p style={{ textDecoration: textDecoration }} className={style.container} {...props}>{description}</p>

export default Description