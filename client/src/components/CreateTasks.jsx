/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

function CreateTasks({ tasks, setTasks ,loadData}) {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todos",
  });
  const createTask = async () => {
    try {
      const body = JSON.stringify({
        rrule: "tasks1",
        start_date: dayjs().format("YYYY-MM-DD"),
        start_time: dayjs().format("YYYY-MM-DD hh:mm"),
        end_date: dayjs().add(1, "days").format("YYYY-MM-DD"),
        end_time: dayjs().add(1, "days").format("YYYY-MM-DD hh:mm"),
        idCalendar: "1",
      });
      await axios.post(`/events`, body, config);
      await loadData()
    } catch (err) {
      console.log(err);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      const list = [...prev, task];
      //localStorage.setItem("tasks", JSON.stringify(list));
      createTask();
      return list;
    });
    setTask({
      id: "",
      name: "",
      status: "todos",
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className={"create"}
        value={task.name}
        onChange={(e) => {
          setTask({ ...task, id: uuidv4(), name: e.target.value });
        }}
      />
      <button>Create Task</button>
    </form>
  );
}

export default CreateTasks;
