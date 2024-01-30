import React from "react";
import { clsx } from "clsx";
import "../todo/todo.scss";
import "./todo-filter.scss";

const options = [
  {
    name: "all",
    displayName: "All",
  },

  {
    name: "active",
    displayName: "Active",
  },

  {
    name: "completed",
    displayName: "Completed",
  },
];

export default function TodoFilter({
  filter,
  onFilterChange,
  items,
  deleteItem,
}) {
  return (
    <div className="todo-filter">
      <p>{items.length} items left</p>
        <div className="todo-filter__buttons">
          {options.map((button) => {
            return (
              <button
                key={button.name}
                onClick={() => onFilterChange(button.name)}
                className={clsx(filter === button.name && "active")}
              >
                {button.displayName}
              </button>
            );
          })}
        </div>
        <button onClick={deleteItem}>Clear Completed</button>
    </div>
  );
}
