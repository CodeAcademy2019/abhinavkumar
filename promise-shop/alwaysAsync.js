

function alwaysAsync(){  
    
    let a = [];
    let constructPromise = (fulfill,reject) => {
        fulfill('PROMISE VALUE');
    };

    let promise = new Promise(constructPromise);

    promise.then(fulfilled => {

        a.push(fulfilled);

        console.log(fulfilled);
        //console.log(a);
    },null);

    a.push('MAIN PROGRAM ');
    console.log('MAIN PROGRAM');

    return a;
}



module.exports = alwaysAsync();
