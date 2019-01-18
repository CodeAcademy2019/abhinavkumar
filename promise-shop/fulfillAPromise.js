let constructPromise = function (fulfill,reject){
    setTimeout(() => fulfill('FULFILLED!'),300);
};

const promise = new Promise(constructPromise);

promise.then(console.log);

module.exports = promise;