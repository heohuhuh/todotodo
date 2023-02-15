import Todoitem from "./Todoitem";
import { setTodoListDB, deleteListDB } from "./localforage";
import React from "react";

interface Props {
  todoList: { id: string; todo: string; done: boolean }[];
  setTodoList: React.Dispatch<
    React.SetStateAction<{ id: string; todo: string; done: boolean }[]>
  >;
  isDone: boolean;
}
function Todolist({ todoList, setTodoList, isDone }: Props) {
  const deleteList = (id: string) => {
    const deletedList = todoList.filter((todoList) => todoList.id !== id);
    deleteListDB(id).then(() => {
      setTodoList(deletedList);
    });
  };

  const changeTodoStatus = (id: string, todo: string | null) => {
    const cloneTodoList = [...todoList];
    const changeItem = cloneTodoList.filter((list) => list.id === id);
    if (todo !== null) {
      changeItem[0].todo = todo;
    } else {
      changeItem[0].done = !changeItem[0].done;
    }
    setTodoListDB(changeItem[0]).then(() => {
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
