import {sqlFetch} from '../lib/sql.js'

let order = {totalPrice:100}

async function main() {
    await sqlFetch("ccc", "CREATE TABLE IF NOT EXISTS posOrder (json TEXT)")
    await sqlFetch("ccc", `INSERT INTO posOrder VALUES ('${JSON.stringify(order)}')`)
    // await sqlFetch(`INSERT INTO posOrder VALUES ('{"totalPrice":100}')`)
    await sqlFetch("ccc", "SELECT * FROM posOrder")
}

main()