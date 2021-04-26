import { DELETE_TODO, ADD_TODO, EDIT_TODO } from "../types";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [{ name: "Redux Update", id: 1234 }],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, { name: action.payload, id: uuidv4() }],
      };
    case DELETE_TODO:
      const copyTodos = [...state.todos];
      const foundElement = (element) => element.id === action.payload;
      const index = copyTodos.findIndex(foundElement);
      copyTodos.splice(index, 1);
      return {
        todos: copyTodos,
      };
    case EDIT_TODO:
      return {
        todos: state.todos.map((element) => {
          if (element.id === action.payload) {
            return { ...element, name: action.newText };
          } else {
            return element;
          }
        }),
      };

    default:
      return state;
  }
}

export default reducer;
