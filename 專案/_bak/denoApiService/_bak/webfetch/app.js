import { Application, Router} from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { oFetch } from "./lib.js"

const app = new Application()
const router = new Router()

router.post('/fetch', fetchHandler)

app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes())
app.use(router.allowedMethods())

async function fetchHandler(ctx) {
  const body = ctx.request.body(); // content type automatically detected
  console.log('body = ', body)
  if (body.type === "json") {
    let json = await body.value
    console.log('json=', json)
    let result = await oFetch(json)
    console.log('result=', result)
    ctx.response.body = result
  }
}

console.log('Server run at http://127.0.0.1:8008')
await app.listen({ port: 8008 })
