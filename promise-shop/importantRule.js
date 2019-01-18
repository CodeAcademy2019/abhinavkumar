var ooo=[];
const alwaysThrows= () => {
    throw new Error('OH NOES');
}
const iterate= (arg) => {
    ooo.push(arg);
    console.log(arg);
    return arg+1;
}
const promise= Promise.resolve(iterate(1))
                    .then(iterate)
                    .then(iterate)
                    .then(iterate)
                    .then(iterate)
                    .then(alwaysThrows)
                    .then(iterate)
                    .then(iterate)
                    .then(iterate)
                    .then(iterate)
                    .then(iterate)
                    .catch((err)=> {
                        ooo.push(err.message);
                        console.log(err.message)
                    });
                    
module.exports = {promise,ooo};