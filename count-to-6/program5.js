// let userArray = process.argv.slice(2);
// let data = {};

// [,data.username, data.email] = userArray;

// console.log(data);

var prg5 = (userArray) => {
    let data = {};
    [,data.username, data.email] = userArray;
    return data;
}

//console.log(prg5(process.argv.slice(2)));

module.exports = prg5;