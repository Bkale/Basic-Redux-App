import React, { Component } from 'react'

class TodoItem extends Component{

  handleComplete(){
    console.log("Complete");
    this.props.actions.completeTodo(this.props.todo.id)
  }
  handleDelete(){
    console.log("Delete");
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  render(){
    return(
      <div>
        <div>{this.props.todo.text}</div>
        <button onClick={ev => this.handleComplete()}>Completed</button>
        <button onClick={ev => this.handleDelete()}>Delete Todo</button>
      </div>
    )
  }
}
export default TodoItem
