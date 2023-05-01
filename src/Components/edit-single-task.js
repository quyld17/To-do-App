import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { TaskLabel } from "./task-label";

export function EditSingleTask({ list, setList, id, task, item }) {
  const [editedTask, setEditedTask] = useState(task);
  const [editModeOn, setEditModeOn] = useState(false);

  function handleToggleEditMode() {
    setEditModeOn(true);
  }

  const handleSave = () => {
    setEditModeOn(false);
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, task: editedTask } : item
    );
    setList(updatedList);
  };

  function handleCancel() {
    const confirmCancel = window.confirm("Do you want to cancel editing?");
    if (confirmCancel) {
      setEditModeOn(false);
      setEditedTask(task);
    } else {
      return;
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSave();
    }
  }

  if (editModeOn) {
    return (
      <>
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
      </>
    );
  }

  return (
    <>
      <TaskLabel item={item} editModeOn={editModeOn} />
      <FiEdit className="edit-button" onClick={handleToggleEditMode} />
    </>
  );
}
