import React, { useEffect, useState } from "react";
import TodoItem from "../todoItem/TodoItem";
import TodoFilter from "../anTodoFilter/TodoFilter";
import "./todo.scss";

export default function Todo() {
  const [allItems, setAllItems] = useState(JSON.parse(localStorage.getItem('all-items')) || []);
  const [newInput, setNewInput] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => localStorage.setItem("all-items", JSON.stringify(allItems)), [allItems])

  //add new items to the array and put the new input to blank
  function addToList(e) {
    e.preventDefault()
    newInput !== "" &&
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


  //if the id is the same as the one clicked, change the boolean of done prop
  function toggle(id) {
    setAllItems((prevItems) => {
      return prevItems.map((allItems) => {
        return allItems.id === id
          ? { ...allItems, done: !allItems.done }
          : allItems;
      });
    });
  }

  //filter the items and put it in a new array
  const filteredItems = getItems()

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

  //filter all items on the one that are done
  function deleteCompletedItems() {
    setAllItems((prevItems) => {
      return prevItems.filter(item => !item.done)
    })
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
      <TodoFilter
        filter={filter}
        onFilterChange={setFilter}
        items={allItems.filter(item => !item.done)}
        deleteItem={deleteCompletedItems}
      />
    </div>
  );
}
