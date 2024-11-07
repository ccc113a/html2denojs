import { Application, Router} from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { DB } from "https://deno.land/x/sqlite/mod.ts";

const app = new Application()
const router = new Router()

router.post('/sqlite', sqlite)

app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes())
app.use(router.allowedMethods())

async function sqlite(ctx) {
  const body = ctx.request.body(); // content type automatically detected
  if (body.type === "json") {
    let json = await body.value
    console.log('json=', json)
    let db = json.db
    let sql = json.sql
    const dbo = new DB(`db/${db}.db`)
    let result = sql ? dbo.query(sql) : '[]'
    dbo.close()
    ctx.response.body = result
  }
}

console.log('Server run at http://127.0.0.1:8009')
await app.listen({ port: 8009 })
