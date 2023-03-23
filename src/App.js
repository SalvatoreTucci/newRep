import Contatore from './Contatore';
import Timer from './Timer';
import Parent from './Parent';
import Clock from './Clock';
import Hidden from './Hidden';
import News from './News';
import data from './data';
import Card from './Card';
import Form from './Form';
import FormCalcolatrice from './FormCalcolatrice';


import "bootstrap/dist/css/bootstrap.css"
import { useState, useEffect } from 'react';

function App() {
  return (
  <div className="App">
      <FormCalcolatrice></FormCalcolatrice>
  </div>
  );
}

/*
const [valore,setValore]= useState(false)
useEffect(() => {
  if(valore){
    document.body.style.background="pink";
  }else{
    document.body.style.background="white";
  }
}, [valore])

function App() {
  return (
    <div className="App">
      <div className='Container'>
        <div className="row">
          {
            data.map(el=>{
              <div className="col">
                <Card
                key={el.id}
                id={el.id}
                titolo={el.titolo}
                descrizione={el.descrizione}
                />
              </div>
            })
          }
        </div>
      </div>
      <button onClick={()=>setValore(!valore)}>Cambia Sfondo</button>
      
    </div>
  );
}
*/
export default App;
/*
  <Clock timezone="1" country="Italia"/>
  <Clock timezone="2" country="Messico"/>
  <Clock timezone="4" country="Portogallo"/>
  <Clock timezone="-6" country="India"/>
<br></br>
      <br></br>
      
      <Contatore/>
      <Timer/>
      <Parent/>
*/