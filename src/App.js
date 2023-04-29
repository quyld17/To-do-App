import { useState } from 'react';
import './app.css';
import { BsTrash } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineFileDownloadDone } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

export default function ToDoApp() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const [nextId, setNextId] = useState(0);

  return (
    <form 
      className='form-content'
    >
      <h1 className='title'>TO-DO LIST</h1>                               {/*Title*/}
      <div className='box'>
        <InputBar 
          task={task}                                                     //Input field
          setTask={setTask}
        />
        <AddButton                                                        //Submit button
          task={task}         
          list={list}
          nextId={nextId}
          setTask={setTask}  
          setList={setList}
          setNextId={setNextId}
        />
      </div>
      <ListDisplay                                                        //Display list
        list={list}
        setList={setList}
        setTask={setTask}
      />
    </form>
  );
}

function InputBar({task, setTask}) {                                      //Input Component
  return (
    <input 
      className='input-bar'
      placeholder="Type here..." 
      value={task}
      onChange={(e) => setTask(e.target.value)}
    />
  );
}

function AddButton({task, list, nextId, setTask, setList, setNextId}) {    //Submit Component
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
    <button 
      className="submit-button" 
      type="submit" 
      onClick={handleSubmit}>
      Add
    </button>
  );
}

function ListDisplay({list, setList, setTask}) {                            //List display Component
  return (
    <>
      <h2 className='your-list-heading'>Your list:</h2>
      <ul className='list'>                                                 {/*List*/}
        {list.map(ls => (                           
          <li 
            className='list-item'
            key={ls.id} 
          >
            <div className='task-name'>                                     {/*Name of list's item*/} 
              {ls.task}
            </div>

            <EditButton
              list={list}
              setList={setList}
              id={ls.id}
              task={ls.task}
            />

            <DeleteButton                                                   //Delete Button
              list={list}
              setList={setList}
              id={ls.id}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

function DeleteButton({list, setList, id}) {                                //Delete Component
  function handleDelete() {
    setList(list.filter(a => a.id !== id))
  }
  
  return (
    <BsTrash
      className="remove-button" 
      onClick={handleDelete}/>
  )
}

function EditButton({list, setList, id, task}) {                            //Edit Component
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  function handleEdit() {
    setEditMode(true);
  };

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
  };

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  if (editMode) {
    return (
      <div
        className="edit-box"
      >
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
        <IoClose 
          className="cancel-button" 
          onClick={handleCancel}
        />
      </div>
    );
  }

  return (
    <FiEdit 
      className="edit-button" 
      onClick={handleEdit}
    />
  );
}