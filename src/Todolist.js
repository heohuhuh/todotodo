import Todoitem from "./Todoitem";

function Todolist({ todoList, setTodoList, isDone }) {
  //const {todoList,setTodoList} = props;

  const deleteList = (id) => {
    const deletedList = todoList.filter((todoList) => todoList.id !== id);
    setTodoList(deletedList);
  };

  const toggleStatus = (id) => {
    /* const clearedList = [...todoList]; 
    clearedList.forEach((list) => {
      if (list.id === id) list.done ? list.done=false : list.done=true;
    }); */
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
            .map((todoItem, i) => 
              <Todoitem
              key={i}
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