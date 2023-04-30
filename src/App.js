import { useState } from "react";
import "./app.css";

import { InputBar } from "./Components/input-bar";
import { AddButton } from "./Components/add-button";
import { ListDisplay } from "./Components/list-display";

export default function ToDoApp() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [nextId, setNextId] = useState(0);

  return (
    <form className="form-content">
      <h1 className="title">TO-DO LIST</h1>
      <div className="box">
        <InputBar task={task} setTask={setTask} />
        <AddButton
          task={task}
          list={list}
          nextId={nextId}
          setTask={setTask}
          setList={setList}
          setNextId={setNextId}
        />
      </div>
      <ListDisplay list={list} setList={setList} setTask={setTask} />
    </form>
  );
}
