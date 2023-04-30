import { EditButton } from "./edit-button";
import { DeleteButton } from "./delete-button";

export function ListDisplay({ list, setList }) {
  return (
    <>
      <h2 className="your-list-heading">Your list:</h2>
      <ul className="list">
        {list.map((ls) => (
          <li className="list-item" key={ls.id}>
            <div className="task-name">{ls.task}</div>

            <EditButton
              list={list}
              setList={setList}
              id={ls.id}
              task={ls.task}
            />

            <DeleteButton list={list} setList={setList} id={ls.id} />
          </li>
        ))}
      </ul>
    </>
  );
}
