//features of ES8

//1. Async/Await-----------------------------------
// function resolveAfter5Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 5000);
//     });
//   }
//   async function asyncCall() {
//     let abc = 5;
//     console.log('calling');
//     const result = await resolveAfter5Seconds();
//     const FinalResult =result + abc;
//     console.log("after resolved", FinalResult);
//   }
//   asyncCall();


//2 Object.keys()---------------------------
// var obj = { foo: "bar", baz: 42 };
// console.log(Object.keys(obj));



//3. Object.values()--------------------------
// var obj = { foo: "bar", baz: 42 };
// console.log(Object.values(obj));



// //4. Object.entries()--------------------------
//   const obj1 = {a: 5, b: 6, c: 3}
//   for(let [key,value] of Object.entries(obj1)){
//       console.log(`key: ${key} value:${value}`)
//   }



//5. String padding------------------------------
//String.padStart(targetLength,[padString])
//String.padEnd(targetLength,padString])
// console.log('0.0'.padStart(4,'*'))
// console.log('0.0'.padStart(20))
// console.log('0.0'.padEnd(4,'*')) 
// console.log('0.0'.padEnd(10,'*'))
 


//6.  Object.getOwnPropertyDescriptors()-----------
const obj = {
    foo: 123,
    get bar() { return 'abc' }
  };
console.log(Object.getOwnPropertyDescriptors(obj))


