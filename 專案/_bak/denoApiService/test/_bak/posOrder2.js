import {sqlFetch} from '../lib/sql.js'

let order = {totalPrice:100}

export async function main() {
    await sqlFetch("CREATE TABLE IF NOT EXISTS posOrder (json TEXT)")
    await sqlFetch(`INSERT INTO posOrder VALUES ('${JSON.stringify(order)}')`)
    // await sqlFetch(`INSERT INTO posOrder VALUES ('{"totalPrice":100}')`)
    await sqlFetch("SELECT * FROM posOrder")
}

