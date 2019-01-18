

let parsePromised = (json) => {

    return new Promise( function(fulfill,reject){
        try{
            fulfill(JSON.parse(json));
        }
        catch (error){
            reject(error);
        }
    });
};

let main = (json) => {

    parsePromised(process.argv[2]).then(null,onReject);

    let onReject = (err) => {
        console.log(err.message)
    };

}
main(process.argv[2]);
//module.exports  = parsePromised;