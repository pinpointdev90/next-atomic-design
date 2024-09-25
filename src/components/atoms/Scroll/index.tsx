import { ScrollProps } from './types'

const Scroll = ({ 
  children, 
  maxheight = 50
}: ScrollProps) => 
  <div style={{
    maxHeight: `${maxheight}vh`,
    overflowY: 'auto',
    padding: '0 10px 0 0',
  }}>
    {children}
  </div>

export default Scroll