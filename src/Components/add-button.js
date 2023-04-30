export function AddButton({ task, list, nextId, setTask, setList, setNextId }) {
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
        id: nextId,
        task: task.trim(),
      },
    ]);
    setTask("");
    setNextId((prevNextId) => prevNextId + 1);
    handleAfterSubmit();
  }

  return (
    <button className="submit-button" type="submit" onClick={handleSubmit}>
      Add
    </button>
  );
}
