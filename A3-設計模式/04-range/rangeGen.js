function* range(from, to, step=1) {
  for (let i = from; i<to; i+=step) {
    yield i
  }
}

let g=range(1,5)
while (true) {
  let i = g.next()
  if (i.done) break
  console.log('i=',i)
}

g=range(1,99999999)
while (true) {
  let i = g.next()
  if (i.value == 5) break
  if (i.done) break
  console.log('i=',i)
}

for (const i of range(3,8)) {
  console.log('i=', i)
}
/*
for (const i of range(3,999999999)) {
  console.log('i=', i)
}
*/