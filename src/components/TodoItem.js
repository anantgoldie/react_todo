import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.isCompleted ? "line-through" : "none",
    };
  };

  markCompleteType1(e) {
    console.log("markCompleteType1 - try to achieve something that is done in markCompleteType2");
    console.log(this.props.todo.isCompleted);
    this.props.todo.isCompleted = true;
    console.log(this.props.todo.isCompleted);
    console.log(this.getStyle());
  }

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.markCompleteType1.bind(this)} />
          <input type="checkbox" onChange={this.props.markCompleteType2.bind(this, id)} />
          {title}
          <button style={myStyle} onClick={this.props.deleteTodo.bind(this, id)}>X</button>
        </p>
      </div>
    );
  }
}

const myStyle = {
    backgroundColor : '#ff0000',
    padding: '5px 10px',
    color: '#ffffff',
    borderRadius: '50%',
    border : 'none',
    float: 'right',
    cursor: 'pointer'

}
TodoItem.protoTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  markCompleteType2: PropTypes.func.isRequired
};

export default TodoItem;
