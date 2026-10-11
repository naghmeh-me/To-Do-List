"use client";

import { useState } from "react";

type Todo = {
  text: string;
  completed: boolean;
};

type AddTaskProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function AddTask({ todos, setTodos }: AddTaskProps) {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, {
        text:task.trim(),
        completed:false
      }]);
      setTask("");
    }
  };

  const deleteTask = (index: number) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
      <input
        type="text"
        placeholder="Enter a new task..."
        className=""
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <button
        onClick={addTask}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
      >
        Add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
