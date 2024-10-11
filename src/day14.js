// 原题链接：https://leetcode.cn/problems/sort-colors/?envType=problem-list-v2&envId=2cktkvj

/**
 * 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地 对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 必须在不使用库内置的 sort 函数的情况下解决这个问题。
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let p0 = 0, p1 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            [nums[i], nums[p1]] = [nums[p1], nums[i]];
            p1++;
        } else if (nums[i] === 0) {
            [nums[i], nums[p0]] = [nums[p0], nums[i]];
            if (p0 < p1) {
                [nums[i], nums[p1]] = [nums[p1], nums[i]];
            }
            p0++;
            p1++;
        }
    }
    
    return nums;
};