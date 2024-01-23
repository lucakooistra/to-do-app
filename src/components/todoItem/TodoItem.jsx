import React from "react";
import "../todo/todo.scss";
import "./todo-item.scss";

export default function TodoItem({ done, onClick, text }) {
  return (
    <li
      className={`todo-list-item ${done ? "disabled" : "active"}`}
      onClick={onClick}
    >
      <button>{text}</button>
    </li>
  );
}
