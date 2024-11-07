

formData 參考下列程式碼

* https://github.com/oakserver/oak/blob/main/body.test.ts

```js
Deno.test({
  name: "body - stream - node request",
  async fn() {
    const rBody = "hello world";
    const expected = encoder.encode(rBody);
    const body = new Body(
      nodeToServer({ "content-type": "application/octet-stream" }, rBody),
    );
    assert(body.has);
    assertEquals(body.type(), "binary");
    assert(body.stream);
    let actual = new Uint8Array();
    for await (const chunk of body.stream) {
      actual = concat([actual, chunk]);
    }
    assert(timingSafeEqual(actual, expected));
  },
});
```


然後 formData 中 File 的處理參考

* [Save uploaded files from multipart/form-data in Deno](https://medium.com/deno-the-complete-reference/save-uploaded-files-from-multipart-form-data-in-deno-676e32f553d8)

File object that implements the Blob interface. While dealing with multipart/form-data, it is a common use case to save the uploaded files on disk. It is impractical to keep the uploaded files in memory.