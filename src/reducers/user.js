import { USERS } from '../actions/types'

const users = (state=[],action) => {
  const { type } = action
  switch(type){
    case USERS:
      return action.users
    default:
      return state
  }
}

export default users