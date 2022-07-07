import React, {useState} from 'react'
import {Button} from '../Button/Button'

import './Form.css'

export const Form = ({addToList}) => {
    const generateId = new Date().valueOf()
    const [input, setInput] = useState({
        id: generateId,
        title: '',
        time: '',
        area: 0
    })

    const updateForm = (name, value) => {
        setInput(input => ({
            ...input,
            [name]: value
        }))
    }

    const addRecord = (e) => {
        e.preventDefault()
        addToList(input)
        setInput({
            id: generateId,
            title: '',
            time: '',
            area: 0
        })
    }
    return ( 
        <form onSubmit={addRecord} className='form'>
        <input className='input titleInput'placeholder='Tytuł' name='title' value={input.title} onChange={e => updateForm('title', e.target.value)}/>
        <input className='input timeInput' placeholder='Godzina' type='time' name='time' value={input.time} onChange={e => updateForm('time', e.target.value)}/>
        <input className='input areaInput' placeholder='Sala' type='number' min='1' max='3' name='area' value={input.area} onChange={e => updateForm('area', e.target.value)}/>
        <Button className='formBtn' text='ADD' />
      </form>
    )
}