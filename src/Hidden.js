import React, {useState, useEffect} from 'react'

const Hidden = () => {
    const[show,setShow]=useState(false);

    return (
        <div>
            <h1>Nascondo</h1>
            <button onClick={()=>setShow(!show)}>
                {show ? "Nascondi":"Visualizza"}
            </button>
            {show}
        </div>
    )

}
/*
const Elemento = () => {
  return (
    <div>
        <h3>
            Elemento
        </h3>
    </div>
  )
}
*/

export default Hidden
