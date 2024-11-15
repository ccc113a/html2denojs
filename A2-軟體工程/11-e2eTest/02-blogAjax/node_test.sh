deno run -A app.js&
APP_PID=$!
sleep 5
mocha node_test.js --timeout 100000
kill $APP_PID
