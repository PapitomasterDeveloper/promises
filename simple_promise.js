//1-We create a promise constructor with two arguments, resolve and reject
//A Promise is an object that eventually it will have a completio or a failure in an asynchronous fashion with a resulting value
//A promise is one of these state: pending, fullfilled and rejected
let simplePromise = new Promise(function(resolve, reject){
	let isThisAExample = true;

	if(isThisAExample){
		resolve('This works and it will be resolved, with a fullfilled state');
	}else{
		reject('This will throw an error and it will be rejected, with a rejected state');
	}
});

//2-Now that our promise is created, we can use it with the then() function
//Needs two arguments, a callback for success and other for failure
simplePromise.then(function(result){
	console.log(`Check out what contains the result callback 
${result}`);
}, function(err){
	console.log(`Check out what contains the error callback 
${err}`);
});


