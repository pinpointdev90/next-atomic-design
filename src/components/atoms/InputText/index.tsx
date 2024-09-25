'use client'

import { ChangeEvent } from 'react'

import style from './styles.module.css'
import { InputTextProps } from './types'

const InputText = ({ value, placeholder, onChanceText,  ...InputTextProps }: InputTextProps) => {
  const onChangeTextHandler = (event: ChangeEvent<HTMLInputElement>) => {

    onChanceText(event.target.value)
  }

  return (
    <input
      className={style.input}
      type='text' 
      value={value}
      placeholder={placeholder}
      onChange={onChangeTextHandler} 
      {...InputTextProps} 
    />
  )
}

export default InputText
