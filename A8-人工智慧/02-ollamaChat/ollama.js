const url = 'http://localhost:11434/api/chat';

export async function chat(q) {
    const data = {
        model: "llama3.2:3b", // "gemma:2b",
        messages: [
            { role: "user", content: q }
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
    let r = []
    for (let t of jsonResponse) {
        r.push(t.message.content)
    }
    let responseText = r.join('')
    return responseText
}
