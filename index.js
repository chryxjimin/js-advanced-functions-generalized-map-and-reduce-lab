// Add your functions here
function map(src, cb) {
    let newArray = []
    src.map(function (cb) {
        newArray.push(cb * -1)
    })
    return newArray
}
