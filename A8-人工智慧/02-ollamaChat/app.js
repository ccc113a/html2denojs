import { Application, send } from "https://deno.land/x/oak/mod.ts";
import { WebSocketServer } from "https://deno.land/x/websocket/mod.ts";
import { chat } from './ollama.js'

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
	wsc.on("message", async function (msgJson) {
		let msgObj = JSON.parse(msgJson)
		console.log(msgObj);
		// broadcast message
		wss.clients.forEach(function each(client) {
			if (!client.isClosed) {
				client.send(msgJson);
			}
		});
		let {user, msg} = msgObj
		console.log('user=', user, 'msg=', msg)

		let response = await chat(msg)
		console.log('response=', response)
		wss.clients.forEach(function each(client) {
			if (!client.isClosed) {
				client.send(JSON.stringify({user:'ollama', msg:response}));
			}
		});
	});
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });
