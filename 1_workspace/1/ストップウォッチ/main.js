const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function() {
  count += 1
  display.textContent = count / 100
}

let id = null

button.onclick = function() {
  if (id === null) {
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}

//このストップウォッチは、わずかに正確ではありません。その理由を説明してください。
//0秒からスタートしたときにボタンを押した瞬間0,01秒すぐに増えちゃう貯め0秒から0.01秒の間が存在しなくなってしまう
