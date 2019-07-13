import {createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import name from './user_generator'
import socket from './socket'

const initialState = {}
const middleWare = [thunk.withExtraArgument(socket(name))]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))

export default store