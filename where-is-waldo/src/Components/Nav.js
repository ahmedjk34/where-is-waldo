import React from "react";
import Character from "./Character";
//Display the timer
function Timer({ timer }) {
  return (
    <>
      {" "}
      <span className="digits">
        {("0" + Math.ceil((timer / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.ceil((timer / 1000) % 60)).slice(-2)}.
      </span>
      <span className="digits">{("0" + ((timer / 10) % 100)).slice(-2)}</span>
    </>
  );
}

function Nav({ timer, setTimer }) {
  return (
    <div className="nav">
      <h2>Logo</h2>
      <div className="stopWatch">
        <Timer timer={timer}></Timer>
      </div>
      <div className="wantedCharacters">
        <Character name="Cacodemon"></Character>
        <Character name="Bill Cipher"></Character>
        <Character name="Courage"></Character>
      </div>
    </div>
  );
}

export default Nav;
