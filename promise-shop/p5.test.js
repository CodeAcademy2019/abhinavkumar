const Async = require('./alwaysAsync');

let stringObtained = ''+Async[0]+Async[1];

test('Test to check if MAIN PROGRAM is printed before PROMISE VALUE',() => {
    //let temp = Async();

    return expect(stringObtained).toEqual('MAIN PROGRAM PROMISE VALUE');
});

//not working