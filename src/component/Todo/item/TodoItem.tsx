import React from "react";
import { ITodo } from "../../../types";
import { FieldName, Title, Text, StatusText } from "./TodoItemStyled";

interface todoItemProps {
  todo: ITodo;
  onChackedClick: (todo: ITodo) => void;
}

export const TodoItemComponent = ({ todo, onChackedClick }: todoItemProps) => {
  return (
    <div>
      <Title style={{ textAlign: "center" }}>{todo.title}</Title>
      <FieldName>Description:</FieldName>
      <Text>{todo.description}</Text>
      <div style={{ display: "flex", alignItems: "end" }}>
        <StatusText>Status:</StatusText>
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={() => onChackedClick(todo)}
        />
      </div>
    </div>
  );
};
