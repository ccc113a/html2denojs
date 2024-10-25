import { StandardWebSocketClient } from "https://deno.land/x/websocket@v0.1.3/mod.ts";
// import { StandardWebSocketClient } from "https://deno.land/x/websocket/mod.ts";

// const endpoint = `ws://${Deno.args[0]}:8080` // Deno.args[0] || "ws://127.0.0.1:8080";
const endpoint = `ws://127.0.0.1:8080` // Deno.args[0] || "ws://127.0.0.1:8080";
// let user = await input("user name:")
let user = prompt("user name:")
const ws = new StandardWebSocketClient(endpoint);
ws.on("open", async function() {
  console.log("ws connected! (type 'close' to quit)\n");
  while (true) {
//    let line = await input('')
    let line = prompt('')
    if (line == 'close') break
    ws.send(`${user}:${line}`)
  }
  // ws.close(0)
})
ws.on("message", function (message) {
  console.log(`${message.data}`)
})
