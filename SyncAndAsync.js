// // Asynchronous Code in JavaScript.
// console.log("first");
// setTimeout(() => {
//     console.log("second")
// }, 1000);
// console.log("third");


// Asynchronous Code in JavaScript.
function abc()
{
   console.log('abc');
}
function xyz()
{
   abc()
   console.log('xyz');
}
xyz();