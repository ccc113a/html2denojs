// 引入 Oak 框架中的 Application 和 send 函式，用於處理 HTTP 請求
import { Application, send } from "https://deno.land/x/oak/mod.ts";
// 引入 WebSocketServer 模組，用於建立 WebSocket 伺服器
import { WebSocketServer } from "https://deno.land/x/websocket/mod.ts";

// 建立一個新的 Oak 應用程式實例
const app = new Application();

// 定義一個貼文資料的初始陣列
const posts = [
  { id: 0, title: 'aaa', body: 'aaaaa' },
  { id: 1, title: 'bbb', body: 'bbbbb' }
];

// 建立一個 WebSocket 伺服器，監聽 8080 埠
const wss = new WebSocketServer(8080);

// 當有新的 WebSocket 連線建立時觸發
wss.on("connection", function (ws) {
  // 設定當收到訊息時的處理邏輯
  ws.on("message", function (message) {
    var id, post, msg = JSON.parse(message); // 解析收到的 JSON 訊息
    console.log('msg=', msg); // 輸出訊息內容到主控台
    switch (msg.type) { // 根據訊息的類型進行不同的處理
      case 'list': // 如果類型是 'list'，回傳所有貼文列表
        ws.send(JSON.stringify({ type: 'list', posts }));
        break;
      case 'show': // 如果類型是 'show'，回傳指定的貼文內容
        id = msg.post.id; // 從訊息中獲取貼文 ID
        post = posts[id]; // 根據 ID 獲取貼文資料
        ws.send(JSON.stringify({ type: 'show', post })); // 回傳貼文內容
        break;
      case 'create': // 如果類型是 'create'，新增一篇貼文
        post = msg.post; // 從訊息中獲取貼文資料
        id = posts.push(post) - 1; // 將貼文加入貼文列表，並取得其新 ID
        post.created_at = new Date(); // 設定貼文的建立時間
        post.id = id; // 設定貼文的 ID
        ws.send(JSON.stringify({ type: 'create', post })); // 回傳新增的貼文資料
        break;
    }
  });
});

// 定義一個中介軟體，用於處理靜態檔案的請求
app.use(async (ctx, next) => {
  await next(); // 繼續執行後續的中介軟體
  console.log('path=', ctx.request.url.pathname); // 輸出請求的路徑到主控台
  await send(ctx, ctx.request.url.pathname, { // 傳送靜態檔案作為回應
    root: `${Deno.cwd()}/public/`, // 指定靜態檔案的根目錄
    index: "index.html", // 預設的檔案名稱
  });
});

// 輸出伺服器啟動訊息到主控台
console.log('Server run at http://127.0.0.1:8002');
// 啟動 HTTP 伺服器，監聽 8002 埠
await app.listen({ port: 8002 });
