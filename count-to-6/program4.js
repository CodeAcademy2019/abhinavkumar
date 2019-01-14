function prg4(){

    var foot = {
        kick: function () {
            this.yelp = 'Ouch!';
            setImmediate(() => {
               console.log (this.yelp);
            });
        }
    };
    
    return foot.kick();

}

//prg4();

module.exports = prg4;