import React from "react";
//Display the timer
function Timer({ timer }) {
  return (
    <>
      {" "}
      <span className="digits">
        {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}.
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
      <div className="wantedCharacters"></div>
    </div>
  );
}

export default Nav;
