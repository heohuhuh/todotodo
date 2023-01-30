import Todoitem from "./Todoitem";

function Todolist({ todoList, setTodoList, isDone }) {
  const deleteList = (id) => {
    const deletedList = todoList.filter((todoList) => todoList.id !== id);
    localStorage.removeItem(id);
    setTodoList(deletedList);
  };

  const changeTodoStatus = (id, todo) => {
    const mappedList = todoList.map((item) => {
      if (item.id === id) {
        let setItem = item;
        if (todo !== undefined) {
          setItem = { ...item, todo: todo };
        } else {
          setItem = { ...item, done: !item.done };
        }
        addInlocalStorage(id, setItem);
        return setItem;
      }
      return item;
    });
    setTodoList(mappedList);
  };

  const addInlocalStorage = (id, list) => {
    let setItem = { ...list };
    delete setItem.id;
    localStorage.setItem(id, JSON.stringify(setItem));
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
