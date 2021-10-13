class CustomObject {
  constructor(data) {
    this.data = data
  }

  stringify() {
    const a = JSON.stringify(this.data)
    console.log(a)
    return a
  }
}

class CustomNumber extends CustomObject {
  constructor(data) {
    super(data)

    this.data = parseInt(data)
  }

  add(number) {
    const add = this.data + parseInt(number)
    console.log(add)
    return add
  }

  subtract(number) {
    const sub = this.data - parseInt(number)
    console.log(sub)
    return sub
  }

  multiply(number) {
    const mol = this.data * parseInt(number)
    console.log(mol)
    return mol
  }

  divide(number) {
    const div = this.data / parseInt(number)
    console.log(div)
    return div
  }

  toString() {
    const str = this.data.toString()
    console.log(str)
    return str
  }
}

class CustomString extends CustomObject {
  constructor(data) {
    super(data)

    this.data = data.toString()
  }

  stringify() {
    const json = JSON.stringify(this.data)
    console.log(json)
    return json
  }

  length() {
    const length = this.data.length
    console.log(length)
    return length
  }

  add(str) {
    const add = this.data + str
    console.log(add)
    return add
  }
}

class CustomArray extends CustomObject {
  constructor(data) {
    super(data)

    this.data = parseInt(data)
    // TODO: customLengthというプロパティをイニシャライズ時に割り当てる
    this.customLength = customLength
  }

  add(customArrayInstance) {
    const total = this.data + parseInt(customArrayInstance.data)
    console.log(total)
    const c = new CustomArray(total)
    console.log(c)
    return c
  }
}

let sample = new CustomObject(3)
// let a = new Array()
// let a = []
let b = new CustomNumber(6)
let c = new CustomString('data')
let d = new CustomArray(3)
let e = new CustomArray(7)
let f = d.add(e)

console.log('new instance is', f)

// sample.stringify()
// b.add(2)
// b.subtract(2)
// b.multiply(2)
// b.divide(2)
// b.toString(2)
// c.stringify()
// c.length()
// c.add('add')
