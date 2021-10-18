class User {
  constructor(name) {
    this.name = name
    this.tweets = []
    this.favorites = []
  }

  tweet(content) {
    const tweet = new Tweet(content, this)
    this.tweets.push(tweet)
  }

  fav(tweet) {
    const fav = new Favorite(tweet, this)
    this.favorites.push(fav)
  }
}

class Tweet {
  constructor(content, user) {
    this.content = content
    this.user = user
  }
}

class Favorite {
  constructor(tweet, user) {
    this.tweet = tweet
    this.user = user
  }
}

const user = new User('Natsu')
user.tweet('hello world!')
user.tweet('Good morning!!')
user.fav(user.tweets[0])

console.log('user is', user)
console.log('tweets are', user.tweets)
console.log('favorites are', user.favorites)
