

```
(base) cccimac@cccimacdeiMac 02-blogAjax % ./node_test.sh
Server run at http://127.0.0.1:8000


  blogAjax
    puppeteer
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
      ✔ GET / should see <p>You have <strong>0</strong> posts!</p> (240ms)
      ✔ click createPost link (2603ms)
body =  Body { has: true, used: false }
create:id=> 0
create:get=> { title: "aaa", body: "aaa" }
create:save=> {
  title: "aaa",
  body: "aaa",
  created_at: 2024-11-14T09:05:21.494Z,
  id: 0
}
      ✔ fill {title:"aaa", body:"aaa"} (4016ms)
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
  <p>You have <strong>1</strong> posts!</p>
  <p><a id="createPost" href="#new">Create a Post</a></p>
  <ul id="posts">
    
    <li>
      <h2>aaa</h2>
      <p><a id="show0" href="#show/0">Read post</a></p>
    </li>
    
  </ul>
  </section>
    <script src="main.js"></script>
  
</body></html>
      ✔ should see <p>You have <strong>1</strong> posts!</p> (606ms)


  4 passing (9s)
```