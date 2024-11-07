const url = 'http://localhost:11434/api/chat';
// const url = 'http://192.168.61.161:11434/api/chat';
const data = {
  model: "gemma:2b", // "llama3.2:3b", // "gemma:2b",
  messages: [
    { role: "system", content: "你是一個網站設計師，擅長用原生的 HTML/CSS/JavaScript 建構網站" },
    { role: "system", content: "回應時請寫出 HTML 內嵌 CSS 與 JavaScript 的單頁內容" },
    { role: "user", content: "請寫一個手寫板程式" },
  ]
};

const response = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});

const text = await response.text();
const lines = text.trim().split('\n');
const json1 = '[' + lines.join(',\n') + ']';
const jsonResponse = JSON.parse(json1);

console.log(JSON.stringify(jsonResponse, null, 2));

let r = []
for (let t of jsonResponse) {
    r.push(t.message.content)
}
let responseText = r.join(' ')

console.log(responseText)
