//FOR TESTING

const first = () =>  Promise.resolve('SECRET KEY');

const second = (secretKey) =>  Promise.resolve('RECEIVED '+secretKey);

const promise1 = first();
const promise2 = promise1.then(second);
promise2.then(console.log);

module.exports = {promise1,promise2};


//FOR RUNNING

// const promise1 = first();

// const secretMsg = '';

// const promise2 = promise1.then((secret) => second(secret));
// promise2.then((msg) =>{
//     console.log(msg);
//     secretMsg = msg;
// });





