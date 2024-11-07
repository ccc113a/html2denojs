import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { oFetch } from "./lib.js"

export async function sqlHandler(ctx) {
    const body = ctx.request.body
    console.log('body = ', body)
    if (body.type() === "json") {
        let json = await body.json()
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
    const body = ctx.request.body
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
    if (body.type() === 'form-data') {
        const formData = await body.formData() // https://docs.deno.com/api/web/~/FormData
        // https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
        console.log('data=', formData)
        let r = []
        for (let [key, value] of formData) {
            console.log('key=', key, 'value=', value)
            if (value instanceof File) {
                r.push({file:value.name})
            }
        }
        ctx.response.body = r
    }
}
