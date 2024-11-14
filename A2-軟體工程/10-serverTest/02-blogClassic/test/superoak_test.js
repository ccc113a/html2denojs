import { superoak } from "https://deno.land/x/superoak/mod.ts";
import { app } from '../src/app.js'

Deno.test("start:0 posts", async () => {
    const request = await superoak(app);
    await request.get("/").expect(/<title>Posts<\/title>/).expect(/<p>You have <strong>0<\/strong> posts!<\/p>/)
})

Deno.test("show page: create new post", async () => {
    const request = await superoak(app);
    await request.get("/post/new").expect(200).expect(/Create a new post/)
})

Deno.test("post a new {title, body}", async () => {
    const request = await superoak(app);
    await request.post("/post").set("Content-Type", "application/x-www-form-urlencoded").send({title: 'Title', body: 'Contents'})
})

Deno.test("should have 1 post", async () => {
    const request = await superoak(app);
    await request.get("/").expect(/<title>Posts<\/title>/).expect(/<p>You have <strong>1<\/strong> posts!<\/p>/)
})
