export interface TitleProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'children'> {
  title: string
}