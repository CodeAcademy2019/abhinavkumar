const rejected = require('./rejectOrNot');



test('Test to check if I FIRED printed!', () => {
    //expect.assertions(1);

    return expect(rejected).resolves.toEqual('I FIRED');
});

test('Test to check I DID NOT FIRE not printed', () => {
    //expect.assertions(1);

    return expect(rejected).resolves.not.toEqual('I DID NOT FIRE');
});
