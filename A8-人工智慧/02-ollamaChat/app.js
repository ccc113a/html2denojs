import { Application, send } from "https://deno.land/x/oak/mod.ts";
import { WebSocketServer } from "https://deno.land/x/websocket/mod.ts";
import { chat } from './ollama.js'
// html serve
const app = new Application();

app.use(async (ctx) => {
  console.log('path=', ctx.request.url.pathname)
	try {
		await send(ctx, ctx.request.url.pathname, {
			root: `${Deno.cwd()}/`,
			index: "index.html",
		});	
	} catch (e) { console.log('Error:', e); }
});

// websocket serve
const wss = new WebSocketServer(8080);

wss.on("connection", function (wsc) {
	wsc.on("message", async function (jsonMsg) {
		let msg = JSON.parse(jsonMsg)
		console.log(msg);
		// broadcast message
		wss.clients.forEach(function each(client) {
			if (!client.isClosed) {
				client.send(jsonMsg);
			}
		});
		let [user, content] = msg.split(':')
		console.log('user=', user, 'content=', content)

		let response = await chat(content)
		console.log('response=', response)
		wss.clients.forEach(function each(client) {
			if (!client.isClosed) {
				client.send(JSON.stringify('ollama:'+response));
			}
		});
	});
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });
