'use strict';
function fulfillPromise(){
    let promise = new Promise(function ( fulfill, reject ){
        setTimeout( () => fulfill('FULFILLED!') , 300 );
    });
    promise.then(console.log,null);

    return promise;
}
module.exports = fulfillPromise;