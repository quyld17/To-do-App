export function DeleteAllTasks({ list, setList }) {
  function handleDeleteAllTasks() {
    const confirmDeleteAll = window.confirm(
      "Do you want to delete all the tasks?"
    );
    if (confirmDeleteAll) {
      for (const item of list) {
        setList(list.filter((a) => a !== item));
      }
    } else {
      return;
    }
  }

  return (
    <button className="delete-all" onClick={handleDeleteAllTasks}>
      Delete all
    </button>
  );
}
