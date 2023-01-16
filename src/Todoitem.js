import styled from "styled-components";

//컴포넌트
function Todoitem({ todoItem, deleteList, toggleStatus, isDone }) {
  function buttonClick() {
    toggleStatus(todoItem.id);
  }
  return (
    <Listline>
      <Tag> {todoItem.todo} </Tag>
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
      width="16"
      height="16"
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
  padding: 1px;
  margin: 3px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
`;
const Tag = styled.p`
  color: black;
  font-weight: bold;
  font-size: 1rem;
  margin: 3px 10px 3px 10px;
  padding: 5px 90px 5px 5px;
`;
const Checkbox = styled.svg`
  background: none;
  position: absolute;
  right: 70px;
  color: green;
  margin: 10px;
  cursor: pointer;
`;
const DeleteButton = styled.button`
  text-shadow: 0.3px 0.3px #666;
  background: none;
  position: absolute;
  right: 10px;
  color: rgb(139, 0, 0);
  margin: 10px;
  cursor: pointer;
  font-weight: bold;
  border-style: none;
`;
const StyledRedoButton = styled.button`
  text-shadow: 0.3px 0.3px #666;
  background: none;
  position: absolute;
  right: 50px;
  color: blue;
  margin: 10px;
  padding: 0;
  cursor: pointer;
  font-weight: bold;
  border-style: none;
`;
