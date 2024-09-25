export interface ButtonPops extends Omit< React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' >{
  title: string
}