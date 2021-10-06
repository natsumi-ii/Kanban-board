class Student {
  // TODO: 名前、大学名、性別、学年
  constructor(name, university, gender, grade) {
    this.name = name;
    this.university = university;
    this.gender = gender;
    this.grade = grade;
  }

  // TODO: 勉強するというメソッド。console.logで値を出力できれば良し
 study() {
   console.log(`Hello! I'm ${this.grade}year student. I study at ${this.university}`)
 }

  // TODO: 寝る（eat）というメソッド。睡眠時間を出力する
  sleep(time) {
    console.log(`I sleep ${time} hours every day`);
    // console.log('I slept ' + time + ' hours last night')
  }
}

// Studentを継承する
class LiberalArtsStudent extends Student {
  constructor(name, university, gender, grade) {
    super(name, university, gender, grade);
  }

  // TODO: 勉強するというメソッド。console.logで値を出力できれば良し
  liberalarts () {
    console.log(`I study liberalarts at ${this.university}`)
  };

  // TODO: 寝る（eat）というメソッド。睡眠時間を出力する
  eat(food) {
    console.log(`I want to eat ${food} for lunch!`)
  };
}

// Studentを継承する
class MedicalStudent　extends Student {
  constructor(name, university, gender, grade, age) {
    super(name, university, gender, grade);

    this.age = age;
  }

  // TODO: 勉強するというメソッド。console.logで値を出力できれば良し
  medical() {
    console.log(`I study medical term today.`)
  }

  // TODO: 寝る（eat）というメソッド。睡眠時間を出力する
  greeting() {
    console.log(`I'm ${this.age} years old.`)
  }
}

let snape = new Student('Snape', 'Tokyo', 'male', 'third');
let june = new LiberalArtsStudent('June', 'Yamanashi', 'female', 'second');
let natsu = new MedicalStudent('natsu', 'TWMU', 'female', 'first', '19');

snape.study();
snape.sleep(7);
june.liberalarts();
june.eat(sushi);
natsu.medical();
natsu.greeting();
