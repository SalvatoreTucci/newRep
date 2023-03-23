import React, { useRef, useState } from 'react'

const Form = () => {

   // const [nome,setNome]=useState('');
   // const [cognome,setCognome]=useState('');

    const nomeRef=useRef(null)
    const cognomeRef=useRef(null)

    const [persone,setPersone]=useState([]);
    const gestioneDati=(e)=>{
        e.preventDefault();
        const nome=nomeRef.current.value;
        const cognome=cognomeRef.current.value;
        setPersone([
            ...persone,
            {
                nome,
                cognome
            }
        ])
        console.log("ho fatto la submit")
    }
  return (
    <>
    <form onSubmit={gestioneDati}>
        
        <div className="form-row">
            <div className="form-group col-md-5">
            <label htmlFor="nome">Nome</label>
            <input
                type="text"
                className="form-control"
                id="nome"
                name="nome"
                placeholder="nome"
                ref={nomeRef}
               // value={nome}
               // onChange={(e)=>setNome(e.target.value)}

            />
          
            </div>
            <div className="form-group col-md-5">
            <label htmlFor="cognome">Cognome</label>
            <input
                type="text"
                className="form-control"
                id="cognome"
                name="cognome"
                placeholder="cognome"
                ref={cognomeRef}
              //  value={cognome}
              //  onChange={(e)=>setCognome(e.target.value)}
            />
      
            </div>
            <div className="form-group col-md-2">
            <button type="submit" className="btn btn-primary">
            Submit
            </button>
            </div>
            
        </div>

    </form>
    {
        persone.map(p=>{
            return <p>{p.nome} {p.cognome}</p>
        })
    }
    </>
  )
}

export default Form