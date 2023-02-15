import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Buttons } from "./Buttons";
import { ChangeButton } from "./ChangeButton";

interface Props {
  todoItem: { id: string; todo: string; done: boolean };
  deleteList: (id: string) => void;
  changeTodoStatus: (id: string, todo: string | null) => void;
  isDone: boolean;
}
//컴포넌트
function Todoitem({ todoItem, deleteList, changeTodoStatus, isDone }: Props) {
  const [todo, setTodo] = useState("");
  const [inputStatus, setInputStatus] = useState(false);
  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setTodo(e.target.value);
  };

  function buttonClick() {
    changeTodoStatus(todoItem.id, null);
  }
  function toggleInputStatus() {
    setInputStatus(!inputStatus);
  }

  const todoInsert = () => {
    if (inputStatus && todo !== "") {
      changeTodoStatus(todoItem.id, todo);
      setTodo("");
    }
    setInputStatus(false);
  };
  const inputFocus: any = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputStatus) inputFocus.current.focus();
  });

  return (
    <Listline>
      <ChangeButton toggleInputStatus={toggleInputStatus} isDone={isDone} />
      <Todo inputStatus={inputStatus}> {todoItem.todo} </Todo>
      <ChangeTodoInput
        inputStatus={inputStatus}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            todoInsert();
          }
        }}
        onBlur={() => {
          todoInsert();
        }}
        placeholder={todoItem.todo}
        value={todo}
        ref={inputFocus}
      />
      <Buttons buttonClick={buttonClick} isDone={isDone} />
      <DeleteButton
        onClick={() => {
          deleteList(todoItem.id);
        }}
      >
        삭제
      </DeleteButton>
    </Listline>
  );
}

export default Todoitem;

//스타일
const Listline = styled.div`
  border: 3px solid;
  border-image: linear-gradient(to left, #a18cd1 30%, #fbc2eb);
  border-image-slice: 1;
  background: #fff;
  box-shadow: 2px 2px #aaa;
  margin: 5px;
  padding: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Todo = styled.p<{ inputStatus: boolean }>`
  width: 230px;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  padding: 0;
  display: ${({ inputStatus }) => inputStatus && "none"};
`;
const ChangeTodoInput = styled.input<{ inputStatus: boolean }>`
  width: 230px;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  padding: 0;
  border: none;
  display: ${({ inputStatus }) => !inputStatus && "none"};
`;

const DeleteButton = styled.button`
  margin: 0;
  padding: 0;
  width: 40px;
  text-shadow: 0.3px 0.3px #666;
  background: none;
  color: rgb(139, 0, 0);
  cursor: pointer;
  font-weight: bold;
  border-style: none;
`;
