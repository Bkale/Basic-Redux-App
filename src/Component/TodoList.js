import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component{
  constructor(){
    super()
    this.state = {
      input: null
    }
  }
  handleChange = ev => this.setState({input:ev.target.value})

  render(){
    return(
      <ul>
        {this.props.todos.map((todo) => {
          return <TodoItem key={todo.id}  actions={this.props.actions} todo={todo} /> })}
      </ul>
    )
  }
}
export default TodoList
