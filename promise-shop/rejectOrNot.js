let promise = new Promise(function(fulfill,reject){
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
})

let onRejected = (error) => console.log(error.message);

promise.then(
    fulfilled => console.log(fulfilled),
    rejected => onRejected(rejected)
);