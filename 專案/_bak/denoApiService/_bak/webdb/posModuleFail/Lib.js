export function dateToString(date) {
  return date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()
}

export function timeToString(date) {
  return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}