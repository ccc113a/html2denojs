import { Application, Router} from "https://deno.land/x/oak/mod.ts" // import { Application, Router} from "https://deno.land/x/oak@v12.0.0/mod.ts"
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { sqlHandler, fetchHandler, uploadHandler } from './handler.js'

const app = new Application()
const router = new Router()

router.post('/fetch', fetchHandler)
router.post('/sqlite', sqlHandler)
router.post('/upload', uploadHandler)

app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes())
app.use(router.allowedMethods())

console.log('Server run at http://127.0.0.1:6789')
await app.listen({ port: 6789 })
