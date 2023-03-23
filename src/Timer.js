import React, { useState, useEffect } from 'react';

function Timer () {

  const [time, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
            setTimer(time => time + 1);
        }, 1000);
      } else if (!isActive && time !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, time]);
  
    function Start() {
      setIsActive(true);
    }
  
    function Stop() {
      setIsActive(false);
    }
  
    function Reset() {
      setTimer(0);
    }

    return (
      <div className="app">
        <h1>Timer</h1>
        <div className="time">
            <span>{("0" + ((time - (time) % 60))).slice(-2)}:</span>
            <span>{("0" + Math.floor((time) % 60)).slice(-2)}</span>
        </div>
        <div className="row">
          <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={Start}>
            Avvia
          </button>
          <button className="button" onClick={Stop}>
            Stop
          </button>
          <button className="button" onClick={Reset}>
            Azzera
          </button>
        </div>
      </div>
    );
  }
  
  export default Timer;

   /*
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}:</span>
*/

