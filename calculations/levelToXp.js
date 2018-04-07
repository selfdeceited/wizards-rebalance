
module.exports = {
    getRequiredXpForLevel: function(x){
        // test value from http://heroes.thelazy.net/wiki/Experience approximation
        var rawVal =  -3608.397 + 2734.436*x - 271.5399*x*x + 17.26705*x*x*x;
        return Math.round(rawVal)
    }
}