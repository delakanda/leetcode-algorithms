/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
  let targetIndex = 0;
  
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] === target || nums[i] > target) {
          targetIndex = i;
          break;
      }
      
      //  If the end is reached without finding the item, the last index is the answer
      if(i === nums.length - 1) {
          targetIndex = nums.length;
      }
  }
  
  return targetIndex;
};