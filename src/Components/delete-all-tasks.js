export function DeleteAllTasks({ list, setList }) {
  function handleDeleteAllTasks(e) {
    e.preventDefault();
    if (list.length === 0) {
      alert("List is empty! There is nothing to delete.");
      return;
    }
    const confirmDeleteAll = window.confirm(
      "Do you want to delete all the tasks?"
    );
    if (confirmDeleteAll) {
      setList([]);
    }
  }

  return (
    <button className="delete-all-tasks-button" onClick={handleDeleteAllTasks}>
      Delete all
    </button>
  );
}
