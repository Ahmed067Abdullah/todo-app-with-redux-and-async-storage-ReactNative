import * as actionTypes from "./actionTypes";
import { AsyncStorage } from "react-native";

export const getTodos = () => async dispatch => {
  try {
    let todos = JSON.parse(await AsyncStorage.getItem("todos"));
    if (!todos) todos = [];
    dispatch({
      type: actionTypes.GET_TODOS,
      todos
    });
  } catch (error) {
    console.log(error);
    return dispatch({
      type: actionTypes.GET_TODOS,
      todos: []
    });
  }
};

export const addTodo = todos => async dispatch => {
  try {
    await AsyncStorage.setItem("todos", JSON.stringify(todos));
    dispatch({
      type: actionTypes.ADD_TODO,
      todos
    });
  } catch (error) {
    console.log(error);
    return dispatch({});
  }
};

export const changeInput = input => {
  return {
    type: actionTypes.CHANGE_INPUT,
    input
  };
};

export const deleteTodo = delTodo => async dispatch => {
  try {
    const todos = JSON.parse(await AsyncStorage.getItem("todos"));
    todos.splice(delTodo.index, 1);
    dispatch(addTodo(todos));
    dispatch({
      type: actionTypes.DELETE_TODO,
      delTodo
    });
  } catch (error) {
    console.log(error);
    return dispatch({
      type: actionTypes.GET_TODOS,
      todos: []
    });
  }
};

export const editTodo = index => {
  return {
    type: actionTypes.EDIT_TODO,
    index
  };
};
