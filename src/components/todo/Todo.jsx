import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import TodoFilter from "../TodoFilter/TodoFilter";
import "./todo.scss";
import data from "../../data/data.json";

export default function Todo() {
  const [allItems, setAllItems] = useState(data.todos);
  const [newInput, setNewInput] = useState("");

  function addToList() {
    setAllItems([
      ...allItems,
      {
        id: allItems.length,
        value: newInput,
        done: false
      }
    ])
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addToList();
    }
  }

  function toggle(id) {
    setAllItems((prevItems) => {
      return prevItems.map((allItems) => {
        return allItems.id === id
          ? { ...allItems, done: !allItems.done }
          : allItems;
      });
    });
  }

  const todoElement = allItems.map((item) => (
    <TodoItem
      key={item.id}
      done={item.done}
      text={item.value}
      handleClick={() => toggle(item.id)}
    />
  ));

  return (
    <div>
      <div className="todo">
        <ul>
          <li className="todo-list-item">
            <input
              className="todo-input"
              type="text"
              placeholder="Create a new todo..."
              name="newItem"
              onChange={(event) => {
                setNewInput(event.target.value);
              }}
              onKeyDown={handleKeyDown}
              value={newInput}
            />
          </li>
      {todoElement}
        </ul>
      </div>
      <TodoFilter />
    </div>
  );
}
