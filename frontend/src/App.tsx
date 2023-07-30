import * as React from "react";
import CreateTask from "./Components/CreateTask";
import ListTask from "./Components/ListTask";
function App() {
  const [tasks, setTasks] = useState([])
  return (
    <DndProvider backend={HTML5Backend}>
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <ListTask tasks={tasks} setTasks={setTasks} />
    </DndProvider>
  );
}

export default App;
