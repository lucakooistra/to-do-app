import React, { useState } from "react";
import TodoItem from "../todoItem/TodoItem";
import "./todo.scss";
import data from "../../data/data.json";

export default function Todo() {
  const [allItems, setAllItems] = useState(data.todos);

  function toggle(id){
    setAllItems(prevItems => {
      return (
        prevItems.map((allItems) => {
          return allItems.id === id ? {...allItems, done: !allItems.done} : allItems
        })
      )
    })
  }

  const todoElement = allItems.map((item) => (
    <TodoItem 
    key={item.id}
    done={item.done}
    text={item.value}
    handleClick={() => toggle(item.id)}
    />
  ))

  return (
    <div>
      <div className="todo">
        <input
          className="todo-input"
          type="text"
          placeholder="Create a new todo..."
          name="input"
        />
      </div>
      {todoElement}
    </div>
  );
}
