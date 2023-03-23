import React, { useState } from 'react';
import Child from "./Child"

const Parent = () => {
  // Dichiara una nuova variable di stato, che chiameremo "contatore"
  const [msg, setMsg] = useState("");
  function callback(data){
    setMsg(data);
  }

  return (
    <div>
      <h2>Sono il padre</h2>
      <p>{msg}</p>
    </div>
  );
}

export default Parent;