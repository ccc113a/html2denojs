import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application()

const router = new Router()

router.get('/', (ctx)=>ctx.response.redirect('/public/index.html'))
  .get('/chat', chat)
  .get('/public/(.*)', pub)

app.use(router.routes())
app.use(router.allowedMethods())

async function pub(ctx) {
  console.log('path=', ctx.request.url.pathname)
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/`,
    index: "index.html",
  })
}

async function chat (ctx) {
  const body = ctx.request.body;
  console.log('body = ', body)
  if (body.type() === "json") {
    let post = await body.json()
    post.id = posts.length
    posts.push(post)
    ctx.response.body = 'success'
    console.log('create:save=>', post)
  }
}

console.log('Server run at http://127.0.0.1:8001')
await app.listen({ port: 8001 })
