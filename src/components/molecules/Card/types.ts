import { DescriptionProps } from '@/components/atoms/Description/types'

export interface CardProps extends DescriptionProps {
  description: string
  onPressCard?: () => void
}