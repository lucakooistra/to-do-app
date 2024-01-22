import React, { useState } from "react";
import TodoItem from "../todoItem/TodoItem";
import TodoFilter from "../TodoFilter/TodoFilter";
import "./todo.scss";
import data from "../../data/data.json";

export default function Todo() {
  const [allItems, setAllItems] = useState(data.todos);
  const [newInput, setNewInput] = useState("");

  function addToList(e) {
    e.preventDefault();
    setAllItems([
      ...allItems,
      {
        id: allItems.length,
        value: newInput,
        done: false,
      },
    ]);
    setNewInput("");
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

  return (
    <div>
      <div className="todo">
            <form className="todo-form" onSubmit={addToList}>
              <input
                className="todo-input"
                type="text"
                placeholder="Create a new todo..."
                name="newItem"
                onChange={(e) => {
                  setNewInput(e.target.value);
                }}
                value={newInput}
              />
              <button type="submit"></button>
            </form>
            <ul>
          {allItems.map((item) => (
            <TodoItem
              key={item.id}
              done={item.done}
              text={item.value}
              handleClick={() => toggle(item.id)}
            />
          ))}
        </ul>
      </div>
      <TodoFilter />
    </div>
  );
}
