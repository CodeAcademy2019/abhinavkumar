var a = (...args) => args.reduce((acc,arg) => acc+arg,0)/args.length;

module.exports = a;