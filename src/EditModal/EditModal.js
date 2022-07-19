import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'

import './EditModal.css'

export const EditModal = ({openModal, setOpenModal, selectedId}) => {
    
    const handleClose = () => setOpenModal(false)
    return(
        <div className={openModal ? ("editModalWrapper") : ("editModalWrapper closedModal")}>
                <header className='editModalHeader'>
                <h2 className='editModalHeader--title'>Edit</h2>
                <div className='editModalHeader--btn' onClick={handleClose}><AiOutlineCloseCircle/></div>
                </header>
                <div className='editModalContainer'>
                <form class>
                    <p>{selectedId}</p>
                </form>
            </div>
        </div>
    )
}