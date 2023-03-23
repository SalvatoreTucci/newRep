import { useEffect, useState } from 'react';
import './App.css';
import Componente1 from './Componente1';
import {news,anagrafica} from './data/data';
import "bootstrap/dist/css/bootstrap.css"
import Contatore from './Contatore';
import EsempioUseEffect from './EsempioUseEffect';
import Parent from './Parent';
import Clock from './Clock';
import Hidden from './Hidden';
import Card from './Card';
import Form from './Form';


function App() {
  let [anag,setAnag]=useState(anagrafica)
  const eliminaOggetto= (id)=>{
    let nuovaAnag=anag.filter(el => el.id !== id)
    setAnag(nuovaAnag);
  }
  const [pers,setPers]=useState({
    nome:"Rob",
    cognome:"Del",
    eta:30
  })

  const compleanno=()=>{
    let anni=pers.eta+1
    setPers({
      ...pers,
      eta:anni
    })
  }
  const [valore,setValore]=useState(false)
  const [show,setShow]=useState(true)
  useEffect(() => {
    if(valore){
      document.body.style.background="pink";
    }else{
      document.body.style.background="white";
    }
  }, [valore])

  return (
    <div className="App">
        
     <br/>  <br/>  <br/>
      <div className="container">
        <Form></Form>

        <br/>  <br/>  <br/>
        <div className="row">
          {
            
            news.map((el) =>{
              return (show && <div  key={el.id} className="col">
                <Card
                  id={el.id}
                  titolo={el.titolo}
                  descrizione={el.descrizione}
                  cambia={valore}
                />
              </div>)
            })
          }
        </div>
        <button onClick={()=>setValore(!valore)}>Cambia Sfondo</button>
        <button onClick={()=>setShow(!show)}>
        {show ? "Nascondi":"Visualizza"}
       </button>
      </div>

    </div>
  );
}

export default App;
