import Todoitem from "./Todoitem";

function Todolist({ todoList, setTodoList, isDone }) {
  const deleteList = (id) => {
    const deletedList = todoList.filter((todoList) => todoList.id !== id);
    setTodoList(deletedList);
  };

  const toggleStatus = (id) => {
    const mappedList = todoList.map((item) => {
      if (item.id === id) return { ...item, done: !item.done };
      return item;
    });
    setTodoList(mappedList);
  };

  const changeTodo = (id, todo) => {
    const mappedList = todoList.map((item) => {
      if (item.id === id) return { ...item, todo: todo };
      return item;
    });
    setTodoList(mappedList);
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
            toggleStatus={toggleStatus}
            changeTodo={changeTodo}
            isDone={isDone}
          />
        ))}
    </div>
  );
}

export default Todolist;
