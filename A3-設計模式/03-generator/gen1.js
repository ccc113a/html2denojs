// from -- https://pjchender.dev/javascript/js-generator/
function* helloWorldGenerator() {
  // 第一次 next 開始
  console.log('before yield hello');
  let paramsInNextAfterHello = yield 'hello';
  // 第一次 next 結束， yield 完後停在這裡

  // 第二次 next 開始
  console.log('paramsInNextAfterHello|', paramsInNextAfterHello, "|");
  let paramsInNextAfterWorld = yield 'world';
  // 第二次 next 結束， yield 完後停在這裡

  // 第三次 next 開始
  console.log('paramsInNextAfterWorld', paramsInNextAfterWorld);
  return 'ending';
  // 第三次 next 結束， yield 完後停在這裡

  // 之後的 next 都會回傳 {done: true, value: undefined}
  console.log('after yield ending'); // 如果上面用 return 則不會執行到這行
}

var hw = helloWorldGenerator();
hw.next(); // before yield hello, Object {value: "hello", done: false}
console.log('------');
hw.next('after yield hello'); // after yield hello, Object {value: "world", done: false}
console.log('------');
hw.next('after yield world'); // after yield world, Object {value: "ending", done: true}
console.log('------');
hw.next(); // Object {value: undefined, done: true}
console.log('------');
hw.next(); // Object {value: undefined, done: true}