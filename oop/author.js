class Publisher {
  constructor() {
    // TODO: authors, nameをconstructorの引数にして、propertyに代入する
  }
}

class Author {
  constructor() {
    // TODO: name, books をconstructorの引数にして、propertyに代入する
    // this.books
  }
}

class Book {
  constructor() {
    // TODO: title, dateをconstructorの引数にして、propertyに代入する
    // this.title = 'hogehoge'
  }
}

// TODO: publisher, author, bookのデータを複数作り、表示させる。このとき、各データが関連を持つように設定する
// 出力例
// const pub = new Publisher()
// pub.authors -> [{name: 夏目漱石}, {name: 西尾維新}]
// pub.authors[1].books -> [{title: '化物語1'}, {title: '化物語2'}]
// pub.authors[1].books[0] -> {title: '化物語1'}
