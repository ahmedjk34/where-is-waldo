import React from "react";

function PopUp({ name, setName, setStartGameFlag }) {
  return (
    <>
      <div className="transparent"></div>
      <form className="popUp">
        <h1>Welcome to Where's Waldo!</h1>
        <input
          id="nameInput"
          name="nameInput"
          placeholder="Please Enter Your Name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <button>Start</button>
      </form>
    </>
  );
}

export default PopUp;
