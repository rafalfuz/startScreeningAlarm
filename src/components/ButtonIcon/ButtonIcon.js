import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

import './ButtonIcon.css'

export const ButtonIcon = ({removeFromList, id, setOpenModal, selectedId}) => {

    return (
        <>
        <FaEdit className='btnIcon' onClick={()=>setOpenModal(true)}/>
        <FaTrash className='btnIcon' onClick={()=>removeFromList(id)}/>
        </>

    )
}