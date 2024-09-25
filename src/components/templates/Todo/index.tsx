import styles from './styles.module.css'
import { TodoTemplateProps } from './types'
import { Button, Description, FlexColumn, FlexLine, Title } from '@/components/atoms'
import { InputTodoList } from '@/components/molecules'
import ListComponent from '@/components/organisms/TodoList'

const TodoTemplate = <TData,>({ 
  inputTask, 
  listComponentProps, 
  description,
  onPressAdd,
  onPressClearAll,
  onPressClearAllCompleted
}: TodoTemplateProps<TData>) => {
  return (
    <FlexColumn gap={20} className={styles.container}>
      <Title title='ToDo List Arke' />

      <InputTodoList 
        {...inputTask} 
        onPressSave={onPressAdd}
      />

      <ListComponent 
        {...listComponentProps}
      />

      <FlexLine flexWrap='wrap'>
        <Description description={description}/>

        <Button 
          className={styles.clearAllButtonCompleted} 
          title='Clear all completed'
          onClick={onPressClearAllCompleted} 
        />

        <Button 
          className={styles.clearAllButton} 
          title='Clear all'
          onClick={onPressClearAll} 
        />
        
      </FlexLine>
    </FlexColumn>
  )
}

export default TodoTemplate