// import { readLines } from "https://deno.land/std/io/bufio.ts";
// import { prompt } from "../prompt.ts";
import { WebSocketClient, StandardWebSocketClient } from "https://deno.land/x/websocket@v0.1.3/mod.ts";

const endpoint = "ws://127.0.0.1:8080" // Deno.args[0] || "ws://127.0.0.1:8080";

const ws: WebSocketClient = new StandardWebSocketClient(endpoint);
ws.on("open", async function() {
  console.log("ws connected! (type 'close' to quit)\n");
  while (true) {
    let line:string = prompt("> ") || ""
    line = line || ""
    if (line == 'close') break
    console.log("send : ", line);
    ws.send(line);
  }
  // ws.close(0)
});
ws.on("message", function (message: MessageEvent) {
  console.log(`received: ${message.data}`);
});
