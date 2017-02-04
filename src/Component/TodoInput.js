import React, { Component } from 'react'

class TodoInput extends Component{
  constructor(){
    super()
    this.state = {
      input: null
    }
  }
  handleChange = ev => this.setState({input:ev.target.value})
  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addTodo(this.state.input)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Type in your todo" onChange={ev => this.handleChange(ev)} />
          <input type="submit"  />
        </form>
      </div>
    )
  }
}
export default TodoInput
