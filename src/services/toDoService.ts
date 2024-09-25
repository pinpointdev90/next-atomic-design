import { Dispatch } from 'redux'

import { createToDo, editToDo, toDoToogle } from '@/reducer/ToDo'
import { CreateToDoItemReducerStateProps } from '@/reducer/ToDo/types'

export const addToDoService = (data: Omit<CreateToDoItemReducerStateProps, 'id'>, dispatch: Dispatch, callback: () => void) => {
  if(!data.description) return window.alert('A title for the task needs to be written.')

  dispatch(createToDo(data))
  callback()
}
  
export const toogleToDoItemService = (item: CreateToDoItemReducerStateProps, dispatch: Dispatch) => {
  if(!item.id) return window.alert('Id não identificado.')
      
  dispatch(toDoToogle(item))
}

export const editToDoItemService = (item: CreateToDoItemReducerStateProps, dispatch: Dispatch) => {
  if(!item.id) return window.alert('ID not identified.')
  if(!item.description) return window.alert('No description.')
      
  dispatch(editToDo(item))
}