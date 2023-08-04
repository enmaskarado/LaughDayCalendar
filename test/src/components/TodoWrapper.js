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

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
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
        <button type="submit" className='todo-btn'>Save the task to the agenda</button>
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
            <li><Day day={1 }/></li>
            <li><Day day={2 }/></li>
            <li><Day day={3 }/></li>
            <li><Day day={4 }/></li>
            <li><Day day={5 }/></li>
            <li><Day day={6 }/></li>
            <li><Day day={7 }/></li>
            <li><Day day={8 }/></li>
            <li><Day day={9 }/></li>
            <li><Day day={10}/></li>
            <li><Day day={11}/></li>
            <li><Day day={12}/></li>
            <li><Day day={13}/></li>
            <li><Day day={14}/></li>
            <li><Day day={15}/></li>
            <li><Day day={16}/></li>
            <li><Day day={17}/></li>
            <li><Day day={18}/></li>
            <li><Day day={19}/></li>
            <li><Day day={20}/></li>
            <li><Day day={21}/></li>
            <li><Day day={22}/></li>
            <li><Day day={23}/></li>
            <li><Day day={24}/></li>
            <li><Day day={25}/></li>
            <li><Day day={26}/></li>
            <li><Day day={27}/></li>
            <li><Day day={28}/></li>
            <li><Day day={29}/></li>
            <li><Day day={30}/></li>
            <li><Day day={31}/></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
