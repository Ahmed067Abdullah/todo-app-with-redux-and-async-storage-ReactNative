import React from "react";
import Todo from "./Todo/Todo";
import { ScrollView } from "react-native";

const todos = props => {
  const todos = props.todos.map((todo, index) => {
    return (
      <Todo
        key={index}
        index={index}
        todo={todo}
        edit={() => props.editTodo(index)}
        delete={() => props.deleteTodo(index)}
      />
    );
  });
  return <ScrollView>{todos}</ScrollView>;
};

export default todos;
