"use client";

import { useState } from "react";
import { CheckSquare } from "@deemlol/next-icons";
import { Trash2 } from "@deemlol/next-icons";

type Todo = {
  id: string;
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
      setTodos([
        ...todos,
        {
          id: crypto.randomUUID(),
          text: task.trim(),
          completed: false,
        },
      ]);
      setTask("");
    }
  };

  const deleteTask = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
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
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => toggleTodo(todo.id)}>
              <CheckSquare color="#3b82f6" size={20} strokeWidth={1.5} />
            </button>
            <button onClick={() => deleteTask(todo.id)}>
              <Trash2 color="#f63b3b" size={20} strokeWidth={1.5} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
