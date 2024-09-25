import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { CreateToDoItemReducerStateProps, ToDoItemReducerStateProps } from './types'
import { ReducerNames } from '../enums'

const initialState: ToDoItemReducerStateProps[] = []
  
const ToDoSlice = createSlice({
  name: ReducerNames.ToDos,
  initialState: initialState,
  reducers: {
    createToDo(state, { payload }: PayloadAction<Omit<CreateToDoItemReducerStateProps, 'id'>>) {
      state.push({
        ...payload,
        id: uuidv4(),
        completed: false,
      })
    },

    editToDo(state, { payload }: PayloadAction<CreateToDoItemReducerStateProps>) {
      const toDo = state.find(todo => todo.id === payload.id)
      if(toDo) {
        toDo.description = payload.description
      }
    },
    

    toDoToogle(state, { payload }: PayloadAction<Pick<ToDoItemReducerStateProps, 'id'>>) {
      const toDo = state.find(todo => todo.id === payload.id)
      if(toDo) {
        toDo.completed = !toDo.completed
      }
    },

    clearCompletedTasks(state) {
      return state.filter(item => !item.completed)
    },

    reset() {
      return initialState
    }
  }
})

export const { createToDo, editToDo, toDoToogle, clearCompletedTasks, reset } = ToDoSlice.actions
export default ToDoSlice.reducer