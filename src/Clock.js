import React, {useState, useEffect} from 'react'

const Clock = ({timezone,country}) => {
    const t = Date.now() + 3600 * timezone * 1000;
    const dateInit = new Date(t);
    
    const[date,setDate]=useState(dateInit);
    const[nation,setNation]=useState(country);

    useEffect(()=>{
        const nations=['Spagna','Italia','Francia','Russia']
        const idx=Math.floor(Math.random()*4);
        setNation(nations[idx]);
        const interval = setInterval(() => {
            const time = date.getTime() + 1000
            setDate(new Date(time));
        }, 1000)

        return() => {
            clearInterval(interval);
        }
    }, [date])
  return (
    <div>
        <h3>
            In {nation} è il: { date.toLocaleDateString() + " " + date.toLocaleTimeString() }
        </h3>
    </div>
  )
}

export default Clock
