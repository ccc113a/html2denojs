// layout 函式，生成包含 title 和 content 的頁面佈局
export function layout(user, title, content) {
    return `
    <html>
    <head>
      <title>${user}:${title}</title>
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
        <h1>使用者：${user}</h1>
        ${content} <!-- 插入動態生成的內容 -->
      </section>
    </body>
    </html>
    `
}

// 顯示某個用戶的貼文列表
export function userList(users) {
    let listHtml = []
    for (let user of users) {
        listHtml.push(`<li><a href="/${user}/">${user}</a></li>`)
    }
    return layout('', 'User List', `<ol>${listHtml.join('\n')}</ol>`)
}

// 顯示某個用戶的貼文列表
export function list(user, posts) {
    let list = [] // 用來存放所有貼文的 HTML
    console.log('posts=', posts)
    for (let post of posts) {
        const formattedDate = new Date(post.created_at).toLocaleString(); // 格式化時間
        list.push(`
      <li>
        <h2>${post.title}</h2>
        <p>Created at: ${formattedDate}</p> <!-- 顯示貼文的建立時間 -->
        <p><a href="/${user}/post/${post.id}">Read post</a></p> <!-- 加入指向該貼文的連結 -->
      </li>
      `)
    }
    let content = `
    <h1>Posts</h1>
    <p>You have <strong>${posts.length}</strong> posts!</p> <!-- 顯示該用戶的貼文數量 -->
    <p><a href="/${user}/post/new">Create a Post</a></p> <!-- 加入新增貼文的連結 -->
    <ul id="posts">
      ${list.join('\n')} <!-- 以列表的形式顯示所有貼文 -->
    </ul>
    `
    return layout(user, 'Posts', content) // 使用 layout 函式來產生頁面佈局
}

// 顯示新增貼文的表單
export function newPost(user) {
    console.log('newPost:user=', user)
    return layout(user, 'New Post', `
    <h1>New Post</h1> <!-- 顯示新增貼文的標題 -->
    <p>Create a new post.</p>
    <form action="/${user}/post" method="post"> <!-- 指定動作路徑，包括 user -->
      <p><input type="text" placeholder="Title" name="title"></p> <!-- 標題輸入框 -->
      <p><textarea placeholder="Contents" name="body"></textarea></p> <!-- 貼文內容區 -->
      <p><input type="submit" value="Create"></p> <!-- 提交按鈕 -->
    </form>
    `)
}

// 顯示特定貼文的詳細內容
export function show(user, post) {
    const formattedDate = new Date(post.created_at).toLocaleString(); // 格式化時間
    return layout(user, post.title, `
      <h1>${post.title}</h1> <!-- 顯示貼文的標題 -->
      <pre>${post.body}</pre> <!-- 顯示貼文的內容 -->
      <p>Created at: ${formattedDate}</p> <!-- 顯示貼文的建立時間 -->
    `)
}
