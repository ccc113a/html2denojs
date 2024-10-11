import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { DB } from "https://deno.land/x/sqlite/mod.ts";
/*
import {
  viewEngine,
  engineFactory,
  adapterFactory,
} from "https://ccc-js.github.io/view-engine/mod.ts" // from "https://deno.land/x/view_engine/mod.ts";
*/
import { viewEngine, ejsEngine, oakAdapter } from "https://deno.land/x/view_engine@v10.5.1/mod.ts"
// import { viewEngine, ejsEngine, oakAdapter } from "https://deno.land/x/view_engine/mod.ts"
//const ejsEngine = engineFactory.getEjsEngine();
// const oakAdapter = adapterFactory.getOakAdapter();

const db = new DB("blog.db");
db.query("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT)");

const router = new Router();

router.get('/', list)
  .get('/post/new', add)
  .get('/post/:id', show)
  .post('/post', create)
  .get('/public/(.*)', pub)

const app = new Application();
app.use(viewEngine(oakAdapter, ejsEngine));
app.use(router.routes());
app.use(router.allowedMethods());

function query(sql) {
  let list = []
  for (const [id, title, body] of db.query(sql)) {
    list.push({id, title, body})
  }
  return list
}

async function list(ctx) {
  let posts = query("SELECT id, title, body FROM posts")
  ctx.render("views/list.ejs", {posts});
}

async function add(ctx) {
  ctx.render("./views/add.ejs");
}

async function show(ctx) {
  const pid = ctx.params.id;
  let posts = query(`SELECT id, title, body FROM posts WHERE id=${pid}`)
  let post = posts[0]
  console.log('show:post=', post)
  if (!post) ctx.throw(404, 'invalid post id');
  ctx.render('views/show.ejs', {post})
}

async function create(ctx) {
  const body = ctx.request.body
  if (body.type() === "form") {
    const pairs = await body.form()
    const post = {}
    for (const [key, value] of pairs) {
      post[key] = value
    }
    console.log('create:post=', post)
    db.query("INSERT INTO posts (title, body) VALUES (?, ?)", [post.title, post.body]);
    ctx.response.redirect('/');
  }
}

async function pub(ctx) {
  // console.log(ctx.params);
  var path = ctx.params[0]
  await send(ctx, path, {
    root: Deno.cwd()+'/public',
    index: "index.html",
  });
}

console.log('Server run at http://127.0.0.1:8000')
await app.listen({ port: 8000 });
