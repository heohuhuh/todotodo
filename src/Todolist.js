import Todoitem from "./Todoitem";
import localforage from "localforage";

function Todolist({ todoList, setTodoList, isDone, todoData }) {
  const deleteList = (id) => {
    const deletedList = todoList.filter((todoList) => todoList.id !== id);
    todoData.removeItem(id);
    setTodoList(deletedList);
  };

  const changeTodoStatus = (id, todo) => {
    const setTodoList = [...todoList];
    for (i = 0; i < setTodoList.length; i++) {
      if (setTodoList[i].id === id) {
        if (todo !== undefined) {
          setTodoList[i] = { ...item, todo: todo };
          addInStorage(setTodoList, id, setTodoList[i]);
          break;
        } else {
          setTodoList[i] = { ...item, done: !item.done };
          addInStorage(setTodoList, id, setTodoList[i]);
          break;
        }
      }
    }
  };
  const addInStorage = (setTodoList, id, selectedList) => {
    const setTodoItem = { ...selectedList };
    delete setTodoItem.id;
    todoData.setItem(id, setTodoItem).then(() => {
      setTodoList(setTodoList);
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
