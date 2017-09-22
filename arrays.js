var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var arrayx = [1]
function addElementToBeginningOfArray(){return ["foo",...arrayx]}
var arrayz = [1]
function destructivelyAddElementToBeginningOfArray(){return arrayz.unshift("foo")}
