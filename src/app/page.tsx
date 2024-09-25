'use client'

import { ToDoCard } from '@/components/organisms'
import { TodoTemplate } from '@/components/templates'
import { useToDo } from '@/hooks/ToDo'

export default function Home() {
  const {
    toDo,
    toDoList,
    pendingTasks,
    onChangeToDo,
    addToDo,
    onPressClearAll,
    onPressClearAllCompleted,
    onPressSaveEdit,
    onPressToogle
  } = useToDo()

  return (
    <main>
      <TodoTemplate
        description={`You have ${pendingTasks} pending tasks`}
        onPressAdd={addToDo}
        onPressClearAll={onPressClearAll}
        onPressClearAllCompleted={onPressClearAllCompleted}
        inputTask={{
          value: toDo,
          onChanceText: onChangeToDo
        }}
        listComponentProps={{
          data: toDoList,
          keyExtractor: i => i.id,
          renderItem: item => (
            <ToDoCard 
              completed={item.completed}
              onPressCheckBox={onPressToogle(item)}
              onPressSaveEdit={onPressSaveEdit(item.id)}
              description={item.description}
            />
          ),
        }}
      />
    </main>
  )
}
