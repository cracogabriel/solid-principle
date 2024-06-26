# solid-principle

## Essa é a branch "correta", aqui os princípios estão de acordo.

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

> File: src/liskov-substitution.ts

O código a seguir resolve o problema de Aberto-Fechado da branch [how-not-to-do](https://github.com/cracogabriel/solid-principle/tree/how-not-to-do?tab=readme-ov-file#o-do-solid---open-closed-principle). Na versão corrigida, foi definido uma interface de pagamento Payment com um método de processo. Ambas as classes CreditCardPayment e PayPalPayment implementam essa interface. A classe PaymentProcessor agora funciona com a interface Payment, portanto pode processar qualquer pagamento que implemente esta interface sem precisar ser modificado. Isso segue o Princípio Aberto-Fechado.

```
interface Payment {
  process(amount: number): void;
}

class CreditCardPayment implements Payment {
  process(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
  }
}

class PayPalPayment implements Payment {
  process(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

class PaymentProcessor {
  process(payment: Payment, amount: number): void {
    payment.process(amount);
  }
}

export const runOpenClosed = () => {
  const paymentProcessor = new PaymentProcessor();
  paymentProcessor.process(new CreditCardPayment(), 777); // credit card
  paymentProcessor.process(new PayPalPayment(), 63); // Paypal

  // if i want Pix payment, just need to implement the class PixPayment and pass as param to my paymentProcessor without changing the class PaymentProcessor
  // paymentProcessor.process(new PixPayment(), 63);
};
```

## L do SOLID - Liskov Substitution Principle

> File: src/liskov-substitution.ts

O código a seguir resolve o problema de substituição de Liskov da branch [how-not-to-do](https://github.com/cracogabriel/solid-principle/tree/how-not-to-do?tab=readme-ov-file#l-do-solid---liskov-substitution-principle). Na versão corrigida, Rectangle e Square implementam a interface Shape e não afetam o comportamento um do outro. Isto está de acordo com o Princípio da Substituição de Liskov. Podemos substituir um Rectangle por um Square ou vice-versa, e o programa ainda se comportará corretamente.

```
interface Shape {
  getArea(): number;
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square implements Shape {
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  getArea() {
    return this.side * this.side;
  }
}

export const runLiskovSubstitution = () => {
  let rectangle: Shape = new Rectangle(5, 4);
  console.log(rectangle.getArea());

  let square: Shape = new Square(5);
  console.log(square.getArea());
};
```

## I do SOLID - Interface Segregation Principle

> File: src/interface-segregation.ts

O código a seguir resolve o problema de segregação de interface da branch [how-not-to-do](https://github.com/cracogabriel/solid-principle/tree/how-not-to-do?tab=readme-ov-file#i-do-solid---interface-segregation-principle). A classe Robot não depende implementa mais o método eat(), pois a interface IWorker não "come" mais, agora criamos uma outra interface que implementa o método comer. A classe Pessoa implementa IWorker e IEater, podendo comer e trabalhar!

```
interface IWorker {
  work(): void;
}

interface IEater {
  eat(): void;
}

class Person implements IWorker, IEater {
  work(): void {}

  eat(): void {}
}

class Robot implements IWorker {
  work(): void {}
}
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
