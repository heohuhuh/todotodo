import React, { useState } from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import { addTodoListDB, clearTodoListDB } from "./localforage";

function Inputitem({ todoList, setTodoList }) {
  const [todo, setTodo] = useState("");
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const addTodo = () => {
    if (todo !== "") {
      const idNumber = uuid();
      const todoValue = {
        id: idNumber,
        todo: todo,
        done: false,
      };
      addTodoListDB(todoValue).then(() => {
        setTodoList([...todoList].concat(todoValue));
        setTodo("");
      });
    }
  };
  return (
    <Itembox>
      <Input
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo();
          }
        }}
        placeholder="입력하세요~"
        value={todo}
      ></Input>
      <Button
        onClick={() => {
          addTodo();
        }}
      >
        추가
      </Button>
      <Button
        onClick={() => {
          clearTodoListDB().then(() => {
            setTodoList([]);
          });
        }}
      >
        초기화
      </Button>
    </Itembox>
  );
}

export default Inputitem;

const Itembox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  top: 42px;
  margin: 5px;
  padding: 5px;
`;
const Input = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 60px;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  border: 2px solid;
  width: 200px;
`;
const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 60px;
  margin: 5px;
  padding: 5px 10px 5px 10px;
  width: 70px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  border: 2px solid green;
  color: black;
  background: white;
  cursor: pointer;
`;
