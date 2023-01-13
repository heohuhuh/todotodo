import React, { useState } from "react";
import styled from 'styled-components';
import Todolist from './Todolist';
import Inputitem from './Inputitem';

function App() {
  const [todoList,setTodoList] = useState([{}]);
  return (
    <div>
    <Todobox>
      <Title>todo하세요~ todo</Title>
      <Inputitem todoList={todoList} setTodoList={setTodoList}/>
      <Todolist todoList={todoList} setTodoList={setTodoList} isDone={false}/>
    </Todobox>
    <Donebox>
      <Title>해치웠다!</Title>
      <Todolist todoList={todoList} setTodoList={setTodoList} isDone={true}/>
    </Donebox>
    </div>
  );
}

export default App;

//스타일
const Todobox= styled.div`
position: fixed;
  top: 0;
  left:0;
  right: 0;
  bottom: 30%;
  overflow: overlay;
  margin: 5px;
  padding: 5px;
`
const Title = styled.h2`
  font-weight : bold;
`
const Middleline = styled.hr`
  background: #000;
  border: none;
  padding: 0.5px;
`
const Donebox = styled.footer`
  position: fixed;
  top:70%;
  bottom: 0%;
  left:0;
  right: 0;
  overflow: overlay;
  margin: 5px;
  padding: 5px;
`