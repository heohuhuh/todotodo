import localforage from "localforage";

const todoData = localforage.createInstance({ name: "todoData" });

export const getTodoListDB = async () => {
  const keys = await todoData.keys();
  const items = await Promise.all(
    keys.map((key) => {
      return todoData.getItem(key);
    })
  );
  return items;
};

export const addTodoListDB = async (todo) => {
  const todoValue = { ...todo };
  delete todoValue.id;
  await todoData.setItem(todo.id, todoValue);
};

export const clearTodoListDB = async () => {
  await todoData.clear();
};

export const deleteListDB = async (id) => {
  await todoData.removeItem(id);
};
