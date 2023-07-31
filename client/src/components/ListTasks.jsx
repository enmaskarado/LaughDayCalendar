/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Section from "./Section";
function ListTasks({ tasks, setTasks }) {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);

  useEffect(() => {
    //setTasks(JSON.parse(localStorage.getItem("tasks")));
    const todosTmp = tasks.filter((task) => task.status === "todos");
    const inProgressTmp =
      tasks.filter((task) => task.status === "inprogress") ;
    const closedTmp = tasks.filter((task) => task.status === "closed") ;
    setTodos(todosTmp);
    setInProgress(inProgressTmp);
    setClosed(closedTmp);
  }, [tasks]);
  const statusTodo = ["todos", "inprogress", "closed"];
  return (
    <div className="test">
      <h1>ListTasks</h1>
      {statusTodo.map((status, index) => (
        // eslint-disable-next-line react/jsx-key
        <Section
          key={index}
          status={status}
          todos={todos}
          inProgress={inProgress}
          closed={closed}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
}

export default ListTasks;
