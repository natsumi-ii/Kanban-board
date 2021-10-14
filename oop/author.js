class Publisher {
  constructor() {
    // TODO: authors, nameをconstructorの引数にして、propertyに代入する
    this.authors = this.authors
    this.name = new Author()
    console.log('Author is', this.name)
  }
}

class Author {
  constructor(name, books) {
    // TODO: name, books をconstructorの引数にして、propertyに代入する
    this.name = name
    this.books = books
    console.log('name is', this.name)
    console.log('books is', this.books)
  }
}

class Book {
  constructor(data) {
    // TODO: title, dateをconstructorの引数にして、propertyに代入する
    // this.title = 'hogehoge'
    // const obj = {}
    // this.books = data.forEach(data => {
    //   obj[title] = data
    // })
    this.title = data
    console.log('title is', this.title)
  }
}
a
let a = new Book('book1')

// TODO: publisher, author, bookのデータを複数作り、表示させる。このとき、各データが関連を持つように設定する
// 出力例
// const pub = new Publisher()
// pub.authors -> [{name: 夏目漱石}, {name: 西尾維新}]
// pub.authors[1].books -> [{title: '化物語1'}, {title: '化物語2'}]
// pub.authors[1].books[0] -> {title: '化物語1'}
