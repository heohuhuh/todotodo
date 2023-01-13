import Todoitem from "./Todoitem";
import Doneitem from "./Doneitem";

function Todolist({ todoList, setTodoList, isDone }) {
  //const {todoList,setTodoList} = props;

  const deleteList = (id) => {
    const deletedList = todoList.filter((todoList) => todoList.id !== id);
    setTodoList(deletedList);
  };
  const doneList = (id) => {
    const clearedList = [...todoList];
    clearedList.forEach((list) => {
      if (list.id === id) list.done = true;
    });
    setTodoList(clearedList);
  };
  const redoList = (id) => {
    const clearedList = [...todoList];
    clearedList.forEach((list) => {
      if (list.id === id) list.done = false;
    });
    setTodoList(clearedList);
  };

  return (
    <div>
      { todoList
            .filter((list) => list.done === isDone)
            .map((todoItem, i) => 
              <Todoitem
              key={i}
              todoItem={todoItem}
              deleteList={deleteList}
              doneList={doneList}
              redoList={redoList}
              isDone ={isDone}
            />)
        }
    </div>
  );
}

export default Todolist;

function Test(){
  return 1
}

const a = () => {
  return 1
}
const aResult = a()
console.log(aResult)
const b = () => 1
const bResult = b()
console.log(bResult)