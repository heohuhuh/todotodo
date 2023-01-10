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
    const listTodo = [...list];
    if(item !== ''){
      const listTodoValue = [...list,item];
      return listTodoValue;
    }
    return listTodo;
  }

  return (
    <div className="todo">
      <p>todo하세요~ todo</p>
      <input className="input" onChange={ onChange } onKeyDown={(e)=>{
        if(e.key === "Enter"){
          const addList = listAdd(todo,todoList)
          setTodoList(addList)
        };
      }} placeholder = "입력하세요" value={ todo }></input>
      <button onClick={()=>{
        const addList = listAdd(todo,todoList)
        setTodoList(addList)
      }}>추가</button>
    <List todoList = { todoList }/>
    </div>
  );
}

export default App;
