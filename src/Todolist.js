import Todoitem from "./Todoitem";
import { addTodoListDB, deleteListDB } from "./localforage";

function Todolist({ todoList, setTodoList, isDone, todoData }) {
  const deleteList = (id) => {
    const deletedList = todoList.filter((todoList) => todoList.id !== id);
    todoData.removeItem(id);
    setTodoList(deletedList);
  };

  const changeTodoStatus = (id, todo) => {
    const cloneTodoList = [...todoList];
    const changeItem = cloneTodoList.filter((list) => list.id === id);
    if (todo !== undefined) {
      changeItem[0].todo = todo;
    } else {
      changeItem[0].done = !changeItem[0].done;
    }
    addTodoListDB(changeItem[0]).then(() => {
      setTodoList(cloneTodoList);
    });
  };

  return (
    <div>
      {todoList
        .filter((list) => list.done === isDone)
        .map((todoItem) => (
          <Todoitem
            key={todoItem.id}
            todoItem={todoItem}
            deleteList={deleteList}
            changeTodoStatus={changeTodoStatus}
            isDone={isDone}
          />
        ))}
    </div>
  );
}

export default Todolist;
