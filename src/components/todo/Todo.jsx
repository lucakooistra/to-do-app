import React, { useState } from "react";
import TodoItem from "../todoItem/TodoItem";
import TodoFilter from "../anTodoFilter/TodoFilter";
import "./todo.scss";
import data from "../../data/data.json";

export default function Todo() {
  const [allItems, setAllItems] = useState(data.todos);
  const [newInput, setNewInput] = useState("");
  const [filter, setFilter] = useState("active");

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

  function getItems() {
    switch (filter) {
      case "completed":
        return allItems.filter(item => item.done)
      case "active":
        return allItems.filter(item => !item.done);
      default:
        return allItems;
    }
  }

  const filteredItems = getItems()

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
          {filteredItems.map((item) => (
            <TodoItem
              key={item.id}
              done={item.done}
              text={item.value}
              onClick={() => toggle(item.id)}
            />
          ))}
        </ul>
      </div>
      <TodoFilter />
    </div>
  );
}
