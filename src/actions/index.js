const NEW_TODO = 'NEW_TODO'
const DELETE_TODO = 'DELETE_TODO'

const newTodo = (payload) => {
  return {
    type: NEW_TODO,
    payload
  }
}

const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload
  }
}

export { 
  NEW_TODO, 
  newTodo,
  DELETE_TODO,
  deleteTodo
}
