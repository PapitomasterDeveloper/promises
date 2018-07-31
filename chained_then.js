//With this syntax, we make the promise constructor reusable by making it a function
let cleanTable = function(){
	return new Promise(function(resolve,reject){
		resolve(`Cleaned the table`);
	});
};

//When using a promise, you can catch the message from the response or reject callback
let removeGarbage = function(message){
	return new Promise(function(resolve,reject){
		resolve(`${message}
	  Garbage removed`);
	});
};

let personalAvailable = function(message){
	return new Promise(function(resolve,reject){
		resolve(`${message}
	  The personal is ready`);
	});
};

//When using the promise, you can catch the message from the resolve or reject callback
cleanTable().then(function(fromResolve){
	return removeGarbage(fromResolve);
}).then(function(fromResolve){
	return personalAvailable(fromResolve);
}).then(function(fromResolve){
	console.log(`Finished: ${fromResolve}`);
})