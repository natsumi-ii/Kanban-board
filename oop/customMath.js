class CustomMath {
  constructor() {}

  static random() {
    return  String(new Date().getTime()).slice(-8)
    
  }
}

const cm = new CustomMath()
cm.random()
CustomMath.random()
