import { NEW_TODO, DELETE_TODO } from '../actions'

export default (state = [], action) => {
  switch(action.type) {
    case NEW_TODO: 
      return [...state, action.payload]

    case DELETE_TODO:
      const newState = state.filter((task, i) => {
        return task !== state[action.payload];
      });
      return newState

    default: 
      return state
  }
}
