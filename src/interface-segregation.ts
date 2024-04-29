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
