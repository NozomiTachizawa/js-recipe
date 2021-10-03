// イベントが発生する要素を取得する
const button = document.getElementById("button")

// button 要素と click イベント
const alertMessage = function() {
    alert("クリックしたね")
}

// alertMessage() // アラートが表示される

// 関数を登録
button.onclick = alertMessage

// input 要素と input イベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

// const logValue = function(e) {
//     console.log(e.target.value)
// }

// inputText.oninput = logValue
// inputDate.oninput = logValue

document.onkeydown = function(e) {
    console.log(e.key)
}
