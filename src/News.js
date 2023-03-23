import React, { useState, useEffect } from "react";
import Card from "./Card";

function News() {
  const [newsData, setNewsData] = useState([]);
  const [cardColor, setCardColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("#ffffff");

  useEffect(() => {
    fetch("/News.json")
      .then((response) => response.json())
      .then((data) => setNewsData(data));
  }, []);

  const handleNewsColorChange = () => {
    setCardColor("#0000");
  };

  const handleBgColorChange = () => {
    setBgColor("#0000");
  };

  const Style = {
    backgroundColor: bgColor,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={{ Style:bgColor }}>
      <button onClick={handleNewsColorChange}>Cambia Colore News</button>
      <button onClick={handleBgColorChange}>Cambia Colore Sfondo</button>
      {newsData.map((newsItem) => (
        <Card
          key={newsItem.id}
          title={newsItem.title}
          description={newsItem.description}
          color={cardColor}
        />
      ))}
    </div>
  );
}

export default News;