import React, {useState} from 'react'
import './App.css';
import { CurrenTime } from './components/CurrentTime/CurrentTime';
import { PanelList } from './components/PanelList/PanelList';
import {Form} from './components/Form/Form';
import { EditModal } from './EditModal/EditModal';

export const App = () => {
  const [listOfSeans, setListOfSeans] = useState([])
  const [openModal, setOpenModal] = useState(false)

  const addToList = (props) => {
    setListOfSeans((prev)=>[...prev, props])
  }

  const removeFromList = (id) => {
    setListOfSeans((prev)=>[...prev.filter((item)=>item.id !== id)])
  }

  const selectedId = (id) => {
    listOfSeans.find((item)=>item.id === id)    
  }
  
  return(
    <>
  <div className='App'>
    <EditModal openModal={openModal} setOpenModal={setOpenModal} selectedId={selectedId}/>
      <CurrenTime list={listOfSeans} setListOfSeans={setListOfSeans}/>
    <div className='panel'>
      <div className='panel-list'>
      <PanelList list={listOfSeans} removeFromList={removeFromList} setOpenModal={setOpenModal} selectedId={selectedId}/>
      </div>
    <Form addToList={addToList}  className='panel-form'/>
    </div>
  </div>

  </>

  )
}

