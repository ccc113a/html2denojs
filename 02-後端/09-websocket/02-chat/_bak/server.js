import { WebSocketServer } from "https://deno.land/x/websocket@v0.1.3/mod.ts";

const clientMap = new Map()
const wss = new WebSocketServer(8080)
console.log('server started at 8080 port')
wss.on("connection", function (ws) {
  clientMap.set(ws, {})
  ws.on("message", function (message) {
    console.log(message);
    for (let [client, obj] of clientMap) {
      if (client != ws) {
        client.send(message)
      }
    }
  })
})