const body = document.querySelector('body')
const h1 = document.querySelector('section h1')

hora = () => {
  let data = new Date()
  let hora = data.getHours()
  hora = hora < 10 ? '0' + hora : hora
  let min = data.getMinutes()
  min = min < 10 ? '0' + min : min
  let sec = data.getSeconds()
  sec = sec < 10 ? '0' + sec : sec
  return hora + ":" + min + "." + sec
}

const css = () => {
  let data = new Date()
  let hora = data.getHours()
  hora = hora < 10 ? '0' + hora : hora
  let min = data.getMinutes()
  min = min < 10 ? '0' + min : min
  let sec = data.getSeconds()
  sec = sec < 10 ? '0' + sec : sec
  return "#" + hora + "" + min + "" + sec
}

setInterval(()=> {
  let data = new Date()
  h1.innerHTML = hora()
  body.style.backgroundColor = css()
}, 1000)
