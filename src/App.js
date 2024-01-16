import React from "react";
import "./App.scss";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <div className="background">
      <div className="background-img">
        <div className="container">
          <div className="app-header">
            <h1>T O D O</h1>
            <img className="app-switch" src="./images/icon-sun.svg" />
          </div>
           <Todo /> 
        </div>
      </div>
    </div>
  );
}

export default App;
