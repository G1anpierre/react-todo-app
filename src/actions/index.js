import { ADD_TODO, DELETE_TODO, DONE_TODO, EDIT_TODO } from "../types";

function addtodo(endValue) {
  return { type: ADD_TODO, payload: endValue };
}

function deletetodo(id) {
  return { type: DELETE_TODO, payload: id };
}

function modifiedTodo(id, newText) {
  return { type: EDIT_TODO, payload: id, newText };
}

function doneTodo(id) {
  return { type: DONE_TODO, id };
}

export { addtodo, deletetodo, modifiedTodo, doneTodo };
