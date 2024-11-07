export function id(path) {
  return document.getElementById(path)
}

export function one(path) {
  return document.querySelector(path)
}

export function showPanel(name) {
  document.querySelectorAll('.panel').forEach((node)=>node.style.display='none')
  id(name).style.display = 'block'
}

export function show(html) {
  id('main').innerHTML = html
}

export function openNav() {
  id('mySidenav').style.width = '250px'
}

export function closeNav() {
  id('mySidenav').style.width = '0'
}

