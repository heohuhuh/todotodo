import Todoitem from "./Todoitem";

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
    addInStorage(cloneTodoList, id, changeItem[0]);
  };

  const addInStorage = (cloneTodoList, id, changeItem) => {
    const item = { ...changeItem };
    delete item.id;
    todoData.setItem(id, item).then(() => {
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
