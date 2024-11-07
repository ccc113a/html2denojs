export async function oFetch(o) {
    let r = await fetch(o.url, {
        body: o.method == 'GET'?undefined:o.body,
        method: o.method || 'GET',
        headers: o.headers || {},
    })
    if (!r.ok) {
        console.log('webFetch:error! o=', o, 'r=', r)
        return null
    }
    let text = await r.text()
    return text
  }
  