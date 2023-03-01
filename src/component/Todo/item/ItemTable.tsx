import React, { MouseEvent } from "react";
import { ITodo } from "../../../types";
import { TableItem } from "./ItemTableStyled";

interface ItemTableProps {
  todo: ITodo;
  onChackedClick: (todo: ITodo) => void;
  onTodoClick: (todo: ITodo) => void;
}

export const ItemTable = ({
  todo,
  onChackedClick,
  onTodoClick,
}: ItemTableProps) => {
  return (
    <tr
      key={todo.id}
      onClick={(e: MouseEvent<HTMLElement>) => {
        const name = e.target as HTMLInputElement;
        if (!name.type) {
          onTodoClick(todo);
        }
        return;
      }}
    >
      <TableItem>{todo.id}</TableItem>
      <TableItem>
        {todo.title.length > 10
          ? todo.title.substring(0, 10).concat("...")
          : todo.title}
      </TableItem>
      <TableItem>
        {todo.description.length > 10
          ? todo.description.substring(0, 10).concat("...")
          : todo.description}
      </TableItem>
      <TableItem>
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={() => onChackedClick(todo)}
        />
      </TableItem>
    </tr>
  );
};
