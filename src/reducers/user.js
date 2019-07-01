import { NEW_USER } from '../actions/types'

const user = (state=[],action) => {
  const { type } = action
  switch(type){
    case NEW_USER:
      return action.user
    default:
      return state
  }
}

export default user