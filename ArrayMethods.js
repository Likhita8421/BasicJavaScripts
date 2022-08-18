//1.Splice------------------------------------------------
   
   //...remove array elements with splice()...
   // let months = ["January", "February", "Monday", "Tuesday"];
   // let days = months.splice(2);
   // console.log(days);        //output:  ["Monday", "Tuesday"]


   //...remove only one element...
    // let months = ["January", "February", "Monday", "Tuesday"];
    // let days = months.splice(2, 1);
    // console.log(days);                         //output:["Monday"]
    // console.log(months);                       //output: ["January", "February", "Tuesday"]



    //...remove and add array elements with splice()...
    //  let months = ["January", "February", "Monday", "Tuesday"];
    //  let days = months.splice(2, 2, "March", "April");
    //  console.log(days);                          //output: ["Monday", "Tuesday"]
    // console.log(months);                         //output: ["January", "February", "March", "April"]
        



//2. Reduce-----------------------------------------------------    
    //{reduce() can be used to transform an input array into any output you desire, all while preserving the original array.}
     //syntax:
     //const newValue = arr.reduce(function(accumulator, currentValue, index, array) {
     // Do stuff with accumulator and currentValue (index, array, and initialValue are optional)}, i


    //ES5:
    // var numbers = [1, 2, 3]; 
    // var sum = numbers.reduce(function(total, current) {
    // return total + current;
    // }, 0);
    // console.log(numbers);                 // output: [1, 2, 3]
    // console.log(sum);                     //output:  6


   
    //ES6:      
    // const numbers = [1, 2, 3];
    // const sum = numbers.reduce((total, current) => {
    // return total + current;
    // }, 0);
    // const sumOneLiner = numbers.reduce((total, current) => total + current, 0);    
    // console.log(numbers);                                  //output: [1, 2, 3]
    // console.log(sum);                                      //output: 6
    // console.log(sumOneLiner);                              //output: 6 



//3.Array with map()-------------------------------------------------------------------

    // //...append the "man" suffix to each and every one of them:...
    // let firstNames = ["super", "spider", "ant", "iron"]
    // let lastName = "man";
    // let fullNames = firstNames.map(firstName => firstName + lastName);
    // console.log(fullNames);                                   //output: ["superman", "spiderman", "antman", "ironman"]



    //...use the "woman" suffix for the first item on our array:...
    // let firstNames = ["wonder", "spider", "ant", "iron"]    
    // let male = "man";
    // let female = "woman";
    // let fullNames = firstNames.map(function(firstName, index) {
    // return (index == 0) ? firstName + female : firstName + male;
    // });
    // console.log(fullNames);                                //output: ["wonderwoman", "spiderman", "antman", "ironman"]


    
