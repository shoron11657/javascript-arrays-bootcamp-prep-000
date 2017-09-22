var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var x = [1,2]
function addElementToBeginningOfArray(){return ["foo",...x]}
function destructivelyAddElementToBeginningOfArray(x,foo){return x.unshift('foo')}
