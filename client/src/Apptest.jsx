import "./index.css";
import { useEffect, useState } from "react";
import CreateTasks from "./components/CreateTasks";
import ListTasks from "./components/ListTasks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import axios from "axios";
import Calendar from "./components/Calendar";
function App() {
  // const [tasks, setTasks] = useState([
  //   {
  //     id: "1",
  //     name: "play",
  //     status: "todos",
  //   },
  // ]);
  const [tasks, setTasks] = useState([]);
  const loadData = async () => {
    try {
      const boardId = '1'//axios.defaults.headers.common["boardId"];
      const res = await axios.get(`/events/${boardId}`);
      setTasks(res?.data)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <CreateTasks tasks={tasks} setTasks={setTasks} loadData={loadData}/>
        <ListTasks tasks={tasks} setTasks={setTasks} />
        <Calendar/>
      </div>
    </DndProvider>
  );
}

export default App;
