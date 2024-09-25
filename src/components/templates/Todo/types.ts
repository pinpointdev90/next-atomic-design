import { InputTextProps } from '@/components/atoms/InputText/types'
import { ListComponentProps } from '@/components/organisms/TodoList/types'

export interface TodoTemplateProps <TData> {
  inputTask: InputTextProps
  listComponentProps: ListComponentProps<TData>
  description: string
  onPressClearAll: () => void
  onPressClearAllCompleted: () => void
  onPressAdd: () => void
}