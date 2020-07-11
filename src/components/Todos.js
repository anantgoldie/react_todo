import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  
  render() {
    return this.props.todos.map((todo) => <TodoItem key={todo.id} todo={todo} 
    deleteTodo={this.props.deleteTodo} markCompleteType2={this.props.markCompleteType2} />);
  }
}

Todos.protoTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  markCompleteType2: PropTypes.func.isRequired
};
export default Todos;
