function findSqrt(num){
    if(num<0){
        return ':(';
    }
    return Math.sqrt(num);
}

module.exports= findSqrt;