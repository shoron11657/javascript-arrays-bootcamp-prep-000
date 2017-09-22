var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(){return["reeses",...chocolateBars]}
function destructivelyAddElementToBeginningOfArray(){return chocolateBars.unshift("reeses2")}
