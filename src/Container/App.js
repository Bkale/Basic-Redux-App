import React, { Component } from 'react';
import '../Css/App.css';
import TodoInput from '../Component/TodoInput.js'
import TodoList from '../Component/TodoList.js'
import actions from '../Redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoInput addTodo={this.props.actions.addTodo} />
        <TodoList actions={this.props.actions} todos={this.props.todos}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
