class CustomMath {
  constructor() {
  }

  random() {
    // Math.random()は使っちゃダメ
    // ランダムな数列を返す - ランダムのロジック: 現在の時刻を取得（new Date()）→ unix時間に変換 → その下8桁を返す
    // ex) 09384932
    // ex) 28324821
  }
}


const cm = new CustomMath()
cm.random()