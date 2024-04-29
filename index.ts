import { runDependencyInversion } from "./src/dependency-inversion";
import { runLiskovSubstitution } from "./src/liskov-substitution";
import { runOpenClosed } from "./src/open-closed";

console.clear();

const callFunction = () => {
  runDependencyInversion(); // SOLID - Dependency Inversion Principle
  runLiskovSubstitution(); // SOLID - Liskov Substitution Principle
  runOpenClosed(); // SOLID - Open Closed Principle
};

callFunction();
