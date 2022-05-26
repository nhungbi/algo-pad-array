// REMEMBER TO PSEUDOCODE
exports.pad = (array, minSize, value=null) => {
    //don't need to add if minSize is less than or equal to array size
    if (minSize <= array.lenth) {
        return array
    }
    const newArray = [...array] //copy
    diffSize = minSize - array.length
    for (let i=0; i< diffSize; i++) {
        newArray.push(value)
    }
    //push the difference between the minsize and array 
    return newArray

}
