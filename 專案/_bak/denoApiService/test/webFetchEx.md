

## 在 github pages 中執行失敗

因為在 https 網頁中，不能 fetch http 類型的網站

```
params= Object
webFetch.js:12 Mixed Content: The page at 'https://ccckmit.github.io/denoSaas/webfetch/test/webFetchEx.html' was loaded over HTTPS, but requested an insecure resource 'http://172.104.100.202:8008/fetch'. This request has been blocked; the content must be served over HTTPS.
webFetch @ webFetch.js:12
webFetch.js:12          Uncaught TypeError: Failed to fetch
    at webFetch (webFetch.js:12:19)
    at webFetchEx.js:3:18
/favicon.ico:1          Failed to load resource: the server responded with a status of 404 ()
DevTools failed to load source map: Could not load content for chrome-extension://cofdbpoegempjloogbagkncekinflcnj/build/content.js.map: System error: net::ERR_BLOCKED_BY_CLIENT
```

## 在 localhost 中執行成功

* http://localhost:4507/test/webFetchEx.html

在瀏覽器開發人員工具中


```
params= Object
webFetchEx.js:10 <!doctype html>
<html>
<head>
    <title>Example Domain</title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
    body {
        background-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        
    }
    div {
        width: 600px;
        margin: 5em auto;
        padding: 2em;
        background-color: #fdfdff;
        border-radius: 0.5em;
        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
    }
    a:link, a:visited {
        color: #38488f;
        text-decoration: none;
    }
    @media (max-width: 700px) {
        div {
            margin: 0 auto;
            width: auto;
        }
    }
    </style>    
</head>

<body>
<div>
    <h1>Example Domain</h1>
    <p>This domain is for use in illustrative examples in documents. You may use this
    domain in literature without prior coordination or asking for permission.</p>
    <p><a href="https://www.iana.org/domains/example">More information...</a></p>
</div>
</body>
</html>
```