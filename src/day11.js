
// 原题链接：https://leetcode.cn/problems/find-the-duplicate-number/description

/**
 * 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。
 * 假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。
 * 你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。
 */

/**
 * 在一个包含 n + 1 个整数的数组中，每个整数都在 1 到 n 之间（包括 1 和 n），
 * 其中只有一个整数出现了多次。找出这个重复的整数。
 * 
 * @param {number[]} nums - 一个包含 n + 1 个整数的数组
 * @return {number} - 重复的那个整数
 */
var findDuplicate = function(nums) {
    // 初始化慢指针 slow 和快指针 fast 都指向数组的起始位置
    let slow = 0, fast = 0;

    // 使用快慢指针寻找环的相遇点
    do {
        slow = nums[slow];         // 慢指针每次走一步
        fast = nums[nums[fast]];   // 快指针每次走两步
    } while (slow !== fast);

    // 将慢指针重新指向起始位置
    slow = 0;

    // 寻找环的入口点，即重复的数字
    while (slow !== fast) {
        slow = nums[slow];   // 慢指针每次走一步
        fast = nums[fast];   // 快指针每次走一步
    }

    // 返回环的入口点，也就是重复的数字
    return slow;
};
