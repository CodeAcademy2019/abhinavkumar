function rejectOrNot(){ 

    let constructPromise = (fulfill,reject) => {
        fulfill('I FIRED');
        reject(new Error('I DID NOT FIRE'));
    };

    let onRejected = (error) => console.log(error.message);

    let promise = new Promise(constructPromise);
    promise.then(console.log,onRejected);
    return promise;
}

module.exports = rejectOrNot();
