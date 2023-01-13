import styled from "styled-components";

//컴포넌트
function Todoitem({ todoItem, deleteList, toggleStatus, isDone }) {
  return (
    <Listline>
      <Tag> {todoItem.todo} </Tag>
      {isDone ? <RedoButton handleClick={toggleStatus} id={todoItem.id} /> 
      :
      <DoneButton handleClick={toggleStatus} id={todoItem.id} /> }
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

const DoneButton = ({handleClick, id})=>{
  return (
    <Checkbox
        onClick={() => {
          handleClick(id);
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
      </Checkbox>
      )
}
const RedoButton = ({handleClick, id}) => {
  return (<StyledRedoButton onClick={() => handleClick(id)} >다시하기</StyledRedoButton>)
}
//스타일
const Listline = styled.div`
  background: #eee;
  padding: 1px;
  margin: 3px;
  display: flex;
  border-radius: 5px;
  align-items: center;
`;
const Tag = styled.p`
  font-size: 1rem;
  margin: 3px 10px 3px 10px;
  padding: 5px 90px 5px 5px;
`;
const Checkbox = styled.svg`
  position: absolute;
  right: 70px;
  color: green;
  margin: 10px;
  cursor: pointer;
`;
const DeleteButton = styled.button`
  position: absolute;
  right: 10px;
  color: rgb(139, 0, 0);
  margin: 10px;
  cursor: pointer;
  font-weight: bold;
  border-style: none;
`;
const StyledRedoButton = styled.button`
    position: absolute;
    right: 50px;
    color: blue;
    margin: 10px;
    cursor: pointer;
    font-weight: bold;
    border-style: none;
`