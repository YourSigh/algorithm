// 原题链接：https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/description/?envType=problem-list-v2&envId=2cktkvj

/**
 * 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。
 * 请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
 */

/**
 * @param {number[]} nums - 输入的数组，其中包含从 1 到 n 的整数
 * @return {number[]} - 返回数组中缺失的数字
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length; // 获取数组的长度，即 n
    
    // 第一步：遍历数组，将出现的数字对应的索引位置的值增加 n
    for (const num of nums) {
        nums[(num - 1) % n] += n; // 在对应索引位置增加 n
    }

    const res = []; // 用于存储缺失的数字
    
    // 第二步：遍历数组，找出值小于等于 n 的索引位置
    for (const [i, num] of nums.entries()) {
        if (num <= n) {
            res.push(i + 1); // 将缺失的数字（索引 + 1）加入结果数组
        }
    }
    
    return res; // 返回结果数组
};
