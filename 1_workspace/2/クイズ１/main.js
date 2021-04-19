// const choice1 = document.getElementById("choice-1")
// const choice2 = document.getElementById("choice-2")
// const choice3 = document.getElementById("choice-3")
// const feedback = document.getElementById("feedback")

//一回目
// choice1.onclick = function() {
//   feedback.textContent =
//     "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
// }

// choice2.onclick = function() {
//   feedback.textContent =
//     "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
// }

// choice3.onclick = function() {
//   feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
// }

//２回目
// const choose = function(choiceString) {
//   if (choiceString === "ゴリアテ") {
//     feedback.textContent =
//       "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
//   } else if (choiceString === "ゼニガメ") {
//     feedback.textContent =
//       "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
//   } else if (choiceString === "ガニメデ") {
//     feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
//   }
// }

// choice1.onclick = function() {
//   // ゴリアテを選択
//   choose("ゴリアテ")
// }
// choice2.onclick = function() {
//   // ゼニガメを選択
//   choose("ゼニガメ")
// }
// choice3.onclick = function() {
//   // ガニメデを選択
//   choose("ガニメデ")
// }

//３回目
// const feedbacks = [
//   "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
//   "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
//   "正解！ガニメデは、木星の第三惑星だよ！",
// ]

// const choose = function(choiceNumber) {
//   feedback.textContent = feedbacks[choiceNumber]
//こことかってどんな使い方してるの

// }

// choice1.onclick = function() {
//   choose(0)
// }
// choice2.onclick = function() {
//   choose(1)
// }
// choice3.onclick = function() {
//   choose(2)
// }

//４回目
const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
    {
      text: "ザリガニ",
      feedback: "残念！それは、別の生き物だよ！",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function() {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  choice4.textContent = quiz.choices[3].text
}

// choiceNumber番目の選択肢を選択
const choose = function(choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function() {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function() {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function() {
  // 2 番目の選択肢を選択
  choose(2)
}
choice4.onclick = function() {
  // 2 番目の選択肢を選択
  choose(3)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
