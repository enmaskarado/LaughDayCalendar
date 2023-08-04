import React, { useEffect, useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Day from "./Day";
import axios from "axios";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        day: "",
        x: "",
        y: "",
        isStatic: true,
        style: "relative",
      },
    ]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo } : todo)));
  };
  const saveTask = async () => {
    try {
      const data = await todos.map(async (todo) => {
        const body = JSON.stringify({
          id: todo.id,
          rrule: todo.task,
          start_date: todo.day,
          start_time: todo.day,
          end_date: todo.day,
          end_time: todo.day,
          idCalendar: "1",
        });
        const respuesta = await axios.post(
          `http://localhost:5000/events`,
          body,
          config
        );
        return respuesta;
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleDrop = (taskId, dayDate, x, y) => {
    const newTodos = todos.filter((todo) => todo.id !== taskId);
    let updateTodo = todos.filter((todo) => todo.id === taskId)[0];
    updateTodo = {
      ...updateTodo,
      day: dayDate,
      isStatic: false,
      x,
      y,
      style: "absolute",
    };
    setTodos([...newTodos, updateTodo]);
  };
  const loadData = async () => {
    try {
      const boardId = "1";
      const res = await axios.get(`http://localhost:5000/events/${boardId}`);
      const data = res?.data.map((item) => ({
        id: item.id,
        task: item.rrule,
        day: item.start_date,
        x: "",
        y: "",
        isStatic: false,
        style: "relative",
      }));
      // setTodos(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div className="TodoWrapper">
        <div className="div1">
          <h1>Organize your task !</h1>
          <TodoForm addTodo={addTodo} />
          {/* display todos */}
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
            />
          ))}
          <div className="save">
            <button
              type="submit"
              onClick={() => saveTask()}
              className="save-btn"
            >
              save calendar
            </button>
          </div>
        </div>
        <div className="div2">
          <h1>Calendar</h1>
          <div className="calendar">
            <header>August</header>
            <ul className="weeks">
              <li>M</li>
              <li>T</li>
              <li>W</li>
              <li>T</li>
              <li>F</li>
              <li>S</li>
              <li>S</li>
            </ul>
            <ul className="days">
              <li>
                <Day day={1} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={2} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={3} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={4} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={5} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={6} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={7} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={8} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={9} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={10} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={11} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={12} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={13} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={14} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={15} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={16} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={17} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={18} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={19} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={20} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={21} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={22} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={23} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={24} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={25} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={26} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={27} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={28} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={29} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={30} onDrop={handleDrop} />
              </li>
              <li>
                <Day day={31} onDrop={handleDrop} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
