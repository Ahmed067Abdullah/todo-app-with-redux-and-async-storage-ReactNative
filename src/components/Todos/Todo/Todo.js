import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const todo = props => {
  return (
    <View style={styles.listItem}>
      <View style={styles.todoText}>
        <Text>{props.index + 1 + ") " + props.todo}</Text>
      </View>
      <View style={styles.todoControls}>
        <View style={styles.editButton}>
          <Button color="#f9df30" title="Edit" onPress={props.edit} />
        </View>
        <View style={styles.deleteButton}>
          <Button color="red" title="Delete" onPress={props.delete} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "red",
    width: "100%",
    marginTop: 20
  },
  todoText: {
    width: width - 140,
    marginLeft: 10
  },
  todoControls: {
    flexDirection: "row",
    width: 130,
    marginLeft: 5,
    alignSelf: "flex-end"
  },
  editButton: {
    marginRight: 5
  }
});

export default todo;
