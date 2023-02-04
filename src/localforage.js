import localforage from "localforage";

const todoData = localforage.createInstance({ name: "todoData" });
localforage.clear();
export const getTodoList = async () => {
  const keys = await todoData.keys();
  const items = await Promise.all(
    keys.map((key) => {
      return todoData.getItem(key);
    })
  );
  return items;
};

export const addTodoList = async (todo) => {
  const todoValue = delete { ...todo }.id;
  todoData.setItem(todo.id, todoValue);
};
