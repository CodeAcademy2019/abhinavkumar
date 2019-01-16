function foo(){
    var bar;
    quux = 123;
    function zip(){
        var quux = 234;
        bar = true;
        //return bar;
    }
    return zip;
}

//console.log(foo());