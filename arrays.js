var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var arrayx = [1]
function addElementToBeginningOfArray(){return ["foo",...arrayx]}
function destructivelyAddElementToBeginningOfArray(){arrayx.unshift('foo') return arrayx}
