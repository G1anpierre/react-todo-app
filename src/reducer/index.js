import { DELETE_TODO, ADD_TODO, EDIT_TODO, DONE_TODO } from "../types";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [{ name: "Redux Update", id: 1234, isDone: false }],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { name: action.payload, id: uuidv4(), isDone: false },
        ],
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
          return element.id === action.payload
            ? { ...element, name: action.newText }
            : element;
        }),
      };
    case DONE_TODO:
      return {
        todos: state.todos.map((element) => {
          return element.id === action.id
            ? { ...element, isDone: !element.isDone }
            : element;
        }),
      };

    default:
      return state;
  }
}

export default reducer;
