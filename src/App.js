import React, { useState } from "react";
import styled from 'styled-components';
import List from './List';
import Inputbutton from './inputbutton';

const Todobox= styled.div`
  margin: 5px;
  padding: 5px;
`
const Title = styled.h2`
  font-weight : bold;
`
function App() {
  const [todoList,setTodoList] = useState([{id: '',todo : '' }]);
  console.log(todoList)

  return (
    <Todobox>
      <Title>todo하세요~ todo</Title>
      <Inputbutton todoList = { todoList } setTodoList = { setTodoList }/>
      <List todoList = { todoList } listChange = { setTodoList }/>
    </Todobox>
  );
}

export default App;
