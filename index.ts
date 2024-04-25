import { runDependencyInversion } from "./src/dependency-inversion";

console.clear();

const callFunction = () => {
  runDependencyInversion(); // SOLID - Dependency Inversion Principle VIOLATED
};

callFunction();
