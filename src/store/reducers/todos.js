import * as actionTypes from "../actions/actionTypes";

const initialState = {
  input: "",
  editing: false,
  loading: true,
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TODOS:
      return {
        ...state,
        todos: action.todos,
        editing: false,
        input: ""
      };
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: action.todos,
        editing: false,
        input: ""
      };
    case actionTypes.CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      };
    case actionTypes.DELETE_TODO:
      let clear = {};
      if (action.delTodo.clearInput) {
        clear.editing = false;
        clear.input = "";
      }
      return {
        ...state,
        todos: state.todos.filter(
          (todo, index) => index !== action.delTodo.index
        ),
        ...clear
      };
    case actionTypes.EDIT_TODO:
      console.log("edit");
      return {
        ...state,
        input: state.todos[action.index],
        editing: true
      };
    default:
      return state;
  }
};

export default reducer;
