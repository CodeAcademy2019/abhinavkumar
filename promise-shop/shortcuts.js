let promise1 = Promise.resolve('Promise fulfilled!!!');
let promise = Promise.reject(new Error('REJECTED!!!!'));

promise.catch( function (err){
    console.log(err.message);
});

module.exports = promise;