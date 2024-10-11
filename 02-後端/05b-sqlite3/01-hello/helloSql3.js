import { Database } from "jsr:@db/sqlite@0.11";

const db = new Database("test.db");

const [version] = db.prepare("select sqlite_version()").value();
console.log(version);

db.close();