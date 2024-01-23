import React, { useState } from "react";
import "./App.scss";
import Todo from "./components/todo/Todo";

const query = window.matchMedia("(prefers-color-scheme: dark)");

function App() {
  const [isDarkmode, setIsDarkmode] = useState(query.matches);
  const [grow, setGrow] = useState(false);

  function toggleDarkmode() {
    setIsDarkmode(!isDarkmode);

    setGrow(true);

    setTimeout(() => {
      setGrow(false);
    }, 1000);
  }

  return (
    <div
      className={
        isDarkmode ? "background theme--dark" : "background theme--light"
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
                isDarkmode ? "./images/icon-sun.svg" : "./images/icon-moon.svg"
              }
              alt=""
            />
          </div>
          <Todo />
        </div>
      </div>
        <div className="cover">
          <div className={`circle ${grow ? "grow" : ""}`}></div>
        </div>
    </div>
  );
}

export default App;
