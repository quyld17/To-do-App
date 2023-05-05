import { EditSingleTask } from "./edit-single-task";
import { DeleteSingleTask } from "./delete-single-task";
import { DeleteAllTasks } from "./delete-all-tasks";

export function TaskListDisplay({ list, setList }) {
  return (
    <>
      <div className="your-list-heading">
        <h2 className="your-list-title">Your list:</h2>
        <DeleteAllTasks list={list} setList={setList} />
      </div>
      <ul className="list">
        {list.map((item) => (
          <li className="list-item" key={item.id}>
            <EditSingleTask
              list={list}
              setList={setList}
              id={item.id}
              task={item.task}
              item={item}
            />
            <DeleteSingleTask list={list} setList={setList} id={item.id} />
          </li>
        ))}
      </ul>
    </>
  );
}
