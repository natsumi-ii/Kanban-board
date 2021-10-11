class CustomHTML {
  // tag: 'div', 'p', 'li'とか
  constructor(tag) {
    // TODO: initializeする
    this.tag = tag
  }

  generate() {
    // 課題
    // 期待する返り値
    // p -> <p></p>
    // div -> <div></div>
    // に変換する
    const gene = `<${this.tag}></${this.tag}>`
    console.log(gene)
  }
}

let div = new CustomHTML('div')
div.generate()
