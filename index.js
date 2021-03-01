// Add your functions here
function map(src, cb) {
    let newArray = []
    let i;
    for (i=0; i <src.length; i++) {
        newArray.push(cb(src[i]))
}
    return newArray
}



function reduce(src, cb, startingPoint){
    let returnValue = (!!startingPoint) ? startingPoint : src[0];
    let i = (!!startingPoint) ? 0 : 1
    for (i; i < src.length; i++) {
        returnValue = cb(src[i], returnValue)
    }
    return returnValue
}
