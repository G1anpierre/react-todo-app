import { ADD_TODO, DELETE_TODO } from "../types";

function addtodo(endValue) {
  return { type: ADD_TODO, payload: endValue };
}

function deletetodo(id) {
  return { type: DELETE_TODO, payload: id };
}

export { addtodo, deletetodo };
