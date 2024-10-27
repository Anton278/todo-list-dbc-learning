import todosState from "./todos";

export const selectTodoById = (id) =>
  todosState.todos.find((todo) => todo.id === id);
