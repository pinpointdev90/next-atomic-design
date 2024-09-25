import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { ReducerNames } from '../enums'
import toDosReducer from '../ToDo/index'

const rootReducer = combineReducers({
  [ReducerNames.ToDos]: toDosReducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store