/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";
import "../task.css";
const DraggableTask = ({ task }) => {
  const [, drag] = useDrag({
    type: "TASK",
    item: { id: task.id /* other data if needed */ },
  });

  return (
    <div ref={drag} className="task-card">
      <span>
        <p>{task.name}</p>
        <p>{task.day}</p>
        <p>{task.hour}</p>
      </span>
      <button
        onClick={() => {
          console.log("LLLLLL");
        }}
      ></button>
    </div>
  );
};

export default DraggableTask;
