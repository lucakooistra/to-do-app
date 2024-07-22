import React, { useEffect, useState } from "react";
import TodoItem from "../todoItem/TodoItem";
import TodoFilter from "../anTodoFilter/TodoFilter";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import "./todo.scss";

export default function Todo() {
  const [allItems, setAllItems] = useState(JSON.parse(localStorage.getItem("all-items")) || []);
  const [newInput, setNewInput] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(
    () => localStorage.setItem("all-items", JSON.stringify(allItems)),
    [allItems]
  );

  //add new items to the array and put the new input to blank
  function addToList() {
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
  const filteredItems = getItems();

  function getItems() {
    switch (filter) {
      case "completed":
        return allItems.filter((item) => item.done);
      case "active":
        return allItems.filter((item) => !item.done);
      default:
        return allItems;
    }
  }

  //filter all items on the one that are done
  function deleteCompletedItems() {
    setAllItems((prevItems) => {
      return prevItems.filter((item) => !item.done);
    });
  }

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(allItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setAllItems(items);
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
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="listItem">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {filteredItems.map((item, index) => (
                  <TodoItem
                    key={item.id}
                    index={index}
                    id={item.id}
                    done={item.done}
                    text={item.value}
                    onClick={() => toggle(item.id)}
                  />
                )
                )}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <TodoFilter
        filter={filter}
        onFilterChange={setFilter}
        items={allItems.filter((item) => !item.done)}
        deleteItem={deleteCompletedItems}
      />
    </div>
  );
}
