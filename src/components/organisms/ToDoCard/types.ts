import { CardProps } from '@/components/molecules/Card/types'

export interface ToDoCardProps extends CardProps {
    completed: boolean
    onPressSaveEdit: (value: string) => void
    onPressCheckBox: () => void
}