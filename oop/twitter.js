class User {
  constructor() {
    // TODO: name, tweets, favorites
    this.tweets = []
  }

  tweet(content) {
    // 1. Tweetクラスのインスタンスが作成される
    // 2. this.tweetsにpushされる
    const tweet = new Tweet(content, this)
    this.tweets.push(tweet)
  }

  fav(tweet) {
    // 1. Favoriteクラスのインスタンスが作成される
    // 2. this.favoritesにpushされる
  }
}

class Tweet {
  constructor() {
    // TODO: content, user
  }
}

class Favorite {
  constructor() {
    // TODO: tweet, user
  }
}

const user = new User()
user.tweet('hello world!')

console.log('user is', user)
console.log('tweets are', user.tweets)