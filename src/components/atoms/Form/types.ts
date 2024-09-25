export interface FormProps extends React.FormHTMLAttributes<Omit<HTMLFormElement, 'onSubmit'>> {
  children: React.ReactNode [] | React.ReactNode
  onPressSubmit: () => void
}