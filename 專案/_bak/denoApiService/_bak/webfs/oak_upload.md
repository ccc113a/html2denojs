



## 參考

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