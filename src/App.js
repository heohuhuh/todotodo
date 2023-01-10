import React, { useState } from "react";
import './App.css';
import List from './List';

function App() {
  const [toDo,toDoChange] = useState("")
  const [doList,doListChange] = useState([])
  const onChange = (e) => {
    toDoChange(e.target.value)
  };
  const listAdd = () =>{
    const listTodo = [...doList,toDo];
    doListChange(listTodo)
  }
  return (
    <div className="todo">
      <p>일단 todo</p>
      <input className="input" 
      onChange={ onChange }
      onKeyDown={(e)=>{
        if(e.key === "Enter" && toDo != ""){
          listAdd()
        }
      }}
      placeholder = "입력하세요" value={ toDo }></input>
      <button onClick={()=>{
        if(toDo!=""){
          listAdd()
        }
      }
      }>
        추가
      </button>
    <List doList = { doList }/>
    </div>
  );
}

export default App;
