import React from "react";
//make the popUp and transparency disappear

function PopUp({ name, setName, setStartGameFlag }) {
  function handleSubmit(e) {
    e.preventDefault();
    const popUp = document.querySelector(".popUp");
    const transparent = document.querySelector(".transparent");
    popUp.classList.add("invisible");
    transparent.classList.add("invisible");
    //to enable scroll
    //to start timer
    setStartGameFlag(1);
  }
  return (
    <>
      <div className="transparent"></div>
      <form className="popUp" onSubmit={handleSubmit}>
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
