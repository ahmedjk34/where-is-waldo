import React, { useState } from "react";
import gamePhoto from "./images/bgc.jpg";
function GameBoard() {
  const img = document.getElementById("gamePhoto");
  const [imageDim, setImageDim] = useState([]);
  function getImageDimensions() {
    const grid = document.querySelector(".grid");
    setImageDim([img.width, img.height]);
    console.log(imageDim);
    const gridWidth = Math.floor(img.width / 15);
    const gridHeight = Math.floor(img.height / 30);
    grid.setAttribute(
      "style",
      `grid-template: repeat(30 , ${gridHeight}px)/ repeat(15,${gridWidth}px);`
    );
  }
  window.onresize = getImageDimensions;

  return (
    <div className="temp">
      <div className="grid"></div>
      <img id="gamePhoto" src={gamePhoto} onLoad={getImageDimensions}></img>
    </div>
  );
}

export default GameBoard;
