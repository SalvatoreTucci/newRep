import React, { useState } from 'react';

function Contatore  () {
  // Dichiara una nuova variable di stato, che chiameremo "contatore"
  const [contatore, setContatore] = useState(0);
  let contatore2=0;

  const aumenta = () => {
    setContatore(contatore + 1);
  }

  const diminuisci = () => {
    setContatore(contatore - 1);
  }

  return (
    <div>
      <br></br>
      <p>Contatore: {contatore}</p>
      <button onClick={() => setContatore(contatore + 1)}>
        Incrementa +
      </button>
      <button onClick={() => setContatore(contatore - 1)}>
        diminuisci -
      </button>
    </div>
  );
}

export default Contatore;