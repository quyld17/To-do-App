import { useState } from 'react';
import './app.css';
import { BsTrash } from 'react-icons/bs';
// import { FiEdit } from 'react-icons/fi';

let nextId = 0;

export default function ToDoApp() {
  const [activity, setActivity] = useState('');
  const [list, setList] = useState([]);

  function handleAfterSubmit(e) {
    e.preventDefault();
    setActivity('');
  }

  return (
    <form 
      className='form-content'
      onSubmit={handleAfterSubmit}
    >
      <h1 className='h1-style'>TO-DO LIST</h1>
      <div className='box'>
        <InputBar 
          activity={activity}                                 //Input field
          setActivity={setActivity}
        />

        <AddButton                                            //Submit button
          activity={activity}         
          list={list}
          setActivity={setActivity}  
          setList={setList}
        />
      </div>
      <h2 className='h2-style'>Your list:</h2>
      <ul className='ul-style'>                               {/*List*/}
        {list.map(ls => (                           
          <li 
            className='list-item'
            key={ls.id} 
          >
            <div style={{flexGrow: 1}}>                       {/*Name of list's item*/} 
              {ls.activity}
            </div>

            <Delete                                           //Delete Button
              list={list}
              setList={setList}
              id={ls.id}
            />
          </li>
        ))}
      </ul>
    </form>
  );
}

function InputBar({activity, setActivity},) {                 //Input Component
  return (
    <input 
      className='input-box'
      placeholder="Type here..." 
      value={activity}
      onChange={(e) => setActivity(e.target.value)}
    />
  );
}

function AddButton({activity, list, setActivity, setList}) {  //Submit Component
  return (
    <button
      className='submit-button'
      type="submit" 
      onClick={() =>{
        if(activity.trim() === '') {
          return;
        }
        setList([
          ...list,
          {
            id: nextId++,
            activity: activity.trim()
          }
        ]);
        setActivity('');
      }}
    >
      Add
    </button>
  );
}

function Delete({list, setList, id}) {                     //Delete Component
  return (
    <BsTrash
    className="remove-button" 
      onClick={() => {
        setList(
          list.filter(a => a.id !== id)
        );
    }}/>
  )
}