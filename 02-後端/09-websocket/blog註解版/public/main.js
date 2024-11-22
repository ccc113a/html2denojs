// 定義一個全域變數 R，作為所有應用功能的命名空間
var R = {}

// 建立 WebSocket 連線到伺服器，伺服器位於當前主機名的 8080 埠
var socket = new WebSocket("ws://" + window.location.hostname + ":8080")

// WebSocket 連線開啟時觸發
socket.onopen = function (event) {
  console.log('socket:onopen()...') // 顯示連線成功訊息
}

// 定義一個用來傳送資料到 WebSocket 的函式
function send(o) {
  // 如果 WebSocket 已連線，直接發送 JSON 格式的資料
  if (socket.readyState == 1) {
    socket.send(JSON.stringify(o))
  } else {
    // 若連線尚未建立，延遲 1 秒後重試
    setTimeout(function () {
      send(o)
    }, 1000)
  }
}

// 當 URL 的 hash 改變時觸發此事件處理器
window.onhashchange = async function () {
  var tokens = window.location.hash.split('/') // 將 hash 拆解為陣列
  console.log('tokens=', tokens)
  switch (tokens[0]) { // 根據 hash 的第一部分執行相應邏輯
    case '#show': // 顯示指定的貼文內容
      send({ type: 'show', post: { id: parseInt(tokens[1]) } }) // 發送貼文 ID 到伺服器
      break
    case '#new': // 進入新建貼文頁面
      R.new()
      break
    default: // 預設行為為顯示貼文列表
      send({ type: 'list' })
      break
  }
}

// 當接收到 WebSocket 訊息時觸發
socket.onmessage = function (event) {
  var msg = JSON.parse(event.data) // 將接收到的 JSON 資料解析為物件
  console.log('onmessage: msg=', msg)
  switch (msg.type) { // 根據訊息類型進行處理
    case 'show': 
      R.show(msg.post) // 顯示單篇貼文
      break
    case 'list': 
      R.list(msg.posts) // 顯示貼文列表
      break
  }
}

// 當頁面載入完成時執行初始化邏輯
window.onload = function () {
  console.log('onload')
  window.location.href = "#list" // 預設載入顯示貼文列表
  window.onhashchange() // 手動觸發 hash 改變事件
}

// 定義函式來更新頁面的標題與內容區域
R.layout = function (title, content) {
  document.querySelector('title').innerText = title // 更新頁面標題
  document.querySelector('#content').innerHTML = content // 更新內容區域
}

// 顯示貼文列表
R.list = function (posts) {
  let list = [] // 用來存放每篇貼文的 HTML
  for (let post of posts) { // 遍歷每篇貼文
    list.push(`
    <li>
      <h2>${post.title}</h2>
      <p><a id="show${post.id}" href="#show/${post.id}">Read post</a></p>
    </li>
    `)
  }
  let content = `
  <h1>Posts</h1>
  <p>You have <strong>${posts.length}</strong> posts!</p>
  <p><a id="createPost" href="#new">Create a Post</a></p>
  <ul id="posts">
    ${list.join('\n')} <!-- 合併所有貼文 HTML -->
  </ul>
  `
  return R.layout('Posts', content) // 更新頁面為貼文列表
}

// 顯示新建貼文的頁面
R.new = function () {
  return R.layout('New Post', `
  <h1>New Post</h1>
  <p>Create a new post.</p>
  <form>
    <p><input id="title" type="text" placeholder="Title" name="title"></p>
    <p><textarea id="body" placeholder="Contents" name="body"></textarea></p>
    <p><input id="savePost" type="button" onclick="R.savePost()" value="Create"></p>
  </form>
  `)
}

// 顯示單篇貼文
R.show = function (post) {
  return R.layout(post.title, `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
  `)
}

// 儲存新建的貼文並切換回貼文列表
R.savePost = function () {
  let title = document.querySelector('#title').value // 獲取貼文標題
  let body = document.querySelector('#body').value // 獲取貼文內容
  send({ type: 'create', post: { title: title, body: body } }) // 發送貼文資料到伺服器
  window.location.hash = '#list' // 將 URL hash 改為貼文列表
}
