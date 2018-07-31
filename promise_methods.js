let promise_all_one = function(){
	return new Promise((resolve,reject) => { resolve(`Success 1`); });
};

let promise_all_two = function(){
        return new Promise((resolve,reject) => { resolve(`Success 2`); });
};

let promise_all_three = function(){
        return new Promise((resolve,reject) => { resolve(`Success 3`); });
};

let promise_race_one = function(){
	return new Promise((resolve,reject) => { reject(`This is process 1`); });
};

let promise_race_two = function(){
        return new Promise((resolve,reject) => { reject(`This is process 2`); });
};

let promise_race_three = function(){
        return new Promise((resolve,reject) => { resolve(`This is process 3`); });
};

// The all() method works when all the promises resolve in success, if one fails, the entire promise will fail
Promise.all([promise_all_one, promise_all_two, promise_all_three]).then(
	result =>
		console.log(`Yey, the all() method has succeded!`),
		console.log(`To make it work, all the conditions are met, the results in this case, if one condition fails, it will return a failure response`),
	reject =>
		console.log(`c,: , the all() method has failed!`)
);

// The race() method works when at least one promise succeds or fails, either one them
Promise.race([promise_race_one, promise_race_two, promise_race_three]).then(
	result =>
		console.log(`The process that has succeded is: ${result}`)
);
