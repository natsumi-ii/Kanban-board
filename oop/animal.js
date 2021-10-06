class Animal {
  // TODO: 種族、名前、体重、性別
  constructor(species, name, weight, gender) {
    this.species = species
    this.name = name
    this.weight = weight
    this.gender = gender
  }
  // TODO: 吠える（bark）というメソッド。console.logで値を出力できれば良し
  inrto() {
    console.log(
      `種族:${this.species},名前:${this.name},体重:${this.weight}kg,性別:${this.gender}`,
    )
  }
  // TODO: 食べる（eat）というメソッド。console.logで値を出力できれば良し
  eat() {
    console.log(`${species}はよく食べる`)
  }
}

// animalを継承する
class Dog extends Animal {
  constructor(species, name, weight, gender, breed) {
    super(species, name, weight, gender)
    this.breed = breed
  }
  // TODO: 吠える（bark）というメソッド。犬っぽいメッセージ
  bark() {
    console.log(`${this.name} is barking!`)
  }
  // TODO: 食べる（eat）というメソッド。犬っぽいメッセージ
  eat() {
    console.log('犬はよく食べるワン')
  }
}

// animalを継承する
class Cat extends Animal {
  constructor(name, weight, gender, breed) {
    super(name, weight, gender)
    this.breed = breed
  }
  // TODO: 吠える（bark）というメソッド。犬っぽいメッセージ
  sleep() {
    console.log(`${this.name} is sleeping.`)
  }
  // TODO: 食べる（eat）というメソッド。犬っぽいメッセージ
  eat() {
    console.log('猫もよく食べるニャン')
  }
}

let tora = new Animal('tiger', 'Tora', 10, 'male')
let momo = new Dog('dog', 'Momo', 4, 'female', 'yorkshire')
let suica = new Cat('Suica', 3, 'female', 'mix')
tora.inrto()
tora.eat()
momo.bark()
momo.eat()
suica.sleep()
suica.eat()
