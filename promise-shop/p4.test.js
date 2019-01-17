const reject = require('./rejectOrNot');

const prm = reject();


test('Test to check if I FIRED printed!', () => {
    expect.assertions(1);

    return expect(prm).resolves.toEqual('I FIRED');
});

test('Test to check I DID NOT FIRE not printed', () => {
    expect.assertions(1);

    return expect(prm).resolves.not.toEqual('I DID NOT FIRE');
});
