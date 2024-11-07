import { Application, Router} from "https://deno.land/x/oak/mod.ts"
import { oakCors } from "https://deno.land/x/cors/mod.ts";

export async function uploadHandler(ctx) {
    const body = await ctx.request.body
    if (body.type() === 'form-data') {
        const formData = await body.formData() // https://docs.deno.com/api/web/~/FormData
        // https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
        console.log('data=', formData)
        let r = []
        for (let [key, value] of formData) {
            console.log('key=', key, 'value=', value)
            if (value instanceof File) {
                r.push({file:value.name})
                // 參考 https://medium.com/deno-the-complete-reference/save-uploaded-files-from-multipart-form-data-in-deno-676e32f553d8
                // https://stackoverflow.com/questions/62019830/how-can-i-write-files-in-deno
                await Deno.writeFile('upload/'+value.name, new Uint8Array(await value.arrayBuffer()))
            }
        }
        ctx.response.body = r
    }
}

const app = new Application()
const router = new Router()

router.post('/upload', uploadHandler)

app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes())
app.use(router.allowedMethods())

console.log('Server run at http://127.0.0.1:6789')
await app.listen({ port: 6789 })
