import React from "react";

function Card({id,titolo,descrizione}) {
  return (
    <div className="card" style={{ width: "18rem" }} id={id}>
  <div className="card-body">
    <h5 className="card-title">{titolo}</h5>
    <p className="card-text">
      {descrizione}
    </p>
    <button>Cambia colore titolo</button>
  </div>
</div>
  );
}

export default Card;
