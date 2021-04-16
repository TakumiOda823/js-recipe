const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")

//一つ減らす
const display2 = document.getElementById("display2")
const mainasuButton = document.getElementById("mainasu-button")

//２倍にする
const display3 = document.getElementById("display3")
const nibaiButton = document.getElementById("nibai-button")

let count = 0
let count2 = 0
let count3 = 0

plusButton.onclick = function() {
  count += 1

  display.textContent = count
}

//一つ減らす
mainasuButton.onclick = function() {
  count2 -= 1

  display2.textContent = count2
}

//２倍にする
nibaiButton.onclick = function() {
  count3 = count * 2

  display3.textContent = count3
}
