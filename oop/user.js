class User {
  constructor(name, id, age, gender) {
    this.name = name;
    this.id = id;
    this.age = age;
    this.gender = gender;
  }

  static create() {
    // 課題
    // - idはランダムな数字（複数のuserを生成しても、idがかぶらないようにしたい）をstringに変換（math.randomは使ってもok）
    // - 名前もランダム（ただし重複してもok）
    // 後は適当に
    const user = new User('some name', '09208384', 10, 'male')
    console.log('create: ', JSON.stringify(user))
    return user
  }

  static createList(users) {
    // 課題
    // 期待する返り値
    // a = {
    //   'id-1(userのidが入る)': {user-xのデータ},
    //   'id-2': {user-xのデータ},
    //   'id-3': {user-xのデータ},
    //   'id-4': {user-xのデータ},
    //   'id-5': {user-xのデータ},
    //   ...
    // }
  }
}


const user = User.create()

// const userList = User.createList(users)
// console.log(userList)




