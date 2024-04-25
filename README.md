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

O código a seguir viola o princípio de inversão de dependência. O **DIP** afirma que os módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Além disso, abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
No caso, o código a seguir usa o tipo "Animal" como tipagem principal, quando o correto seria ter uma interface.

```
class Animal {
	name: string;
	age: number;
	constructor(name: string, age: number) { this.name = name; this.age = age; }

	eat() {}
	walk() {}
}

class PetShop {
	animals: Array<Animal>; // depende diretamente da classe Animal
	constructor(animals: Array<Animal>) { this.animals = animals; }

	print(animals: Array<Animal>) {
		console.log(animals);
	}
}

function main() {
	const dog = new Animal("Rogerio", 10);
	const petShop = new PetShop([dog]);
	petShop.print(petShop.animals);
}
```
