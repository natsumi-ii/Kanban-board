class CustomHTML {
  // tag: 'div', 'p', 'li'とか
  // ['div', 'p', ['div', 'div']]
  // a = {tag: 'div', innerText: 'hoge'}
  // [a, a, [a, a]]
  constructor(tags) {
    // TODO: initializeする
    this.tags = tags
  }

  generate() {
    // 課題
    // 期待する返り値
    // a = { tag: 'div', innerText: 'hoge' }
    // [a, a, [a, a]] -> [<div>hoge</div>, <p>hoge</p>, [<div>hoge</div>, <div>hoge</div>]]
    // に変換する
    const gene = `<${this.tag}></${this.tag}>`
    console.log(gene)
  }
}

let div = new CustomHTML('div')
div.generate()
