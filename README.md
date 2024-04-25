# solid-principle

## Essa é a branch "errada", aqui os princípios são violados.

### Como rodar o projeto:

_Para rodar o projeto, é necessário pacote [NodeJS 20+](https://nodejs.org/en/download/)_

- Instale os pacotes Javascript usando `yarn` ou `npm`.

```

yarn install

```

- Execute o projeto

```

yarn start

```

## D do SOLID - Dependency Inversion Principle

> File: src/dependency-inversion.ts

O código a seguir resolve o problema de inversão de dependência da branch [how-not-to-do](https://github.com/cracogabriel/solid-principle/tree/how-not-to-do?tab=readme-ov-file#d-do-solid---dependency-inversion-principle). A classe PetShop não depende mais exclusivamente da classe Animal, apenas de uma classe que implemente a interface IAnimal. Agora a classe Animal implementa da interface IAnimal.

```
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
```
