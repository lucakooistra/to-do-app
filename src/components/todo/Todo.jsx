import React from "react";
import TodoItem from "../todoItem/TodoItem";
import "./todo.scss";

export default function Todo() {
  return (
    <>
      <span className="todo">
        <input
          className="todo-input"
          type="text"
          placeholder="Create a new todo..."
        />
      </span>
      <TodoItem />
    </>
  );
}