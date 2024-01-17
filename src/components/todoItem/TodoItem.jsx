import React from "react";
import "../todo/todo.scss";
import "./todo-item.scss";

export default function TodoItem(props) {
  return (
    <div className="todo-list">
        <ul className={props.done ? "disabled" : "active"} onClick={props.handleClick}>
          <li className="todo-list-item">{props.text}     <span className="todo-span"></span></li>
        </ul>
    </div>
  );
}
