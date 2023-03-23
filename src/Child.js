/*
import React, { useState } from 'react';

const Child = () => {
  const [input, setInput] = useState("");
  function inviaMsg(){
    props.callback(input);
    setInput("");
  }
  function handleChange() {
    setInput(event.target.value);
  }

  return (
    <div>
        <input type="text" value={input} onChange={handleChange}></input>
        <button onClick={inviaMsg}>Invia Messaggio</button>
    </div>
  );
}

export default Child;*/