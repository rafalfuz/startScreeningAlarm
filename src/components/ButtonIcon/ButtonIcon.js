import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import "./ButtonIcon.css";

export const ButtonIcon = ({removeFromList, id, setOpenModal, selectId}) => {

    const handleEditBtn = () => {
        setOpenModal(true)
        selectId(id)
    }

    return (
        <>
        <FaEdit className='btnIcon' onClick={handleEditBtn}/>
        <FaTrash className='btnIcon' onClick={()=>removeFromList(id)}/>
        </>

    )
}

