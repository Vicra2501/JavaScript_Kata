// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
// The solution would work like the following:
// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

const getEvenNumbers = [1,2,3,6,8,10]

function getEvenNumbers(numbersArray){
  // 1.6 syntax used here
  return numbersArray.filter(getEvenNumbers => getEvenNumbers % 2 == 0);
}
