let promiseToCleanTable = new Promise((resolve, reject) => {

	let isClean = false;

	if(isClean){
		resolve('Yeah men, right now');
	}
	else{
		reject('Hell no, is messy');
	}

})

//The fromResolve and fromReject arguments in the then, are the containing value from the topmost resolve and reject callback functions
//You can use fromResolve or result and fromReject and err
promiseToCleanTable.then(
	fromResolve => console.log(fromResolve),
	fromReject => console.error(fromReject)
);

// To administrate error, there are three ways:
// After a then() has succeded, the next possible state is the error, }, function(error){...}, like the code above with ES6 syntax
// With a catch is more logic than chaining another then(), .catch(function(...)
// Last, the then(), .then(undefined{'this is the resolved'}, function(error){...})
// The difference with then() and catch(), se llamara func1 o func2, con catch se hara llamara a ambas