class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eat() {}
  walk() {}
}

class PetShop {
  animals: Array<Animal>; // depends from class Animal

  constructor(animals: Array<Animal>) {
    this.animals = animals;
  }

  print(animals: Array<Animal>) {
    console.log(animals);
  }
}

export function runDependencyInversion() {
  const dog = new Animal("Rogerio", 10);
  const petShop = new PetShop([dog]);
  petShop.print(petShop.animals);
}
