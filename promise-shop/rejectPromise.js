'use strict';

 function Reject(){   

    let promise = new Promise(function (fulfill, reject) {
        setTimeout( () => reject (new Error('REJECTED!')) ,300);
    });

    function onReject (error) {
    console.log(error.message);
    }

    promise.then(
        null,
        onRejected => onReject(onRejected)
    );

    return promise;
}

Reject();

module.exports = Reject;
