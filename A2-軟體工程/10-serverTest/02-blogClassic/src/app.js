import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as render from './render.js'

/*
const posts = [
  {id:0, title:'aaa', body:'aaaaa'},
  {id:1, title:'bbb', body:'bbbbb'}
];
*/
const posts = [];

const router = new Router();

router.get('/', list)
  .get('/post/new', add)
  .get('/post/:id', show)
  .post('/post', create);

export const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

async function list(ctx) {
  console.log('list: posts=', posts)
  ctx.response.body = await render.list(posts);
}

async function add(ctx) {
  ctx.response.body = await render.newPost();
}

async function show(ctx) {
  const id = ctx.params.id;
  const post = posts[id];
  if (!post) ctx.throw(404, 'invalid post id');
  ctx.response.body = await render.show(post);
}

async function create(ctx) {
  const body = ctx.request.body
  console.log('body.type()=', body.type())
  if (body.type() === "form") {
    const pairs = await body.form() // body.value
    const post = {}
    for (const [key, value] of pairs) {
      post[key] = value
    }
    console.log('post=', post)
    const id = posts.push(post) - 1;
    post.created_at = new Date();
    post.id = id;
    ctx.response.redirect('/');
  }
}
