import { ITodo } from "../types";
import { ActionCreate } from "./actions";

export interface TodosState {
  todos: ITodo[];
}

const initialState = {
  todos: [],
};

export const todoReducer = (
  state: TodosState = initialState,
  action: ActionCreate
) => {
  switch (action.type) {
    case "ADD_TODO": {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case "UPDATE_TODO_STATUS": {
      return {
        ...state,
        todos: [
          ...state.todos.map((it) => {
            if (it.id === action.payload.id) {
              return action.payload;
            }
            return it;
          }),
        ],
      };
    }
    default:
      return state;
  }
};
