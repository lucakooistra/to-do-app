import React from "react";
import "../todo/todo.scss";
import "./todo-item.scss";
import { Draggable } from "@hello-pangea/dnd";

export default function TodoItem({ done, onClick, text, id, index }) {
  return (
    <Draggable key={id} draggableId={`${id}`} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps} 
          ref={provided.innerRef}
          className={`todo-list-item ${done ? "disabled" : "active"}`}
          onClick={onClick}
        >
          <button>{text}</button>
        </li>
      )}
    </Draggable>
  );
}
