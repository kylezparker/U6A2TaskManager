function Dog(name, age, color) {
  //attributes and methods
  this.name = name;
  this.age = age;
  this.color = color;

  this.bark = function () {
    console.log("i barking");
  };
}

class Cat {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  meow() {
    console.log("i meowing");
  }
}

function testObjects() {
  //object literal
  let dog1 = {
    name: "fido",
    age: 100,
    color: "green",
  };
  let dog2 = {
    name: "fido",
    age: 100,
  };

  console.log(dog1, dog2);

  //object constructor
  let dog3 = new Dog("doggy", 3, "unknown");
  let dog4 = new Dog("pluto", 3, "yellow");

  console.log(dog3.name);
  //no need to console log the function
  dog3.bark();

  //classes
  let cat1 = new Cat("jeffy", 4, "grey");
  let cat2 = new Cat("john", 4, "blue");
  console.log(cat1, cat2);
  console.log(cat1, cat2);
  //no need to console log the function
  cat1.meow();
}

function runTests() {
  console.log("---------TESTS");
  testObjects();
}
