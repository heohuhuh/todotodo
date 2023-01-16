import styled from "styled-components";

//컴포넌트
function Todoitem({ todoList, deleteList, doneList }) {
  return (
    <Listline>
      <Tag> {todoList.todo} </Tag>
      <Checkbox
        onClick={() => {
          doneList(todoList.id);
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
      </Checkbox>
      <DeleteButton
        onClick={() => {
          deleteList(todoList.id);
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
  background: linear-gradient(to right, #a18cd1 30%, #fbc2eb);
  box-shadow: 2px 2px #aaa;
  padding: 1px;
  margin: 3px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
`;
const Tag = styled.p`
  text-shadow: 1.5px 1.5px #666;
  color: #fff;
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
