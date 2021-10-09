class Crypto {
  constructor(rawData) {
    this.rawData = rawData
    this.salt = 'salt'
    this.encodedMessage = this.encode(rawData)
    this.decodedMessage = this.decode(rawData)
  }

  info() {
    console.log('info: ', JSON.stringify(this))
  }

  decode(text) {
    // decodeされた値を返す
    // console.log('data is', this.rawData)
    return text
  }

  encode(text) {
    // encodeされた値を返す
    // console.log('data is', this.rawData)
    return text
  }
}

class SampleCrypto extends Crypto {
  constructor(rawData) {
    super(rawData)

    this.encodedMessage = this.encode(rawData)
    this.decodedMessage = this.decode(rawData)
  }

  decode() {
    // decodeされた値を返す
    const decodedMessage = this.encodedMessage
      .split('')
      .map(char => (char === '-' ? 'm' : char))
      .join('')
    // console.log('data is', decodedMessage)
    return decodedMessage
  }

  encode() {
    // encodeされた値を返す
    const encodedMessage = this.rawData
      .split('')
      .map(char => (char === 'm' ? '-' : char))
      .join('')
    // console.log('data is', encodedMessage)

    return encodedMessage
  }
}

class HogeCrypto extends Crypto {
  constructor(rawData) {
    super(rawData)

    this.encodeMessage = this.encode(rawData)
    this.decodeMessage = this.decode(rawData)
  }
  // データはアルファベットのみ
  // abc -> a1b1c1 に変換する
  // aabbe -> a2b2e に変換する
  // kdkd -> k1d1k1d1に変換する

  encode() {
    const txt = this.rawData
    const array = txt.split('')

    let current = array[0]
    let prev = null
    let seqLen = 0
    let answer = ''
    for (const char of array) {
      prev = current
      current = char
      // console.log('done')

      if (prev !== current && !!prev) {
        answer += prev
        answer += seqLen.toString()
        seqLen = 1
        // console.log('add')
      } else if (prev === current) {
        seqLen += 1
        // console.log('next')
      }
    }
    answer += current
    // console.log('update')
    answer += seqLen.toString()
    const encodedMessage = answer

    return encodedMessage
  }

  decode() {
    const txt = this.encodedMessage
    const array = txt.split('')
    let answer = ''
    let word = ''
    let num = null

    for (let i = 0; i < array.length; i++) {
      // console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);
      word = array[i]
      num = Number(array[++i])
      // console.log(word)
      // console.log(num)
      answer += word.repeat(num)
      // console.log(answer)
    }
    const decodedMessage = answer

    return decodedMessage
  }
}

const c = new Crypto('message example')
// c.info()

const sc = new SampleCrypto('message example')
// sc.info()

const ssc = new HogeCrypto('message example')
ssc.info()

// const txt = this.encodedMessage
