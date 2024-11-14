deno run -A app.js&
sleep 5
deno test -A --trace-leaks deno_test.js
# deno test -A deno_test.js
# 這個測試會有報錯，但是 puppeteer 記憶體洩漏的問題，並非我們的程式有問題
# https://github.com/denoland/deno/issues/19507