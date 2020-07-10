import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Do dishes",
        isCompleted: false,
      },
      {
        id: 2,
        title: "Cook food",
        isCompleted: false,
      },
      {
        id: 3,
        title: "Have dinner",
        isCompleted: false,
      },
    ],
  };

  markCompleteType2 = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markCompleteType2={this.markCompleteType2} />
      </div>
    );
  }
}
export default App;
