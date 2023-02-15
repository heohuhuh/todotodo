import * as localforage from "localforage";

const todoData: any = localforage.createInstance({ name: "todoData" });

export const getTodoListDB = async () => {
  const keys = await todoData.keys();
  const items = await Promise.all(
    keys.map(async (key: string) => {
      const todoValue = await todoData.getItem(key);
      const returnValue = { id: key, ...todoValue };
      return returnValue;
    })
  );
  return items;
};

export const setTodoListDB = async (todo: {
  id?: string;
  todo: string;
  done: boolean;
}) => {
  const todoValue = { ...todo };
  delete todoValue.id;
  await todoData.setItem(todo.id, todoValue);
};

export const clearTodoListDB = async () => {
  await todoData.clear();
};

export const deleteListDB = (id: string) => {
  //연습용
  return new Promise((resolve) => {
    resolve(todoData.removeItem(id));
  });
};

//얘가 뭐임?
export function createInstance(arg0: { name: string }): any {
  throw new Error("Function not implemented.");
}
