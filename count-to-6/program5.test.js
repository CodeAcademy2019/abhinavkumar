const prg5 = require('./program5');

test ('test1 program 5 ',() => {
    userArray = [1,'jdoe','jdoe@example.com','John','Doe'];
    expect(prg5(userArray)).toEqual({ username: 'jdoe', email: 'jdoe@example.com'});
})


test ('test2 program 5 ',() => {
    userArray = [2,'abhinav','abhinav@example.com','Abhinav','Kumar'];
    expect(prg5(userArray)).toEqual({ username: 'abhinav', email: 'abhinav@example.com'});
})

test ('test3 program 5 ',() => {
    userArray = [3,'bruce','bruce@example.com','Bruce','Wayne'];
    expect(prg5(userArray)).toEqual({ username: 'bruce', email: 'bruce@example.com'});
})