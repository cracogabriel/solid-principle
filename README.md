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

## O do SOLID - Open Closed Principle

> File: src/open-closed.ts

No código abaixo, se quisermos adicionar um novo tipo de pagamento (como Pix), teríamos que modificar a classe PaymentProcessor. Isso viola o **OCP**.

```
class PaymentProcessor {
  process(paymentType: string, amount: number): void {
    // what if I want to pay with Pix? how do I implement that without changing this code?
    if (paymentType === "creditCard") {
      console.log(`Processing credit card payment of $${amount}`);
    } else if (paymentType === "paypal") {
      console.log(`Processing PayPal payment of $${amount}`);
    }
  }
}
```

## L do SOLID - Liskov Substitution Principle

> File: src/liskov-substitution.ts

Neste exemplo, Square é uma subclasse de Rectangle e altera o comportamento dos métodos setWidth e setHeight. Isso viola o **LSP** porque se uma função espera um Rectangle e você atribui a ela um Square, ela pode não se comportar corretamente, pois a funcionalidade não se adequa aos dois casos.

```
class Rectangle {
  width: number;
  height: number;

  constructor() {
    this.width = 0;
    this.height = 0;
  }

  setWidth(width: number) {
    this.width = width;
  }

  setHeight(height: number) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width: number) {
    this.width = width;
    this.height = width; // Violates LSP
  }

  setHeight(height: number) {
    this.width = height; // Violates LSP
    this.height = height;
  }
}

export const runLiskovSubstitution = () => {
  let rectangle: Rectangle = new Square();
  rectangle.setWidth(5);
  rectangle.setHeight(4);
  console.log(rectangle.getArea()); // Outputs 25, but we expected 20
};
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
