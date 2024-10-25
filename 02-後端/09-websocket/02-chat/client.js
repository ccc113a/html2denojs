import { StandardWebSocketClient } from "https://deno.land/x/websocket@v0.1.3/mod.ts";
import { input } from "./input.ts"

const endpoint = "ws://127.0.0.1:8080"
let user = await input("user name:")
const ws = new StandardWebSocketClient(endpoint);
ws.on("open", async function() {
  console.log("ws connected! (type 'close' to quit)\n");
  while (true) {
    let line = await input('')
    if (line == 'close') break
    ws.send(`${user}:${line}`)
  }
  // ws.close(0)
})
ws.on("message", function (message) {
  console.log(`${message.data}`)
})
