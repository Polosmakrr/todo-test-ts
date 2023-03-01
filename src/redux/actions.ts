import { ITodo } from "../types";

export type ActionCreate = { type: string; payload: ITodo };

let id = 0;

export const addTodo = (todo: ITodo): ActionCreate => {
  id += 1;
  const newTodo = { ...todo, checked: false, id };

  return {
    type: "ADD_TODO",
    payload: newTodo,
  };
};

export const updateTodoStatus = (todo: ITodo): ActionCreate => ({
  type: "UPDATE_TODO_STATUS",
  payload: todo,
});
