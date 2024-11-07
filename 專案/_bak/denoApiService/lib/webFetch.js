let gateUrl = "http://localhost:6789/fetch"

export async function webFetch(o) {
    let params = {
        body: JSON.stringify(o),
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        }
    }
    console.log('params=', params)
    let r = await fetch(gateUrl, params)
    if (!r.ok) {
        console.log('webFetch:error! o=', o, 'r=', r)
        return null
    }
    let text = await r.text()
    return text
}
