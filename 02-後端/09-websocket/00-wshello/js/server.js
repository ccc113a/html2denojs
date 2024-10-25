import { WebSocketServer } from "https://deno.land/x/websocket@v0.1.3/mod.ts";

const wss = new WebSocketServer(8080);
console.log('server started at 8080 port')
wss.on("connection", function (ws) {
  console.log('some client connected...')
  ws.on("message", function (message) {
    console.log(message);
    ws.send(message);
  });
});