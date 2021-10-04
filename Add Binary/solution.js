/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
  const aArr = a.split('').reverse()
  const bArr = b.split('').reverse()
  const resultArr = []
  let carry = 0
  
  const longestDigit = Math.max(aArr.length, bArr.length)
  
  for(let i = 0; i < longestDigit; i++) {
      const aDigit = aArr[i] && +aArr[i] || 0
      const bDigit = bArr[i] && +bArr[i] || 0
      
      const sum = aDigit + bDigit + carry
      let resultDigit = sum
      if(sum == 2) resultDigit = 0
      if(sum == 3) resultDigit = 1
      carry = getCarry(sum)
      
      resultArr[i] = resultDigit
      
      if(i === longestDigit - 1 && carry) {
          resultArr[longestDigit] = carry
      }
  }
  
  return resultArr.reverse().join('')
};

function getCarry(sum) {
  return Math.trunc(sum / 2);
}