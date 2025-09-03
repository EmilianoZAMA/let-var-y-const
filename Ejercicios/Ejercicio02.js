// Ejercicio 2: Inmutabilidad de `const`

// 1. Declara la constante `PI`
const PI = 3.14

// 2. Intenta reasignar `PI` (esto debería causar un error)
// const PI = 3.141592

// 3. Declara un objeto `circle`
const Circle = {
  radius:10
};

// 4. Modifica la propiedad `radius` de `circle`
Circle.radius = 20;

// ¿Qué valor esperas para `radius`? 20
console.log(Circle);