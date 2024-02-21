// Filename - App.js

import React, { useState } from "react";

// Importing app.css is css file to add styling
import "./App.css";

const App = () => {
  let initialValue = 0;
  // Counter is a state initialized to 0
  const [counter, setCounter] = useState(initialValue);

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1);
  };

  const resetClick = () => {
    setCounter(initialValue);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        //justifyContent: "center",
        fontSize: "280%",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        transition: "opacity .3s",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          color: "white",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Simple Counter
      </div>

      <div
        style={{
          display: "flex",
          color: "white",
          cursor: "pointer",
          marginTop: "2%",
        }}
        onClick={resetClick}
      >
        {counter > 0 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="white"
            class="bi bi-arrow-clockwise"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
          </svg>
        )}
      </div>
      <div
        style={{
          position: "relative",
          top: counter > 0 ? "30%" : "34%",
          width: "100%",
        }}
      >
        {counter > 0 && (
          <div
            style={{
              float: "inline-start",
              marginLeft: "3%",
              cursor: "pointer",
            }}
            onClick={handleClick2}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="white"
              class="bi bi-dash-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
          </div>
        )}
        <div
          style={{
            float: "left",
            color: "white",
            marginLeft: counter > 0 ? "43%" : "49%",
          }}
        >
          {counter}
        </div>
        <div
          style={{ float: "inline-end", marginRight: "3%", cursor: "pointer" }}
          onClick={handleClick1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="white"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default App;
