function func1(){
    console.log('hello-world');
}

function func2(func1,num){
    if(num==0){
        return;
    }
        func2(func1,num-1);
}

module.exports = func2;