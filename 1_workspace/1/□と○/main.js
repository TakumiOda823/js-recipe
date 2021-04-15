const figure = document.getElementById("figure")

figure.onclick = function() {
  figure.classList.toggle("rounded")
}

const nicebutton = document.getElementById("nice-button")
nicebutton.onclick = function() {
  console.log = "こんにちわ"
}
