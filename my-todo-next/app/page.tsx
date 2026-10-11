"use client";

import AddTask from "./Components/AddTask";
import { useState } from "react";

type Todo = {
  text: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todosLength = todos.length;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            My To Do List
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Manage your daily tasks
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {todosLength === 0
              ? "No tasks yet"
              : todosLength === 1
                ? `You have ${todosLength} task today`
                : `You have ${todosLength} tasks today`}
          </p>
        </div>
        <AddTask todos={todos} setTodos={setTodos} />
      </main>
    </div>
  );
}
