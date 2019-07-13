import { USERS, NEW_MESSAGE } from './types'
import shortid from 'shortid'

export const getAllUsers = (users) => {
  return{
    type: USERS,
    users
  }
}

export const sendNewMessage = (message, user) => {
  let id = shortid.generate()
  return {
    type: NEW_MESSAGE,
    id,
    message,
    user 
  }
}
