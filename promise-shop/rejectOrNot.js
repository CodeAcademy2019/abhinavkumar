let rejectOrNot = () =>  { 
    let promise = new Promise(function(fulfill,reject){
        fulfill('I FIRED');
        reject(new Error('I DID NOT FIRE'));
    })

    let onRejected = (error) => console.log(error.message);

    promise.then(console.log,onRejected);
    return promise;
}
rejectOrNot();
module.exports = rejectOrNot;