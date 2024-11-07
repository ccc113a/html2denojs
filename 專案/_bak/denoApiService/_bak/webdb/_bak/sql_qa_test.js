import { DB } from "https://deno.land/x/sqlite/mod.ts";

try {
  Deno.remove("mydb.db")
} catch (e) {
  console.log('remove fail!')
}
const db = new DB("mydb.db");
db.query("CREATE TABLE IF NOT EXISTS QA (Q TEXT, A TEXT)");

const QA = [
  ["hello!", "hi!"],
];

for (const [Q,A] of QA) {
  let cmd = `INSERT INTO QA (Q, A) VALUES ('${Q}','${A}')`
  console.log('cmd=', cmd)
  db.query(cmd);
}

for (const [Q,A] of db.query("SELECT Q,A FROM QA"))
  console.log(Q, A);

db.close()
