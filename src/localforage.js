import localforage from "localforage";

const todoData = localforage.createInstance({ name: "todoData" });

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
  const todoValue = { ...todo };
  delete todoValue.id;
  await todoData.setItem(todo.id, todoValue);
};

export const clearTodoList = async () => {
  await todoData.clear();
};
