let promise = new Promise(function(resolve,reject){

	let works = false;
	if(works){
		resolve(`Great`);
	}
	else{
		reject(`Damn`);
	}
});

promise.then(function(fromResolve){
	console.log(fromResolve);
	console.log(fromResolve.length);
}).catch(function(fromReject){
	console.log(fromReject);
        console.log(fromReject.length);
})
