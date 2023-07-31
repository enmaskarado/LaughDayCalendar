import { useDrop } from "react-dnd";
import Task from "./Task";
// eslint-disable-next-line react/prop-types
function Section({ status, todos, inProgress, closed, tasks, setTasks }) {
  let tasksMap = todos;
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  switch (status) {
    case "todo":
      tasksMap = todos;
      break;
    case "inprogress":
      tasksMap = inProgress;
      break;
    case "closed":
      tasksMap = closed;
      break;
    default:
      break;
  }
  const addItemToSection = (id) => {
    setTasks((prev) => {
      const mTasks = prev.map((t) => {
        if (t.id === id) {
          return { ...t, status: status };
        }
        return t;
      });
      localStorage.setItem("tasks", JSON.stringify(mTasks));
      return mTasks;
    });
  };
  return (
    <section ref={drop} className="board-info-bar">
      <div className="board-controls">
        <h3>{`Section ${status}`}</h3>
        {tasksMap.length > 0 &&
          tasksMap.map((task, index) => (
            <div key={index} className="container mx-auto flex flex-row">
              <Task key={index} task={task} tasks={tasks} setTasks={setTasks} />
            </div>
          ))}
      </div>
    </section>
  );
}

export default Section;
