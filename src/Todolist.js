import Todoitem from "./Todoitem";

function Todolist({ todoList, setTodoList, isDone }) {
  const deleteList = (id) => {
    const deletedList = todoList.filter((todoList) => todoList.id !== id);
    setTodoList(deletedList);
  };

  const changeTodoStatus = (id, todo) => {
    const mappedList = todoList.map((item) => {
      if (item.id === id) {
        if (todo !== undefined) return { ...item, todo: todo };
        return { ...item, done: !item.done };
      }
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
            changeTodoStatus={changeTodoStatus}
            isDone={isDone}
          />
        ))}
    </div>
  );
}

export default Todolist;
