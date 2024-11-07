import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { oFetch } from "./lib.js"

export async function sqlHandler(ctx) {
    const body = ctx.request.body; // content type automatically detected
    console.log('body = ', body)
    if (body.type() === "json") {
        let json = await body.json()  // 12.0.0 版， 新版為 let json = await body.json()
        console.log('json=', json)
        let db = json.db
        let sql = json.sql
        const dbo = new DB(`db/${db}.db`)
        let result = sql ? dbo.query(sql) : '[]'
        dbo.close()
        ctx.response.body = result
    }
}

export async function fetchHandler(ctx) {
    const body = ctx.request.body // content type automatically detected
    console.log('body = ', body)
    if (body.type() === "json") {
        let json = await body.json()
        console.log('json=', json)
        let result = await oFetch(json)
        console.log('result=', result)
        ctx.response.body = result
    }
}

export async function uploadHandler(ctx) {
    const body = await ctx.request.body
    console.log('type=', body.type())
    const data = await body.formData() // ({ type: 'form-data' })
    console.log(data)
    let r = []
    for (let [field, value] of data) {
        console.log(field + ":" + value)
        if (value instanceof File) {
            let file = value
            // 這一段用 pipe 應該會比較省記憶體
            // 參考 -- https://docs.deno.com/examples/piping-streams
            // https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/pipeTo
            let buffer = await file.arrayBuffer()
            // console.log('buffer=', buffer)
            let u8array = new Uint8Array(buffer)
            // console.log('u8array=', u8array)
            await Deno.writeFile(`upload/${file.name}`, u8array)
            r.push({field, value:`file/${file.name}`})
        } else {
            r.push({field, value})
        }
    }
    ctx.response.body = r
}
/*
export async function uploadHandler(ctx) {
    const body = await ctx.request.body
    const data = await body.formData() // ({ type: 'form-data' })
    // const data = await body.value.read()
    console.log(data)
    // console.log("fields=", data.fields)
    let r = []
    for (let f of data.files) {
        console.log("filename=", f.filename)
        console.log("originalName=", f.originalName)
        await Deno.copyFile(f.filename, `./upload/${f.originalName}`)
        await Deno.remove(f.filename)
        r.push({file:f.originalName})
    }
    ctx.response.body = r
}
*/