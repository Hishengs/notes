/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    var n = nums.length;
    var j = -1, k = n;
    var i = 0;
    function swap (a1, a2) {
        if (a1 === a2) return;
        var temp = nums[a1];
        nums[a1] = nums[a2];
        nums[a2] = temp;
    }
    // one-pass
    while (true) {
        if (j >= k) break;
        if (i >= k) break;
        if (nums[i] === 2) {
            swap(i, k-1);
            k--;
        }
        if (nums[i] === 0) {
            swap(i, j+1);
            j++;
            i++;
        }
        if (nums[i] === 1) i++;
    }
    return nums;
};

// var nums = [2,0,2,1,1,0];
var nums = [2,1,0,2,1,0,1];
console.log(sortColors(nums));