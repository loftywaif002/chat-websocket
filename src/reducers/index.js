import { combineReducers } from 'redux'
import users from './user'
import messages from './messages'

export default combineReducers({
  users,
  messages
})
