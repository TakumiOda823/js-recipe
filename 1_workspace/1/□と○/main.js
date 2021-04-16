const figure = document.getElementById("figure")

// figure.onclick = function() {
//   figure.classList.toggle("rounded")
// }

//発展 マウスを上にオーバーしながら変更
figure.onmousemove = function() {
  figure.classList.toggle("rounded")
}

const nicebutton = document.getElementById("nice-button")
nicebutton.onclick = function() {
  console.log = "こんにちわ"
}
