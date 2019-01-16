'use strict';

function P(){
    let promise = new Promise(function ( fulfill, reject ){
        setTimeout( () => fulfill('FULFILLED!') , 300 );
    });
    promise.then(
        onFulfilled => console.log(onFulfilled)
    )
    return promise;
}
module.exports = P();