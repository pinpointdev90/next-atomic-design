import { useState } from 'react'

import { useRedux } from '../reducer'
import { ReducerNames } from '@/reducer/enums'
import { clearCompletedTasks, reset } from '@/reducer/ToDo'
import { CreateToDoItemReducerStateProps } from '@/reducer/ToDo/types'
import { addToDoService, editToDoItemService, toogleToDoItemService } from '@/services/toDoService'

export const useToDo = () => {
  const [toDoList, dispatch] = useRedux(ReducerNames.ToDos)
  const [toDo, setToDo] = useState('')

  const pendingTasks = toDoList.filter(item => !item.completed).length

  const onChangeToDo = (value: string) => 
    setToDo(value)

  const onResetToDo = () => 
    setToDo('')

  const addToDo = () => 
    addToDoService({ description: toDo}, dispatch, onResetToDo)

  const onPressSaveEdit = (id: string) => 
    (description: string) => 
      editToDoItemService({ id, description}, dispatch)

  const onPressClearAll = () => 
    dispatch(reset())

  const onPressClearAllCompleted = () => 
    dispatch(clearCompletedTasks())

  const onPressToogle = (item: CreateToDoItemReducerStateProps) => 
    () =>
      toogleToDoItemService(item, dispatch)

  return {
    toDo,
    toDoList,
    pendingTasks,
    onChangeToDo,
    onResetToDo,
    onPressClearAll,
    onPressSaveEdit,
    onPressClearAllCompleted,
    addToDo,
    onPressToogle
  }
}
