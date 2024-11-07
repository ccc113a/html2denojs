set -x
url=http://localhost:8009/sqlite
head="Content-Type: application/json"

curl $url -X POST -H "$head" -d '{"sql":"CREATE TABLE IF NOT EXISTS QA (Q TEXT, A TEXT)"}'
curl $url -X POST -H "$head" -d "@qa1.json"
curl $url -X POST -H "$head" -d "@qa2.json"
curl $url -X POST -H "$head" -d '{"sql":"SELECT * FROM QA"}'
