const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8989 })

const users = []

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data))
    }
  })
}

wss.on('connection', (ws)=>{
  let index
  ws.on('message', (message)=>{
    const data = JSON.parse(message)
    switch(data.type){
      case 'USERS': {
        index = users.length
        users.push({ name: data.name, id: index + 1 })
        ws.send(JSON.stringify({
          type: 'USERS',
          users
        }))
        broadcast({
          type: 'USERS',
          users
        }, ws)
        break
      }
     default: 
     break;
    }
  })
})