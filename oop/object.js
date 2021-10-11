class CustomObject {
  constructor(data) {
    this.data = data
  }

  stringify() {
    // TODO
    // インスタンスをJSON.stringify（というメソッドがある）で出力する
    const a = JSON.stringify(this.data)
    console.log(a)
    return a
  }
}

// TODO: CustomObjectを継承する
class CustomNumber extends CustomObject {
  constructor(data) {
    super(data)

    // dataは数字のみになる
    this.data = parseInt(data)
  }

  add(number) {
    // 足し算の結果を返す
    const add = this.data + parseInt(number)
    console.log(add)
    return add
  }

  subtract(number) {
    // 引き算の結果を返す
    const sub = this.data - parseInt(number)
    console.log(sub)
    return sub
  }

  multiply(number) {
    // かけ算の結果を返す
    const mol = this.data * parseInt(number)
    console.log(mol)
    return mol
  }

  divide(number) {
    // 割算の結果を返す
    const div = this.data / parseInt(number)
    console.log(div)
    return div
  }

  toString() {
    // string化したデータを返す
    const str = this.data.toString()
    console.log(str)
    return str
  }
}

// TODO: CustomObjectを継承する
class CustomString extends CustomObject {
  constructor(data) {
    super(data)

    this.data = data.toString()
  }

  stringify() {
    // TODO
    // インスタンスをjson.stringifyで出力する
    const json = JSON.stringify(this.data)
    console.log(json)
    return json
  }

  length() {
    // 文字の長さを返す
    const length = this.data.length
    console.log(length)
    return length
  }

  add(str) {
    // インスタンスのdataと引数の文字列を連結する
    const add = this.data + str
    console.log(add)
    return add
  }
}

// TODO: CustomArrayクラスを作成
class CustomArray extends CustomObject {
  constructor(data) {
    super(data)

    // dataは数字のみになる
    this.data = parseInt(data)
    // TODO: customLengthというプロパティをイニシャライズ時に割り当てる
  }

  add(number) {
    // arrayの足し算の結果を返す
    const add = this.data + parseInt(number)
    console.log(add)
    // TODO: 新しくcustomArrayのインスタンスを再生成してreturnする
    return add
  }
}


let sample = new CustomObject(3)
// let a = new Array()
// let a = []
let b = new CustomNumber(6)
let c = new CustomString('data')
sample.stringify()
b.add(2)
b.subtract(2)
b.multiply(2)
b.divide(2)
b.toString(2)
c.stringify()
c.length()
c.add('add')


