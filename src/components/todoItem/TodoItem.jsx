import React from "react";
import "../Todo/todo.scss";
import "./todo-item.scss";

export default function TodoItem({ done, handleClick, text }) {
  return (
    <li
      className={`todo-list-item ${done ? "disabled" : "active"}`}
      onClick={handleClick}
    >
      <button>{text}</button>
    </li>
  );
}
