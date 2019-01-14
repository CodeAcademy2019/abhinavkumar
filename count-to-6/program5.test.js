const prg5 = require('./program5');

test ('Test to check if deconstructing was done correctly. ',() => {
    userArray = [1,'jdoe','jdoe@example.com','John','Doe'];
    expect(prg5(userArray)).toEqual({ username: 'jdoe', email: 'jdoe@example.com'});
})

test ('Test to check if deconstructing was done correctly and CASE was maintained ',() => {
    userArray = [1,'jdoe','jdoe@example.com','John','Doe'];
    expect(prg5(userArray)).not.toEqual({ username: 'JDOE', email: 'JDOE@EXAMPLE.COM'});
})

test ('Testcase 2  ',() => {
    userArray = [2,'abhinav','abhinav@example.com','Abhinav','Kumar'];
    expect(prg5(userArray)).toEqual({ username: 'abhinav', email: 'abhinav@example.com'});
})

test ('test3 ',() => {
    userArray = [3,'bruce','bruce@example.com','Bruce','Wayne'];
    expect(prg5(userArray)).toEqual({ username: 'bruce', email: 'bruce@example.com'});
})