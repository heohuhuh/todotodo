import styled from "styled-components";

//컴포넌트
function Doneitem({ todoList, deleteList, redoList }) {
  return (
    <Listline>
      <Tag> {todoList.todo} </Tag>
      <RedoButton
        onClick={() => {
          redoList(todoList.id);
        }}
      >
        다시하기
      </RedoButton>
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

export default Doneitem;

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
const RedoButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
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
