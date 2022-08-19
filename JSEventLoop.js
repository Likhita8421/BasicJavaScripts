//Event loop: An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty.
console.log("Before delay");

function delayBySeconds(sec) {
let start = now = Date.now()
while(now-start < (sec*1000)) {
	now = Date.now();
}
}

delayBySeconds(5);

// Executes after delay of 5 seconds
console.log("After delay");
