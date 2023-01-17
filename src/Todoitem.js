import React, { useRef, useState } from "react";
import styled from "styled-components";

//컴포넌트
function Todoitem({ todoItem, deleteList, changeTodoStatus, isDone }) {
  const [todo, setTodo] = useState("");
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const [todoTag, setTodoTag] = useState(true);
  function buttonClick() {
    changeTodoStatus(todoItem.id);
  }
  const test = useRef(null);
  //눌리면 태그 위치에 인덱스를 생성하고 인덱스엔 원래 값이 있음 인덱스가 비활성화되거나 엔터가 눌리면 비활성화시켜서 입력한 값으로 태그가 바뀜
  return (
    <Listline>
      <ChangeTodoButton
        onClick={() => {
          setTodoTag(!todoTag);
          test.current.focus();
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-pencil"
        viewBox="0 0 16 16"
      >
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
      </ChangeTodoButton>
      <Todo todoTag={todoTag}> {todoItem.todo} </Todo>
      <ChangeTodoInput
        ref={test}
        todoTag={todoTag}
        onChange={onChange}
        onKeyDown={(e) => {
          console.log(e);
          if (e.key === "Enter") {
            changeTodoStatus(todoItem.id, todo);
            setTodo("");
            setTodoTag(!todoTag);
          }
        }}
        placeholder={todoItem.todo}
        value={todo}
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

const Buttons = ({ buttonClick, isDone }) => {
  return isDone ? (
    <StyledRedoButton onClick={() => buttonClick()}>다시하기</StyledRedoButton>
  ) : (
    <Checkbox
      onClick={() => {
        buttonClick();
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
    </Checkbox>
  );
};

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
const Todo = styled.p`
  width: 230px;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  padding: 0;
  display: ${({ todoTag }) => !todoTag && "none"};
`;
const ChangeTodoButton = styled.svg`
  background: none;
  color: gray;
  margin: 0;
  padding: 10px;
  cursor: pointer;
`;
const ChangeTodoInput = styled.input`
  width: 230px;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  padding: 0;
  border: none;
  display: ${({ todoTag }) => todoTag && "none"};
`;
const Checkbox = styled.svg`
  margin: 0;
  padding: 0;
  margin: 0;
  width: 60px;
  background: none;
  color: green;
  cursor: pointer;
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
const StyledRedoButton = styled.button`
  width: 60px;
  text-shadow: 0.3px 0.3px #666;
  background: none;
  color: blue;
  padding: 0;
  cursor: pointer;
  font-weight: bold;
  border-style: none;
`;
