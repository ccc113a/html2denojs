# multipart

## 啟動 file-server

* https://jsr.io/@std/http/doc/file-server


```
(base) cccimac@cccimacdeiMac 01-multipart % deno run --allow-net --allow-read --allow-sys jsr:@std/http/file-server
Listening on:
- Local: http://0.0.0.0:8000
- Network: http://172.20.10.2:8000
                                    
```

## 啟動 fileupload.js 然後用瀏覽器上傳

```
(base) cccimac@cccimacdeiMac 01-multipart % deno run -A fileupload.js
Server run at http://127.0.0.1:3001
data= FormData {
  author: "ccc",
  myfile: File { name: "1728133637909.jpeg", size: 205354, type: "image/jpeg" },
  quote: "ccc"
}
key= author value= ccc
key= myfile value= File { name: "1728133637909.jpeg", size: 205354, type: "image/jpeg" }
key= quote value= ccc
```


## oak

* https://stackoverflow.com/questions/65496698/handling-multipart-form-data-with-deno-and-oak

```js
router.post('/foo', async context => {
    const body = await context.request.body({ type: 'form-data'})
    const data = await body.value.read()
    console.log(data)
    context.response.redirect('/')
})
```

data

```
{
  fields: { name: "Foo", organisation: "Bar" },
  files: [
    {
      content: undefined,
      contentType: "image/png",
      name: "myimage",
      filename: "/tmp/c8290ba0/e25ee9648e3e5db57f5ef3eb4cfa06704ce5f29c.png",
      originalName: "foobar.png"
    }
  ]
}
```


## std

* [Save uploaded files from multipart/form-data in Deno](https://medium.com/deno-the-complete-reference/save-uploaded-files-from-multipart-form-data-in-deno-676e32f553d8)
* [Handling file uploads via multipart/form-data in Deno](https://medium.com/deno-the-complete-reference/handling-file-uploads-via-multipart-form-data-in-deno-b4c860647cc3)