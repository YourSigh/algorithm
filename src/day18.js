// 原题链接：https://leetcode.cn/problems/sliding-window-maximum/description/?envType=problem-list-v2&envId=2cktkvj
/**
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
 * 返回 滑动窗口中的最大值 。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let ans = [];
    let queue = [];
    for (let i = 0; i < nums.length; i++) {
        if (i >= k && queue[0] <= i - k) {
            queue.shift();
        }
        while(queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
            queue.pop();
        }
        queue.push(i);
        if (i >= k - 1) {
            ans.push(nums[queue[0]]);
        }
    }
    return ans;
};