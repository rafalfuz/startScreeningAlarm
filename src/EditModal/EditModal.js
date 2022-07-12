import React, {useState} from 'react'

import './EditModal.css'

export const EditModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [input, setInput] = useState({
        title: '',
        time: '',
        area: 0,
        alarm: false,
    })
    return(
        <div className='editModalWrapper' >
            <div className='editContainer'>
                <h2>Edit</h2>
                <form>
                </form>
            </div>
        </div>
    )
}