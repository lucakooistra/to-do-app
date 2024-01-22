import React from "react";
import "../Todo/todo.scss";
import "./todo-item.scss";

export default function TodoItem(props) {
  return (
    <li
      className={`todo-list-item ${props.done ? "disabled" : "active"}`}
      onClick={props.handleClick}
    >
      <button>{props.text}</button>
    </li>
  );
}
