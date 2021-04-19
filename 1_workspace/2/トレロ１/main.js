"use strict"

const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

addButton.onclick = function() {
  const card = createCard(inputElement.value)
  //上記の関数の組み方の説明
  container.append(card)

  inputElement.value = ""
  //上記の意味とは何なのか
}

const createCard = function() {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  //ここのテキストの意味
  card.append(todo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = function() {
    card.remove()
  }
  card.append(deleteButton)

  return card
  //ここのreturnの部分の説明をモット詳しくしてほしい
  //カードを戻すとはどういうことなのか
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

//俺が書いたやつ
// addButton.onclick = function() {
//   // 入力欄の値（テキスト）をとりだして、 text にいれる
//   const text = inputElement.value
// }

// //cardを作成
// const card = document.createElement("div")
// card.className = "card"

// // to doを作成
// const todo = document.createElement("div")
// todo.className = "todo"
// todo.textContent = text

// //todo を card の中に追加する
// card.append(todo)

// // card を container の中に追加する
// container.append(card)

// // 入力欄を空にする
// inputElement.value = ""

// 答案
// 追加ボタンを押したら
// addButton.onclick = function() {
//   // 入力欄の値（テキスト）をとりだして、 text にいれる
//   const text = inputElement.value

//   // card を作成
//   const card = document.createElement("div")
//   card.className = "card"

//   // todo を作成
//   const todo = document.createElement("div")
//   todo.className = "todo"
//   todo.textContent = text

//   // todo を card の中に追加する
//   card.append(todo)

//   // card を container の中に追加する
//   container.append(card)

//   // 入力欄を空にする
//   inputElement.value = ""
// }

// const deleteButton = document.createElement("div")
// deleteButton.className = "delete"

// deleteButton.onclick = function() {
//   card.remove()

//   card.append(deleteButton)
// }
