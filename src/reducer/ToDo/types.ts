export interface ToDoItemReducerStateProps {
  id: string
  description: string
  completed: boolean
}

export type CreateToDoItemReducerStateProps = Omit<ToDoItemReducerStateProps, 'completed'>