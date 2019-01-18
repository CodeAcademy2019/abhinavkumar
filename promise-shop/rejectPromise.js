 function Reject(){   

    let constructPromise =  (fulfill, reject)  => {
        setTimeout( () => reject (new Error('REJECTED!')) ,300);
    };

    function onReject (error) {
    console.log(error.message);
    }

    let promise = new Promise(constructPromise);

    promise.then(
        null,
        onRejected => onReject(onRejected)
    );

    return promise;
}


module.exports = Reject();
