import { Application, Router} from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const app = new Application()
const router = new Router()

router.post('/upload', upload)

app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes())
app.use(router.allowedMethods())

async function upload(ctx) {
    const body = await ctx.request.body({ type: 'form-data'})
    const data = await body.value.read()
    console.log(data)
    ctx.response.body = 'success!'
}

console.log('Server run at http://127.0.0.1:8007')
await app.listen({ port: 8007 })
