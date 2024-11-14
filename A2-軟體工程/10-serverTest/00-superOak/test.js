import { Application, Router } from "https://deno.land/x/oak@v12.6.2/mod.ts";
import { superoak } from "https://deno.land/x/superoak@4.8.1/mod.ts";

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = "Hello Deno!";
});
router.post("/user", (ctx) => {
  ctx.response.body = "Post!";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

// Send simple GET request
Deno.test("it should support the Oak framework", async () => {
  const request = await superoak(app);
  await request.get("/").expect("Hello Deno!");
});

// Custom requests can be built with the superagent API
// https://visionmedia.github.io/superagent/#post--put-requests.
Deno.test("it should allow post requests", async () => {
  const request = await superoak(app);
  await request
    .post("/user")
    .set("Content-Type", "application/json")
    .send('{"name":"superoak"}')
    .expect(200);
});