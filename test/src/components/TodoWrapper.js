import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Day from "./Day";
export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const dayDate = '2023-07-12'

  const handleDrop = (taskId, dayDate, x, y, hour) => {
    setTodos({
      ...todos,
      day: dayDate,
      x,
      y,
      hour,
    });
  };
  return (
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
        <button type="submit" className="todo-btn">
          Save the task to the agenda
        </button>
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
              <Day day={1} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={2} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={3} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={4} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={5} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={6} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={7} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={8} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={9} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={10} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={11} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={12} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={13} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={14} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={15} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={16} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={17} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={18} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={19} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={20} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={21} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={22} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={23} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={24} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={25} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={26} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={27} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={28} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={29} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={30} onDrop={handleDrop} dayDate={dayDate} />
            </li>
            <li>
              <Day day={31} onDrop={handleDrop} dayDate={dayDate} />
            </li>
          </ul>
          onDrop={handleDrop}
          dayDate={dayDate}{" "}
        </div>
      </div>
    </div>
  );
};
