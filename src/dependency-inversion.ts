interface IAnimal {
  name: string;
  age: number;
  eat(): void;
  walk(): void;
}

class Animal implements IAnimal {
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
  animals: Array<IAnimal>;

  constructor(animals: Array<IAnimal>) {
    this.animals = animals;
  }

  print() {
    console.log(this.animals);
  }
}

export function runDependencyInversion() {
  const dog: IAnimal = new Animal("Rogerio", 10);
  const petShop = new PetShop([dog]);
  petShop.print();
}
