import localforage from "localforage";

const todoData = localforage.createInstance({ name: "todoData" });

export const getTodoListDB = async () => {
  const keys = await todoData.keys();
  const items = await Promise.all(
    keys.map(async (key) => {
      const todoValue = await todoData.getItem(key);
      const returnValue = { id: key, ...todoValue };
      return returnValue;
    })
  );
  return items;
};

export const setTodoListDB = async (todo) => {
  const todoValue = { ...todo };
  delete todoValue.id;
  await todoData.setItem(todo.id, todoValue);
};

export const clearTodoListDB = async () => {
  await todoData.clear();
};

export const deleteListDB = (id) => {
  //연습용
  return new Promise(async (resolve, reject) => {
    resolve(await todoData.removeItem(id));
  });
};
