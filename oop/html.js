// class CustomHTML {
class SecondTest {
  // tag: 'div', 'p', 'li'とか
  // ['div', 'p', ['div', 'div']]
  // a = {tag: 'div', innerText: 'hoge'}
  // [a, a, [a, a]]
  constructor(tags) {
    // TODO: initializeする
    this.tags = tags
    this.tag = tags.tag
    this.text = tags.innerText
  }

  generate() {
    const ele = this.tag
    const text = this.text
    console.log(ele)
    console.log(text)
    // 課題
    // 期待する返り値
    // a = { tag: 'div', innerText: 'hoge' }
    // [a, a, [a, a]] -> [<div>hoge</div>, <p>hoge</p>, [<div>hoge</div>, <div>hoge</div>]]
    // に変換する
    const gene = `<${this.tag}>${this.text}</${this.tag}>`
    console.log(gene)
  }
}

let div = new CustomHTML('div')
div.generate()


test = (tags) => {
 const tagEle =  tags.tag;
 const text = tags.innerText;

 console.log(`<${tagEle}>${text}</${tagEle}>`)
}