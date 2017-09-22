var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var arrayx = [1]
function addElementToBeginningOfArray(){return ["foo",...arrayx]}
function destructivelyAddElementToBeginningOfArray(){return arrayx.unshift('foo')}
