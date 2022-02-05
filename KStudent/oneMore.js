class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walking");
  }
}

const aleem = new Person("Aleem");
const vishnu = new Person("Vishnu");

aleem.walk();
vishnu.walk();
