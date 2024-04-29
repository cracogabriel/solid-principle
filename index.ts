import { runDependencyInversion } from "./src/dependency-inversion";
import { runLiskovSubstitution } from "./src/liskov-substitution";

console.clear();

const callFunction = () => {
  runDependencyInversion(); // SOLID - Dependency Inversion Principle VIOLATED
  runLiskovSubstitution(); // SOLID - Liskov Substitution Principle VIOLATED
};

callFunction();
