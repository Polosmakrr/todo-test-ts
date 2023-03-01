import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ItemTable } from "../../component/Todo/item/ItemTable";
import { ModalComponent } from "../../component/modal/ModalComponent";
import { NewTodoInput } from "../../component/Todo/header/NewTodoInput";
import { TodoItemComponent } from "../../component/Todo/item/TodoItem";
import { addTodo, updateTodoStatus } from "../../redux/actions";
import { TodosState } from "../../redux/todoReducer";
import { ITodo } from "../../types";
import { SPACES } from "../../theme";

export const TodoContainerComponent = () => {
  const todos = useSelector<TodosState, TodosState["todos"]>(
    (state) => state.todos
  );
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState<ITodo | null>();
  const dispatch = useDispatch();

  const onAddTodo = (todo: ITodo) => {
    dispatch(addTodo(todo));
  };

  const onChackedClick = (todo: ITodo) => {
    dispatch(updateTodoStatus({ ...todo, checked: !todo.checked }));
    if (item) {
      setItem({ ...todo, checked: !todo.checked });
    }
  };

  const handeleModale = () => {
    setIsOpen(!isOpen);
  };

  const onTodoClick = (todo: ITodo) => {
    setItem(todo);
    handeleModale();
  };

  return (
    <div style={{ padding: SPACES.l }}>
      <NewTodoInput addTodo={onAddTodo} />
      <hr />
      <table style={{ width: 500 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <ItemTable
              todo={todo}
              onChackedClick={onChackedClick}
              onTodoClick={onTodoClick}
              key={todo.id}
            />
          ))}
        </tbody>
      </table>
      <div>
        {isOpen && item && (
          <ModalComponent open={isOpen} handleClose={handeleModale}>
            <TodoItemComponent todo={item} onChackedClick={onChackedClick} />
          </ModalComponent>
        )}
      </div>
    </div>
  );
};
