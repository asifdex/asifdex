import { InputProps } from '@/types'
import React from 'react'

const Input = ({ placeholder, name, type, value, handleChange,othercss }:InputProps) => {

  return (
    <input
    placeholder={placeholder}
    type={type}
    name={name}
    value={value}
      required
   onChange={ (e)=>handleChange(e)}
    className={`my-2 w-full rounded-md p-2 outline-none dark:text-white text-black dark:placeholder-white placeholder-black bg-transparent ${othercss}  dark:border-white border-black border text-sm`}
  />
  )
}

export default Input