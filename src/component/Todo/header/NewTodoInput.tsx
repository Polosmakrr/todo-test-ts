import React, { useState, ChangeEvent, FormEvent } from "react";
import { ITodo } from "../../../types";
import { Button, ErrorText, Form, Input, Label } from "./NewTodoInputStyled";
import { COLORS } from "../../../theme";

interface NewTodoInputProps {
  addTodo(todo: ITodo): void;
}

export const NewTodoInput: React.FC<NewTodoInputProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);

  const updateTodo = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
      return;
    }
    if (e.target.name === "description") {
      setDescription(e.target.value);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      setIsTitleValid(false);
      return;
    } else {
      setIsTitleValid(true);
    }
    if (description.trim().length === 0) {
      setIsDescriptionValid(false);
      return;
    } else {
      setIsDescriptionValid(true);
    }
    addTodo({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Title:
        <Input
          style={{ borderColor: isTitleValid ? COLORS.black : COLORS.tomato }}
          onChange={updateTodo}
          value={title}
          type="text"
          name="title"
          placeholder="Title"
        />
        {!isTitleValid && <ErrorText>This field is empty!</ErrorText>}
      </Label>

      <Label>
        Description:
        <div style={{ display: "flex", alignItems: "end" }}>
          <Input
            style={{
              borderColor: isDescriptionValid ? COLORS.black : COLORS.tomato,
            }}
            onChange={updateTodo}
            value={description}
            type="text"
            name="description"
            placeholder="Description"
          />
          <Button type="submit">Create</Button>
        </div>
        {!isDescriptionValid && <ErrorText>This field is empty!</ErrorText>}
      </Label>
    </Form>
  );
};
