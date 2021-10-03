/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
  const reverseDigits = [...digits].reverse()
  let appendAZero = false
  let carry = 1
  let resultArr = []
  
  for(let i = 0; i < reverseDigits.length; i++) {
      const addedOne = reverseDigits[i] + carry
      carry = getCarry(addedOne)
      if(carry > 0) {
          resultArr[i] = 0
          if(i == reverseDigits.length - 1) {
              resultArr[reverseDigits.length] = carry
              carry = 0
          } 
      } else {
          resultArr[i] = addedOne
          carry = 0
      }
  }
  
  return resultArr.reverse()
};

function getCarry(sum) {
  return Math.trunc(sum / 10);
}