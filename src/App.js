import React, { useState } from "react";
import './App.css';
import List from './List';

function App() {
  const [todo,setTodo] = useState('')
  const [todoList,setTodoList] = useState([])

  const onChange = (e) => {
    setTodo(e.target.value)
  };

  const listAdd = (item,list) =>{
    if(item !== ''){
      const listTodo = [...list,item];
      setTodoList(listTodo);
    }
  }
  const addCheck = (item)=> {
        setTodoList(item);
  }

  return (
    <div className="todo">
      <p>todo하세요~ todo</p>
      <input className="input" onChange={ onChange } onKeyDown={(e)=>{
        if(e.key === "Enter")listAdd(todo,todoList);
      }} placeholder = "입력하세요" value={ todo }></input>
      <button onClick={()=>{listAdd(todo,todoList)}}>추가</button>
    <List todoList = { todoList }/>
    </div>
  );
}

export default App;
