Function.prototype.before = function (fn){
    let that = this;
    return function () {
        if (fn.apply(this, arguments) === false) {
            return that;
        };
        that.apply(this, arguments);
    }
}

function a(){
    console.log('a')
}
a = a.before(function () {
    console.log(1)
})
.before(function () {
    console.log(2)
    return false;
})
.before(function () {
    console.log(3)
})
a()