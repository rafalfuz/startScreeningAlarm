/* eslint-disable array-callback-return */
import React,{ useState} from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {Button} from '../components/Button/Button'

import './EditModal.css'

export const EditModal = ({openModal, setOpenModal, idSelectedSeans, editTitle, listOfSeans, editTime, editArea}) => {

    const oldTitle = listOfSeans.filter((item)=>item.id === idSelectedSeans).map((item)=>item.title).toString()
    const oldTime = listOfSeans.filter((item)=>item.id === idSelectedSeans).map((item)=>item.time).toString()
    const oldArea = listOfSeans.filter((item)=>item.id === idSelectedSeans).map((item)=>item.area).toString()

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
    console.log(oldTime.toString())
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

    const handleClose = () => {
        setOpenModal(false)
        setInput({
            title: '',
            time: '',
            area: ''
        })
    }
    return(
        <div className={openModal ? ("editModalWrapper") : ("editModalWrapper closedModal")}>
            <header className='editModalHeader'>
                <h2 className='editModalHeader--title'>Edit</h2>
                <div className='editModalHeader--btn' onClick={handleClose}><AiOutlineCloseCircle/></div>
            </header>
                <div className='editModalContainer'>
                    <div className='editModalOldDatas'>
                        <p className='editModalOldTitle'>{oldTitle}</p>
                        <p className='editModalOldTime'>godz.{oldTime}</p>
                        <p className='editModalOldArea'>s.{oldArea}</p>
                    </div>
                    <form className='formEditModal' onSubmit={changeDatas}>
                    <input className='inputEditModal inputEditModalTitle' required type='text' placeholder={oldTitle} value={input.title} onChange={e=>updateForm('title', e.target.value)}/>
                    <input className='inputEditModal inputEditModalTime' required type='time' value={input.time} onChange={e=>updateForm('time', e.target.value)}/>
                    <input className='inputEditModal inputEditModalArea' type='number' min='1' max='3' placeholder={oldArea} value={input.area} onChange={e=>updateForm('area', e.target.value)}/>
                    <Button text="Change"/>
                    </form>
                </div>
        </div>
    )
}