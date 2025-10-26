function addTogether(arg1, arg2) {
  // Vérifie que le premier argument est un nombre
  if (typeof arg1 !== "number") return undefined;

  // Si le second argument est fourni
  if (arguments.length === 2) {
    if (typeof arg2 !== "number") return undefined;
    return arg1 + arg2;
  }

  // Si un seul argument, on retourne une fonction pour le currying
  return function(arg2) {
    if (typeof arg2 !== "number") return undefined;
    return arg1 + arg2;
  };
}

// Tests
console.log(addTogether(2, 3));        // 5
console.log(addTogether(2)(3));        // 5
console.log(addTogether(2, "3"));      // undefined
console.log(addTogether("2", 3));      // undefined
console.log(addTogether(5, undefined));// undefined
