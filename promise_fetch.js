import fetch from 'node-fetch';

let fetching = new Promise(function(resolve,reject) {
	let url = fetch(`https://jsonplaceholder.typicode.com/users`);
	if(url){
		url.json();
		JSONstringify(url);
		console.log(`Fetched`);
		resolve(url);
	}else{
		console.log(`An error has ocurred`);
		reject(`Rejected`);
	}
});

fetching.then(function(fromResolve){
	console.log(fromResolve);
}).catch(function(fromReject){
	console.log(fromReject);
});
