const jsonResponse = await fetch("http://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&stockNo=2330");
const jsonData = await jsonResponse.json();
console.log(jsonData);
