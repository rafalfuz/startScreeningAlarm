import React, {useState, useEffect} from 'react'
import './CurrentTime.css'

export const CurrenTime = ({list}) => {

    const [time, setTime] = useState('')
    const startAlarm = () => console.log('ALARM');
    
    const doNothing = () => {
        console.log('I had to make this fn for ternary operator ');
        console.log(new Date().toLocaleTimeString());
    }
    useEffect(()=>{

        const intervalId = setInterval(()=>{
        setTime(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
        list.map((item)=>item.time === time).includes(true) ? (startAlarm()) : (doNothing()); 
        },1000)
        return ()=> clearInterval(intervalId) 
    },[time, list]) 
    return (
        <>
        <div className='clock'>Current Time: {time}</div>
        </>
    )
}