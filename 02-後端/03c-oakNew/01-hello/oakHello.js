import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = `<!DOCTYPE html>
    <html>
      <head><title>Hello oak!</title><head>
      <body>
        <h1>Hello oak!</h1>
      </body>
    </html>
  `;
});

const app = new Application();
const port = 8080;

app.use(router.routes());
app.use(router.allowedMethods());
console.log(`Server running on http://localhost:${port}`);

app.listen({ port: port });
