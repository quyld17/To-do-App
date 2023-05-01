import { useState } from "react";
import "./app.css";

import { InputBar } from "./Components/input-bar";
import { AddTask } from "./Components/add-task";
import { TaskListDisplay } from "./Components/task-list-display";

export default function ToDoApp() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [nextTaskId, setNextTaskId] = useState(0);

  return (
    <form className="form-content">
      <h1 className="title">TO-DO LIST</h1>
      <div className="box">
        <InputBar task={task} setTask={setTask} />
        <AddTask
          task={task}
          list={list}
          nextTaskId={nextTaskId}
          setTask={setTask}
          setList={setList}
          setNextTaskId={setNextTaskId}
        />
      </div>
      <TaskListDisplay list={list} setList={setList} setTask={setTask} />
    </form>
  );
}
