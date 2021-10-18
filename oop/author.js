class Publisher {
  constructor(authors, name) {
    this.authors = authors
    this.name = name

    for (const author of authors) {
      author.publisher = this
    }
  }
}

class Author {
  constructor(name, books) {
    this.name = name
    this.books = books
    this.publisher = null

    for (const book of books) {
      book.author = this
    }
  }
}

class Book {
  constructor(title) {
    this.title = title
    this.author = null
  }
}

let book1 = new Book('book1')
let book2 = new Book('book2')
let book3 = new Book('book3')
let book4 = new Book('book4')

let author1 = new Author('西尾維新', [book1, book2])
let author2 = new Author('夏目漱石', [book3, book4])
let publisher = new Publisher([author1, author2], '講談社')

console.log(book1.author.name)
console.log(book3)
console.log('author1 is', author1)
console.log(author1.publisher.name)
