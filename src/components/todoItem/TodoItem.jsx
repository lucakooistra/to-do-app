import React from "react";
import "../todo/todo.scss";

export default function TodoItem() {
  return (
    <div className="todo-list">
      <ul>
        <span className="todo-span">
          <li>Jog around the park 3x</li>
        </span>
      </ul>
    </div>
  );
}