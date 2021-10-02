/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  let longestWord = 0
  let subStrTracker = ''
  
  strs.forEach((word) => {
      longestWord = (word.length) > longestWord ? word.length : longestWord
  })
  
  for(let i = 0; i < longestWord; i++) {
      let letterTracker = []
      strs.forEach((word) => {
          letterTracker.push(word[i])
      })
      
      if(letterTracker.every( v => v === letterTracker[0] )) {
          subStrTracker += letterTracker[0]
      } else {
          break
      }
  }
  
  return subStrTracker
};