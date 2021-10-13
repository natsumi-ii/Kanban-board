class CustomHTML {
  // tag: 'div', 'p', 'li'とか
  // a = {tag: 'div', innerText: 'hoge'}
  // tags = [a, a, [a, a]]
  // const foo = new CustomHTML(tags)
  constructor(tags) {
    // TODO: initializeする
    this.tags = tags
    // this.tag = tags.tag
    // this.text = tags.innerText
  }

  generate() {
    const tags = this.tags

    const func = (ele) => {
      let htmlElements = []
      if (Array.isArray(ele)) {
        for (const childEle of ele) {
          const result = func(childEle)
          htmlElements.push(result)
        }
      } else {
        const {tag, innerText} = ele
        htmlElements.push(`<${tag}>${innerText}</${tag}>`)
      }
      return htmlElements
    }

    const htmlResult = func(tags)
    console.log('htmlResult is', htmlResult)
    return htmlResult
    // const ele = this.tag
    // const text = this.text
    // console.log(ele)
    // console.log(text)
    // // 課題
    // // 期待する返り値
    // // a = { tag: 'div', innerText: 'hoge' }
    // // [a, a, [a, a]] -> [<div>hoge</div>, <p>hoge</p>, [<div>hoge</div>, <div>hoge</div>]]
    // // に変換する
    // const gene = `<${this.tag}>${this.text}</${this.tag}>`
    // console.log(gene)
  }
}

let div = new CustomHTML('div')
div.generate()

test = tags => {
  const tagEle = tags.tag
  const text = tags.innerText

  console.log(`<${tagEle}>${text}</${tagEle}>`)
}


a = { tag: 'div', innerText: 'hoge' }
tags = [a, a, [a, a]]
const foo = new CustomHTML(tags)
foo.generate()
