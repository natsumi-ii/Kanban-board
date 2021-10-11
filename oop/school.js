class Student {
  // TODO: 名前、大学名、性別、学年
  constructor(name, university, gender, grade) {
    this.name = name
    this.university = university
    this.gender = gender
    this.grade = grade
  }

  // TODO: 勉強するというメソッド。console.logで値を出力できれば良し
  study() {
    console.log('Study')
  }

  // TODO: 寝る（eat）というメソッド。睡眠時間を出力する
  sleep() {
    console.log('I sleep 8 hours every day')
  }
}

// Studentを継承する
class LiberalArtsStudent extends Student {
  constructor(name, university, gender, grade) {
    super(name, university, gender, grade)
  }

  // TODO: 勉強するというメソッド。console.logで値を出力できれば良し
  study() {
    console.log('Study liberal arts is easy')
  }

  // TODO: 寝る（eat）というメソッド。睡眠時間を出力する
  sleep() {
    console.log('I sleep 9 hours every day')
  }
  nnnn
}

// Studentを継承する
class MedicalStudent extends Student {
  constructor(name, university, gender, grade, age) {
    super(name, university, gender, grade)

    this.age = age
  }

  // TODO: 勉強するというメソッド。console.logで値を出力できれば良し
  study() {
    console.log('Study medical is hard')
  }

  // TODO: 寝る（eat）というメソッド。睡眠時間を出力する
  sleep() {
    console.log('I sleep 6 hours every day')
  }
}

let snape = new Student('Snape', 'Tokyo', 'male', 'third')
let june = new LiberalArtsStudent('June', 'Yamanashi', 'female', 'second')
let natsu = new MedicalStudent('natsu', 'TWMU', 'female', 'first', '19')

snape.study()
snape.sleep()
june.study()
june.sleep()
natsu.study()
natsu.sleep()
