import { BsTrash } from "react-icons/bs";

export function DeleteSingleTask({ list, setList, id }) {
  function handleDelete() {
    const confirmDelete = window.confirm("Do you want to delete this task?");
    if (confirmDelete) {
      setList(list.filter((a) => a.id !== id));
    } else {
      return;
    }
  }

  return <BsTrash className="remove-button" onClick={handleDelete} />;
}
