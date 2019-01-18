// let str = '';

// function valuesAndPromise(){
//     let attachTitle = (firstArgument) => 'DR. '+firstArgument;

//     let promise = Promise.resolve('MANHATTAN');


//     let storeString = (s) => {
//         str +=s;
//         console.log(str);
//     }

//     promise.then(attachTitle).then(storeString);
// }

// valuesAndPromise();
// module.exports = str;


//WHY DOES THE ABOVE NOT WORK BUT THEY BELOW CODE WORKS???ARRAYY???????

let str = [];

let attachTitle = (firstArgument) => 'DR. '+firstArgument;

let promise = Promise.resolve('MANHATTAN');


let storeString = (s) => {
    str.push(s);
    console.log(str[0]);
}

promise.then(attachTitle).then(storeString);


module.exports = {promise,str};