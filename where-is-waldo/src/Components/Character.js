import React from "react";
import character from "./data/characters";
function Character({ name }) {
  return (
    <>
      {character.map((element, index) => {
        if (element.name === name)
          return (
            <div className="character">
              <h2>{element.name}</h2>
              <img src={element.img}></img>
            </div>
          );
      })}
    </>
  );
}

export default Character;
