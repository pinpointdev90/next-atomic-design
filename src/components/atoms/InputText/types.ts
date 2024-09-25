export interface InputTextProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  value: string
  onChanceText: (value: string) => void
}