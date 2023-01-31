import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Todolist from "./Todolist";
import Inputitem from "./Inputitem";
import localforage from "localforage";

function App() {
  const [todoList, setTodoList] = useState([]);
  var todoData;
  useEffect(() => {
    todoData = localforage.createInstance({ name: "todoData" });
    todoData.length().then((length) => {
      if (length !== 0) {
        getTodoList2(todoData, setTodoList);
      }
    });
  }, []);

  return (
    <Correntbox>
      <TodoTitle>todo하세요~ todo</TodoTitle>
      <Inputitem
        todoList={todoList}
        setTodoList={setTodoList}
        todoData={todoData}
      />
      <Todoline />
      <Todobox>
        <Todolist
          todoList={todoList}
          setTodoList={setTodoList}
          isDone={false}
          todoData={todoData}
        />
      </Todobox>
      <DoneTitle>해치웠다!</DoneTitle>
      <Doneline />
      <Donebox>
        <Todolist
          todoList={todoList}
          setTodoList={setTodoList}
          isDone={true}
          todoData={todoData}
        />
      </Donebox>
    </Correntbox>
  );
}

export default App;

const getTodoList2 = (todoData, setTodoList) => {
  todoData.keys().then((keys) => {
    let startTodo = [];
    for (let i = 0; i < keys.length; i++) {
      todoData.getItem(keys[i], (err, value) => {
        startTodo = [...startTodo, { id: keys[i], ...value }];
        if (i === keys.length - 1) {
          setTodoList(startTodo);
        }
      });
    }
  });
};
//스타일
const Correntbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: overlay;
  margin: 0px;
  padding: 0px;
  &::-webkit-scrollbar {
    background: none;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 3px;
  }
`;
const TodoTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  position: absolute;
  top: 0;
  margin: 0px;
  padding: 0px;
`;

const Todoline = styled.hr`
  position: absolute;
  top: 90px;
  margin: 5px;
  border: none;
  width: 400px;
  height: 2px;
  background: #999;
`;
const Todobox = styled.div`
  position: absolute;
  top: 100px;
  width: 400px;
  height: 300px;
  overflow: overlay;
  margin: 0px;
  padding: 5px;
  //background: linear-gradient( to top , #ff9a9e  , #fad0c4);
  border-radius: 10px;
  &::-webkit-scrollbar {
    background: none;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 3px;
  }
`;
const DoneTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  top: 410px;
  margin: 20px;
  padding: 0px;
`;
const Doneline = styled.hr`
  position: absolute;
  top: 460px;
  margin: 5px;
  border: none;
  width: 400px;
  height: 2px;
  background: #999;
`;
const Donebox = styled.div`
  position: absolute;
  top: 470px;
  height: 200px;
  width: 400px;
  overflow: overlay;
  margin: 0px;
  padding: 5px;
  //background: linear-gradient( to top , #ff9a9e 30% , #fad0c4);
  border-radius: 10px;
  &::-webkit-scrollbar {
    background: none;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 3px;
  }
`;
