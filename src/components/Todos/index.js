import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../../store/actions/todos";

import Todos from "./Todos";
const { height } = Dimensions.get("window");

class TodosScreen extends Component {
  constructor() {
    super();
    this.editingIndex = null;
  }

  componentDidMount() {
    this.props.getTodos();
  }

  changeInputHandler = value => {
    this.props.onChangeInput(value);
  };

  saveTodoHandler = () => {
    const { input, todos } = this.props.todosData;
    if (input && input.trim() !== "") {
      if (this.editingIndex !== null) {
        todos[this.editingIndex] = input;
        this.editingIndex = null;
      } else {
        todos.push(input);
      }
      this.props.onAddTodo(todos);
    }
  };

  deleteTodoHandler = index => {
    let delTodo = { index };
    if (index === this.editingIndex) {
      this.editingIndex = null;
      delTodo.clearInput = true;
    }
    this.props.onDeleteTodo(delTodo);

    index < this.editingIndex ? this.editingIndex-- : null;
  };

  editTodoHandler = index => {
    this.props.onEditTodo(index);
    this.editingIndex = index;
  };

  render() {
    const { todos, editing, input } = this.props.todosData;
    let btnValue = "Add";
    let buttonColor = "blue";
    if (editing) {
      btnValue = "Update";
      buttonColor = "#f9df30";
    }

    let todosList = null;
    if (todos && todos.length > 0) {
      todosList = (
        <Todos
          todos={todos}
          editTodo={this.editTodoHandler}
          deleteTodo={this.deleteTodoHandler}
        />
      );
    } else todosList = <Text className="no-todo-msg">No Recent Todos</Text>;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Todo App</Text>
          <View style={styles.controls}>
            <TextInput
              name="todo"
              value={input}
              onChangeText={this.changeInputHandler}
              style={styles.inputField}
            />
            <View style={styles.button}>
              <Button
                color={buttonColor}
                onPress={this.saveTodoHandler}
                title={btnValue}
              />
            </View>
          </View>
        </View>
        <View style={styles.todos}>{todosList}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "10%"
  },
  header: { height: 115 },
  todos: { height: height - 115, paddingBottom: 65 },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
    color: "grey",
    alignSelf: "center"
  },
  controls: {
    flexDirection: "row",
    marginTop: "5%",
    justifyContent: "center"
  },
  inputField: {
    borderWidth: 1,
    width: "70%",
    height: 35,
    marginRight: 10
  }
});

const mapStateToProps = state => {
  return {
    todosData: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTodos: () => dispatch(actions.getTodos()),
    onAddTodo: todos => dispatch(actions.addTodo(todos)),
    onDeleteTodo: delTodo => dispatch(actions.deleteTodo(delTodo)),
    onEditTodo: index => dispatch(actions.editTodo(index)),
    onChangeInput: input => dispatch(actions.changeInput(input))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosScreen);
