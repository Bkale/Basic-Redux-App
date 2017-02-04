import React, { Component } from 'react'

class UserInfor extends Component{

  handleNewId(){
    console.log("Handling New Id");
    this.props.createNewUserId()
  }

  render(){
    return(
      <div>
        <div> username: {this.props.user.username}</div>
        <div> id: {this.props.user.id}</div>
        <button onClick={this.handleNewId.bind(this)}>Update with random Id</button>
      </div>
    )
  }
}
export default UserInfor
