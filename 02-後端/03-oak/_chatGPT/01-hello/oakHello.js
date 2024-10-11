import { Application, Router } from "https://deno.land/x/oak/mod.ts";

// 建立路由器
const router = new Router();
router.get("/", (context) => {
  context.response.body = "Hello, Oak!";
});

// 建立應用程式
const app = new Application();

// 使用路由
app.use(router.routes());
app.use(router.allowedMethods());

// 啟動伺服器
console.log("Listening on http://localhost:8000");
await app.listen({ port: 8000 });
