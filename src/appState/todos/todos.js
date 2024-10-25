import { makeObservable, observable, action } from "mobx";
import { v4 as uuidv4 } from "uuid";

import { TODOS } from "../../utils/lsKeys";
import getFromLocalStorage from "../../utils/getFromLocalStorage";

class Todos {
  todos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
    });

    const todos = getFromLocalStorage(TODOS);
    this.todos = todos || [];
  }

  addTodo(name, color) {
    let id = uuidv4();
    let isUniqueId = !this.todos.find((todo) => todo.id === id);

    while (!isUniqueId) {
      id = uuidv4();
      isUniqueId = !this.todos.find((todo) => todo.id === id);
    }

    this.todos.push({ name, color, id });
  }
}

const todos = new Todos();
export default todos;
