// 追加ボタン
const addButton = document.getElementById("add-button")
// 入力欄
const inputElement = document.getElementById("input-todo")
// カードコンテナ
const Container = document.getElementById("cards-container")

// 追加ボタンを押したら
addButton.onclick = function() {
    // card を作成
    const card = createCard(inputElement.value)

    // card を container の中に追加
    Container.append(card)

    // 入力欄を空にする
    inputElement.value = ""
}

// 共通の処理： テキストからカードを作成
const createCard = function (text) {
    // card の枠を作成
    const card = document.createElement("div")
    card.className = "card"

    // todo を作成
    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text

    // todo を card の中に追加
    card.append(todo)

    // 削除ボタンを作成
    const deleteButton = document.createElement("div")
    deleteButton.className = "delete"

    // 削除ボタンを押したときの処理追加
    deleteButton.onclick = function () {
        card.remove()
    }

    // 削除ボタンを card の中に追加
    card.append(deleteButton)

    return card
}