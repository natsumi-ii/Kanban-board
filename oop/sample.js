class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last,
    }
    this.age = age
    this.gender = gender
    this.interests = interests
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`)
  }

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`)
  }
}

class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests)

    // 科目と学年は教師によって決まっている
    this.subject = subject
    this.grade = grade
  }

  hoge() {
    console.log(`hogehogehoge`)
  }
}

// let harry = new Person('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
// let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
// snape.hoge(); // Hi! I'm Severus.
// snape.farewell(); // Severus has left the building. Bye for now.
// snape.age // 58
// snape.subject; // Dark arts
