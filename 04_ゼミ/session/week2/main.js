const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

// 「追加」ボタンを押したら、inputタグに入力した値を保存して、ブラウザ(DOM Tree)に追加する。

// addButton を押したら
addButton.onclick = function() {
  // memoInput の値を取り出して text に入れる
  const text = memoInput.value
  // console に text を表示
  console.log(text)
  // card を作成
  const card = document.createElement("div")
  card.className = "card"
  // content を作成し、text を入れる
  const content = document.createElement("div")
  content.className = "content"
  content.textContent = text
  // content を card の中に入れる
  card.append(content)
  // deleteButton を作成
  const deleteButton = document.createElement("button")
  deleteButton.className = "delete"
  deleteButton.textContent = "削除"
  // deleteButton を押したら card を削除
  deleteButton.onclick = function() {
    card.remove()
  }
  // deleteButton を card の中に入れる
  card.append(deleteButton)
  // card を memoContainer の中に入れる
  memoContainer.append(card)
  // memoInput の入力欄を空にする
  memoInput.value = ""
}
