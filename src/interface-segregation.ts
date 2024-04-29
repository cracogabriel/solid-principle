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

  eat(): void {} // .... Robots do not eat, but are forced to implement this method.
}
