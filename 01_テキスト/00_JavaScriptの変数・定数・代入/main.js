// * let キーワードを使って、hensu という名前の変数を宣言する
// let hensu
let hensu

// 変数には値を代入（割り当て）できる
//hensu = 42
hensu = 42

// 変数には値を再代入できる
//hensu = 100
hensu = 100
hensu += 1

// * 多くの場合、変数には宣言と同時に値を代入する
//let hensu2 = 42
let hensu2 = 42

// * const キーワードを使うと、定数になる
//const teisu = 42
const teisu = 45

// 定数には値を再代入できない
//teisu = 100 // エラー
//teisu = 100

// * 変数や定数の名前はだいたい自由に決められるが、-（ハイフン）が使えなかったり、最初の文字に数字が使えなかったりする
//let namae
let namae = "Nozomi"
namae += " Tachizawa"

// let my-name // だめ
//let my-name
// let 1banme // だめ
//let 1banme

// 複数の単語を組み合わせるときは、ふたつめ以降の単語の最初の文字を大文字にしてくっつけることが多い
// このような書き方をキャメルケースという（大文字がキャメル＝ラクダのこぶにみえることから）

//let camelCase // camel + case
let camelCase = "らくだ"

// * 演算子（１） 演算と代入
let x = 1 
x = x + 1 // 2
x += 1 // 3
x -= 1 // 2
x *= 3 // 6
x /= 2 // 3
x %= 2 // 1

let y = 5
y += 2 // 7
y *=5 // 35
y = 100 % y // 30
y /= 6 // 5

// * 演算子（２） 比較・論理演算子
let age = 1

const isHappy = happiness > 90
const isSleepy = sleepiness >90
const isNotHappyAndSleepy = !isHappy && isSleepy

const isHappyAndSleepy = (happiness >= 90) && (sleepiness >= 90)
