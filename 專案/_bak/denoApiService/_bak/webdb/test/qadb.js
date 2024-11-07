import {sqlFetch} from '../lib/sql.js'

async function main() {
    await sqlFetch("ccc", "CREATE TABLE IF NOT EXISTS QA (Q TEXT, A TEXT)")
    await sqlFetch("ccc", "INSERT INTO QA VALUES ('Hello!', 'Hi!')")
    await sqlFetch("ccc", "INSERT INTO QA VALUES ('你好', '我很好')")
    await sqlFetch("ccc", "SELECT * FROM QA")
}

main()
