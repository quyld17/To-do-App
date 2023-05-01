export function AddTask({
  task,
  list,
  nextTaskId,
  setTask,
  setList,
  setNextTaskId,
}) {
  function handleAfterSubmit() {
    setTask("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() === "") {
      return;
    }
    setList([
      ...list,
      {
        id: nextTaskId,
        task: task.trim(),
      },
    ]);
    setTask("");
    setNextTaskId((prevNextTaskId) => prevNextTaskId + 1);
    handleAfterSubmit();
  }

  return (
    <button className="submit-button" type="submit" onClick={handleSubmit}>
      Add
    </button>
  );
}
