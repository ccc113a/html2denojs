

```
(base) cccimac@cccimacdeiMac 02-blogAjax % sudo ./deno_test.sh
Server run at http://127.0.0.1:8000
------- pre-test output -------
Chrome (124.0.6367.78) downloaded to /Users/cccimac/.cache/puppeteer/chrome/mac_arm-124.0.6367.78
chrome-headless-shell (124.0.6367.78) downloaded to /Users/cccimac/.cache/puppeteer/chrome-headless-shell/mac_arm-124.0.6367.78
----- pre-test output end -----
running 1 test from ./deno_test.js
Puppteer ...
------- output -------
Warning: Not implemented: ClientRequest.options.createConnection
path= /
path= /main.js
path= /favicon.ico
[uncaught application error]: NotFoundError - No such file or directory (os error 2): stat '/Users/cccimac/Desktop/ccc/html2denojs/A2-軟體工程/11-e2eTest/02-blogAjax/public/favicon.ico'

request: {
  url: "http://127.0.0.1:8000/favicon.ico",
  method: "GET",
  hasBody: false
}
response: { status: 404, type: "text", hasBody: true, writable: true }

    at createHttpError (https://jsr.io/@oak/commons/1.0.0/http_errors.ts:295:10)
    at send (https://deno.land/x/oak@v17.0.0/send.ts:240:13)
    at eventLoopTick (ext:core/01_core.js:175:7)
    at async file:///Users/cccimac/Desktop/ccc/html2denojs/A2-軟體工程/11-e2eTest/02-blogAjax/app.js:20:3
    at async dispatch (https://deno.land/x/oak@v17.0.0/middleware.ts:90:7)
    at async allowedMethods (https://deno.land/x/oak@v17.0.0/router.ts:781:7)
    at async dispatch (https://deno.land/x/oak@v17.0.0/middleware.ts:90:7)
    at async dispatch (https://deno.land/x/oak@v17.0.0/middleware.ts:90:7)
    at async Application.#handleRequest (https://deno.land/x/oak@v17.0.0/application.ts:605:9)
html= <html><head>
    <title>Posts</title>
    <style>
      body {
        padding: 80px;
        font: 16px Helvetica, Arial;
      }
  
      h1 {
        font-size: 2em;
      }
  
      h2 {
        font-size: 1.2em;
      }
  
      #posts {
        margin: 0;
        padding: 0;
      }
  
      #posts li {
        margin: 40px 0;
        padding: 0;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
        list-style: none;
      }
  
      #posts li:last-child {
        border-bottom: none;
      }
  
      textarea {
        width: 500px;
        height: 300px;
      }
  
      input[type=text],
      textarea {
        border: 1px solid #eee;
        border-top-color: #ddd;
        border-left-color: #ddd;
        border-radius: 2px;
        padding: 15px;
        font-size: .8em;
      }
  
      input[type=text] {
        width: 500px;
      }
    </style>
  </head>
  <body>
    <section id="content">
  <h1>Posts</h1>
  <p>You have <strong>0</strong> posts!</p>
  <p><a id="createPost" href="#new">Create a Post</a></p>
  <ul id="posts">
    
  </ul>
  </section>
    <script src="main.js"></script>
  
</body></html>
idx= 961
body =  Body { has: true, used: false }
create:id=> 0
create:get=> { title: "aaa", body: "aaa" }
create:save=> {
  title: "aaa",
  body: "aaa",
  created_at: 2024-11-14T09:07:08.003Z,
  id: 0
}
----- output end -----
Puppteer ... FAILED (12s)

 ERRORS 

Puppteer => ./deno_test.js:18:6
error: Leaks detected:
  - "fetchUpgradedStream" was created during the test, but not cleaned up during the test. Close the resource before the end of the test.
  - A child process stderr was opened during the test, but not closed during the test. Close the child process stderr by calling `proc.stderr.close()` or `await child.stderr.cancel()`.
  - A child process stdin was opened during the test, but not closed during the test. Close the child process stdin by calling `proc.stdin.close()`.
  - A child process was started during the test, but not closed during the test. Close the child process by calling `proc.kill()` or `proc.close()`.
  - A signal listener was created during the test, but not fired/cleared during the test. Clear the signal listener by calling `Deno.removeSignalListener`.
  - An async call to op_read was started in this test, but never completed. The operation was started here:
    at Object.op_read (ext:core/00_infra.js:269:13)
    at Object.pull (ext:deno_web/06_streams.js:988:30)
    at Module.invokeCallbackFunction (ext:deno_webidl/00_webidl.js:981:16)
    at ReadableByteStreamController.pullAlgorithm (ext:deno_web/06_streams.js:3559:14)
    at readableByteStreamControllerCallPullIfNeeded (ext:deno_web/06_streams.js:1234:49)
    at ReadableByteStreamController.[[[PullSteps]]] (ext:deno_web/06_streams.js:5986:5)
    at readableStreamDefaultReaderRead (ext:deno_web/06_streams.js:2509:36)
    at ReadableStreamDefaultReader.read (ext:deno_web/06_streams.js:5483:5)
    at Readable.read [as _read] (ext:deno_node/_stream.mjs:5799:14)
    at Readable.read (ext:deno_node/_stream.mjs:2996:16)
  - An async call to op_read was started in this test, but never completed. The operation was started here:
    at Object.op_read (ext:core/00_infra.js:269:13)
    at TcpConn.read (ext:deno_net/01_net.js:148:26)
    at TCP.#read (ext:deno_node/internal_binding/stream_wrap.ts:222:44)
    at TCP.#read (ext:deno_node/internal_binding/stream_wrap.ts:250:17)
    at eventLoopTick (ext:core/01_core.js:175:7)
  - An async operation to get the next signal was started in this test, but never completed. This is often caused by not un-registering a OS signal handler. The operation was started here:
    at op_signal_poll (ext:core/00_infra.js:250:13)
    at pollSignal (ext:runtime/40_signals.js:18:19)
    at loop (ext:runtime/40_signals.js:73:15)
    at Object.addSignalListener (ext:runtime/40_signals.js:55:5)
    at Process.on (node:process:355:12)
    at subscribeToProcessEvent (file:///Users/cccimac/Desktop/ccc/html2denojs/A2-軟體工程/11-e2eTest/02-blogAjax/node_modules/.deno/@puppeteer+browsers@2.2.3/node_modules/@puppeteer/browsers/lib/esm/launch.js:78:17)
    at new Process (file:///Users/cccimac/Desktop/ccc/html2denojs/A2-軟體工程/11-e2eTest/02-blogAjax/node_modules/.deno/@puppeteer+browsers@2.2.3/node_modules/@puppeteer/browsers/lib/esm/launch.js:149:13)
    at launch (file:///Users/cccimac/Desktop/ccc/html2denojs/A2-軟體工程/11-e2eTest/02-blogAjax/node_modules/.deno/@puppeteer+browsers@2.2.3/node_modules/@puppeteer/browsers/lib/esm/launch.js:42:12)
    at ChromeLauncher.launch (file:///Users/cccimac/Desktop/ccc/html2denojs/A2-軟體工程/11-e2eTest/02-blogAjax/node_modules/.deno/puppeteer-core@22.7.1/node_modules/puppeteer-core/lib/esm/puppeteer/node/ProductLauncher.js:54:32)
    at eventLoopTick (ext:core/01_core.js:175:7)
  - An async operation to get the next signal was started in this test, but never completed. This is often caused by not un-registering a OS signal handler. The operation was started here:
    at op_signal_poll (ext:core/00_infra.js:250:13)
    at pollSignal (ext:runtime/40_signals.js:18:19)
    at loop (ext:runtime/40_signals.js:73:15)
    at Object.addSignalListener (ext:runtime/40_signals.js:55:5)
    at Process.on (node:process:355:12)
    at subscribeToProcessEvent (file:///Users/cccimac/Desktop/ccc/html2denojs/A2-軟體工程/11-e2eTest/02-blogAjax/node_modules/.deno/@puppeteer+browsers@2.2.3/node_modules/@puppeteer/browsers/lib/esm/launch.js:78:17)
    at new Process (file:///Users/cccimac/Desktop/ccc/html2denojs/A2-軟體工程/11-e2eTest/02-blogAjax/node_modules/.deno/@puppeteer+browsers@2.2.3/node_modules/@puppeteer/browsers/lib/esm/launch.js:152:13)
    at launch (file:///Users/cccimac/Desktop/ccc/html2denojs/A2-軟體工程/11-e2eTest/02-blogAjax/node_modules/.deno/@puppeteer+browsers@2.2.3/node_modules/@puppeteer/browsers/lib/esm/launch.js:42:12)
    at ChromeLauncher.launch (file:///Users/cccimac/Desktop/ccc/html2denojs/A2-軟體工程/11-e2eTest/02-blogAjax/node_modules/.deno/puppeteer-core@22.7.1/node_modules/puppeteer-core/lib/esm/puppeteer/node/ProductLauncher.js:54:32)
    at eventLoopTick (ext:core/01_core.js:175:7)
  - An async operation to get the next signal was started in this test, but never completed. This is often caused by not un-registering a OS signal handler. The operation was started here:
    at op_signal_poll (ext:core/00_infra.js:250:13)
    at pollSignal (ext:runtime/40_signals.js:18:19)
    at loop (ext:runtime/40_signals.js:73:15)
    at Object.addSignalListener (ext:runtime/40_signals.js:55:5)
    at Process.on (node:process:355:12)
    at subscribeToProcessEvent (file:///Users/cccimac/Desktop/ccc/html2denojs/A2-軟體工程/11-e2eTest/02-blogAjax/node_modules/.deno/@puppeteer+browsers@2.2.3/node_modules/@puppeteer/browsers/lib/esm/launch.js:78:17)
    at new Process (file:///Users/cccimac/Desktop/ccc/html2denojs/A2-軟體工程/11-e2eTest/02-blogAjax/node_modules/.deno/@puppeteer+browsers@2.2.3/node_modules/@puppeteer/browsers/lib/esm/launch.js:155:13)
    at launch (file:///Users/cccimac/Desktop/ccc/html2denojs/A2-軟體工程/11-e2eTest/02-blogAjax/node_modules/.deno/@puppeteer+browsers@2.2.3/node_modules/@puppeteer/browsers/lib/esm/launch.js:42:12)
    at ChromeLauncher.launch (file:///Users/cccimac/Desktop/ccc/html2denojs/A2-軟體工程/11-e2eTest/02-blogAjax/node_modules/.deno/puppeteer-core@22.7.1/node_modules/puppeteer-core/lib/esm/puppeteer/node/ProductLauncher.js:54:32)
    at eventLoopTick (ext:core/01_core.js:175:7)
  - An async operation to wait for a subprocess to exit was started in this test, but never completed. This is often caused by not awaiting the result of a `Deno.Process#status` call. The operation was started here:
    at op_spawn_wait (ext:core/00_infra.js:250:13)
    at new ChildProcess (ext:runtime/40_process.js:302:25)
    at spawnChildInner (ext:runtime/40_process.js:201:10)
    at spawnChild (ext:runtime/40_process.js:208:10)
    at Command.spawn (ext:runtime/40_process.js:480:12)
    at new ChildProcess (ext:deno_node/internal/child_process.ts:183:10)
    at Object.spawn (node:child_process:119:10)
    at new Process (file:///Users/cccimac/Desktop/ccc/html2denojs/A2-軟體工程/11-e2eTest/02-blogAjax/node_modules/.deno/@puppeteer+browsers@2.2.3/node_modules/@puppeteer/browsers/lib/esm/launch.js:137:45)
    at launch (file:///Users/cccimac/Desktop/ccc/html2denojs/A2-軟體工程/11-e2eTest/02-blogAjax/node_modules/.deno/@puppeteer+browsers@2.2.3/node_modules/@puppeteer/browsers/lib/esm/launch.js:42:12)
    at ChromeLauncher.launch (file:///Users/cccimac/Desktop/ccc/html2denojs/A2-軟體工程/11-e2eTest/02-blogAjax/node_modules/.deno/puppeteer-core@22.7.1/node_modules/puppeteer-core/lib/esm/puppeteer/node/ProductLauncher.js:54:32)

 FAILURES 

Puppteer => ./deno_test.js:18:6

FAILED | 0 passed | 1 failed (12s)

error: Test failed
```
