import React, {useState} from 'react'
import './App.css';
import { CurrenTime } from './components/CurrentTime/CurrentTime';
import { PanelList } from './components/PanelList/PanelList';
import {Form} from './components/Form/Form';

export const App = () => {
  const [listOfSeans, setListOfSeans] = useState([])
  
  const addToList = (props) => {
    setListOfSeans((prev)=>[...prev, props])
  }

  const removeFromList = (id) => {
    setListOfSeans((prev)=>[...prev.filter((item)=>item.id !== id)])
  }
  const showList = () => {
    console.log(listOfSeans)
  }
  
  return(
  <div className='App'>
      <CurrenTime list={listOfSeans}/>
    <div className='panel'>
      <div className='panel-list'>
      <PanelList list={listOfSeans} removeFromList={removeFromList}/>
      </div>
    <Form addToList={addToList} className='panel-form'/>
    </div>
    <button onClick={()=>showList()}></button>
  </div>
  )
}

