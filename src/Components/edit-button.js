import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export function EditButton({ list, setList, id, task }) {
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  function handleEdit() {
    setEditMode(true);
  }

  const handleSave = () => {
    setEditMode(false);
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, task: editedTask } : item
    );
    setList(updatedList);
  };

  function handleCancel() {
    setEditMode(false);
    setEditedTask(task);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSave();
    }
  }

  if (editMode) {
    return (
      <div className="edit-box">
        <input
          className="edit-bar"
          placeholder="Type here..."
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <MdOutlineFileDownloadDone
          className="save-button"
          onClick={handleSave}
        />
        <IoClose className="cancel-button" onClick={handleCancel} />
      </div>
    );
  }

  return <FiEdit className="edit-button" onClick={handleEdit} />;
}
