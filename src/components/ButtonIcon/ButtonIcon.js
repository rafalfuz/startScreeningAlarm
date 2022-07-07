import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

import './ButtonIcon.css'

export const ButtonIcon = ({removeFromList, id}) => {
    return (
        <>
        <FaEdit className='btnIcon' onClick={()=>{console.log('Edycja')}}/>
        <FaTrash className='btnIcon' onClick={()=>removeFromList(id)}/>
        </>

    )
}