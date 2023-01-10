import "./App.css";
import React, { useState, useEffect } from "react";
import PopUp from "./Components/PopUp";
import ScoreBoard from "./Components/ScoreBoard";
import GameBoard from "./Components/GameBoard";

function App() {
  const [name, setName] = useState("");
  const [startGameFlag, setstartGameFlag] = useState(0);
  useEffect(() => {
   
  }, [startGameFlag]);

  return (
    <>
      <PopUp
        name={name}
        setName={setName}
        setstartGameFlag={setstartGameFlag}
      ></PopUp>
      <GameBoard></GameBoard>
      <ScoreBoard></ScoreBoard>
    </>
  );
}

export default App;
