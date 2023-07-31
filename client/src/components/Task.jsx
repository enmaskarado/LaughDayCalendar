/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";
import { TrashIcon } from '@heroicons/react/24/solid'
import '../task.css'
function Task({ task, tasks, setTasks }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  
  const handleRemove = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };
  return (
    <div  ref={drag}  className="task-card">
      <p>{task.name}</p>
      <button onClick={() => {
      console.log('LLLLLL');
          handleRemove(task.id);
        }}>
        <TrashIcon className="delete-icon" />
      </button>
    </div>
  );
}

export default Task;
