import { BsTrash } from "react-icons/bs";

export function DeleteButton({ list, setList, id }) {
  function handleDelete() {
    setList(list.filter((a) => a.id !== id));
  }

  return <BsTrash className="remove-button" onClick={handleDelete} />;
}
