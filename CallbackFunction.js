// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('this is callback function');
}

// passing function as an argument
greet('Peter', callMe);