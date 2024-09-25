import { ReducerNames } from '../enums'
import { ToDoItemReducerStateProps } from '../ToDo/types'

export interface RootReducer {
  [ReducerNames.ToDos]: ToDoItemReducerStateProps[]
}
