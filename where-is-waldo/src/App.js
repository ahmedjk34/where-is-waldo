import "./App.css";
import React, { useState, useEffect } from "react";
import PopUp from "./Components/PopUp";
import ScoreBoard from "./Components/ScoreBoard";
import GameBoard from "./Components/GameBoard";
import Nav from "./Components/Nav";

function App() {
  const [name, setName] = useState("");
  const [timer, setTimer] = useState(0);
  const [startGameFlag, setStartGameFlag] = useState(0);

  //Handles Timer Logic
  useEffect(() => {
    //to only run after hitting start , not on the initial render
    if (startGameFlag) {
      let interval = setInterval(() => {
        setTimer((time) => time + 10);
      }, 10);
    }
  }, [startGameFlag]);
  return (
    <>
      <PopUp
        name={name}
        setName={setName}
        setStartGameFlag={setStartGameFlag}
      ></PopUp>
      <Nav timer={timer} setTimer={setTimer}></Nav>
      <GameBoard></GameBoard>
      <ScoreBoard></ScoreBoard>
    </>
  );
}

export default App;
