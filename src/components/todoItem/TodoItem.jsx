import React from "react";
import "../todo/todo.scss";
import "./todo-item.scss";


export default function TodoItem(props) {

  return (
    <div className="todo-list">
      <ul className={props.done ? "disabled" : "active"}>
        <span className="todo-span">
          <li className="todo-list-item">{props.text}</li>
        </span>
      </ul>
    </div>
  );
}
