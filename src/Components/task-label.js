export function TaskLabel({ item, editModeOn }) {
  if (editModeOn) {
    return;
  }
  return <div className="task-name">{item.task}</div>;
}
