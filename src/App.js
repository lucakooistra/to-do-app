import React, { useState } from "react";
import "./App.scss";
import Todo from "./components/Todo/Todo";
// const darkCircle = document.querySelector(".darkCircle");
// const lightCircle = document.querySelector(".lightCircle");

const query = window.matchMedia("(prefers-color-scheme: dark)");

function App() {
  const [themeMode, setThemeMode] = useState(query.matches);
  // const [grow, setGrow] = useState("");

  function toggleDarkmode() {
    setThemeMode(!themeMode);
  }

  return (
    <div
      className={
        themeMode ? "background theme--dark" : "background theme--light"
      }
    >
      <div className="background-img">
        <div className="container">
          <div className="app-header">
            <h1>todo</h1>
            <img
              onClick={toggleDarkmode}
              className="app-switch"
              src={
                themeMode ? "./images/icon-sun.svg" : "./images/icon-moon.svg"
              }
              alt=""
            />
          </div>
          <Todo />
        </div>
      <div className="container--cover">
        <div className={`darkCircle ${themeMode ? "" : "grow"}`}></div>
        <div className={`lightCircle ${themeMode ? "grow" : ""}`}></div>
      </div>
      </div>
    </div>
  );
}

export default App;
