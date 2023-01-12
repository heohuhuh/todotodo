import React, { useState } from "react";
import styled from 'styled-components';
import Todolist from './Todolist';
import Inputitem from './Inputitem';

function App() {
  const [todoList,setTodoList] = useState([{id: '',todo : '' }]);

  return (
    <Todobox>
      <Title>todo하세요~ todo</Title>
      <Inputitem todoList={todoList} setTodoList={setTodoList}/>
      <Todolist todoList={todoList} setTodoList={setTodoList}/>
      <Middleline></Middleline>
    </Todobox>
  );
}

export default App;

//스타일
const Todobox= styled.div`
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