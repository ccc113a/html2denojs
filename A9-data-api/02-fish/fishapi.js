const jsonResponse = await fetch("https://data.moa.gov.tw/Service/OpenData/FaRss.aspx?key=004&IsTransData=1&UnitId=727");
const jsonData = await jsonResponse.json();
console.log(jsonData);
