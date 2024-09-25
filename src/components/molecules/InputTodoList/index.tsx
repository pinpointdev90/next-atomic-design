'use client'

import { IoMdAdd } from 'react-icons/io'

import { InputToDoList } from './types'
import { ButtonIcon, FlexLine, Form, InputText } from '@/components/atoms'

const InputTodoList = ({ 
  onPressSave, 
  ...InputTextProps 
}: InputToDoList) => 
  <Form onPressSubmit={onPressSave}>
    <FlexLine>
      <InputText {...InputTextProps} placeholder='buy milk' />

      <ButtonIcon 
        icon={<IoMdAdd size={15} />} 
      />
        
    </FlexLine>
  </Form>
  
export default InputTodoList