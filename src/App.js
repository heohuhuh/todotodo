import React, { useState } from "react";
import styled from 'styled-components';
import List from './List';

const Todobox= styled.div`
  margin: 5px;
  padding: 5px;
`
const Title = styled.h2`
  font-weight : bold;

`
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
    <Todobox>
      <Title>todo하세요~ todo</Title>
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
    </Todobox>
  );
}

export default App;
