import { useState } from 'react'

export default function AddTask() {
    const [task, setTask] = useState("");

    return (
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <input type="text" placeholder="Enter a new task..." className="" value={task} onChange={(event) => setTask(event.target.value)}/>
            <button className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            >
                Add
            </button>
        </div>
    )
}