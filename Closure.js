///2.Closure......
// function makeFunc() {
//     const name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
//   const myFunc = makeFunc();
//   myFunc();



//Closure scope chain

// Every closure has three scopes:........

// 1. Local scope (Own scope)
// 2. Enclosing scope (can be block, function, or module scope)
// 3. Global scope




// global scope
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }
// console.log(sum(1)(2)(3)(4)); // log 20




