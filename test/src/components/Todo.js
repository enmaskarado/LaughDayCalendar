import React from "react";
import { useDrag } from "react-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export const Todo = ({ task, deleteTodo, toggleComplete }) => {
  const smallView = (description) => {
    return description.slice(0, 4) + "...";
  };
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.2 : 1;
  return (
    <div
      ref={drag}
      className={"Todo"}
      style={{
        position: task.style,
        left: task.x,
        top: task.y,
        opacity,
      }}
    >
      <p onClick={() => toggleComplete(task.id)}>{smallView(task.task)}</p>
      <div>
        {task.isStatic && (
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        )}
      </div>
    </div>
  );
};
