class CustomMath {
  constructor() {
  }

  random() {
    // Math.random()は使っちゃダメ
    // ランダムな数列を返す - ランダムのロジック: 現在の時刻を取得（new Date()）→ unix時間に変換 → その下8桁を返す
    // ex) 09384932
    // ex) 28324821
//  const a = Data.now()
 const randomNumber = String(new Date().getTime()).slice(-8)
//  const c = b.slice(-8)
//  const timeStamp = Math.round((new Date()).getTime() / 1000);
 console.log(randomNumber)
//  console.log(c)
  }
}


const cm = new CustomMath()
cm.random()