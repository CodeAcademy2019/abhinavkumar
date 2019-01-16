var slice = Array.prototype.slice;

function logger(namespace) {

    return (...args) => { 
        console.log.apply(this,[namespace].concat(args));
    }
}


module.exports = logger;
