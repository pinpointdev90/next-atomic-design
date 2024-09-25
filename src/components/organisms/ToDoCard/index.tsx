import { useState } from 'react'

import { FaEdit } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'

import styles from './styles.module.css'
import { ToDoCardProps } from './types'
import { ButtonIcon, CheckBox, FlexLine, InputText } from '@/components/atoms'
import Card from '@/components/molecules/Card'

const ToDoCard = ({ 
  completed,
  description,
  onPressSaveEdit,
  onPressCheckBox,
}: ToDoCardProps) => {
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState('')

  const onPressEdit = () => {
    setEdit(true)
    setValue(description)
  }

  const onPressSaveEditHandler = () => {
    setEdit(false)
    onPressSaveEdit(value)
  }

  return (
    <FlexLine className={styles.container} >
      {!edit && <CheckBox checked={completed} onClick={onPressCheckBox}/>}

      <div 
        className={styles.content} 
        aria-completed={String(completed)}
      >
        {
          edit 
            ? <InputText value={value} onChanceText={(value) => setValue(value)}/>
            : <Card
              description={description} 
              textDecoration={completed ? 'line-through' : 'none'}
            />
        }
      </div>

      {edit 
        ? <ButtonIcon icon={<FaCheck />} onPress={onPressSaveEditHandler}/>
        : !completed && <ButtonIcon icon={<FaEdit />} onPress={onPressEdit}/>
      }
      
    </FlexLine>
  )
}

export default ToDoCard