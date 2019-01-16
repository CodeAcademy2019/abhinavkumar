function getShortMessages(arr){
    var filteredArrayObject  = arr.filter(function(arrObjs){
        return arrObjs.message.length < 50;
    });

    var shortMessages = filteredArrayObject.map(function(obj){
        return obj.message;
    })
    
    return shortMessages;
}
module.exports = getShortMessages;
