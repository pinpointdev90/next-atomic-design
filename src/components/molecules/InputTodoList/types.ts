import { InputTextProps } from '@/components/atoms/InputText/types'

export interface InputToDoList extends InputTextProps {
  onPressSave: () => void
}