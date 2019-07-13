import { USERS } from '../actions/types'
import { getAllUsers } from '../actions'
import store from '../store'

const startSocket = (name) => {
   const socket = new WebSocket('ws://localhost:8989')

   socket.onopen = () => {
     socket.send(JSON.stringify({
       type: USERS,
       name
     }))
   }

   socket.onmessage = (event) =>{
     const data = JSON.parse(event.data)
     switch(data.type){
        case USERS:
          store.dispatch(getAllUsers(data.users))
          break
          default:
            break
     }
   }

   return socket
}

export default startSocket
