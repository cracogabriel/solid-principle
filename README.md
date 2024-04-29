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

## I do SOLID - Interface Segregation Principle

> File: src/interface-segregation.ts

O código a seguir viola o princípio de segregação de interface. O **ISP** afirma que nenhum cliente deve ser forçado a depender de interfaces que não usa.
No caso do código abaixo, a classe Robot é forçada a implementar o método eat(), que não é relevante para um robô. Isso viola o Princípio da Segregação da Interface.

```
interface IWorker {
  work(): void;
  eat(): void;
}

class Person implements IWorker {
  work(): void {}

  eat(): void {}
}

class Robot implements IWorker {
  work(): void {}

  eat(): void {} // Robots do not eat, but are forced to implement this method.
}
```

## D do SOLID - Dependency Inversion Principle

> File: src/dependency-inversion.ts

O código a seguir viola o princípio de inversão de dependência. O **DIP** afirma que os módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Além disso, abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

No caso, o código a seguir usa o tipo Animal como tipagem principal, quando o correto seria ter uma interface.

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
