import { useState } from 'react';
import './App.css';

let nextId = 0;

export default function ToDoApp() {
  const [activity, setActivity] = useState('');
  const [list, setList] = useState([]);

  const formContent = {
    backgroundColor: "#f5f6f7",
    display: "block",
    padding: "30px",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "500px",
    marginTop: "30px",
  };
  const h1Style = {
    marginTop: "0px",
    textAlign: "center",
  };
  const inputBox = {
    margin: "10px 0px",
    width: "100%",
    maxWidth: "492px",
    display: "block",
  };
  const submitButton = {
    margin: "10px 0px",
    display: "block",
    width: "100%",
  };
  const h2Style = {
    marginTop: "30px",
    marginBottom: "0px",
  };
  const ulStyle = {
    marginTop: "10px",
    listStyleType: "none",
    paddingLeft: "30px",
  };

  function handleInput(e) {
    setActivity(e.target.value);
  }

  function handleAfterSubmit(e) {
    e.preventDefault();
    setActivity('');
  }

  function handleSubmitClick() {
    if (activity !== '') {
      setList([
        ...list,
        {id: nextId++,
        activity: activity}
      ])
    }
  }

  function handleDeleteClick(id) {
    setList(
      list.filter(a =>
        a.id !== id
      )
    );
  }

  return (
    <div>
      <form style={formContent} onSubmit={handleAfterSubmit}>
        <h1 style={h1Style}>TO-DO LIST</h1>
        <input 
          style={inputBox}
          placeholder="Type here..." 
          value={activity}
          onChange={handleInput}
        />
        <button 
          style={submitButton}
          type="submit" 
          onClick={handleSubmitClick}
        >
          Submit
        </button>
        <h2 style={h2Style}>Your list:</h2>
        <ul style={ulStyle}>
          {list.map(list => (
            <li 
              style={{ display: "flex", alignItems: "center", marginBottom: "3px" }}
              key={list.id}
            >
              <div style={{flexGrow: 1}}>{list.activity}{' '}</div>
              <button 
              style={{marginRight: "20px"}}
              onClick={() => handleDeleteClick(list.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}