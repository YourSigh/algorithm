// 原题链接：https://leetcode.cn/problems/product-of-array-except-self/?envType=problem-list-v2&envId=2cktkvj

/**
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

 * 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

 * 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = [];
    answer[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }

    let right = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] = answer[i] * right;
        right *= nums[i];
    }

    return answer;
};