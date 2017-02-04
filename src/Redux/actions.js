let actions = {
  //ADD TODO
  addTodo: function(text){
    return{
      type:'ADD_TODO',
      text: text
    }
  },

  //MARK TODO Complete
  completeTodo: function(id){
    return{
      type: 'COMPLETE_TODO',
      id: id
    }
  },

  //DELETE TODO
  deleteTodo: function(id){
    return{
      type: 'DELETE_TODO',
      id: id
    }
  },

  //Create New User Id
  createNewUserId: function(){
    return {
      type: 'CREATE_USER_ID',
      id: Math.round(Math.random() * 100)
    }
  }

} // Actions End

export default actions





























// const actions = {
//   ADD_TODO: 'ADD_TODO'
// }
// {
//   type:actions.ADD_TODO
// }
