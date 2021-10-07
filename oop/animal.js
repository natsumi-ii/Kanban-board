class Animal {
  // 種族、名前、体重、性別
  constructor(species, name, weight, gender) {
    this.species = species
    this.name = name
    this.weight = weight
    this.gender = gender
  }

  info() {
    console.log(
      `種族:${this.species},名前:${this.name},体重:${this.weight}kg,性別:${this.gender}`,
    )

    console.log('other info', JSON.stringify(this))
  }

  bark() {
    console.log(`bark bark`)
  }

  eat() {
    console.log(`${this.species}はよく食べる`)
  }
}

// animalを継承する
class Dog extends Animal {
  constructor(name, weight, gender, breed) {
    super('dog', name, weight, gender)

    this.breed = breed
  }

  bark() {
    console.log(`${this.name} bow bow`)
  }

  eat() {
    console.log('犬はよく食べるワン')
  }
}

// animalを継承する
class Cat extends Animal {
  constructor(name, weight, gender, breed) {
    super('cat', name, weight, gender)

    this.breed = breed
  }

  bark() {
    console.log(`${this.name} meow meow`)
  }

  eat() {
    console.log('猫もよく食べるニャン')
  }
}

let tora = new Animal('tiger', 'Tora', 10, 'male')
let momo = new Dog('Momo', 4, 'female', 'yorkshire')
let suica = new Cat('Suica', 3, 'female', 'mix')

momo.info()
suica.info()

tora.eat()
momo.bark()
momo.eat()
suica.eat()
