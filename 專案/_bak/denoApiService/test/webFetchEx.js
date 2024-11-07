import {webFetch} from '../lib/webFetch.js'

let text = await webFetch({
    url: 'https://example.com/',
    method: 'GET',
    // body: '',
    // headers: {},
})

console.log(text)
