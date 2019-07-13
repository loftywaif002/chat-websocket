import { NEW_MESSAGE } from '../actions/types'

const messages = (state=[], action) => {
  const { type, message, user, id } = action
  switch(type){
    case NEW_MESSAGE:
      return [...state, message,user,id]
    default:
      return state
  }
}

export default messages