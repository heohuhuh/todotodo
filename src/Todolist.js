import Todoitem from "./Todoitem";

function Todolist({ todoList, setTodoList, isDone, todoData }) {
  const deleteList = (id) => {
    const deletedList = todoList.filter((todoList) => todoList.id !== id);
    todoData.removeItem(id);
    setTodoList(deletedList);
  };

  const changeTodoStatus = (id, todo) => {
    const cloneTodoList = [...todoList];
    for (let i = 0; i < cloneTodoList.length; i++) {
      if (cloneTodoList[i].id === id) {
        if (todo !== undefined) {
          cloneTodoList[i].todo = todo;
          addInStorage(cloneTodoList, id, cloneTodoList[i]);
          break;
        } else {
          cloneTodoList[i].done = !cloneTodoList[i].done;
          addInStorage(cloneTodoList, id, cloneTodoList[i]);
          break;
        }
      }
    }
  };
  const addInStorage = (cloneTodoList, id, selectedList) => {
    const setTodoItem = { ...selectedList };
    delete setTodoItem.id;
    todoData.setItem(id, setTodoItem).then(() => {
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
