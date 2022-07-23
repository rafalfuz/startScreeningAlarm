/* eslint-disable array-callback-return */
import React,{ useState} from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {Button} from '../components/Button/Button'

import './EditModal.css'

export const EditModal = ({openModal, setOpenModal, idSelectedSeans, editTitle, listOfSeans, editTime, editArea}) => {


        const oldTitle = listOfSeans.map((item)=>{
            if(item.id === idSelectedSeans){
                return item.title
            }
        })
    
        const oldTime = listOfSeans.map((item)=>{
            if(item.id === idSelectedSeans){
                return item.time
            }
        })
    
        const oldArea = listOfSeans.map((item)=>{
            if(item.id === idSelectedSeans){
                return item.area
            }
        })



    const [input, setInput] = useState({
        title: oldTitle,
        time: oldTime,
        area: oldArea
    })

    const updateForm = (name, value) => {
        setInput(input => ({
            ...input,
            [name]: value
        }))
    }

    const changeDatas = e => {
        e.preventDefault()
        editTitle(input.title)
        editTime(input.time)
        editArea(input.area)
        setOpenModal(false)
        setInput({
            title: '',
            time: '',
            area: ''
        })
    }

    const handleClose = () => setOpenModal(false)
    return(
        <div className={openModal ? ("editModalWrapper") : ("editModalWrapper closedModal")}>
                <header className='editModalHeader'>
                <h2 className='editModalHeader--title'>Edit</h2>
                <div className='editModalHeader--btn' onClick={handleClose}><AiOutlineCloseCircle/></div>
                </header>
                <div className='editModalContainer'>
                <form className='formEditModal' onSubmit={changeDatas}>
                    <p>{idSelectedSeans}</p>
                    <input required type='text' placeholder={oldTitle} value={input.title} onChange={e=>updateForm('title', e.target.value)}/>
                    <input required type='time' placeholder={oldTime} value={input.time} onChange={e=>updateForm('time', e.target.value)}/>
                    <input type='number' min='1' max='3' placeholder={oldArea} value={input.area} onChange={e=>updateForm('area', e.target.value)}/>
                    <Button text="Change"/>
                </form>
            </div>
        </div>
    )
}