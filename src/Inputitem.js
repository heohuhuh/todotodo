import React, { useState } from "react";
import uuid from "react-uuid";
import styled from "styled-components";

function Inputitem({ todoList, setTodoList, todoData }) {
  console.log(todoData);
  const [todo, setTodo] = useState("");
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const addTodo = (todo, list) => {
    if (todo !== "") {
      const idNumber = uuid();
      const todoValue = {
        todo: todo,
        done: false,
      };
      todoData.setItem(idNumber, todoValue).then(() => {
        todoValue.id = idNumber;
        setTodoList([...list].concat(todoValue));
      });
    }
  };
  return (
    <Itembox>
      <Input
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo(todo, todoList);
            setTodo("");
          }
        }}
        placeholder="입력하세요~"
        value={todo}
      ></Input>
      <Button
        onClick={() => {
          addTodo(todo, todoList);
          setTodo("");
        }}
      >
        추가
      </Button>
      <Button
        onClick={() => {
          setTodoList([]);
          localStorage.clear();
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
