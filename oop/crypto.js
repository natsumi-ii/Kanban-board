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
    const decodedMessage = this.encodedMessage.split('').map(char => char === '-' ? 'm' : char).join('')
    // console.log('data is', decodedMessage)
    return decodedMessage
  }

  encode() {
    // encodeされた値を返す
    const encodedMessage = this.rawData.split('').map(char => char === 'm' ? '-' : char).join('')
    // console.log('data is', encodedMessage)

    return encodedMessage
  }
}

class HogeCrypto extends Crypto {

  // データはアルファベットのみ
  // abc -> a1b1c1 に変換する
  // aabbe -> a2b2e に変換する
  // kdkd -> k1d1k1d1に変換する
  decode() {}

  encode() {}
}


const c = new Crypto('message example')
c.info()

const sc = new SampleCrypto('message example')
sc.info()