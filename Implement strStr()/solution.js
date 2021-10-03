/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
  if(needle === '') return 0
  
  const needleLength = needle.length
  const needleArr = needle.split('')
  const firstNeedleLetter = needle[0]
  const haystackArr = haystack.split('')
  let indexOccurrence = -1
  
  for(let i = 0; i < haystackArr.length - needleLength + 1; i++) {
      if(haystackArr[i] === firstNeedleLetter) {
          const subStr = haystackArr.slice(i, i + needleLength)
          const isEqual = subStr.every(function(element, index) {
              return element === needleArr[index]; 
          });
          if(isEqual) { 
              indexOccurrence = i
              break;
          }
      }
  }
  
  return indexOccurrence
};