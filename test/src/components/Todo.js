import React from 'react'
import { useDrag } from "react-dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export const Todo = ({task, deleteTodo, toggleComplete}) => {
  const [, drag] = useDrag({
    type: "TASK",
    item: { id: task.id /* other data if needed */ },
  });
  return (
    <div  ref={drag}  className="Todo">
        <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}
