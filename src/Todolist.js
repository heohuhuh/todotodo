import Todoitem from "./Todoitem";

function Todolist({ todoList, setTodoList, isDone }) {
  const deleteList = (id) => {
    const deletedList = todoList.filter((todoList) => todoList.id !== id);
    setTodoList(deletedList);
  };

  const toggleStatus = (id) => {
    const mappedList = todoList.map(item=>{
        if (item.id === id) return { ...item, done: !item.done }
        return item;
    })
    setTodoList(mappedList);
  };

  return (
    <div>
      { todoList
            .filter((list) => list.done === isDone)
            .map((todoItem) => 
              <Todoitem
              key={todoItem.id}
              todoItem={todoItem}
              deleteList={deleteList}
              toggleStatus={toggleStatus}
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