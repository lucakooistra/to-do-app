import React from "react";
import useState from "react";
import "./todo.scss";

function todo() {
  return (
    <span className="todo">
        <input
          className="todo-input"
          type="text"
          placeholder="Create a new todo..."
        />
    </span>
  );
}

export default todo();
